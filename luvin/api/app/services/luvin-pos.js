import fetch from 'node-fetch';
import convert from 'xml-js';

const createPosOrder = async (pos) => {
  try {
    const { ip, port, path } = pos;
    const url = `https://${ip}:${port}${path}`;
    const body = `
    <?xml version="1.0" encoding="utf-8"?>
      <RK7Query>
          <RK7Command CMD="CreateOrder">
              <Order persistentComment="Luvin web order" nonPersistentComment="Luvin web order">
                  <OrderCategory code="2"/>
                  <OrderType code="1"/>
                  <Table code="19"/>
                  <Waiter code="12"/>
                  <GuestType code="2"/>
                  <Guests count="1" />
              </Order>
          </RK7Command>
      </RK7Query>
    `;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/xml',
        'Content-Length': Buffer.byteLength(body),
      },
      body,
    });
    // console.log('response', response);
    if (response.status === 200) {
      const results = await response.text();
      const jsonObj = convert.xml2js(results, { compact: true, spaces: 4 });
      // return jsonObj;
      return jsonObj.RK7QueryResult.CommandResult._attributes;
    }
  } catch (error) {
    throw error;
  }
};

const updatePosOrder = async (pos, posOrder, webOrder) => {
  try {
    const { ip, port, path } = pos;
    const url = `https://${ip}:${port}${path}`;
    // TODO: check
    const { guid } = posOrder;
    const { orderDetails } = webOrder;
    const body = `
      <?xml version="1.0" encoding="utf-8"?> 
      <RK7Query>  
        <RK7Command CMD="SaveOrder">   
          <Order guid="${guid}" />   
          <Session>   
            <Author code="12" />
            ${orderDetails
              .map((item) => {
                const { productId: product, quantity } = item || {};
                return `<Dish code="${product.code}" quantity="${
                  quantity * 1000
                }"/>  `;
              })
              .join('\n')}
          </Session>  
        </RK7Command> 
      </RK7Query> 
    `;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/xml',
        'Content-Length': Buffer.byteLength(body),
      },
      body,
    });
    if (response.status === 200) {
      const results = await response.text();
      const jsonObj = convert.xml2js(results, { compact: true, spaces: 4 });
      return jsonObj.RK7QueryResult.CommandResult.Order._attributes;
    }
  } catch (error) {
    throw error;
  }
};

const createOrder = async (pos, webOrder) => {
  try {
    const posOrder = await createPosOrder(pos, webOrder);
    const updatedOrder = await updatePosOrder(pos, posOrder, webOrder);
    return updatedOrder;
  } catch (error) {
    throw error;
  }
};

export { createOrder };

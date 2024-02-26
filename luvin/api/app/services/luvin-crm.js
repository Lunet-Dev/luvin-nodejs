import fetch from 'node-fetch';
import convert from 'xml-js';
import sum from 'lodash/sum';
import moment from 'moment';

import keys from '../config/keys';

const {
  app: { apiCRMEndPoint },
} = keys;

const insertCustomer = async (userInfo) => {
  // TODO: insert address
  try {
    const { phone, name, email, birthday, address, password } = userInfo;
    const body = `
      <?xml version="1.0" encoding="utf-8" standalone="yes" ?>
      <Message Action="Add holders" Terminal_Type="43881" Global_Type="DCORP" Unit_ID="1" User_ID="1">
        <Include>Account, Holder_Contact, Holder_Card</Include>
        <Image_Format Width="200" Height="150">JPEG</Image_Format>

        <Holder>
          <Group_ID>2</Group_ID>
          <Full_Name>${name}</Full_Name>
          <Birth>${moment(birthday).format('YYYY-MM-DD')}</Birth>
          <Gender>Male</Gender>
          <Language_ID>1066</Language_ID>
          <Auto_Change_Levels>True</Auto_Change_Levels>
          <Smoke>Yes</Smoke>
          <Verification>Yes</Verification>
          <Cards>
            <Card>
              <Group_ID>7</Group_ID>
              <Card_Code>84${phone.slice(1, phone.length)}</Card_Code>
              <Password>${password}</Password>
              <Expired></Expired>
              <Status>Active</Status>
            </Card>
          </Cards>
          <Contacts>
            <Contact>
              <Type_ID>2</Type_ID>
              <Value>+84${phone.slice(1, phone.length)}</Value>
              <Dispatch>true</Dispatch>
            </Contact>
            <Contact>
              <Type_ID>1</Type_ID>
              <Value>${email}</Value>
              <Dispatch>true</Dispatch>
            </Contact>
          </Contacts>

        </Holder>
      </Message>
    `;
    const response = await fetch(apiCRMEndPoint, {
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
      // console.log('jsonObj', jsonObj.Holder.Accounts.Account);
      return jsonObj.Holder;
    }
  } catch (error) {
    throw error;
  }
};

const updateCustomer = async (userInfo) => {
  try {
    const {
      phone,
      name,
      email,
      birthday,
      address,
      password,
      holderId,
    } = userInfo;
    const body = `
      <?xml version="1.0" encoding="utf-8" standalone="yes" ?>
      <Message Action="Edit holders" Terminal_Type="CRM_API" Global_Type="ABC" Unit_ID="1" User_ID="1">
        <Image_Format Width="200" Height="150">JPEG</Image_Format>
        <Holder>
          <Holder_ID>${holderId}</Holder_ID>
          <Full_Name>${name}</Full_Name>
          <Birth>${moment(birthday).format('YYYY-MM-DD')}</Birth>
          <Cards>
            <Card>
              <Group_ID>7</Group_ID>
              <Card_Code>84${phone.slice(1, phone.length)}</Card_Code>
              <Password>${password}</Password>
              <Expired></Expired>
              <Status>Active</Status>
            </Card>
          </Cards>
          <Contacts>
            <Contact>
              <Type_ID>2</Type_ID>
              <Value>+84${phone.slice(1, phone.length)}</Value>
              <Dispatch>true</Dispatch>
            </Contact><Contact>
              <Type_ID>1</Type_ID>
              <Value>${email}</Value>
              <Dispatch>true</Dispatch>
            </Contact>
          </Contacts>
        </Holder>
      </Message>
    `;
    const response = await fetch(apiCRMEndPoint, {
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
      if (jsonObj.Data) {
        // TODO: throw error with message
      }
      return jsonObj.Holder;
    }
  } catch (error) {
    throw error;
  }
};

const getCustomer = async (phone) => {
  try {
    const body = `
      <?xml version="1.0" encoding="utf-8" standalone="yes" ?>
      <Message Action="Get card info" Terminal_Type="43881" Global_Type="DCORP" Unit_ID="1" User_ID="1">
        <Card_Code>84${phone.slice(1, phone.length)}</Card_Code>
        <Include>
          Account, Account_Available, Holder, Holder_Image, Holder_Contact,
          Holder_Address, Holder_Relative, Holder_Contract, Holder_Card, Holder_Coupon,Holder_Coupon_Available,
          Holder_Attribute, Card_Property, Holder_Property
        </Include>
        <Image_Format Original="Yes" Width="200" Height="150" Compression="75">JPEG</Image_Format>
      </Message>
    `;
    const response = await fetch(apiCRMEndPoint, {
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
      console.log('jsonObj', jsonObj.Cards.Card.Accounts);
      return jsonObj.Cards.Card.Accounts;
    }
  } catch (error) {
    throw error;
  }
};

const addCoupons = async (holderId, offered, expired) => {
  try {
    const body = `
      <?xml version="1.0" encoding="utf-8" standalone="yes" ?>
      <Message Action="Add coupons" Terminal_Type="43881" Global_Type="DCORP" Unit_ID="1" User_ID="1">
        <Coupon>
          <Coupon_Type_ID>4</Coupon_Type_ID>
          <Holder_ID>${holderId}</Holder_ID>
          <Offered>${offered}</Offered>
          <Expired>${moment(expired).format('YYYY-MM-DD')}</Expired>
          <Notes></Notes>
          <Terminals_Types All="True">
          </Terminals_Types>
        </Coupon>
      </Message>
    `;
    const response = await fetch(apiCRMEndPoint, {
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
      return jsonObj.Cards;
    }
  } catch (error) {
    throw error;
  }
};

const createTransaction = async (order) => {
  try {
    const { customer, orderDetails } = order;
    // TODO: check
    const crmCustomer = await getCustomer(customer.phone);
    const amount = sum(orderDetails.map(({ totalPrice }) => totalPrice));
    const body = `
        <?xml version="1.0" encoding="utf-8" standalone="yes" ?>
        <Message Action="Transaction" Terminal_Type="43881" Global_Type="DCORP" Unit_ID="1" User_ID="1">
          <Transaction>
            <Account_Number>${crmCustomer.accountNumber}</Account_Number>
            <External_ID>123456</External_ID>
            <External_Date>2015-07-21</External_Date>
            <Amount>${amount}</Amount>
            <Transaction_Time>2015-02-04 15:34:08.79 +03:00</Transaction_Time>
            <Transaction_Life>2020-12-31</Transaction_Life>
            <Transaction_Delay>2020-12-01</Transaction_Delay>
            <Remarks></Remarks>
          </Transaction>
        </Message>
      `;
    const response = await fetch(apiCRMEndPoint, {
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
      return jsonObj.Cards;
    }
  } catch (error) {
    throw error;
  }
};

export { getCustomer, insertCustomer, updateCustomer, createTransaction };

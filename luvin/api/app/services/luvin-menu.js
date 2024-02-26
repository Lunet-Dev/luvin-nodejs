import includes from 'lodash/includes';
import fetch from 'node-fetch';
import convert from 'xml-js';
import slugify from 'slugify';

import CategoryManager from '../modules/category/category.manager';
import ProductManager from '../modules/product/product.manager';

import keys from '../config/keys';

const CATEGORIES_GUID_ACCEPTED = [
  '{78672314-6913-4BA1-BE63-AACBA4A5698F}',
  '{6193E7F6-5426-40B0-9DC0-DCDDD4D1A188}',
  '{BB53254F-E248-4519-8601-627552616936}',
  '{6456D3FB-2D41-41F3-9CA7-E22FE645C5BE}',
];

const {
  app: { apiMenuEndPoint },
} = keys;

const getProducts = async () => {
  try {
    const body = `
      <?xml version="1.0" encoding="utf-8"?>
      <RK7Query>
          <RK7CMD CMD="GetRefData" RefName="MenuItems" PropMask="items.(Code,Name,Price)"/>
      </RK7Query>
    `;
    const response = await fetch(apiMenuEndPoint, {
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
      return jsonObj.RK7QueryResult.RK7Reference.Items.Item.filter(
        ({ _attributes: { Ident, Name } }) => Ident && Name
      ).map(({ _attributes: { Ident, Name, Code } }) => ({
        ident: Ident,
        name: Name,
        code: Code,
      }));
    }
  } catch (error) {
    throw error;
  }
};

const getPrices = async () => {
  try {
    const body = `
    <?xml version="1.0" encoding="utf-8"?>
    <RK7Query>
        <RK7CMD CMD="GetRefData" RefName="PRICES"/>
    </RK7Query>
    `;
    const response = await fetch(apiMenuEndPoint, {
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
      const prices = {};
      jsonObj.RK7QueryResult.RK7Reference.Items.Item.map(
        ({ _attributes: { ObjectID, Value } }) => {
          prices[ObjectID] = Value;
        }
      );
      // console.log('jsonObj', jsonObj);
      return prices;
    }
  } catch (error) {
    throw error;
  }
};

const getCategories = async () => {
  try {
    const body = `
      <?xml version="1.0" encoding="utf-8"?>
      <RK7Query>
      <RK7CMD CMD="GetRefData" RefName="CLASSIFICATORGROUPS"/>
      </RK7Query>
    `;
    const response = await fetch(apiMenuEndPoint, {
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
      const categoriesAccepted =
        jsonObj.RK7QueryResult.RK7Reference.Items.Item.filter(
          ({ _attributes: { GUIDString } }) => {
            return includes(CATEGORIES_GUID_ACCEPTED, GUIDString);
          }
        );
      const categoriesBeauty = categoriesAccepted.map(
        ({ _attributes, Childs }) => {
          return {
            ident: _attributes.Ident,
            guid: _attributes.GUIDString,
            name: _attributes.Name,
            products: Childs.Child.map(
              ({ _attributes: { ChildIdent } }) => ChildIdent
            ),
          };
        }
      );
      return categoriesBeauty;
    }
  } catch (error) {
    throw error;
  }
};

const upsertCategories = async (rawCategories) => {
  try {
    const tasks = rawCategories.map(async ({ ident, guid, name }) => {
      const cate = await CategoryManager.findCategoryByIdent(ident);
      const data = {
        guid,
        ident,
        slug: slugify(name.toLowerCase(), '-'),
      };
      if (!cate) {
        data.name = name;
      }
      return CategoryManager.upsertCategory(ident, data);
    });
    const results = await Promise.all(tasks);
    return results;
  } catch (error) {
    throw error;
  }
};

const upsertProducts = async (
  rawCategories,
  categories,
  rawProducts,
  rawPrices
) => {
  try {
    const tasks = categories.map(async ({ _id, guid }) => {
      const { products: productsInCategory = [] } =
        rawCategories.find((category) => guid == category.guid) || {};
      const saveProductsOfCategory = productsInCategory.map(
        async (productIdent) => {
          const price = rawPrices[productIdent];
          const { name, code } =
            rawProducts.find(({ ident }) => ident == productIdent) || {};
          if (!name) return;
          const slug = slugify(name.toLowerCase(), '-');
          const realPrice = Math.ceil(parseInt(price) / 100);
          return ProductManager.upsertProduct(productIdent, {
            name,
            code,
            price: realPrice + realPrice / 10,
            slug,
            category: _id,
          });
        }
      );
      const result = await Promise.allSettled(saveProductsOfCategory);
      return result;
    });
    const results = await Promise.allSettled(tasks);
    return results;
  } catch (error) {
    throw error;
  }
};

const syncMenu = async () => {
  try {
    const [rawProducts, rawPrices, rawCategories] = await Promise.all([
      getProducts(),
      getPrices(),
      getCategories(),
    ]);
    const categories = await upsertCategories(rawCategories);
    const products = await upsertProducts(
      rawCategories,
      categories,
      rawProducts,
      rawPrices
    );
    return products;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { syncMenu };

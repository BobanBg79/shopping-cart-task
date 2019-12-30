import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import products from './dummy-products';

const mock = new MockAdapter(axios, { delayResponse: 1500 });

mock.onGet('/products').reply(200, { products });

export const getAllProducts = async () => {
  try {
    const products = await axios.get('/products');
    return products;
  } catch (err) {
    console.log(err);
  }
};

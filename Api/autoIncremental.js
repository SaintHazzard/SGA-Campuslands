import { duckFetch } from './duckFetch.js';
async function autoIncrementalId() {
  let dataId = await duckFetch('products', null, 'GET', null);
  let newId = Math.max(...dataId.map(product => Number(product.id))) + 1;


  return await newId
}


export { autoIncrementalId }
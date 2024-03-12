import { duckFetch } from './duckFetch.js';
async function autoIncrementalId(endPoint) {
  let dataId = await duckFetch(endPoint, null, 'GET', null);
  let newId = Math.max(...dataId.map(something => Number(something.id))) + 1;
  return String(newId);
}


export { autoIncrementalId }
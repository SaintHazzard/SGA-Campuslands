async function autoIncrementalId() {
  let dataId = await duckFetch('products', null, 'GET', null);
  let newId = Math.max(...dataId.map(product => Number(product.id))) + 1;
  return newId
}


export { autoIncrementalId }
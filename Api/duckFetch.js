const head = new Headers({ "Content-type": "application/json" })
const URL_API = "http://localhost:3000/";

/**
 * 
 * @param {String} endpoint 
 * @param {Number} id 
 * @param {String} request 
 * @param {Object} data 
 * @returns {null}
 */
async function duckFetch(endpoint, id, request, data) {
  try {
    switch (request) {
      case 'GET':
        return await HTTPrequest(`${URL_API}${endpoint}`, 'GET');

      case 'POST':
        return await HTTPrequest(`${URL_API}${endpoint}`, 'POST', data);

      case 'DELETE':
        return await HTTPrequest(`${URL_API}${endpoint}/${id}`, 'DELETE');

      case 'PUT':
        return await HTTPrequest(`${URL_API}${endpoint}/${id}`, 'PUT', data);

      default:
        throw new Error(`Invalid request method: ${request}`);
    }
  } catch (error) {
    throw error;
  }
}

/**
 * 
 * @param {String} url 
 * @param {String} method 
 * @param {Object} data 
 * @returns {Promise<Object>}
 */
async function HTTPrequest(url, method, data = null) {
  const options = {
    method,
    headers: head,
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  const response = await fetch(url, options);
  console.log(response);

  if (!response.ok) {
    throw new Error("Error en la petición.");
  }

  if (response.status !== 204) {
    return await response.json();
  }
}

export { duckFetch }
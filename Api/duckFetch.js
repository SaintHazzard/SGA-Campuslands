const head = new Headers({ "Content-type": "application/json" })
const URL_API = "http://localhost:3000/"
let data = {
  "id": 1,
  "nombre": "Consumir api",
  "estado": "Pendiente"
}

async function duckFetch(endpoint, id, request, data) {
  try {
    switch (request) {
      case 'GET':
        return await request(`${URL_API}${endpoint}`, 'GET');

      case 'POST':
        return await request(`${URL_API}${endpoint}`, 'POST', data);

      case 'DELETE':
        return await request(`${URL_API}${endpoint} / ${id}`, 'DELETE');

      case 'PUT':
        return await request(`${URL_API}${endpoint} / ${id}`, 'PUT', data);

      default:
        throw new Error(`Invalid request method: ${request}`);
    }
  } catch (error) {
    throw error;
  }
}

async function request(url, method, data = null) {
  const options = {
    method,
    headers: head,
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error("Error en la petición.");
  }

  return await response.json();
}

export { duckFetch }

import { autoIncrementalId } from "./autoIncremental.js";

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
        if (id) {
          return await HTTPrequest(`${URL_API}${endpoint}/${id}`, 'GET');
        }
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

  if (!response.ok) {
    throw new Error("Error en la petición.");
  }

  if (response.status !== 204) {
    return await response.json();
  }
}


/**
 * @param {Array} casillas
 */
async function addSomething(endpoint) {
  function fillData(casillas) {
    casillas.forEach((element, index) => {
      element.setAttribute('data-set', opciones[index]);
      data[opciones[index]] = element.value;
    });
  }
  let data = {}
  let opciones = ['identificationId', 'nombre', 'email', 'tipodepersona'];
  let casillas = this.querySelectorAll('[id*="validationCustom"]');
  if (casillas.length === 1) {
    opciones = ['nombre'];
    fillData(casillas)
  } else if (casillas.length === 4) {
    fillData(casillas)
  } else if (casillas.length === 2) {
    opciones = ['nombre', 'email'];
    fillData(casillas)

  }
  let id = await autoIncrementalId(endpoint);
  data.id = id;
  Swal.fire({
    title: "Do you want to save the changes?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Save",
    denyButtonText: `Don't save`
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      duckFetch(endpoint, id, 'POST', data)
      Swal.fire("Saved!", "", "success");
    } else if (result.isDenied) {
      Swal.fire("Changes are not saved", "", "info");
    }
  });
}

async function editSomething(endpoint, id) {
  function fillData(casillas) {
    casillas.forEach((element, index) => {
      element.setAttribute('data-set', opciones[index]);
      data[opciones[index]] = element.value;
    });
  }
  let data = {}
  let opciones = [];
  let casillas = this.querySelectorAll('[id*="validationCustom"]');
  if (casillas.length === 2) {
    opciones = ['id', 'nombre'];
    fillData(casillas)
  } else if (casillas.length === 5) {
    opciones = ['identificationId', 'nombre', 'email', 'tipodepersona'];
    fillData(casillas)
  }
  data.id = id;
  Swal.fire({
    title: "Do you want to save the changes?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Save",
    denyButtonText: `Don't save`
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      duckFetch(endpoint, id, 'PUT', data)
      Swal.fire("Saved!", "", "success");
    } else if (result.isDenied) {
      Swal.fire("Changes are not saved", "", "info");
    }
  });
}

async function fillOptions(endpoint, select) {
  let data = await duckFetch(endpoint, null, 'GET', null);
  data.forEach(element => {
    let option = document.createElement('option');
    option.value = element.id;
    option.textContent = element.nombre;
    select.appendChild(option);
  });

}

export { duckFetch, addSomething, editSomething, fillOptions }
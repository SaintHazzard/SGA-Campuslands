import { autoIncrementalId } from "./autoIncremental.js";

const head = new Headers({ "Content-type": "application/json" })
const URL_API = "http://localhost:3000/";

async function duckFetch(endpoint, id, request, data) {
  const url = id ? `${URL_API}${endpoint}/${id}` : `${URL_API}${endpoint}`;
  return await HTTPrequest(url, request, data);
}

async function HTTPrequest(url, method, data = null) {
  const options = {
    method,
    headers: head,
    body: data ? JSON.stringify(data) : null
  };

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error("Error en la petición.");
  }

  if (response.status !== 204) {
    return await response.json();
  }
}

function fillData(casillas, opciones) {
  const data = {};
  for (let index = 1; index < casillas.length; index++) {
    casillas[index].setAttribute('data-set', opciones[index - 1]);
    data[opciones[index - 1]] = casillas[index].value;
  }
  return data;
}

async function editSomething(endpoint, id) {
  const casillas = this.querySelectorAll('[id*="validationCustom"]');
  const opciones = casillas.length === 2 ? ['id', 'nombre'] : ['identification', 'nombre', 'email', 'tipodepersona'];
  const data = fillData(casillas, opciones);
  Swal.fire({
    title: "Do you want to save the changes?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Save",
    denyButtonText: `Don't save`
  }).then((result) => {
    if (result.isConfirmed) {
      duckFetch(endpoint, id, 'PUT', data)
      Swal.fire("Saved!", "", "success");
    } else if (result.isDenied) {
      Swal.fire("Changes are not saved", "", "info");
    }
  });
}
async function addSomething(endPoint) {
  const casillas = this.querySelectorAll('[id*="validationCustom"]');
  const opciones = casillas.length === 1 ? ['nombre'] : casillas.length === 2 ? ['nombre', 'email'] : ['identification', 'nombre', 'email', 'tipodepersona'];
  const data = fillData(casillas, opciones);
  const id = await autoIncrementalId(endPoint);
  data.id = id;
  Swal.fire({
    title: "Do you want to save the changes?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Save",
    denyButtonText: `Don't save`
  }).then((result) => {
    if (result.isConfirmed) {
      duckFetch(endpoint, id, 'POST', data)
      Swal.fire("Saved!", "", "success");
    } else if (result.isDenied) {
      Swal.fire("Changes are not saved", "", "info");
    }
  });
}



async function fillOptions(endpoint, select) {
  const data = await duckFetch(endpoint, null, 'GET', null);
  data.forEach(element => {
    const option = document.createElement('option');
    option.value = element.id;
    option.textContent = element.nombre;
    select.appendChild(option);
  });
}

export { duckFetch, addSomething, editSomething, fillOptions }
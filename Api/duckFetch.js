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
  casillas.forEach((casilla, index) => {
    const key = opciones[index];
    casilla.setAttribute('data-set', key);
    data[key] = casilla.value;
  });
  return data;
}

async function editSomething(endpoint, id) {
  const casillas = this.querySelectorAll('[id*="validationCustom"]');
  const opciones = casillas.length === 2 ? ['id', 'nombre'] : ['id', 'identification', 'nombre', 'email', 'tipodepersona'];
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
      this.render();
    } else if (result.isDenied) {
      Swal.fire("Changes are not saved", "", "info");
    }
  });
}

async function addSomething(endPoint) {
  const casillas = this.querySelectorAll('[id*="validationCustom"]');
  const opciones = casillas.length === 1 ? ['nombre'] : casillas.length === 2 ? ['nombre', 'email'] : ['identification', 'nombre', 'email', 'tipodepersona'];
  const data = fillData(casillas, opciones);
  console.log(data);

  const id = await autoIncrementalId(endPoint);
  data.id = id.toString();
  Swal.fire({
    title: "Do you want to save the changes?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Save",
    denyButtonText: `Don't save`
  }).then((result) => {
    if (result.isConfirmed) {
      duckFetch(endPoint, null, 'POST', data)
      Swal.fire("Saved!", "", "success");
      this.render();
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


function deleteAnything(endPoint, selectId) {
  console.log(selectId);
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then(async (result) => {
    if (result.isConfirmed) {

      Swal.fire({
        title: "Deleted!",
        text: "Your assets has been deleted.",
        icon: "success"
      });
      duckFetch(endPoint, selectId, 'DELETE');
      this.render();
    }
  });
}

function setupValidation() {
  const forms = this.querySelectorAll('.needs-validation');
  forms.forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopImmediatePropagation()
      }
      form.classList.add('was-validated');
    });
  });
}

export { duckFetch, addSomething, editSomething, fillOptions, deleteAnything, setupValidation }
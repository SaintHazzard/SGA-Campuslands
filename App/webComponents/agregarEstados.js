import { duckFetch, addSomething, editSomething, fillOptions, setupValidation } from "../../Api/duckFetch.js";
import { BaseEliminar } from "./baseEliminar.js";


export default class AgregarEstado extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
      <style>
        /* Estilos aquí si es necesario */
      </style>
      <p class="mx-5"><strong>Agregar Estado</strong></p>
      <div class="m-5" id="formAdd">
        <form class="row g-3 needs-validation" novalidate>
          <div class="col-md-4">
            <label for="validationCustom02" class="form-label">Ingrese Nombre del estado</label>
            <input type="text" class="form-control" id="validationCustom02" value="" required>
            <div class="valid-feedback">
              Correcto!
            </div>
          </div>
          <div class="col-12">
                    <button class="btn btn-dark" type="submit" id="addSomething">Agregar Estado</button>
          </div>
        </form>
      </div>
    `;

    this.querySelector('#addSomething').addEventListener('click', () => {
      addSomething.call(this, 'estados')
    });
  }


  setupValidation() {
    const forms = this.querySelectorAll('.needs-validation');
    forms.forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      });
    });
  }
  connectedCallback() {
    this.setupValidation()
  }
}

customElements.define("agregar-estado", AgregarEstado);


export class editarEstado extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
      <style>
        /* Estilos aquí si es necesario */
      </style>
      <p class="mx-5"><strong>Editar Marca</strong></p>
      <div class="m-5" id="formAdd">
        <form class="row g-3 needs-validation" novalidate>
        <div class="col-md-3">
                    <label for="validationCustom04" class="form-label">Estado</label>
                    <select class="form-select" id="validationCustom01" required>
                      <option selected disabled value="">Seleccione...</option>
                    </select>
                    <div class="invalid-feedback">
                      Seleccione un estado.
                    </div>
                </div>
          <div class="col-md-4">
            <label for="validationCustom02" class="form-label">Ingrese nuevo Nombre</label>
            <input type="text" class="form-control" id="validationCustom02" value="" required>
            <div class="valid-feedback">
              Correcto!
            </div>
          </div>
          
          <div class="col-12">
                    <button class="btn btn-dark" type="submit" id="addSomething">Guardar</button>
          </div>
        </form>
      </div>
    `;
    let selectId = this.querySelector('select')
    fillOptions('estados', selectId);
    setupValidation.call(this);
    this.querySelector('#addSomething').addEventListener('click', () => {
      editSomething.call(this, 'estados', selectId.value)
      this.render();
    });

  }
}

customElements.define('editar-estado', editarEstado)


export class buscarEstado extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
      <style>
        /* Estilos aquí si es necesario */
      </style>
      <p class="mx-5"><strong>Buscar Estado</strong></p>
      <div class="m-5" id="formAdd">
        <form class="row g-3 needs-validation" novalidate>
        <div class="col-md-3">
                    <label for="validationCustom04" class="form-label">Buscar Estado</label>
                    <select class="form-select" id="validationCustom01" required>
                      <option selected disabled value="">Seleccione...</option>
                    </select>
                    <div class="invalid-feedback">
                      Seleccione una Estado.
                    </div>
                </div>
                <div class="col-md-4">
            <label for="validationCustom02" class="form-label">Id del estado</label>
            <input type="text" class="form-control" id="validationCustom02" value="" required>
            <div class="valid-feedback">
              Correcto!
            </div>
          </div>
          <div class="col-md-4">
            <label for="validationCustom02" class="form-label">Nombre del estado</label>
            <input type="text" class="form-control" id="validationCustom03" value="" required>
            <div class="valid-feedback">
              Correcto!
            </div>
          </div>
        </form>
      </div>
    `;
    this.chargeData()
  }

  async chargeData() {
    let selectId = this.querySelector('#validationCustom01')
    fillOptions('estados', selectId);
    selectId.addEventListener('change', async () => {
      const selectedValue = selectId.value;
      if (selectedValue) {
        const data = await duckFetch('estados', selectedValue, 'GET', null);
        console.log(data);
        this.querySelector('#validationCustom02').value = data.id;
        this.querySelector('#validationCustom03').value = data.nombre;
        let casillas = this.querySelectorAll('[id*="validationCustom"]');
        for (let i = 1; i < casillas.length; i++) {
          casillas[i].disabled = true;
        }
      }
    });

  }
}

customElements.define('buscar-estado', buscarEstado)

export class eliminarEstado extends BaseEliminar {
  constructor() {
    super();
    this.render();
  }
  render() {
    this.innerHTML = /* html */ `
      <style>
        /* Estilos aquí si es necesario */
      </style>
      <p class="mx-5"><strong>Buscar estado</strong></p>
      <div class="m-5" id="formAdd">
        <form class="row g-3 needs-validation" novalidate>
        <div class="col-md-3">
                    <label for="validationCustom04" class="form-label">Buscar Estado</label>
                    <select class="form-select" id="validationCustom01" required>
                      <option selected disabled value="">Seleccione...</option>
                    </select>
                    <div class="invalid-feedback">
                      Seleccione una Estado.
                    </div>
                </div>
          <div class="col-md-4">
            <label for="validationCustom02" class="form-label">Id estado</label>
            <input type="text" class="form-control" id="validationCustom02" value="" required>
            <div class="valid-feedback">
              Correcto!
            </div>
          </div>
          <div class="col-md-4">
            <label for="validationCustom02" class="form-label">Nombre estado</label>
            <input type="text" class="form-control" id="validationCustom03" value="" required>
            <div class="valid-feedback">
              Correcto!
            </div>
          </div>
          <div class="col-12">
                    <button class="btn btn-danger" type="submit" id="addSomething">Eliminar</button>
          </div>
        </form>
      </div>
    `;
    setupValidation.call(this);
    let selectId = this.querySelector('select')
    super.deleteAnything(selectId, 'estados');
  }
}

customElements.define('eliminar-estado', eliminarEstado)
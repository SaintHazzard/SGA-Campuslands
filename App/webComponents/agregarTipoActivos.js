import { duckFetch, addSomething, editSomething, fillOptions, setupValidation } from "../../Api/duckFetch.js";
import baseBuscar from "./superClases/baseBuscar.js";
import { BaseEliminar } from "./superClases/baseEliminar.js";


export default class AgregarTipoActivos extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
      <style>
        /* Estilos aquí si es necesario */
      </style>
      <p class="mx-5"><strong>Agregar Tipo de activos</strong></p>
      <div class="m-5" id="formAdd">
        <form class="row g-3 needs-validation" novalidate>
          <div class="col-md-4">
            <label for="validationCustom02" class="form-label">Ingrese Nombre</label>
            <input type="text" class="form-control" id="validationCustom02" value="" required>
            <div class="valid-feedback">
              Correcto!
            </div>
          </div>
          <div class="col-12">
                    <button class="btn btn-dark" type="submit" id="addSomething">Agregar</button>
          </div>
        </form>
      </div>
    `;

    this.querySelector('#addSomething').addEventListener('click', () => {
      addSomething.call(this, 'tipos')
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

customElements.define("agregar-tipodeactivo", AgregarTipoActivos);


export class editarTipoActivo extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
      <style>
        /* Estilos aquí si es necesario */
      </style>
      <p class="mx-5"><strong>Editar Tipo activo</strong></p>
      <div class="m-5" id="formAdd">
        <form class="row g-3 needs-validation" novalidate>
        <div class="col-md-3">
                    <label for="validationCustom04" class="form-label">Tipo activo</label>
                    <select class="form-select" id="validationCustom01" required>
                      <option selected disabled value="">Seleccione...</option>
                    </select>
                    <div class="invalid-feedback">
                      Seleccione un tipo.
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
    fillOptions('tipos', selectId);
    this.querySelector('#addSomething').addEventListener('click', () => {
      editSomething.call(this, 'tipos', selectId.value)
      this.render();
    });
  }
}

customElements.define('editar-tipodeactivo', editarTipoActivo)


export class buscarActivo extends baseBuscar {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
      <style>
        /* Estilos aquí si es necesario */
      </style>
      <p class="mx-5"><strong>Buscar Persona</strong></p>
      <div class="m-5" id="formAdd">
        <form class="row g-3 needs-validation" novalidate>
        <div class="col-md-3">
                    <label for="validationCustom04" class="form-label">Buscar Tipo activo</label>
                    <select class="form-select" id="validationCustom01" required>
                      <option selected disabled value="">Seleccione...</option>
                    </select>
                    <div class="invalid-feedback">
                      Seleccione una activo.
                    </div>
                </div>
                <div class="col-md-4">
            <label for="validationCustom02" class="form-label">Id del tipo de activo</label>
            <input type="text" class="form-control" id="validationCustom02" value="" required>
            <div class="valid-feedback">
              Correcto!
            </div>
          </div>
          <div class="col-md-4">
            <label for="validationCustom02" class="form-label">Nombre del tipo de activo</label>
            <input type="text" class="form-control" id="validationCustom03" value="" required>
            <div class="valid-feedback">
              Correcto!
            </div>
          </div>
        </form>
      </div>
    `;
    super.chargeData('tipos')
  }

}

customElements.define('buscar-tipodeactivo', buscarActivo)

export class tipoActivos extends BaseEliminar {
  constructor() {
    super();
    this.render();
  }
  render() {
    this.innerHTML = /* html */ `
      <style>
        /* Estilos aquí si es necesario */
      </style>
      <p class="mx-5"><strong>Buscar tipo de movimiento</strong></p>
      <div class="m-5" id="formAdd">
        <form class="row g-3 needs-validation" novalidate>
        <div class="col-md-3">
                    <label for="validationCustom04" class="form-label">Buscar tipo de movimiento</label>
                    <select class="form-select" id="validationCustom01" required>
                      <option selected disabled value="">Seleccione...</option>
                    </select>
                    <div class="invalid-feedback">
                      Seleccione una tipo.
                    </div>
                </div>
          <div class="col-md-4">
            <label for="validationCustom02" class="form-label">Id tipo de movimiento</label>
            <input type="text" class="form-control" id="validationCustom02" value="" required>
            <div class="valid-feedback">
              Correcto!
            </div>
          </div>
          <div class="col-md-4">
            <label for="validationCustom02" class="form-label">Nombre tipo de movimiento</label>
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
    super.deleteAnything(selectId, 'tipos');
  }
}

customElements.define('eliminar-tipodeactivo', tipoActivos)
import { duckFetch, addSomething, editSomething, fillOptions, deleteAnything, setupValidation } from "../../Api/duckFetch.js";
import { BaseEliminar } from "./baseEliminar.js";



export default class AgregarMarca extends HTMLElement {
  constructor() {
    super();
    this.render();

  }

  render() {
    this.innerHTML = /* html */ `
      <style>
        /* Estilos aquí si es necesario */
      </style>
      <p class="mx-5"><strong>Agregar Marca</strong></p>
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
    setupValidation.call(this);
    this.verifyForm();
  }

  verifyForm() {
    this.querySelector('form').addEventListener('submit', (event) => {
      event.preventDefault();
      if (event.target.checkValidity()) {
        addSomething.call(this, 'marcas');
      } else {
      }
    });
  }
}

customElements.define("agregar-marca", AgregarMarca);



export class editarMarca extends AgregarMarca {
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
                    <label for="validationCustom04" class="form-label">Marca</label>
                    <select class="form-select" id="validationCustom01" required>
                      <option selected disabled value="">Seleccione...</option>
                    </select>
                    <div class="invalid-feedback">
                      Seleccione una marca.
                    </div>
                </div>
          <div class="col-md-4">
            <label for="validationCustom02" class="form-label">Ingrese nuevo Nombre</label>
            <input type="text" class="form-control" id="validationCustom02" value="" required>
            <div class="valid-feedback">
              Correcto!
            </div>
            <div class="invalid-feedback">
                      Ingrese un nombre
                    </div>
          </div>
          
          <div class="col-12">
                    <button class="btn btn-dark" type="submit" id="addSomething">Guardar</button>
          </div>
        </form>
      </div>
    `;
    setupValidation.call(this);
    let selectId = this.querySelector('select')
    fillOptions('marcas', selectId);
    this.verifyForm(selectId);
  }
  verifyForm(selectId) {
    this.querySelector('form').addEventListener('submit', (event) => {
      event.preventDefault();
      if (event.target.checkValidity()) {
        editSomething.call(this, 'marcas', selectId.value);
      }
    });
  }
}

customElements.define('editar-marca', editarMarca)



export class buscarMarca extends AgregarMarca {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
      <style>
        /* Estilos aquí si es necesario */
      </style>
      <p class="mx-5"><strong>Buscar Marca</strong></p>
      <div class="m-5" id="formAdd">
        <form class="row g-3 needs-validation" novalidate>
        <div class="col-md-3">
                    <label for="validationCustom04" class="form-label">Buscar Marca</label>
                    <select class="form-select" id="validationCustom01" required>
                      <option selected disabled value="">Seleccione...</option>
                    </select>
                    <div class="invalid-feedback">
                      Seleccione una Marca.
                    </div>
                </div>
                <div class="col-md-4">
            <label for="validationCustom02" class="form-label">Id del tipo de Marca</label>
            <input type="text" class="form-control" id="validationCustom02" value="" required>
            <div class="valid-feedback">
              Correcto!
            </div>
          </div>
          <div class="col-md-4">
            <label for="validationCustom02" class="form-label">Nombre del tipo de Marca</label>
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
    fillOptions('marcas', selectId);
    selectId.addEventListener('change', async () => {
      const selectedValue = selectId.value;
      if (selectedValue) {
        const data = await duckFetch('marcas', selectedValue, 'GET', null);
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

customElements.define('buscar-marca', buscarMarca)


export class eliminarMarcas extends BaseEliminar {
  constructor() {
    super();
    this.render();
  }
  render() {
    this.innerHTML = /* html */ `
      <style>
        /* Estilos aquí si es necesario */
      </style>
      <p class="mx-5"><strong>Buscar Marca</strong></p>
      <div class="m-5" id="formAdd">
        <form class="row g-3 needs-validation" novalidate>
        <div class="col-md-3">
                    <label for="validationCustom04" class="form-label">Buscar Marca</label>
                    <select class="form-select" id="validationCustom01" required>
                      <option selected disabled value="">Seleccione...</option>
                    </select>
                    <div class="invalid-feedback">
                      Seleccione una Marca.
                    </div>
                </div>
          <div class="col-md-4">
            <label for="validationCustom02" class="form-label">Id marca</label>
            <input type="text" class="form-control" id="validationCustom02" value="" required>
            <div class="valid-feedback">
              Correcto!
            </div>
          </div>
          <div class="col-md-4">
            <label for="validationCustom02" class="form-label">Nombre Marca</label>
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
    super.deleteAnything(selectId, 'marcas');
  }
}

customElements.define('eliminar-marca', eliminarMarcas)
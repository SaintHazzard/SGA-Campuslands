import { duckFetch, addSomething, editSomething, fillOptions } from "../../Api/duckFetch.js";
import { autoIncrementalId } from "../../Api/autoIncremental.js";



export default class AgregarTipoMovimiento extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
      <style>
        /* Estilos aquí si es necesario */
      </style>
      <p class="mx-5"><strong>Agregar Tipo de movimiento</strong></p>
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
      addSomething.call(this, 'movActivos')
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

customElements.define("agregar-tipodemovimiento", AgregarTipoMovimiento);


export class editarTipoMovimiento extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
      <style>
        /* Estilos aquí si es necesario */
      </style>
      <p class="mx-5"><strong>Editar Tipo movimiento</strong></p>
      <div class="m-5" id="formAdd">
        <form class="row g-3 needs-validation" novalidate>
        <div class="col-md-3">
                    <label for="validationCustom04" class="form-label">Movimiento</label>
                    <select class="form-select" id="validationCustom01" required>
                      <option selected disabled value="">Seleccione...</option>
                    </select>
                    <div class="invalid-feedback">
                      Seleccione un Movimiento.
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
    fillOptions('movActivos', selectId);
    this.querySelector('#addSomething').addEventListener('click', () => {
      editSomething.call(this, 'movActivos', selectId.value)
      this.render();
    });
  }
}

customElements.define('editar-tipodemovimiento', editarTipoMovimiento)
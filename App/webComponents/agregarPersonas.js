import { addSomething, duckFetch } from "../../Api/duckFetch.js";
import { autoIncrementalId } from "../../Api/autoIncremental.js";



export default class AgregarPersona extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
      <style>
        /* Estilos aquí si es necesario */
      </style>
      <p class="mx-5"><strong>Agregar Persona</strong></p>
      <div class="m-5" id="formAdd">
        <form class="row g-3 needs-validation" novalidate>
          <div class="col-md-4">
            <label for="validationCustom01" class="form-label">Ingrese Nro de documento</label>
            <input type="text" class="form-control" id="validationCustom01" value="" required>
            <div class="valid-feedback">
              Correcto!
            </div>
          </div>
          <div class="col-md-4">
            <label for="validationCustom02" class="form-label">Ingrese Nombre</label>
            <input type="text" class="form-control" id="validationCustom02" value="" required>
            <div class="valid-feedback">
              Correcto!
            </div>
          </div>
          <div class="col-md-4">
            <label for="validationCustom02" class="form-label">Ingrese Email</label>
            <input type="text" class="form-control" id="validationCustom03" value="" required>
            <div class="valid-feedback">
              Correcto!
            </div>
          </div>
          <div class="col-md-4">
                    <label for="validationCustom04" class="form-label">Tipo de persona</label>
                    <select class="form-select" id="validationCustom04" required>
                      <option selected disabled value="">Seleccione...</option>
                    </select>
                    <div class="invalid-feedback">
                      Seleccione una tipo de persona.
                    </div>
                </div>
                <div class="col-12">
                    <button class="btn btn-dark" type="submit" id="addSomething">Agregar Persona</button>
                </div>
        </form>
      </div>
    `;

    this.querySelector('#addSomething').addEventListener('click', () => {
      addSomething.call(this, 'personas')
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
    this.addOptions();
  }
  addOptions() {
    const selectElements = this.querySelectorAll('.form-select')
    duckFetch('tipodepersonas', null, 'GET', null).then(data => {
      const tipos = data.map(tipoP => tipoP);
      selectElements[0].innerHTML += tipos.map(tipoP => `<option value="${tipoP.id}">${tipoP.nombre}</option>`).join('');
    });
  }

}

customElements.define("agregar-persona", AgregarPersona);
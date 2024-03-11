import { addSomething, fillOptions, setupValidation } from "../../Api/duckFetch.js";

const jqueryScript = document.createElement('script');
jqueryScript.src = 'https://code.jquery.com/jquery-3.5.1.min.js';
document.head.appendChild(jqueryScript);

export class crearAsignacion extends HTMLElement {
    constructor() {
        super();
        this.render();
    }
    async render() {
        this.innerHTML = /* html */ `
        <p class="mx-5"><strong>Crear Asignación</strong></p>
        <div class="mx-5" id="formAdd">
            <form class="row g-3 needs-validation" novalidate>
                <div class="col-md-5">
                    <label for="validationCustom01" class="form-label">Responsable</label>
                    <select class="form-select" id="validationCustom01" required>
                        <option selected disabled value="">Seleccione...</option>
                        <!-- Opciones del select (responsables) -->
                    </select>
                    <div class="invalid-feedback">
                        Seleccione un Responsable.
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="validationCustom02" class="form-label">Fecha</label>
                    <input type="date" class="form-control" id="validationCustom02" required>
                    <div class="invalid-feedback">
                        Seleccione una fecha válida.
                    </div>
                </div>
                <div class="col-12">
                    <button class="btn btn-dark mt-3" type="submit" id="addAsset">Guardar Asignación</button>
                </div>
            </form>
        </div>
        `
        let selectpersona = this.querySelector("#validationCustom01");
        fillOptions.call(this, "personas",selectpersona);
        setupValidation.call(this);
        this.verifyForm();
    }
    verifyForm() {
        this.querySelector('form').addEventListener('submit', (event) => {
          event.preventDefault();
          if (event.target.checkValidity()) {
            addSomething.call(this, 'assignaments');
          } else {
          }
        });
    }
    
}

customElements.define('crearasignacion-asignacione', crearAsignacion)
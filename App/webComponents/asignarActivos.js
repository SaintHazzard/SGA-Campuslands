import { fillOptions, fillOptionsAssignaments } from "../../Api/duckFetch.js";

export class asignarActivo extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
      <p class = "mx-5"><strong>Asignar Activo</strong></p>
        <div class="m-5" id="formAdd">
            <form class="row g-3 needs-validation" novalidate>
                <div class="col-md-4">
                    <label for="validationCustom01" class="form-label">Activos</label>
                    <select class="form-select" id="validationCustom01" required>
                      <option selected disabled value="">Seleccione...</option>
                    </select>
                    <div class="invalid-feedback">
                      Seleccione un Activo.
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="validationCustom02" class="form-label">Asignacion</label>
                    <select class="form-select" id="validationCustom02" required>
                      <option selected disabled value="">Seleccione...</option>
                    </select>
                    <div class="invalid-feedback">
                      Seleccione una Asignacion.
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="validationCustom03" class="form-label">Fecha</label>
                    <input type="date" class="form-control" id="validationCustom03" required>
                    <div class="invalid-feedback">
                        Seleccione una fecha válida.
                    </div>
                </div>
                <div class="col-md-3">
                  <label for="validationCustom04" class="form-label">Comentario</label>
                  <input type="text" class="form-control" id="validationCustom04" required>
                  <div class="invalid-feedback">
                    Escriba un Comentario.
                  </div>
                </div>
                <div class="col-12">
                    <button class="btn btn-dark" type="submit" id="addAsset">Asignar Activo</button>
                </div>
              </form>
        </div>
      `
      let selectProducts = this.querySelector("#validationCustom01");
      fillOptionsAssignaments.call(this, "products", selectProducts);
      let selectAsignacion = this.querySelector("#validationCustom02");
      fillOptionsAssignaments.call(this, "assignaments", selectAsignacion);

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
  }
  
  
  customElements.define('asignaractivos-asignacione', asignarActivo)
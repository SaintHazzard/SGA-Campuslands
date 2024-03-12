import { addSomething, fillOptions, fillOptionsAssignaments, setupValidation, updateProductStatus, addhistory } from "../../Api/duckFetch.js";
export class retornarAsignacion extends HTMLElement {
  constructor() {
    super();
    this.render();
  }
  render() {
    this.innerHTML = /* html */ `
        <style>
          /* Estilos aquí si es necesario */
        </style>
        <p class="mx-5"><strong>Retornar Asignacion</strong></p>
        <div class="m-5" id="formAdd">
          <form class="row g-3 needs-validation" novalidate>
            <div class="col-md-3">
                <label for="validationCustom01" class="form-label">Buscar Activo</label>
                <select class="form-select" id="validationCustom01" required>
                  <option selected disabled value="">Seleccione...</option>
                </select>
                <div class="invalid-feedback">
                  Seleccione un Activo.
                </div>
            </div>
            <div class="col-12">
                <button class="btn btn-danger" type="submit" id="addSomething">Retornar</button>
            </div>
          </form>
        </div>
      `;
    let selectProducts = this.querySelector("#validationCustom01");
    fillOptionsAssignaments.call(this, "products", selectProducts, "retornar");
    setupValidation.call(this);
    this.verifyForm();
  }
  async verifyForm() {
    this.querySelector('form').addEventListener('submit', async (event) => {
      event.preventDefault();
      if (event.target.checkValidity()) {
        const selectProduct = this.querySelector("#validationCustom01");
        const productId = selectProduct.value;

        Swal.fire({
          title: "Do you want to save the changes?",
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: "Save",
          denyButtonText: `Don't save`
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire("El estado del productos ha sido actualizao a no asignado!", "", "success");
            // updateProductStatus(productId, "0");
            addhistory(productId);
          } else if (result.isDenied) {
            Swal.fire("Changes are not saved", "", "info");
          }
        });
        // this.render();
      } else {
        event.stopPropagation();
      }
    });
  }
}

customElements.define('retornaractivo-asignacione', retornarAsignacion)
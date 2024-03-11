import { addSomething, fillOptions, fillOptionsAssignaments, setupValidation, updateProductStatus } from "../../Api/duckFetch.js";
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
                  Seleccione una persona.
                </div>
            </div>
            <div class="col-12">
                <button class="btn btn-danger" type="submit" id="addSomething">Retornar</button>
            </div>
          </form>
        </div>
      `;
      let selectProducts= this.querySelector("#validationCustom01");
      fillOptionsAssignaments.call(this, "products", selectProducts);
      setupValidation.call(this);
      this.verifyForm();
    }
    verifyForm() {
      this.querySelector('form').addEventListener('submit', async (event) => {
        event.preventDefault();
        if (event.target.checkValidity()) {
          const selectProduct = this.querySelector("#validationCustom01");
          const productId = selectProduct.value;
          await updateProductStatus(productId, 0);
          Swal.fire("Estado actualizado", "El Producto Ha sido retornado", "success");
          this.render(); // Vuelve a renderizar el componente
        } else {
          event.stopPropagation();
        }
      });
    }
  }
  
  customElements.define('retornaractivo-asignacione', retornarAsignacion)
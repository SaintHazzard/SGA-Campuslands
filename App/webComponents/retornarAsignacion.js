import { addSomething, fillOptions, fillOptionsAssignaments, setupValidation, updateProductStatus, addhistory, duckFetch } from "../../Api/duckFetch.js";
export class retornarAsignacion extends HTMLElement {
  constructor() {
    super();
    this.render();
  }
  async render() {
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
<button class="btn btn-danger" type="submit" id="addSomething" >Retornar</button>
            </div>
            <div class="table-responsive small">
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Persona asignada</th>
              <th scope="col">Folio asignacion</th>
              <th scope="col">Fecha</th>
              <th scope="col">Comentario</th>
              <th scope="col">Estado</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
            
          </form>
        </div>
      `;
    let selectProducts = this.querySelector("#validationCustom01");
    fillOptionsAssignaments.call(this, "products", selectProducts, "retornar");
    setupValidation.call(this);
    this.verifyForm();
    this.querySelector('#validationCustom01').addEventListener('change', this.showHistory)
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
            addhistory(productId);
            updateProductStatus(productId, "0");
            this.render();
          } else if (result.isDenied) {
            Swal.fire("Changes are not saved", "", "info");
          }
        });

      } else {
        event.stopPropagation();
      }
    });
  }
  showHistory = async () => {
    const selectProduct = this.querySelector("#validationCustom01");
    const productId = selectProduct.value;
    const tbody = this.querySelector('tbody');
    tbody.innerHTML = ''
    const informacioHistory = await duckFetch('historialactivos', null, 'GET', null);
    for (const hist of informacioHistory) {
      if (hist.productId == productId) {
        let persona = await duckFetch('personas', hist.personaId, "GET", null)
        let estado = await duckFetch('estados', hist.estadoId, "GET", null)
        try {
          tbody.innerHTML += /*html*/`
        <tr>
          <td>${hist.id}</td>
          <td>${persona.nombre}</td>
          <td>${hist.assignamentId}</td>
          <td>${hist.fecha}</td>
          <td>${hist.comentario}</td>
          <td>${estado.nombre}</td>
        </tr>`;
        } catch (error) {
          console.error("Error fetching additional data:", error);
        }
      }

    }
  };
}


customElements.define('retornaractivo-asignacione', retornarAsignacion)


// 154.38.171.54: 21
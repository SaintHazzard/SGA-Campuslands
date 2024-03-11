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
                <label for="validationCustom04" class="form-label">Buscar Activo</label>
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
      this.chargeData()
    }
  
    async chargeData() {
      //
    }
  }
  
  customElements.define('retornaractivo-asignacione', retornarAsignacion)
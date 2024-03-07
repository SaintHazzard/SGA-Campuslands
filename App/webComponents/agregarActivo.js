export class agregarActivo extends HTMLElement {
    constructor(){
        super();
        this.render();
    }

    render(){
        this.innerHTML = /* html */ `
        <div class="m-5" id="formAdd">
            <form class="row g-3 needs-validation" novalidate>
                <div class="col-md-4">
                  <label for="validationCustom01" class="form-label">Código de Transacción</label>
                  <input type="text" class="form-control" id="validationCustom01" value="" required>
                  <div class="valid-feedback">
                    Looks good!
                  </div>
                </div>
                <div class="col-md-4">
                  <label for="validationCustom02" class="form-label">Número de formulario</label>
                  <input type="text" class="form-control" id="validationCustom02" value="" required>
                  <div class="valid-feedback">
                    Looks good!
                  </div>
                </div>
                <div class="col-md-4">
                    <label for="validationCustom04" class="form-label">Marca</label>
                    <select class="form-select" id="validationCustom04" required>
                      <option selected disabled value="">Seleccione...</option>
                      <option>LG</option>
                      <option>Compumax</option>
                      <option>Logitech</option>
                      <option>BENQ</option>
                      <option>ASUS</option>
                      <option>LENOVO</option>
                      <option>HP</option>
                      <option>Otro...</option>
                    </select>
                    <div class="invalid-feedback">
                      Please select a valid state.
                    </div>
                </div>
                <div class="col-md-3">
                    <label for="validationCustom04" class="form-label">Categoria</label>
                    <select class="form-select" id="validationCustom04" required>
                      <option selected disabled value="">Seleccione...</option>
                      <option>Equipo de computo</option>
                      <option>Electrodomestico</option>
                      <option>Juego</option>
                      <option>Otro...</option>
                    </select>
                    <div class="invalid-feedback">
                      Please select a valid state.
                    </div>
                </div>
                <div class="col-md-3">
                    <label for="validationCustom04" class="form-label">Tipo</label>
                    <select class="form-select" id="validationCustom04" required>
                      <option selected disabled value="">Seleccione...</option>
                      <option>Monitor</option>
                      <option>CPU</option>
                      <option>Teclado</option>
                      <option>Mouse</option>
                      <option>Aire Acondicionado</option>
                      <option>Portatil</option>
                      <option>Impresora</option>
                      <option>Otro...</option>
                    </select>
                    <div class="invalid-feedback">
                      Please select a valid state.
                    </div>
                </div>
                <div class="col-md-3">
                  <label for="validationCustom03" class="form-label">Valor Unitario</label>
                  <input type="text" class="form-control" id="validationCustom03" required>
                  <div class="invalid-feedback">
                    Please provide a valid value.
                  </div>
                </div>
                <div class="col-md-3">
                  <label for="validationCustom04" class="form-label">Proveedor</label>
                  <select class="form-select" id="validationCustom04" required>
                    <option selected disabled value="">Choose...</option>
                    <option>...</option>
                  </select>
                  <div class="invalid-feedback">
                    Please select a valid state.
                  </div>
                </div>
                <div class="col-md-4">
                    <label for="validationCustom03" class="form-label">Número de Serial</label>
                    <input type="text" class="form-control" id="validationCustom03" required>
                    <div class="invalid-feedback">
                      Please provide a valid serial.
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="validationCustom03" class="form-label">Empresa responsable</label>
                    <input type="text" class="form-control" id="validationCustom03" required>
                    <div class="invalid-feedback">
                      Please provide a valid serial.
                    </div>
                </div>
                <div class="col-md-3">
                    <label for="validationCustom04" class="form-label">Estado</label>
                    <select class="form-select" id="validationCustom04" required>
                      <option selected disabled value="">Seleccione...</option>
                      <option>No asignado</option>
                      <option>Asignado</option>
                      <option>Dado de baja por daño</option>
                      <option>En reparación y/oGarantia</option>
                    </select>
                    <div class="invalid-feedback">
                      Please select a valid state.
                    </div>
                </div>
                <div class="col-12">
                    <button class="btn btn-dark" type="submit">Agregar Activo</button>
                </div>
              </form>
        </div>
        `
    }
}

customElements.define('agregar-activo', agregarActivo)

import { duckFetch } from "../../Api/duckFetch.js";

export class agregarActivo extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
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
                    <select class="form-select" id="validationCustom03" required>
                      <option selected disabled value="">Seleccione...</option>
                    </select>
                    <div class="invalid-feedback">
                      Please select a valid state.
                    </div>
                </div>
                <div class="col-md-3">
                    <label for="validationCustom04" class="form-label">Categoria</label>
                    <select class="form-select" id="validationCustom05" required>
                      <option selected disabled value="">Seleccione...</option>
                    </select>
                    <div class="invalid-feedback">
                      Please select a valid state.
                    </div>
                </div>
                <div class="col-md-3">
                    <label for="validationCustom04" class="form-label">Tipo</label>
                    <select class="form-select" id="validationCustom06" required>
                      <option selected disabled value="">Seleccione...</option>
                    </select>
                    <div class="invalid-feedback">
                      Please select a valid state.
                    </div>
                </div>
                <div class="col-md-3">
                  <label for="validationCustom03" class="form-label">Valor Unitario</label>
                  <input type="text" class="form-control" id="validationCustom07" required>
                  <div class="invalid-feedback">
                    Please provide a valid value.
                  </div>
                </div>
                <div class="col-md-3">
                  <label for="validationCustom04" class="form-label">Proveedor</label>
                  <select class="form-select" id="validationCustom08" required>
                    <option selected disabled value="">Seleccione...</option>
                  
                  </select>
                  <div class="invalid-feedback">
                    Please select a valid state.
                  </div>
                </div>
                <div class="col-md-4">
                    <label for="validationCustom03" class="form-label">Número de Serial</label>
                    <input type="text" class="form-control" id="validationCustom09" required>
                    <div class="invalid-feedback">
                      Please provide a valid serial.
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="validationCustom03" class="form-label">Empresa responsable</label>
                    <input type="text" class="form-control" id="validationCustom10" required>
                    <div class="invalid-feedback">
                      Please provide a valid serial.
                    </div>
                </div>
                <div class="col-md-3">
                    <label for="validationCustom04" class="form-label">Estado</label>
                    <select class="form-select" id="validationCustom11" required>
                      <option selected disabled value="">Seleccione...</option>
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
    duckFetch('marcas', null, 'GET', null).then(data => {
      const marcas = data.map(marca => marca.nombre);
      selectElements[0].innerHTML += marcas.map(marca => `<option>${marca}</option>`).join('');
    });
    duckFetch('categories', null, 'GET', null).then(data => {
      const categorias = data.map(categoria => categoria.nombre);
      selectElements[1].innerHTML += categorias.map(categoria => `<option>${categoria}</option>`).join('');
    });
    duckFetch('tipos', null, 'GET', null).then(data => {
      const tipos = data.map(tipo => tipo.nombre);
      selectElements[2].innerHTML += tipos.map(tipo => `<option>${tipo}</option>`).join('');
    });
    duckFetch('providers', null, 'GET', null).then(data => {
      const proveedores = data.map(proveedor => proveedor.nombre);
      selectElements[3].innerHTML += proveedores.map(proveedor => `<option>${proveedor}</option>`).join('');
    });
    duckFetch('estados', null, 'GET', null).then(data => {
      const estados = data.map(estado => estado.nombre);
      selectElements[4].innerHTML += estados.map(estado => `<option>${estado}</option>`).join('');
    });
  }
}


customElements.define('agregar-activo', agregarActivo)

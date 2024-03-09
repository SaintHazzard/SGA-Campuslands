import { duckFetch } from "../../Api/duckFetch.js";
export class agregarActivo extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
        <p class = "mx-5"><strong>Agregar Activo</strong></p>
        <div class="m-5" id="formAdd">
            <form class="row g-3 needs-validation" novalidate>
                <div class="col-md-4">
                  <label for="validationCustom01" class="form-label">Código de Transacción</label>
                  <input type="text" class="form-control" id="validationCustom01" value="" required>
                  <div class="valid-feedback">
                    Correcto!
                  </div>
                </div>
                <div class="col-md-4">
                  <label for="validationCustom02" class="form-label">Número de formulario</label>
                  <input type="text" class="form-control" id="validationCustom02" value="" required>
                  <div class="valid-feedback">
                    Correcto!
                  </div>
                </div>
                <div class="col-md-4">
                    <label for="validationCustom04" class="form-label">Marca</label>
                    <select class="form-select" id="validationCustom03" required>
                      <option selected disabled value="">Seleccione...</option>
                    </select>
                    <div class="invalid-feedback">
                      Seleccione una marca.
                    </div>
                </div>
                <div class="col-md-3">
                    <label for="validationCustom04" class="form-label">Categoria</label>
                    <select class="form-select" id="validationCustom05" required>
                      <option selected disabled value="">Seleccione...</option>
                    </select>
                    <div class="invalid-feedback">
                      Seleccione una categoria. 
                    </div>
                </div>
                <div class="col-md-3">
                    <label for="validationCustom04" class="form-label">Tipo</label>
                    <select class="form-select" id="validationCustom06" required>
                      <option selected disabled value="">Seleccione...</option>
                    </select>
                    <div class="invalid-feedback">
                      Seleccione un tipo.
                    </div>
                </div>
                <div class="col-md-3">
                  <label for="validationCustom03" class="form-label">Valor Unitario</label>
                  <input type="text" class="form-control" id="validationCustom07" required>
                  <div class="invalid-feedback">
                    Escriba un valor númerico.
                  </div>
                </div>
                <div class="col-md-3">
                  <label for="validationCustom04" class="form-label">Proveedor</label>
                  <select class="form-select" id="validationCustom08" required>
                    <option selected disabled value="">Seleccione...</option>
                  </select>
                  <div class="invalid-feedback">
                    Seleccione un proveedor.
                  </div>
                </div>
                <div class="col-md-4">
                    <label for="validationCustom03" class="form-label">Número de Serial</label>
                    <input type="text" class="form-control" id="validationCustom09" required>
                    <div class="invalid-feedback">
                      Escriba un valor númerico.
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="validationCustom03" class="form-label">Empresa responsable</label>
                    <input type="text" class="form-control" id="validationCustom10" required>
                    <div class="invalid-feedback">
                      Seleccione una empresa.
                    </div>
                </div>
                <div class="col-md-3">
                    <label for="validationCustom04" class="form-label">Estado</label>
                    <select class="form-select" id="validationCustom11" required>
                      <option selected disabled value="">Seleccione...</option>
                    </select>
                    <div class="invalid-feedback">
                      Seleccione un estado.
                    </div>
                </div>
                <div class="col-12">
                    <button class="btn btn-dark" type="submit" id="addAsset">Agregar Activo</button>
                </div>
              </form>
        </div>
        `
    this.querySelector('#addAsset').addEventListener('click', async () => {
      const form = this.querySelector('form');
      if (form.checkValidity()) {
        const data = {
          "CodigoTransaccion": form[0].value,
          "Formulario": form[1].value,
          "marcaId": form[2].value,
          "categoryId": form[3].value,
          "tipoId": form[4].value,
          "unitValue": form[5].value,
          "providerId": form[6].value,
          "Serial": form[7].value,
          "PEmpresa": form[8].value,
          "estadoId": form[9].value
        }
        try {
          const response = await duckFetch('products', null, 'POST', data);
          if (response) {
            Swal.fire({
              title: "Good job!",
              text: "You clicked the button!",
              icon: "success"
            });
          }
        } catch (error) {
          console.error(error);
        }
      }
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
    duckFetch('marcas', null, 'GET', null).then(data => {
      const marcas = data.map(marca => marca.nombre);
      selectElements[0].innerHTML += marcas.map(marca => `<option value="${marca}">${marca}</option>`).join('');
    });
    duckFetch('categories', null, 'GET', null).then(data => {
      const categorias = data.map(categoria => categoria.nombre);
      selectElements[1].innerHTML += categorias.map(categoria => `<option value="${categoria}">${categoria}</option>`).join('');
    });
    duckFetch('tipos', null, 'GET', null).then(data => {
      const tipos = data.map(tipo => tipo.nombre);
      selectElements[2].innerHTML += tipos.map(tipo => `<option value="${tipo}">${tipo}</option>`).join('');
    });
    duckFetch('providers', null, 'GET', null).then(data => {
      const proveedores = data.map(proveedor => proveedor.nombre);
      selectElements[3].innerHTML += proveedores.map(pro => `<option value="${pro}">${pro}</option>`).join('');
    });
    duckFetch('estados', null, 'GET', null).then(data => {
      const estados = data.map(estado => estado.nombre);
      selectElements[4].innerHTML += estados.map(est => `<option value="${est}">${est}</option>`).join('');
    });
  }
}


customElements.define('agregar-activo', agregarActivo)

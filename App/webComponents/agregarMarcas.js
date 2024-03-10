import { duckFetch, addSomething, editSomething, fillOptions, deleteAnything } from "../../Api/duckFetch.js";
import { autoIncrementalId } from "../../Api/autoIncremental.js";



export default class AgregarMarca extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
      <style>
        /* Estilos aquí si es necesario */
      </style>
      <p class="mx-5"><strong>Agregar Marca</strong></p>
      <div class="m-5" id="formAdd">
        <form class="row g-3 needs-validation" novalidate>
          <div class="col-md-4">
            <label for="validationCustom02" class="form-label">Ingrese Nombre</label>
            <input type="text" class="form-control" id="validationCustom02" value="" required>
            <div class="valid-feedback">
              Correcto!
            </div>
          </div>
          <div class="col-12">
                    <button class="btn btn-dark" type="submit" id="addSomething">Agregar</button>
          </div>
        </form>
      </div>
    `;

    this.querySelector('#addSomething').addEventListener('click', () => {
      addSomething.call(this, 'marcas')
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
  }
}

customElements.define("agregar-marca", AgregarMarca);



export class editarMarca extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
      <style>
        /* Estilos aquí si es necesario */
      </style>
      <p class="mx-5"><strong>Editar Marca</strong></p>
      <div class="m-5" id="formAdd">
        <form class="row g-3 needs-validation" novalidate>
        <div class="col-md-3">
                    <label for="validationCustom04" class="form-label">Marca</label>
                    <select class="form-select" id="validationCustom01" required>
                      <option selected disabled value="">Seleccione...</option>
                    </select>
                    <div class="invalid-feedback">
                      Seleccione un estado.
                    </div>
                </div>
          <div class="col-md-4">
            <label for="validationCustom02" class="form-label">Ingrese nuevo Nombre</label>
            <input type="text" class="form-control" id="validationCustom02" value="" required>
            <div class="valid-feedback">
              Correcto!
            </div>
          </div>
          
          <div class="col-12">
                    <button class="btn btn-dark" type="submit" id="addSomething">Guardar</button>
          </div>
        </form>
      </div>
    `;
    let selectId = this.querySelector('select')
    fillOptions('marcas', selectId);
    this.querySelector('#addSomething').addEventListener('click', () => {
      editSomething.call(this, 'marcas', selectId.value)
      this.render();
    });
  }
}

customElements.define('editar-marca', editarMarca)



export class buscarMarca extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
      <style>
        /* Estilos aquí si es necesario */
      </style>
      <p class="mx-5"><strong>Buscar Persona</strong></p>
      <div class="m-5" id="formAdd">
        <form class="row g-3 needs-validation" novalidate>
        <div class="col-md-3">
                    <label for="validationCustom04" class="form-label">Buscar Marca</label>
                    <select class="form-select" id="validationCustom01" required>
                      <option selected disabled value="">Seleccione...</option>
                    </select>
                    <div class="invalid-feedback">
                      Seleccione una Marca.
                    </div>
                </div>
                <div class="col-md-4">
            <label for="validationCustom02" class="form-label">Id del tipo de Marca</label>
            <input type="text" class="form-control" id="validationCustom02" value="" required>
            <div class="valid-feedback">
              Correcto!
            </div>
          </div>
          <div class="col-md-4">
            <label for="validationCustom02" class="form-label">Nombre del tipo de Marca</label>
            <input type="text" class="form-control" id="validationCustom03" value="" required>
            <div class="valid-feedback">
              Correcto!
            </div>
          </div>
        </form>
      </div>
    `;
    this.chargeData()
  }

  async chargeData() {
    let selectId = this.querySelector('#validationCustom01')

    fillOptions('marcas', selectId);

    selectId.addEventListener('change', async () => {
      const selectedValue = selectId.value;
      if (selectedValue) {
        const data = await duckFetch('marcas', selectedValue, 'GET', null);
        console.log(data);

        this.querySelector('#validationCustom02').value = data.id;
        this.querySelector('#validationCustom03').value = data.nombre;
        let casillas = this.querySelectorAll('[id*="validationCustom"]');
        for (let i = 1; i < casillas.length; i++) {
          casillas[i].disabled = true;
        }
      }
    });
    this.querySelector('#addSomething').addEventListener('click', () => {
      editSomething.call(this, 'marcas', selectId.value)
      this.render();
    });
  }
}

customElements.define('buscar-marca', buscarMarca)


export class eliminarMarcas extends HTMLElement {
  constructor() {
    super();
    this.render();
  }
  render() {
    this.innerHTML = /* html */ `
      <style>
        /* Estilos aquí si es necesario */
      </style>
      <p class="mx-5"><strong>Buscar Marca</strong></p>
      <div class="m-5" id="formAdd">
        <form class="row g-3 needs-validation" novalidate>
        <div class="col-md-3">
                    <label for="validationCustom04" class="form-label">Buscar Persona</label>
                    <select class="form-select" id="validationCustom01" required>
                      <option selected disabled value="">Seleccione...</option>
                    </select>
                    <div class="invalid-feedback">
                      Seleccione una persona.
                    </div>
                </div>
          <div class="col-md-4">
            <label for="validationCustom02" class="form-label">Id marca</label>
            <input type="text" class="form-control" id="validationCustom02" value="" required>
            <div class="valid-feedback">
              Correcto!
            </div>
          </div>
          <div class="col-md-4">
            <label for="validationCustom02" class="form-label">Nombre Marca</label>
            <input type="text" class="form-control" id="validationCustom03" value="" required>
            <div class="valid-feedback">
              Correcto!
            </div>
          </div>
          <div class="col-12">
                    <button class="btn btn-danger" type="submit" id="addSomething">Eliminar</button>
          </div>
        </form>
      </div>
    `;
    this.chargeData()
  }

  async chargeData() {
    let selectId = this.querySelector('#validationCustom01')
    fillOptions('marcas', selectId);
    selectId.addEventListener('change', async () => {
      const selectedValue = selectId.value;
      if (selectedValue) {
        const data = await duckFetch('marcas', selectedValue, 'GET', null);
        this.querySelector('#validationCustom02').value = data.id;
        this.querySelector('#validationCustom03').value = data.nombre;
        let casillas = this.querySelectorAll('[id*="validationCustom"]');
        for (let i = 1; i < casillas.length; i++) {
          casillas[i].disabled = true;
        }
      }
    });
    this.querySelector('#addSomething').addEventListener('click', () => {
      deleteAnything.call(this, 'marcas', selectId.value)
    });
  }
}

customElements.define('eliminar-marca', eliminarMarcas)
import { addSomething, deleteAnything, duckFetch, editSomething, fillOptions, setupValidation } from "../../Api/duckFetch.js";


export default class AgregarPersona extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
      <p class="mx-5"><strong>Agregar Persona</strong></p>
      <div class="m-5" id="formAdd">
        <form class="row g-3 needs-validation" novalidate>
          <div class="col-md-4">
            <label for="validationCustom01" class="form-label">Ingrese Nro de documento</label>
            <input type="text" class="form-control" id="validationCustom01" value="" required>
            <div class="valid-feedback">
              Correcto!
            </div>
          </div>
          <div class="col-md-4">
            <label for="validationCustom02" class="form-label">Ingrese Nombre</label>
            <input type="text" class="form-control" id="validationCustom02" value="" required>
            <div class="valid-feedback">
              Correcto!
            </div>
          </div>
          <div class="col-md-4">
            <label for="validationCustom02" class="form-label">Ingrese Email</label>
            <input type="text" class="form-control" id="validationCustom03" value="" required>
            <div class="valid-feedback">
              Correcto!
            </div>
          </div>
          <div class="col-md-4">
                    <label for="validationCustom04" class="form-label">Tipo de persona</label>
                    <select class="form-select" id="validationCustom04" required>
                      <option selected disabled value="">Seleccione...</option>
                    </select>
                    <div class="invalid-feedback">
                      Seleccione una tipo de persona.
                    </div>
                </div>
                <div class="col-12">
                    <button class="btn btn-dark" type="submit" id="addSomething">Agregar Persona</button>
                </div>
        </form>
      </div>
    `;
    this.setupValidation()
  }


  setupValidation() {
    this.addOptions();
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
    this.querySelector('form').addEventListener('submit', (event) => {
      event.preventDefault();
      if (event.target.checkValidity()) {
        addSomething.call(this, 'personas')
      }
    });
  }

  addOptions() {
    const selectElements = this.querySelectorAll('.form-select')
    duckFetch('tipodepersonas', null, 'GET', null).then(data => {
      const tipos = data.map(tipoP => tipoP);
      selectElements[0].innerHTML += tipos.map(tipoP => `<option value="${tipoP.id}">${tipoP.nombre}</option>`).join('');
    });
  }

}

customElements.define("agregar-persona", AgregarPersona);





export class editarPersona extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
      <style>
        /* Estilos aquí si es necesario */
      </style>
      <p class="mx-5"><strong>Editar Persona</strong></p>
      <div class="m-5" id="formAdd">
        <form class="row g-3 needs-validation" novalidate>
        <div class="col-md-3">
                    <label for="validationCustom04" class="form-label">Persona</label>
                    <select class="form-select" id="validationCustom01" required>
                      <option selected disabled value="">Seleccione...</option>
                    </select>
                    <div class="invalid-feedback">
                      Seleccione una persona.
                    </div>
                </div>
          <div class="col-md-4">
            <label for="validationCustom02" class="form-label">Ingrese nuevo Nro Documento</label>
            <input type="text" class="form-control" id="validationCustom02" value="" required>
            <div class="valid-feedback">
              Correcto!
            </div>
          </div>
          <div class="col-md-4">
            <label for="validationCustom02" class="form-label">Ingrese nuevo Nombre</label>
            <input type="text" class="form-control" id="validationCustom03" value="" required>
            <div class="valid-feedback">
              Correcto!
            </div>
          </div>
          <div class="col-md-4">
            <label for="validationCustom02" class="form-label">Ingrese nuevo Email</label>
            <input type="text" class="form-control" id="validationCustom04" value="" required>
            <div class="valid-feedback">
              Correcto!
            </div>
          </div>
          <div class="col-md-3">
                    <label for="validationCustom04" class="form-label">Cambiar tipo</label>
                    <select class="form-select" id="validationCustom05" required>
                      <option selected disabled value="">Seleccione...</option>
                    </select>
                    <div class="invalid-feedback">
                      Seleccione una persona.
                    </div>
                </div>
          <div class="col-12">
                    <button class="btn btn-dark" type="submit" id="addSomething">Guardar</button>
          </div>
        </form>
      </div>
    `;
    setupValidation.call(this);
    this.chargeData();
  }

  async chargeData() {
    let selectId = this.querySelector('#validationCustom01')
    let selectTipo = this.querySelector('#validationCustom05')

    fillOptions('personas', selectId);
    fillOptions('tipodepersonas', selectTipo);
    selectId.addEventListener('change', async () => {
      const selectedValue = selectId.value;
      if (selectedValue) {
        const data = await duckFetch('personas', selectedValue, 'GET', null);
        this.querySelector('#validationCustom02').value = data.identification;
        this.querySelector('#validationCustom03').value = data.nombre;
        this.querySelector('#validationCustom04').value = data.email;
        this.querySelector('#validationCustom05').value = data.tipodepersona;
      }
    });
    this.querySelector('form').addEventListener('submit', (event) => {
      event.preventDefault();
      if (event.target.checkValidity()) {
        editSomething.call(this, 'personas', selectId.value)
        this.render();
      }
    });
  }
}

customElements.define('editar-persona', editarPersona)

export class buscarPersona extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
      <p class="mx-5"><strong>Buscar Persona</strong></p>
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
            <label for="validationCustom02" class="form-label">Nro Documento</label>
            <input type="text" class="form-control" id="validationCustom02" value="" required>
            <div class="valid-feedback">
              Correcto!
            </div>
          </div>
          <div class="col-md-4">
            <label for="validationCustom02" class="form-label">Nombre</label>
            <input type="text" class="form-control" id="validationCustom03" value="" required>
            <div class="valid-feedback">
              Correcto!
            </div>
          </div>
          <div class="col-md-4">
            <label for="validationCustom02" class="form-label">Email</label>
            <input type="text" class="form-control" id="validationCustom04" value="" required>
            <div class="valid-feedback">
              Correcto!
            </div>
          </div>
          <div class="col-md-3">
                    <label for="validationCustom04" class="form-label">Tipo</label>
                    <select class="form-select" id="validationCustom05" required>
                      <option selected disabled value="">Seleccione...</option>
                    </select>
                    <div class="invalid-feedback">
                      Seleccione un tipo.
                    </div>
                </div>
        </form>
      </div>
    `;
    this.chargeData()
  }

  async chargeData() {
    let selectId = this.querySelector('#validationCustom01')
    let selectTipo = this.querySelector('#validationCustom05')

    fillOptions('personas', selectId);
    fillOptions('tipodepersonas', selectTipo);



    selectId.addEventListener('change', async () => {
      const selectedValue = selectId.value;
      if (selectedValue) {
        const data = await duckFetch('personas', selectedValue, 'GET', null);
        this.querySelector('#validationCustom02').value = data.identification;
        this.querySelector('#validationCustom03').value = data.nombre;
        this.querySelector('#validationCustom04').value = data.email;
        this.querySelector('#validationCustom05').value = data.tipodepersona;
        let casillas = this.querySelectorAll('[id*="validationCustom"]');
        for (let i = 1; i < casillas.length; i++) {
          casillas[i].disabled = true;
        }
      }
    });
  }
}

customElements.define('buscar-persona', buscarPersona)

export class eliminarPersona extends HTMLElement {
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
                    <label for="validationCustom04" class="form-label">Buscar Persona</label>
                    <select class="form-select" id="validationCustom01" required>
                      <option selected disabled value="">Seleccione...</option>
                    </select>
                    <div class="invalid-feedback">
                      Seleccione una persona.
                    </div>
                </div>
          <div class="col-md-4">
            <label for="validationCustom02" class="form-label">Nro Documento</label>
            <input type="text" class="form-control" id="validationCustom02" value="" required>
            <div class="valid-feedback">
              Correcto!
            </div>
          </div>
          <div class="col-md-4">
            <label for="validationCustom02" class="form-label">Nombre</label>
            <input type="text" class="form-control" id="validationCustom03" value="" required>
            <div class="valid-feedback">
              Correcto!
            </div>
          </div>
          <div class="col-md-4">
            <label for="validationCustom02" class="form-label">Email</label>
            <input type="text" class="form-control" id="validationCustom04" value="" required>
            <div class="valid-feedback">
              Correcto!
            </div>
          </div>
          <div class="col-md-3">
                    <label for="validationCustom04" class="form-label">Tipo</label>
                    <select class="form-select" id="validationCustom05" required>
                      <option selected disabled value="">Seleccione...</option>
                    </select>
                    <div class="invalid-feedback">
                      Seleccione una persona.
                    </div>
                </div>
          <div class="col-12">
                    <button class="btn btn-danger" type="submit" id="addSomething">Eliminar</button>
          </div>
        </form>
      </div>
    `;
    setupValidation.call(this);
    this.chargeData()
  }

  async chargeData() {
    let selectId = this.querySelector('#validationCustom01')
    let selectTipo = this.querySelector('#validationCustom05')

    fillOptions('personas', selectId);
    fillOptions('tipodepersonas', selectTipo);

    selectId.addEventListener('change', async () => {
      const selectedValue = selectId.value;

      if (selectedValue) {
        const data = await duckFetch('personas', selectedValue, 'GET');
        this.querySelector('#validationCustom02').value = data.identification;
        this.querySelector('#validationCustom03').value = data.nombre;
        this.querySelector('#validationCustom04').value = data.email;
        this.querySelector('#validationCustom05').value = data.tipodepersona;
        let casillas = this.querySelectorAll('[id*="validationCustom"]');
        for (let i = 1; i < casillas.length; i++) {
          casillas[i].disabled = true;
        }
      }
    });
    this.querySelector('form').addEventListener('submit', (event) => {
      event.preventDefault();
      if (event.target.checkValidity()) {
        deleteAnything.call(this, 'personas', selectId.value)
        this.render();
      }
    })
  }
}

customElements.define('eliminar-persona', eliminarPersona)


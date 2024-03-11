import '../../../Api/duckFetch.js';
import editarActivo from './editarActivo.js';
// import { duckFetch } from '../../Api/duckFetch.js';
export default class buscarActivo extends HTMLElement {
    searchButton;
    constructor() {
        super();
        this.render()
        this.classEditar = new editarActivo();
        this.showDetailProduct();
    }

    async render() {
        this.innerHTML = /* html */ `
      <p class = "mx-5"><strong>Buscar Activo</strong></p>
      <editar-activo></editar-activo>
      <script type="text/javascript">
          document.querySelector('.searchbox [type="reset"]').addEventListener('click', function() {  this.parentNode.querySelector('input').focus();});
      </script>
      `;
        let casillas = this.querySelectorAll('[id*="validationCustom"]');

        casillas.forEach((inputR) => {
            inputR.disabled = true
        })
    }


    async showDetailProduct() {
        await customElements.whenDefined('editar-activo');
        let editarActivoComponent = this.querySelector('editar-activo');
        let parrafo = editarActivoComponent.querySelector('p')
        let modalTittle = editarActivoComponent.querySelector('.modal-title');

        if (editarActivoComponent) {
            modalTittle.textContent = "Detalle Activo";
            let button = editarActivoComponent.querySelector('.btn-primary');
            if (button) {
                button.remove();
            }
            if (parrafo) {
                parrafo.remove()
            }
        }
    }


}

customElements.define('buscar-activo', buscarActivo);

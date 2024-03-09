import '../../Api/duckFetch.js';
import { duckFetch } from '../../Api/duckFetch.js';
import buscarActivo from './buscarActivo.js';
export class eliminarActivo extends buscarActivo {
    searchButton;
    constructor() {
        super();
        this.render();
        this.dialogo();
        this.showDetailProductOverride();
    }

    render() {
        this.innerHTML = /* html */ `
      <p class = "mx-5"><strong>Eliminar Activo</strong></p>
      <buscar-activo></buscar-activo>
      <script type="text/javascript">
          document.querySelector('.searchbox [type="reset"]').addEventListener('click', function() {  this.parentNode.querySelector('input').focus();});
      </script>
      `;
        this.searchButton = this.querySelector('#search-button');
    }

    async dialogo() {
        function showDialog() {
            document.getElementById('dialog').style.display = 'flex';
        }

        console.log(this.searchButton);

        this.searchButton.addEventListener('click', function () {
            showDialog();
            console.log("Alert")
        });

        document.getElementById('submit-dialog').addEventListener('click', function () {
            alert('Enviar diálogo');
        });

        function hideDialog() {
            document.getElementById('dialog').style.display = 'none';
        }

        document.querySelector('.searchbox [type="reset"]').addEventListener('click', function () {
            hideDialog();
        });

        document.getElementById('close-button').addEventListener('click', function () {
            document.getElementById('dialog').style.display = 'none';
        });

    }

    connectedCallback() {
        const buscarActivoComponent = this.querySelector('buscar-activo');
        console.log(buscarActivoComponent);

        buscarActivoComponent.showDetail = this.showDetailProductOverride.bind(this);
    }

    async showDetailProductOverride() {
        await customElements.whenDefined('buscar-activo');
        let editarActivoComponent = this.querySelector('buscar-activo');
        let parrafo = editarActivoComponent.querySelector('p')
        let modalTittle = editarActivoComponent.querySelector('.modal-title');
        let modalFooter = editarActivoComponent.querySelector('.modal-footer');
        let deletbutton = document.createElement("button");
        deletbutton.className = "btn btn-danger";
        deletbutton.textContent = "Eliminar"
        modalFooter.appendChild(deletbutton);
        let boton = editarActivoComponent.querySelector('.btn');
        if (editarActivoComponent) {
            modalTittle.textContent = "Detalle Activo a eliminar";
            // let button = editarActivoComponent.querySelector('.btn-primary');
            // if (button) {
            //     // button.remove();
            // }
            if (parrafo) {
                parrafo.remove()
            }
            
        }
    }
}

customElements.define('eliminar-activo', eliminarActivo);

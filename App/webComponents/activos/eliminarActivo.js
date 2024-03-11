import '../../../Api/duckFetch.js';
import { duckFetch } from '../../../Api/duckFetch.js';
import buscarActivo from './buscarActivo.js';
export class eliminarActivo extends buscarActivo {
    searchButton;
    constructor() {
        super();
        this.render();
        this.showDetailProductOverride()
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
        this.dialogo();
    }

    async dialogo() {
        function showDialog() {
            document.getElementById('dialog').style.display = 'flex';
        }


        this.searchButton.addEventListener('click', function () {
            showDialog();
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

    // connectedCallback() {
    //     const buscarActivoComponent = this.querySelector('buscar-activo');
    //     buscarActivoComponent.showDetail = this.showDetailProductOverride.bind(this);
    // }

    async showDetailProductOverride() {

        await customElements.whenDefined('buscar-activo');
        let editarActivoComponent = this.querySelector('buscar-activo');
        let parrafo = editarActivoComponent.querySelector('p')
        let modalTittle = editarActivoComponent.querySelector('.modal-title');
        let modalFooter = editarActivoComponent.querySelector('.modal-footer');
        let deletbutton = document.createElement("button");
        deletbutton.className = "btn btn-danger";
        deletbutton.textContent = "Eliminar";


        deletbutton.addEventListener('click', async () => {
            try {
                let input = this.querySelector('#autocomplete').getAttribute("data-product-id");

                let producto = await duckFetch('products', input, 'GET', null);

                if (producto.estadoId == "2" || !producto.estadoId || producto.estadoId == "3") {
                    Swal.fire({
                        title: "Are you sure?",
                        text: "You won't be able to revert this!",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, delete it!"
                    }).then(async (result) => {
                        if (result.isConfirmed) {
                            await duckFetch('products', input, 'DELETE', null);
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your assets has been deleted.",
                                icon: "success"
                            });
                            this.render();
                            this.showDetailProductOverride();
                        }
                    });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'No se puede eliminar un activo que no esté en estado de baja!',
                    });
                }
            } catch (error) {
                console.error("Error fetching or deleting product:", error);
            }
        });
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

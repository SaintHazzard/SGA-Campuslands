import '../../Api/duckFetch.js';
import { duckFetch } from '../../Api/duckFetch.js';
export default class editarActivo extends HTMLElement {
    constructor() {
        super();
        this.render();
        this.dialogo();
        this.showAll();
        this.filterSuggestions();
        this.getProduct();
    }

    async render() {
        this.innerHTML = /* html */ `
      <p class = "mx-5"><strong>Editar Activo</strong></p>
      <svg xmlns="http://www.w3.org/2000/svg" style="display:none">
          <symbol xmlns="http://www.w3.org/2000/svg" id="sbx-icon-search-13" viewBox="0 0 40 40">
              <path d="M26.804 29.01c-2.832 2.34-6.465 3.746-10.426 3.746C7.333 32.756 0 25.424 0 16.378 0 7.333 7.333 0 16.378 0c9.046 0 16.378 7.333 16.378 16.378 0 3.96-1.406 7.594-3.746 10.426l10.534 10.534c.607.607.61 1.59-.004 2.202-.61.61-1.597.61-2.202.004L26.804 29.01zm-10.426.627c7.323 0 13.26-5.936 13.26-13.26 0-7.32-5.937-13.257-13.26-13.257C9.056 3.12 3.12 9.056 3.12 16.378c0 7.323 5.936 13.26 13.258 13.26z"
              fill-rule="evenodd" />
          </symbol>
          <symbol xmlns="http://www.w3.org/2000/svg" id="sbx-icon-clear-3" viewBox="0 0 20 20">
              <path d="M8.114 10L.944 2.83 0 1.885 1.886 0l.943.943L10 8.113l7.17-7.17.944-.943L20 1.886l-.943.943-7.17 7.17 7.17 7.17.943.944L18.114 20l-.943-.943-7.17-7.17-7.17 7.17-.944.943L0 18.114l.943-.943L8.113 10z" fill-rule="evenodd" />
          </symbol>
      </svg>

      <form novalidate="novalidate" onsubmit="return false;" class="searchbox sbx-google mx-5">
          <div role="search" class="sbx-google__wrapper">
              <input type="search" name="search" placeholder="Nombre o Serial..." autocomplete="off" required="required" class="sbx-google__input" id="autocomplete">
              <div id="suggestions"></div>
              <button type="submit" title="Submit your search query." class="sbx-google__submit" id="search-button">
              <svg role="img" aria-label="Search">
                  <use xlink:href="#sbx-icon-search-13"></use>
              </svg>
              </button>
              <button type="reset" title="Clear the search query." class="sbx-google__reset">
              <svg role="img" aria-label="Reset">
                  <use xlink:href="#sbx-icon-clear-3"></use>
              </svg>
              </button>
          </div>
      </form>

      <div id="dialog" class="modal">
            <div class="modal-dialog modal-dialog-centered" id="modal-editado">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Editar</h5>
                        <button type="button" class="btn-close" aria-label="Close" id="close-button"></button>
                    </div>
                    <div class="modal-body">
                        <agregar-activo></agregar-activo>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" id="submit-dialog">Guardar</button>
                    </div>
                </div>
            </div>
        </div>
      <script type="text/javascript">
          document.querySelector('.searchbox [type="reset"]').addEventListener('click', function() {  this.parentNode.querySelector('input').focus();});
      </script>
      `;
        this.searchButton = this.querySelector('#search-button');

        this.submitButton = this.querySelector("#submit-dialog")
        this.searchBox = this.querySelector('.searchbox [type="reset"]')
        this.closeButton = this.querySelector('#close-button')
        this.suggestions = document.getElementById("suggestions");
        this.data = await duckFetch('products', null, 'GET', null);
        const modalContent = this.querySelector('#dialog .modal-content');

        let offsetX, offsetY;

        modalContent.addEventListener('mousedown', function (e) {
            offsetX = e.clientX - modalContent.getBoundingClientRect().left * 0.1;
            offsetY = e.clientY - modalContent.getBoundingClientRect().top * 0.1;

            function moveModal(e) {
                modalContent.style.left = e.clientX - offsetX + 'px';
                modalContent.style.top = e.clientY - offsetY + 'px';
            }

            function stopMove() {
                document.removeEventListener('mousemove', moveModal);
                document.removeEventListener('mouseup', stopMove);
            }

            document.addEventListener('mousemove', moveModal);
            document.addEventListener('mouseup', stopMove);
        });

    }

    async dialogo() {
        function showDialog() {
            document.getElementById('dialog').style.display = 'flex';
        }

        this.searchButton.addEventListener('click', function () {
            showDialog();
        });

        this.submitButton.addEventListener('click', async () => {
            let input = document.getElementById('autocomplete');
            let producto = await this.getProduct(input.dataset.productId);
            const form = this.querySelector('form.row');

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
                    "estadoId": form[9].value,
                    "DescripcionItem": form[10].value
                }
                const mixData = { ...producto, ...data }

                await duckFetch('products', producto.id, 'PUT', mixData);
                Swal.fire({
                    title: "Active modified!",
                    text: "Brrrrrrrrrrrrrrrrrrrrrr",
                    icon: "success"
                });
            }


        });

        function hideDialog() {
            document.getElementById('dialog').style.display = 'none';
        }

        this.closeButton.addEventListener('click', function () {
            document.getElementById('dialog').style.display = 'none';
        });

    }
    async showAll() {
        const input = this.querySelector("#autocomplete")
        input.addEventListener("click", () => {
            this.suggestions.innerHTML = "";
            this.data.forEach((item) => {
                const li = document.createElement("li");
                li.className = "list-group-item";
                li.textContent = `${item.id} - ${item.DescripcionItem}`
                li.addEventListener("click", () => {
                    input.value = item.DescripcionItem; // Muestra la descripción en el input
                    input.dataset.productId = item.id; // Almacena el ID del producto en un data attribute
                    suggestions.innerHTML = "";
                    this.getProduct(input.dataset.productId).then(producto => this.fillInfoProduct(producto));
                });
                suggestions.appendChild(li);
            });
        });
    }

    async filterSuggestions() {
        const input = document.getElementById("autocomplete")
        input.addEventListener('input', () => {
            if (input.value.length === 0) {
                return;
            }
            this.suggestions.innerHTML = "";
            this.data.forEach(item => {
                let nombreItem = item.DescripcionItem;
                let serial = item.Serial || nombreItem;

                if (nombreItem && item.Serial) {
                    let wordInput = input.value.toLowerCase();
                    if (nombreItem.toLowerCase().includes(wordInput) || serial.toLowerCase().includes(wordInput)) {
                        const li = document.createElement("li");
                        li.className = "list-group-item fixed";
                        li.textContent = `${item.id} - ${item.DescripcionItem}`
                        li.addEventListener("click", () => {
                            input.value = item.DescripcionItem;
                            input.dataset.productId = item.id;
                            suggestions.innerHTML = "";
                            this.getProduct(input.dataset.productId).then(producto => this.fillInfoProduct(producto));
                        });
                        suggestions.appendChild(li);
                    }
                }

            });
        })
    }
    async getProduct(pro) {
        let productoGet = await duckFetch('products', pro, 'GET', null);
        return productoGet
    }

    connectedCallback() {
        this.showDetailProduct();
    }

    async showDetailProduct() {
        await customElements.whenDefined('agregar-activo');
        let agregarActivoComponent = this.querySelector('agregar-activo');
        let parrafo = agregarActivoComponent.querySelector('p')
        if (agregarActivoComponent) {
            let button = agregarActivoComponent.querySelector('button');
            if (button) {
                button.remove();
            }
            if (parrafo) {
                parrafo.remove()
            }
        }
    }

    async fillInfoProduct(producto) {
        let agregarActivoComponent = this.querySelector('agregar-activo');
        let casillas = agregarActivoComponent.querySelectorAll('[id*="validationCustom"]');
        casillas[0].value = producto.CodigoTransaccion || "No especificado"
        casillas[1].value = producto.Formulario || "No especificado"
        let marca = casillas[2]
        let categorySelect = casillas[3];
        let tipoSelect = casillas[4];
        duckFetch('marcas', producto.marcaId, 'GET', null)
            .then(marcaData => {

                marca.value = marcaData.value;
                marca.querySelector(`option[value="${marcaData.id || 0}"]`).selected = true;

            })
        duckFetch('categories', producto.categoryId, 'GET', null)
            .then(categoryData => {
                categorySelect.value = categoryData.value;
                categorySelect.querySelector(`option[value="${categoryData.id || 0}"]`).selected = true;
            });

        duckFetch('tipos', producto.tipoId, 'GET', null)
            .then(tipoData => {
                tipoSelect.value = tipoData.value;

                tipoSelect.querySelector(`option[value="${tipoData.id || 0}"]`).selected = true;
            });

        casillas[5].value = producto.unitValue || 900000
        let proveedor = casillas[6];

        duckFetch('providers', producto.providerId, 'GET', null).then(proveedorData => {
            proveedor.value = proveedorData.value;
            proveedor.querySelector(`option[value="${proveedorData.id || 0}"]`).selected = true;
        })
        casillas[7].value = producto.Serial || "No especificado"
        casillas[8].value = producto.PEmpresa || "No especificado"
        let estado = casillas[9] || "No especificado"

        duckFetch('estados', producto.estadoId, 'GET', null).then(estadoData => {
            estado.value = estadoData.value;
            estado.querySelector(`option[value="${estadoData.id || 0}"]`).selected = true;
        })
        casillas[10].value = producto.DescripcionItem || "No especificado"

    }
}

customElements.define('editar-activo', editarActivo);

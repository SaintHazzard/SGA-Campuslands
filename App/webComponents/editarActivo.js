export class editarActivo extends HTMLElement {
    constructor() {
      super();
      this.render();
      this.dialogo();
    }
  
    render() {
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
              <input type="search" name="search" placeholder="Buscar" autocomplete="off" required="required" class="sbx-google__input">
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
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Editar</h5>
                        <button type="button" class="btn-close" aria-label="Close" id="close-button"></button>
                    </div>
                    <div class="modal-body">
                        Contenido del diálogo
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
    }  
    dialogo(){
        function showDialog() {
            document.getElementById('dialog').style.display = 'block';
        }

        let boton = document.getElementById('search-button');
        boton.addEventListener('click', function() {
            showDialog();
            console.log("Alert")
        });

        document.getElementById('submit-dialog').addEventListener('click', function() {
            alert('Enviar diálogo');
        });
        
        function hideDialog() {
            document.getElementById('dialog').style.display = 'none';
        }

        document.querySelector('.searchbox [type="reset"]').addEventListener('click', function() {  
            hideDialog();
        });

        document.getElementById('close-button').addEventListener('click', function() {
            document.getElementById('dialog').style.display = 'none';
        });

    }
  }
  
  customElements.define('editar-activo', editarActivo);
  
import { duckFetch } from "./Api/duckFetch.js";
import './App/webComponents/sideBar.js'
import './App/webComponents/main.js'
import './App/webComponents/agregarActivo.js'
import './App/webComponents/editarActivo.js'
import './App/webComponents/buscarActivo.js'
import './App/webComponents/eliminarActivo.js'
import './App/webComponents/agregarPersonas.js'
import './App/webComponents/agregarEstados.js'
import './App/webComponents/agregarTipoMovimiento.js'
import './App/webComponents/agregarTipoPersona.js'
import './App/webComponents/agregarTipoActivos.js'

class device {
  constructor(id, CodigoTransaccion, Formulario, PEmpresa = null, FechaCompra, Nit, Proveedor, DescripcionItem, Serial, Categoria, Cantidad, Ubicacion = null) {
    this.id = id || null;
    this.CodigoTransaccion = CodigoTransaccion || null;
    this.Formulario = Formulario || null;
    this.PEmpresa = PEmpresa || null;
    this.FechaCompra = FechaCompra ? new Date(FechaCompra) : null;
    this.Nit = Nit || null;
    this.Proveedor = Proveedor || null;
    this.DescripcionItem = DescripcionItem || null;
    this.Serial = Serial || null;
    this.Categoria = Categoria || null;
    this.Cantidad = Cantidad || null;
    this.Ubicacion = Ubicacion || null;
    this.cardHtml = /*html*/`<div id="dialog" class="modal">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">${this.DescripcionItem}</h5>
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
        </div>`
    this.cardHtml.querySelector(".botonVer").addEventListener('click', this.mostrarInfo);
  }
  mostrarInfo() {
    document.getElementById('modalTitle').textContent = this.nombre;
    document.getElementById('modalDescription').textContent = this.descripcion;
    document.getElementById('modalFecha').textContent = this.fecha
    document.getElementById('myModal').style.display = 'flex';
    document.querySelector(".imgModal").src = this.foto
    document.querySelector('.close').classList.add(`${this.universo}`)
  }
}







// let data = await duckFetch('products', null, 'GET', null);
// let dataObject = {};


// (async () => {
//   function instanciarObjetos() {
//     for (const item of data) {
//       dataObject[item.id] = item;
//     }
//     console.log(dataObject);
//   }
//   await instanciarObjetos(dataObject);
// })();


const navItems = document.querySelectorAll('[class="nav-item"]');

navItems.forEach(li => { li.addEventListener('click', toggleCollapse) });

function toggleCollapse(event) {
  const navItem = event.target.closest('.nav-item');

  if (navItem) {
    const optionContent = navItem.nextElementSibling;
    if (optionContent && optionContent.classList.contains('option-content')) {
      optionContent.style.display = (optionContent.style.display === 'block' || optionContent.style.display === '') ? 'none' : 'block';
    }
  }
}









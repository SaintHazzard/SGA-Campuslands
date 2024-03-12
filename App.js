import { duckFetch } from "./Api/duckFetch.js";
import './App/webComponents/sideBar.js'
import './App/webComponents/main.js'
import './App/webComponents/activos/agregarActivo.js'
import './App/webComponents/activos/editarActivo.js'
import './App/webComponents/activos/buscarActivo.js'
import './App/webComponents/activos/eliminarActivo.js'
import './App/webComponents/agregarPersonas.js'
import './App/webComponents/agregarEstados.js'
import './App/webComponents/agregarTipoMovimiento.js'
import './App/webComponents/agregarTipoPersona.js'
import './App/webComponents/agregarTipoActivos.js'
import './App/webComponents/agregarMarcas.js'
import './App/webComponents/crearAsignacion.js'
import './App/webComponents/asignarActivos.js'
import './App/webComponents/retornarAsignacion.js'
import './App/webComponents/home.js'

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

function hideAllSidebars() {
  const sidebars = document.querySelectorAll('element-sidebar');
  sidebars.forEach(sidebar => {
    sidebar.style.display = 'none';

    sidebar.querySelectorAll('a').forEach(a => a.classList.remove('active'));
  });
}
const navItems = document.querySelectorAll('[class="nav-item"]');

navItems.forEach(li => { li.addEventListener('click', toggleCollapse) });

function toggleCollapse(event) {
  const navItem = event.target.closest('.nav-item');

  if (navItem) {
    const optionContent = navItem.nextElementSibling;
    if (optionContent && optionContent.classList.contains('option-content')) {
      hideAllSidebars();
      optionContent.style.display = (optionContent.style.display === 'block' || optionContent.style.display === '') ? 'none' : 'block';
    }
  }
}









import { duckFetch } from "./Api/duckFetch.js";
import './App/webComponents/sideBar.js'
import './App/webComponents/header.js'
import './App/webComponents/main.js'
import './App/webComponents/agregarActivo.js'
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
  }
}







// let data = await duckFetch('products', 1, 'GET', null);
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
console.log(navItems);

function toggleCollapse(event) {
  const navItem = event.target.closest('.nav-item');

  if (navItem) {
    const optionContent = navItem.nextElementSibling;

    if (optionContent && optionContent.classList.contains('option-content')) {
      optionContent.style.display = (optionContent.style.display === 'block' || optionContent.style.display === '') ? 'none' : 'block';

      const option = document.querySelector('.option');
      option.classList.toggle('expanded');
    }
  }
}

// let arrayProveedores = [...new Set(data.map(item => item.Proveedor).filter(proveedor => proveedor !== undefined))];
// let arrayUbicaciones = [...new Set(data.map(item => item.Ubicacion).filter(Ubicacion => Ubicacion !== undefined))];
// console.log(arrayUbicaciones);






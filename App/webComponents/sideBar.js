import './elementSideBar.js'
import './elementAsignacion.js'
export class sideBar extends HTMLElement {
  constructor() {
    super();
    this.render();
  }
  render() {
    this.innerHTML = /* html */ `
    <div class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark overflow-y-scroll overflow-x-hidden" style="width: 280px; height: 100vh;">
      <a href="../../index.html" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <img src="./source/img/logoWhite.png" alt="Logo" width="240">
        <span class="fs-4"></span>
      </a>
      <hr>
      <ul class="nav nav-pills flex-column mb-auto" id="menu">
        <li class="nav-item" data-component="activos">
          <a href="#" class="nav-link text-white" aria-current="page">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;"><path d="M16.813 4.419A.997.997 0 0 0 16 4H3a1 1 0 0 0-.813 1.581L6.771 12l-4.585 6.419A1 1 0 0 0 3 20h13a.997.997 0 0 0 .813-.419l5-7a.997.997 0 0 0 0-1.162l-5-7zM15.485 18H4.943l3.87-5.419a.997.997 0 0 0 0-1.162L4.943 6h10.542l4.286 6-4.286 6z"></path></svg>           Activos
          </a>
        </li>
        <element-sidebar class="option-content" style="display: none;"></element-sidebar>
        <li class="nav-item" data-component="marcas">
          <a href="#" class="nav-link text-white" aria-current="page">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;"><path d="M16.813 4.419A.997.997 0 0 0 16 4H3a1 1 0 0 0-.813 1.581L6.771 12l-4.585 6.419A1 1 0 0 0 3 20h13a.997.997 0 0 0 .813-.419l5-7a.997.997 0 0 0 0-1.162l-5-7zM15.485 18H4.943l3.87-5.419a.997.997 0 0 0 0-1.162L4.943 6h10.542l4.286 6-4.286 6z"></path></svg>           Marcas
          </a>
        </li>
        <element-sidebar class="option-content" style="display: none;"></element-sidebar>
        <li class="nav-item" data-component="marcas">
          <a href="#" class="nav-link text-white" aria-current="page">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;"><path d="M16.813 4.419A.997.997 0 0 0 16 4H3a1 1 0 0 0-.813 1.581L6.771 12l-4.585 6.419A1 1 0 0 0 3 20h13a.997.997 0 0 0 .813-.419l5-7a.997.997 0 0 0 0-1.162l-5-7zM15.485 18H4.943l3.87-5.419a.997.997 0 0 0 0-1.162L4.943 6h10.542l4.286 6-4.286 6z"></path></svg>           Personas
          </a>
        </li>
        <element-sidebar class="option-content" style="display: none;"></element-sidebar>
        <li class="nav-item" data-component="marcas">
          <a href="#" class="nav-link text-white" aria-current="page">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;"><path d="M16.813 4.419A.997.997 0 0 0 16 4H3a1 1 0 0 0-.813 1.581L6.771 12l-4.585 6.419A1 1 0 0 0 3 20h13a.997.997 0 0 0 .813-.419l5-7a.997.997 0 0 0 0-1.162l-5-7zM15.485 18H4.943l3.87-5.419a.997.997 0 0 0 0-1.162L4.943 6h10.542l4.286 6-4.286 6z"></path></svg>           Estados
          </a>
        </li>
        <element-sidebar class="option-content" style="display: none;"></element-sidebar>
        <li class="nav-item" data-component="marcas">
          <a href="#" class="nav-link text-white" aria-current="page">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;"><path d="M16.813 4.419A.997.997 0 0 0 16 4H3a1 1 0 0 0-.813 1.581L6.771 12l-4.585 6.419A1 1 0 0 0 3 20h13a.997.997 0 0 0 .813-.419l5-7a.997.997 0 0 0 0-1.162l-5-7zM15.485 18H4.943l3.87-5.419a.997.997 0 0 0 0-1.162L4.943 6h10.542l4.286 6-4.286 6z"></path></svg>           Tipo de Personas
          </a>
        </li>
        <element-sidebar class="option-content" style="display: none;"></element-sidebar>
        <li class="nav-item" data-component="marcas">
          <a href="#" class="nav-link text-white" aria-current="page">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;"><path d="M16.813 4.419A.997.997 0 0 0 16 4H3a1 1 0 0 0-.813 1.581L6.771 12l-4.585 6.419A1 1 0 0 0 3 20h13a.997.997 0 0 0 .813-.419l5-7a.997.997 0 0 0 0-1.162l-5-7zM15.485 18H4.943l3.87-5.419a.997.997 0 0 0 0-1.162L4.943 6h10.542l4.286 6-4.286 6z"></path></svg>           Tipo de movimientos
          </a>
        </li>
        <element-sidebar class="option-content" style="display: none;"></element-sidebar>
        <li class="nav-item" data-component="marcas">
          <a href="#" class="nav-link text-white" aria-current="page">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;"><path d="M16.813 4.419A.997.997 0 0 0 16 4H3a1 1 0 0 0-.813 1.581L6.771 12l-4.585 6.419A1 1 0 0 0 3 20h13a.997.997 0 0 0 .813-.419l5-7a.997.997 0 0 0 0-1.162l-5-7zM15.485 18H4.943l3.87-5.419a.997.997 0 0 0 0-1.162L4.943 6h10.542l4.286 6-4.286 6z"></path></svg>          Tipo de activos
          </a>
        </li>
        <element-sidebar class="option-content" style="display: none;"></element-sidebar>
        <li class="nav-item" data-component="marcas">
          <a href="#" class="nav-link text-white" aria-current="page">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;"><path d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm11 4h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6h-4v-4h4v4zM17 3c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zM7 13c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"></path></svg>          Asignaciones
          </a>
        </li>
        <element-asignacion class="option-content" style="display: none;"></element-asignacion>
        
        
      </ul>
      
        
      
      <hr>
      <div class="dropdown">
        <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2">
          <strong>Campuslands</strong>
        </a>
        <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
          <li><a class="dropdown-item" href="#">New project...</a></li>
          <li><a class="dropdown-item" href="#">Settings</a></li>
          <li><a class="dropdown-item" href="#">Profile</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#">Sign out</a></li>
        </ul>
      </div>
  </div>`
    this.callForm()
  }
  connectedCallback() {
    this.render()
  }



  callForm() {
    let options = this.querySelectorAll('.nav-item');
    options.forEach((index) => {
      index.addEventListener('click', () => {
        // Remover la clase 'active' de la etiqueta <side-bar>
        // this.classList.remove('active');

        options.forEach((index) => {
          index.nextElementSibling.style.display = 'none';
          index.querySelector('a').classList.remove('active');
        });
        index.querySelector('a').classList.toggle('active');
      });

      let word = index.querySelector('a').textContent.replace(/\s+/g, '').slice(0, -1);
      let opcionesLi = index.nextElementSibling;
      opcionesLi.querySelectorAll('li').forEach((li) => {
        li.setAttribute('DATA-SET', `${li.textContent.toLocaleLowerCase()}-${word} `.replace(/\s+/g, '').toLocaleLowerCase());
        li.addEventListener('click', () => {
          if (!li.classList.contains('option-content')) {
            this.classList.remove('active');
          }
          document.querySelector('.changeContent').innerHTML = `<${li.getAttribute('DATA-SET')}></${li.getAttribute('DATA-SET')} >`
        });
      });
    });
  }
}


customElements.define('side-bar', sideBar);
import './elementSideBar.js'
export class sideBar extends HTMLElement {
  constructor() {
    super();
    this.render();
  }
  render() {
    this.innerHTML = /* html */ `
    <div class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark overflow-y-scroll" style="width: 280px; height: 100vh;">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <img src="./source/img/logoWhite.png" alt="Logo" width="240">
        <span class="fs-4"></span>
      </a>
      <hr>
      <ul class="nav nav-pills flex-column mb-auto" id="menu">
        <li class="nav-item" data-component="activos">
          <a href="#" class="nav-link text-white" aria-current="page">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;"><path d="M4 22h12v-2H4V8H2v12c0 1.103.897 2 2 2z"></path><path d="M20 2H8c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-2 9h-3v3h-2v-3h-3V9h3V6h2v3h3v2z"></path></svg>Activos
          </a>
        </li>
        <element-sidebar class="option-content" style="display: none;"></element-sidebar>
        <li class="nav-item" data-component="marcas">
          <a href="#" class="nav-link text-white" aria-current="page">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;"><path d="M4 22h12v-2H4V8H2v12c0 1.103.897 2 2 2z"></path><path d="M20 2H8c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-2 9h-3v3h-2v-3h-3V9h3V6h2v3h3v2z"></path></svg>Marcas
          </a>
        </li>
        <element-sidebar class="option-content" style="display: none;"></element-sidebar>
        <li class="nav-item" data-component="marcas">
          <a href="#" class="nav-link text-white" aria-current="page">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;"><path d="M4 22h12v-2H4V8H2v12c0 1.103.897 2 2 2z"></path><path d="M20 2H8c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-2 9h-3v3h-2v-3h-3V9h3V6h2v3h3v2z"></path></svg>Personas
          </a>
        </li>
        <element-sidebar class="option-content" style="display: none;"></element-sidebar>
        <li class="nav-item" data-component="marcas">
          <a href="#" class="nav-link text-white" aria-current="page">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;"><path d="M4 22h12v-2H4V8H2v12c0 1.103.897 2 2 2z"></path><path d="M20 2H8c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-2 9h-3v3h-2v-3h-3V9h3V6h2v3h3v2z"></path></svg>Estados
          </a>
        </li>
        <element-sidebar class="option-content" style="display: none;"></element-sidebar>
        <li class="nav-item" data-component="marcas">
          <a href="#" class="nav-link text-white" aria-current="page">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;"><path d="M4 22h12v-2H4V8H2v12c0 1.103.897 2 2 2z"></path><path d="M20 2H8c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-2 9h-3v3h-2v-3h-3V9h3V6h2v3h3v2z"></path></svg>Tipo de Personas
          </a>
        </li>
        <element-sidebar class="option-content" style="display: none;"></element-sidebar>
        <li class="nav-item" data-component="marcas">
          <a href="#" class="nav-link text-white" aria-current="page">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;"><path d="M4 22h12v-2H4V8H2v12c0 1.103.897 2 2 2z"></path><path d="M20 2H8c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-2 9h-3v3h-2v-3h-3V9h3V6h2v3h3v2z"></path></svg>Tipo de movimientos
          </a>
        </li>
        <element-sidebar class="option-content" style="display: none;"></element-sidebar>
        <li class="nav-item" data-component="marcas">
          <a href="#" class="nav-link text-white" aria-current="page">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;"><path d="M4 22h12v-2H4V8H2v12c0 1.103.897 2 2 2z"></path><path d="M20 2H8c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-2 9h-3v3h-2v-3h-3V9h3V6h2v3h3v2z"></path></svg>Tipo de activos
          </a>
        </li>
        <element-sidebar class="option-content" style="display: none;"></element-sidebar>
        
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
      let word = index.querySelector('a').textContent.replace(/\s+/g, '').slice(0, -1);
      let opcionesLi = index.nextElementSibling;
      opcionesLi.querySelectorAll('li').forEach((li) => {
        li.setAttribute('DATA-SET', `${li.textContent.toLocaleLowerCase()}-${word}`.replace(/\s+/g, '').toLocaleLowerCase());
        li.addEventListener('click', () => {
          document.querySelector('.changeContent').innerHTML = `<${li.getAttribute('DATA-SET')}></${li.getAttribute('DATA-SET')} >`
        })
      })
    })
  }
}


customElements.define('side-bar', sideBar);
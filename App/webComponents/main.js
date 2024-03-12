import { duckFetch } from "../../Api/duckFetch.js";
export class mainContent extends HTMLElement {
  constructor() {
    super();
    this.loadData();
  }

  async render() {
    this.innerHTML += /*html*/`<main class="col-md-9 col-lg-10 px-md-3 changeContent ">
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Dashboard</h1>
        <!--<div class="btn-toolbar mb-2 mb-md-0">
          <div class="btn-group me-2">
            <button type="button" class="btn btn-sm btn-outline-secondary ">Share</button>
            <button type="button" class="btn btn-sm btn-outline-secondary">Export</button>
          </div>
          <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle d-flex align-items-center gap-1">
            <svg class="bi"><use xlink:href="#calendar3"></use></svg>
            This week
          </button>
        </div>-->
      </div>

      <h2>Activos</h2>
      <div class="table-responsive small">
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Descripcion</th>
              <th scope="col">Marca</th>
              <th scope="col">Tipo</th>
              <th scope="col">Estado</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
    </main>`
    const tbody = this.querySelector('tbody');
    tbody.innerHTML = ''
    for (const product of this.dataProduct) {
      try {
        const marca = await duckFetch("marcas", product.marcaId || "0", "GET", null);

        const tipo = await duckFetch("tipos", product.tipoId || "0", "GET", null);
        const categoria = await duckFetch("categories", product.categoryId || "0", "GET", null);
        tbody.innerHTML += /*html*/`
          <tr>
            <td>${product.id}</td>
            <td>${product.DescripcionItem}</td>
            <td>${marca.nombre}</td>
            <td>${tipo.nombre}</td>
            <td>${categoria.nombre}</td>
          </tr>`;
      } catch (error) {
        console.error("Error fetching additional data:", error);
      }
    }
  }


  async loadData() {
    try {
      this.dataProduct = await duckFetch('products', null, 'GET', null);
      this.render();
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }
}

customElements.define('main-content', mainContent)
export class asignarActivo extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
      <buscar-activo></buscar-activo>
      <div class="container mt-3">
        <h2>Asignaciones Creadas</h2>
        <table class="table">
            <thead class="thead-dark">
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Asignaciones</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                <td>Asignacion1</td>
            </tr>
            </tbody>
        </table>
      </div>
    

      `;
  }
}


customElements.define('asignaractivos-asignacione', asignarActivo)
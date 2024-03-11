import { duckFetch, fillOptions, deleteAnything } from '../../../Api/duckFetch.js';

export class BaseEliminar extends HTMLElement {

  deleteAnything(selectId, endpoint) {
    this.querySelector('form').addEventListener('submit', (event) => {
      event.preventDefault();
      if (event.target.checkValidity()) {
        deleteAnything.call(this, endpoint, selectId.value);
      }
    });
    this.chargeData(endpoint);
  }

  async chargeData(endpoint) {
    let selectId = this.querySelector('#validationCustom01')
    fillOptions(endpoint, selectId);
    selectId.addEventListener('change', async () => {
      const selectedValue = selectId.value;
      if (selectedValue) {
        const data = await duckFetch(endpoint, selectedValue, 'GET', null);
        this.querySelector('#validationCustom02').value = data.id;
        this.querySelector('#validationCustom03').value = data.nombre;
        let casillas = this.querySelectorAll('[id*="validationCustom"]');
        for (let i = 1; i < casillas.length; i++) {
          casillas[i].disabled = true;
        }
      }
    });
  }
}
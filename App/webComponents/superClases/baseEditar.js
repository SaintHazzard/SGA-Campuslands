
import { duckFetch, fillOptions, editSomething } from '../../../Api/duckFetch.js';


export default class baseEditar extends HTMLElement {
  editAnything(selectId, endpoint) {
    this.querySelector('form').addEventListener('submit', (event) => {
      event.preventDefault();
      if (event.target.checkValidity()) {
        editSomething.call(this, endpoint, selectId.value);
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
        this.querySelector('#validationCustom01').value = data.id;
        this.querySelector('#validationCustom02').value = data.nombre;
      }
    });
  }
}

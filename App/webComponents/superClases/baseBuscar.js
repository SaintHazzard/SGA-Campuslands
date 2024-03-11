
import { duckFetch, fillOptions } from '../../../Api/duckFetch.js';

export default class baseBuscar extends HTMLElement {
  async chargeData(endPoint) {
    let selectId = this.querySelector('#validationCustom01')
    fillOptions(endPoint, selectId);
    selectId.addEventListener('change', async () => {
      const selectedValue = selectId.value;
      if (selectedValue) {
        const data = await duckFetch(endPoint, selectedValue, 'GET', null);
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
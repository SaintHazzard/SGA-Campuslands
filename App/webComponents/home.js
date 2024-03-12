export class home extends HTMLElement{
    constructor(){
        super();
        this.render();
    }
    render(){
        this.innerHTML = /* html */ `
        <main class="main-container">
            <div class="image-container">
                <img src="source/img/OIG3.png" alt="Imagen" class="img-fluid">
            </div>
        </main>
        `;
    }
}
customElements.define('home-element', home)
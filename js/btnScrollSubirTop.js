export class ScrollTop{
    constructor(){
        this.btnUp = document.querySelector('.subir-scroll')
        console.log(this.btnUp)
        
        this.btnUp.addEventListener('click', this.subir.bind(this))
    }
    subir(oE) {
        window.scroll({
            top: 0,
            left: 0,
        })
    }
}
//TODO 
//ocultar y mostrar when is up and down
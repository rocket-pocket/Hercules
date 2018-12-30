export class headerScroll{
    constructor(){
        window.addEventListener('scroll', this.headerUp.bind(this))
        this.header = document.querySelector('.initial-header')
    }
    headerUp(){
        if(pageYOffset > 250){
            console.log('hola desde el scroll header')
            this.header.classList.remove('initial-header')
            this.header.classList.add('sticky-header')
        }else{
            this.header.classList.add('initial-header')
            this.header.classList.remove('sticky-header')
        }
    }
}
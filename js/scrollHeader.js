export class headerScroll{
    constructor(){
        window.addEventListener('scroll', this.headerUp.bind(this))
        this.header = document.querySelector('.initial-header')
        this.UserNameForStickyHeader = document.querySelector('.sticky-header-user-name')
    }
    headerUp(){
        if(pageYOffset > 250){
            console.log('hola desde el scroll header')
            this.header.classList.remove('initial-header')
            this.header.classList.add('sticky-header')
            this.UserNameForStickyHeader.innerHTML = 'Daniel'
        }else{
            this.UserNameForStickyHeader.innerHTML = ''
            this.header.classList.add('initial-header')
            this.header.classList.remove('sticky-header')
        }
    }
}
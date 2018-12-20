export class Main{
    constructor(){
        this.btnComenzar = document.querySelector('.btn-comenzar')
        this.LoginSection = document.querySelector('.login-wrapper-hide')

        this.btnComenzar.addEventListener('click', this.mostrarLoginSection.bind(this))
    }

    mostrarLoginSection(){
        this.LoginSection.classList.toggle('login-wrapper-hide')
        this.btnComenzar.innerHTML = "Lets go!"
    }
}
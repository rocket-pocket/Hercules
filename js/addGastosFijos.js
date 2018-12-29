export class addGastosFijos{
    constructor(){
        this.btnMostrarGastosFijos = document.querySelector('.btn-show-gastos-fijos')
        this.addGastosFijosSeccionOculta = document.querySelector('.hide-add-gastos-fijos')
        this.containerAddGastosFijos = document.querySelector('.wrapper-add-gastos-fijos')

        this.btnMostrarGastosFijos.addEventListener('click', this.mostrarSeccionGastosFijos.bind(this))
    }
    mostrarSeccionGastosFijos(){
        let mensaje = 'Añade un gasto fijo'
        this.addGastosFijosSeccionOculta.classList.toggle('hide-add-gastos-fijos')
        this.btnMostrarGastosFijos.classList.remove('btn-show-gastos-fijos')
        this.btnMostrarGastosFijos.classList.add('hide-btn-show-gastos-fijos')
        this.containerAddGastosFijos.innerHTML = `<p class="p-msn-gasto-fijo">${mensaje}</p>`
    }
}
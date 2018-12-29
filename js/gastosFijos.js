import { addGastosFijos } from "./addGastosFijos.js";
export class gastosFijos{
    constructor(){
        this.aInputGastosFijos = document.querySelectorAll('.uno input')
        this.btnSumarTotal = document.querySelector('.btn-sumar-total')
        this.outputResultado = document.querySelector('.resultado')
        this.aBtnBorrarGastoFijo = document.querySelectorAll('.btn-borrar')
        this.aCampoGastoFijo = document.querySelectorAll('.delete-gasto-fijo')
console.log(this.outputResultado)
        this.btnSumarTotal.addEventListener('click', this.sumarTotalGastosFijos.bind(this))

        for (let index = 0; index < this.aBtnBorrarGastoFijo.length; index++) {
            this.aBtnBorrarGastoFijo[index].addEventListener('click', this.borrarGastoFijo.bind(this))
        }
        console.log(this.aBtnBorrarGastoFijo)
    }
    sumarTotalGastosFijos() {
        let total = 0;
            for (let i = 0; i < this.aInputGastosFijos.length; ++i) {
                if (!isNaN(parseInt(this.aInputGastosFijos[i].value)))
                    total += parseFloat(this.aInputGastosFijos[i].value);
            }
            let totalizar = this.outputResultado.value = total
            this.outputResultado.innerHTML = `<p class= "p-total">El total de tus gastos es: ${totalizar}€ </p>`
            console.log(totalizar)         
    }
    borrarGastoFijo(){
        for (let index = 0; index < this.aCampoGastoFijo.length; index++) {
            /* const element = array[index]; */
                        
        }
    }
    
    
}
new addGastosFijos()


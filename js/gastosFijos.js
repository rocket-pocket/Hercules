export class gastosFijos{
    constructor(){
        this.aInputGastosFijos = document.querySelectorAll('.uno input')
        this.btnSumarTotal = document.querySelector('.btn-sumar-total')
        this.outputResultado = document.querySelector('.resultado')
console.log(this.outputResultado)
        this.btnSumarTotal.addEventListener('click', this.sumarTotalInputs.bind(this))
    }
    sumarTotalInputs(){
        let values = []
        for (let i = 0; i < this.aInputGastosFijos.length; i++) {
            /* const element = array[i]; */
            values.push(this.aInputGastosFijos[i].value)           
        }  
        console.log(values)
        let resultado = values
        this.outputResultado.innerHTML = `<p>El resultado es: </p> ${resultado}`      
       
    }
    
}


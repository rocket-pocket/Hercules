/* import { JSON } from './config.js' */

export class Apps {
    constructor () {
        this.aBotones = document.querySelector('#btn-json')
        this.ndOutput = document.querySelector('.newone')
        
        this.aBotones.addEventListener('click', this.pedirDatos.bind(this))
        console.log('hola desde el JSON')
    }

    pedirDatos(oEv) {
        let JSON = 'datos.json'
        console.log('has hecho click')
       
                fetch(JSON, {method: 'GET'}).then(
                    (response) => { return response.json()}
                ).then(
                    (data) => {this.mostrarDatos(data)}
                )
               
    } 

    mostrarDatos(oDatos) {
        let html
        html = '<input>'
        for (const key in oDatos) {
            if (oDatos.hasOwnProperty(key)) {
                const value = oDatos[key];
                html += `<li>${key} : ${value}</li>`    
            }
        }
        html += '<input>'
        this.ndOutput.innerHTML = html
    }

}
export class OtrosGastos{
    constructor(){
        this.btnMostrarGastosFijos = document.querySelector('.btn-show-gastos-fijos')
        this.addGastosFijosSeccionOculta = document.querySelector('.hide-add-gastos-fijos')
        this.containerAddGastosFijos = document.querySelector('.wrapper-add-lista-otros-gastos')

        /* ********** */
        this.ulListaAddTareas = document.querySelector('#lista-otros-gastos')
        this.inputAddProducto = document.querySelector('#input-producto')
        this.inputAddCantidad = document.querySelector('#input-cantidad')
        
        this.btnAddOtrosGastos = document.querySelector('.btn-add-otros-gastos')
        /* *********** */

        this.outputMnsNovalueOtrosGastos = document.querySelector('.output-no-value-otros-gastos')

        //Handler
        this.btnAddOtrosGastos.addEventListener('click', this.addOtrosGastos.bind(this))
    }
    addOtrosGastos(){

        if(this.inputAddCantidad.value == '' || this.inputAddProducto.value == ''){
            let mensajeNoValue = 'Introduce un producto y una cantidad'
            console.log('Introduce un producto y una cantidad')
            this.outputMnsNovalueOtrosGastos.innerHTML = `<p class="p-output-no-value">${mensajeNoValue}</p>`
            console.log(this.outputMnsNovalueOtrosGastos)

        }else{

        this.outputMnsNovalueOtrosGastos.innerHTML = ''
        let oOtrosGastos = {
            nombreProducto : '',
            cantidadProducto : ''
        }
        oOtrosGastos.nombreProducto = this.inputAddProducto.value
        oOtrosGastos.cantidadProducto = this.inputAddCantidad.value 

        //crear Elemento Producto
        this.ulListaAddTareas
        this.inputAddProducto.value
        let nuevaTarea = document.createElement("li")
        let enlace = document.createElement("a")
        enlace.className = 'enlace1'
        let contenido = document.createTextNode(`Concepto: ${oOtrosGastos.nombreProducto}`)
        enlace.appendChild(contenido)

        ////crear Elemento Cantidad
        this.inputAddCantidad.value
        let enlace2 = document.createElement('a')
        enlace2.className = 'enlace2'
        let contenidoCantidad = document.createTextNode(`Cantidad: ${oOtrosGastos.cantidadProducto} €`)
        enlace2.appendChild(contenidoCantidad)
        /* ******************* */

        ////crear Elemento Botón borrar
        let btnBorrarGastoFijo = document.createElement("button")
        btnBorrarGastoFijo.className = 'btn btn-primary boton-borrar' 
        btnBorrarGastoFijo.setAttribute('type', 'button')
        let mnsBtnBorrarGastoFijo = document.createTextNode('Borrar')
        btnBorrarGastoFijo.appendChild(mnsBtnBorrarGastoFijo)
        /* ******************* */

        this.ulListaAddTareas.appendChild(nuevaTarea);
        /* ******************* */

        this.inputAddCantidad.value = ''
        this.inputAddProducto.value = ''
            for (let i = 0; i <= this.ulListaAddTareas.children.length - 1; i++) {
                nuevaTarea.appendChild(enlace), nuevaTarea.appendChild(enlace2), nuevaTarea.appendChild(btnBorrarGastoFijo)
                this.ulListaAddTareas.children[i].addEventListener("click", function() {
                    this.parentNode.removeChild(this)
                })
            }
        }
    }
}
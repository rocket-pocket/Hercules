export class OtrosGastos{
    constructor(){
        this.btnMostrarGastosFijos = document.querySelector('.btn-show-gastos-fijos')
        this.addGastosFijosSeccionOculta = document.querySelector('.hide-add-gastos-fijos')
        this.containerAddGastosFijos = document.querySelector('.wrapper-add-gastos-fijos')

        /* ********** */
        this.ulListaAddTareas = document.querySelector('#lista-otros-gastos')
        this.inputAddProducto = document.querySelector('#input-producto')
        this.inputAddCantidad = document.querySelector('#input-cantidad')
        
        this.btnAddOtrosGastos = document.querySelector('.btn-add-otros-gastos')
        this.btnBorrarGastoFijo = document.querySelector('.btn-borrar-otros-gastos')
        /* *********** */

        /* this.btnMostrarGastosFijos.addEventListener('click', this.mostrarSeccionGastosFijos.bind(this)) */

        this.btnAddOtrosGastos.addEventListener('click', this.addOtrosGastos.bind(this))
    }
    addOtrosGastos(){
        //crear Elemento Producto
        this.ulListaAddTareas
        this.inputAddProducto.value
        let tarea = this.inputAddProducto.value
        let nuevaTarea = document.createElement("li")
        let enlace = document.createElement("a")
        let contenido = document.createTextNode(tarea)

        ////crear Elemento Cantidad
        this.inputAddCantidad.value
        let tarea2 = this.inputAddCantidad.value
        let enlace2 = document.createElement('a')
        let contenidoCantidad = document.createTextNode(tarea2)

        enlace2.appendChild(contenidoCantidad)
        /* ******************* */

        enlace.appendChild(contenido)
        this.ulListaAddTareas.appendChild(nuevaTarea);
        /* ******************* */

        ////crear Elemento Botón Guardar
        let btnGuardarGastoFijo = document.createElement("button")
        btnGuardarGastoFijo.className = 'boton-guardar' 
        let mnsBtnGuardarGastoFijo = document.createTextNode('Guardar')
        btnGuardarGastoFijo.appendChild(mnsBtnGuardarGastoFijo)
        /* ******************* */

        ////crear Elemento Botón borrar
        let btnBorrarGastoFijo = document.createElement("button")
        btnBorrarGastoFijo.className = 'boton-borrar' 
        let mnsBtnBorrarGastoFijo = document.createTextNode('Borrar')
        btnBorrarGastoFijo.appendChild(mnsBtnBorrarGastoFijo)
        /* ******************* */

        if(this.inputAddCantidad.value == '' || this.inputAddProducto.value == ''){
            /* let mensaje = 'Introduce un producto y una cantidad'
            let pMnsInputVacio = document.createElement('p')
            let mensajeInputVacio = document.createTextNode(mensaje)
            this.ulListaAddTareas.appendChild(mensajeInputVacio)
            nuevaTarea.appendChild(pMnsInputVacio) */
            console.log('Introduce un producto y una cantidad')

        }else{
            /* this.inputAddCantidad.value = ''
            this.inputAddProducto.value = '' */
            for (let i = 0; i <= this.ulListaAddTareas.children.length -1; i++) {
                nuevaTarea.appendChild(enlace), nuevaTarea.appendChild(enlace2), nuevaTarea.appendChild(btnGuardarGastoFijo), nuevaTarea.appendChild(btnBorrarGastoFijo)
                    /* this.ulListaAddTareas.children[i].addEventListener("click", function(){
                    this.parentNode.removeChild(this); */
                    /* this.ulListaAddTareas.children[i].addEventListener('click', this.hola.bind(this)) */                
            }
        }
        this.btnGuardarGastoFijo = document.querySelectorAll('.boton-guardar')
        for (let i = 0; i < this.btnGuardarGastoFijo.length; i++) {
            /* const element = array[i]; */
            this.btnGuardarGastoFijo[i].addEventListener('click', this.guardarGasto.bind(this))
            
        }
    }
    guardarGasto(){        
        let oOtrosGastos = {
            nombreProducto : '',
            cantidadProducto : ''
        }
        oOtrosGastos.nombreProducto = this.inputAddProducto.value
        oOtrosGastos.cantidadProducto = this.inputAddCantidad.value

        console.log('hola ya')
        window.localStorage.setItem('Otros gastos',oOtrosGastos)
        window.localStorage.getItem('otros gastos')
        console.log(oOtrosGastos)
    }
}
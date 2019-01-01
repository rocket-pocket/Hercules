export class addGastosFijos{
    constructor(){
        this.btnMostrarGastosFijos = document.querySelector('.btn-show-gastos-fijos')
        this.addGastosFijosSeccionOculta = document.querySelector('.hide-add-gastos-fijos')
        this.containerAddGastosFijos = document.querySelector('.wrapper-add-gastos-fijos')

        this.ulListaAddTareas = document.querySelector('#lista')
        this.inputAddProducto = document.querySelector('#input-add-producto-gasto-fijo')
        this.inputAddCantidad = document.querySelector('#input-add-cantidad-gasto-fijo')
        
        this.btnAddGastoFijo = document.querySelector('.btn-add-gastos-fijos')
        this.btnBorrarGastoFijo = document.querySelector('.btn-borrar-gastos-fijos')

        this.btnMostrarGastosFijos.addEventListener('click', this.mostrarSeccionGastosFijos.bind(this))

        this.btnAddGastoFijo.addEventListener('click', this.addGastosFijo.bind(this))
    }
    mostrarSeccionGastosFijos(){
        let mensaje = 'Añade un gasto fijo'
        this.addGastosFijosSeccionOculta.classList.toggle('hide-add-gastos-fijos')
        this.btnMostrarGastosFijos.classList.remove('btn-show-gastos-fijos')
        this.btnMostrarGastosFijos.classList.add('hide-btn-show-gastos-fijos')
        this.containerAddGastosFijos.innerHTML = `<p class="p-msn-gasto-fijo">${mensaje}</p>`
    }
    addGastosFijo(){
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


        for (let i = 0; i <= this.ulListaAddTareas.children.length -1; i++) {
            nuevaTarea.appendChild(enlace), nuevaTarea.appendChild(enlace2), nuevaTarea.appendChild(btnGuardarGastoFijo), nuevaTarea.appendChild(btnBorrarGastoFijo)
                /* this.ulListaAddTareas.children[i].addEventListener("click", function(){
                this.parentNode.removeChild(this); */
                this.ulListaAddTareas.children[i].addEventListener('click', this.hola.bind(this))
            
        }
    }
    hola(){
        console.log('hola desde el click')
    }    
}
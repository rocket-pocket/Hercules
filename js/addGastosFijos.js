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

        this.newGuardarGastoFijo = document.querySelector('.nuevo-gasto-fijo-guardado')

        /* TODO importar desde otros gastos */
        this.outputMnsNovalueOtrosGastos = document.querySelector('.output-no-value')
        /*  */

        this.btnMostrarGastosFijos.addEventListener('click', this.mostrarSeccionGastosFijos.bind(this))

        this.btnAddGastoFijo.addEventListener('click', this.addGastosFijo.bind(this))
    }
    mostrarSeccionGastosFijos(){
        this.addGastosFijosSeccionOculta.classList.toggle('hide-add-gastos-fijos')
        this.btnMostrarGastosFijos.classList.remove('btn-show-gastos-fijos')
        this.btnMostrarGastosFijos.classList.add('hide-btn-show-gastos-fijos')
    }
    addGastosFijo(){
        if(this.inputAddCantidad.value == '' || this.inputAddProducto.value == ''){
            /* let mensaje = 'Añade un gasto fijo'
            this.containerAddGastosFijos.innerHTML = `<p class="p-msn-gasto-fijo">${mensaje}</p>` */
            let mensajeNoValue = 'Introduce un producto y una cantidad'
            this.outputMnsNovalueOtrosGastos.innerHTML = `<p class ="p-output-no-value">${mensajeNoValue}</p>`
        }else{

            this.outputMnsNovalueOtrosGastos.innerHTML = ''
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

        nuevaTarea.appendChild(enlace), nuevaTarea.appendChild(enlace2), nuevaTarea.appendChild(btnGuardarGastoFijo), nuevaTarea.appendChild(btnBorrarGastoFijo)

        btnGuardarGastoFijo.addEventListener('click', this.guardarGastoFijo.bind(this))

        //TODO
        //btnBorrarGastoFijo.addEventListener('click', this.borrarGastoFijo.bind(this))

        //for (let i = 0; i <= this.ulListaAddTareas.children.length -1; i++) {
            //nuevaTarea.appendChild(enlace), nuevaTarea.appendChild(enlace2), nuevaTarea.appendChild(btnGuardarGastoFijo), nuevaTarea.appendChild(btnBorrarGastoFijo)
                /* this.ulListaAddTareas.children[i].addEventListener("click", function(){
                this.parentNode.removeChild(this); */

                //TO REVIEW
                /* btnGuardarGastoFijo.addEventListener('click', this.guardarGastoFijo.bind(this))
                console.log(this.ulListaAddTareas) */
            
        //}

        }
    }
    guardarGastoFijo(nuevaTarea){
        /* this.listaOtrosGastosGuardados = document.querySelector('#lista-otros-gastos-guardados') */ 
        this.newGuardarGastoFijo     
        let oOtrosGastos = {
            nombreProducto : '',
            cantidadProducto : ''
        }
        oOtrosGastos.nombreProducto = this.inputAddProducto.value
        oOtrosGastos.cantidadProducto = this.inputAddCantidad.value



        let gastoGuardado = document.createElement('div')
        gastoGuardado.className = 'form-group col-6 offset-3 delete-gasto-fijo newGastoFijoCreated'

        let labelGastosGuardados = document.createElement('label')
        let mnsLabelGastosGuardados = document.createTextNode(oOtrosGastos.nombreProducto)
        labelGastosGuardados.appendChild(mnsLabelGastosGuardados)
        labelGastosGuardados.className = 'first-label'
        labelGastosGuardados.setAttribute('for', `input-${oOtrosGastos.nombreProducto}`)

        let inputCantidadGastoGuardado = document.createElement('input')
        let mnsInputCantidadGastoGuardado = document.createTextNode(oOtrosGastos.cantidadProducto)
        inputCantidadGastoGuardado.appendChild(mnsInputCantidadGastoGuardado)
        inputCantidadGastoGuardado.className = 'form-control'
        inputCantidadGastoGuardado.id = `input-${oOtrosGastos.nombreProducto}`
        inputCantidadGastoGuardado.setAttribute('placeholder', `${oOtrosGastos.cantidadProducto} €`)
        inputCantidadGastoGuardado.setAttribute('name', `input-${oOtrosGastos.nombreProducto}`)
        inputCantidadGastoGuardado.setAttribute('type' , 'text')

        let btnDeleteGastoGuardado = document.createElement('button')
        let mnsBtnDeleteGastoGuardado = document.createTextNode('Borrar')
        btnDeleteGastoGuardado.appendChild(mnsBtnDeleteGastoGuardado)
        btnDeleteGastoGuardado.classList = 'btn btn-primary btn-borrar'
        btnDeleteGastoGuardado.setAttribute('type', 'button')

        gastoGuardado.appendChild(labelGastosGuardados)
        gastoGuardado.appendChild(inputCantidadGastoGuardado)
        gastoGuardado.appendChild(btnDeleteGastoGuardado)

        this.newGuardarGastoFijo.appendChild(gastoGuardado)


        /* console.log('hola ya')
        window.localStorage.setItem('Otros gastos',oOtrosGastos)
        window.localStorage.getItem('otros gastos')
        console.log(oOtrosGastos) */
    }   
}
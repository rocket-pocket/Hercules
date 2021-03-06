export class addGastosFijos{
    constructor(){

        //elementos del DOM
        this.btnMostrarGastosFijos = document.querySelector('.btn-show-gastos-fijos')
        this.addGastosFijosSeccionOculta = document.querySelector('.hide-add-gastos-fijos')
        this.containerAddGastosFijos = document.querySelector('.wrapper-add-gastos-fijos')

        this.ulListaAddTareas = document.querySelector('#lista')
        this.inputAddProducto = document.querySelector('#input-add-producto-gasto-fijo')
        this.inputAddCantidad = document.querySelector('#input-add-cantidad-gasto-fijo')
        
        this.btnAddGastoFijo = document.querySelector('.btn-add-gastos-fijos')
        this.btnBorrarGastoFijo = document.querySelector('.btn-borrar-gastos-fijos')

        this.newGuardarGastoFijo = document.querySelectorAll('.nuevo-gasto-fijo-guardado')

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

            /* borrar datos cuando pulsas GUARDAR */
            for (let i = 0; i <= this.ulListaAddTareas.children.length - 1; i++){
                nuevaTarea.appendChild(enlace), nuevaTarea.appendChild(enlace2), nuevaTarea.appendChild(btnGuardarGastoFijo), nuevaTarea.appendChild(btnBorrarGastoFijo)
                btnGuardarGastoFijo.addEventListener('click', function(){
                    this.parentNode.remove()
                })
            }
            for (let i = 0; i <= this.ulListaAddTareas.children.length - 1; i++){
                nuevaTarea.appendChild(enlace), nuevaTarea.appendChild(enlace2), nuevaTarea.appendChild(btnGuardarGastoFijo), nuevaTarea.appendChild(btnBorrarGastoFijo)
                btnBorrarGastoFijo.addEventListener('click', function(){
                    this.parentNode.remove()
                })
            }             

            btnGuardarGastoFijo.addEventListener('click', this.guardarGastoFijo.bind(this))
            btnBorrarGastoFijo.addEventListener('click', this.limpiarInputsFields.bind(this))            
            
        }
    }
    guardarGastoFijo(){
        let newLista = []
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
        inputCantidadGastoGuardado.setAttribute('type', 'text')

        let btnDeleteGastoGuardado = document.createElement('button')
        let mnsBtnDeleteGastoGuardado = document.createTextNode('Borrar')
        btnDeleteGastoGuardado.appendChild(mnsBtnDeleteGastoGuardado)
        btnDeleteGastoGuardado.classList = 'btn btn-primary btn-borrar'
        btnDeleteGastoGuardado.setAttribute('type', 'button')

        gastoGuardado.appendChild(labelGastosGuardados)
        gastoGuardado.appendChild(inputCantidadGastoGuardado)
        gastoGuardado.appendChild(btnDeleteGastoGuardado)

        for (let index = 0; index < this.newGuardarGastoFijo.length; index++) {
            const element = this.newGuardarGastoFijo[index]
            element.appendChild(gastoGuardado)           
            
        }

        //crear array de NodeList nuevos GAstos Fijos despues de pulsar boton guardar
        this.nuevoListaGastosFijos = document.querySelectorAll('.newGastoFijoCreated')
        console.log('nuevalista', this.nuevoListaGastosFijos)
        newLista.push(this.nuevoListaGastosFijos)
        console.log('array nueva lista', newLista) 

        this.inputAddProducto.value = ''
        this.inputAddCantidad.value = ''
    }
    limpiarInputsFields(){
        alert('¿seguro que deseas borrar?')
        this.inputAddProducto.value = ''
        this.inputAddCantidad.value = ''
    }  
    
}


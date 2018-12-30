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
        let lista = this.ulListaAddTareas
        this.inputAddProducto.value
        let tarea = this.inputAddCantidad.value
        this.nuevaTarea = document.createElement("li"),
                this.enlace = document.createElement("a"),
                this.contenido = document.createTextNode(tarea);

                this.enlace.appendChild(this.contenido);
                lista.appendChild(this.nuevaTarea);

                for (var i = 0; i <= lista.children.length -1; i++) {
                    lista.children[i].addEventListener("click", function(){
                        this.parentNode.removeChild(this);
                    });
                }
    }
    
}
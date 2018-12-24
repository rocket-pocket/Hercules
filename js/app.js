
export class Main{
    constructor(){
        //comienzo
        this.btnComenzar = document.querySelector('.btn-comenzar')
        this.LoginSection = document.querySelector('.login-wrapper-hide')
        this.pComenzar = document.querySelector('.p-empezamos')
        //login-wrapper
        this.UserPic = document.querySelector('.user-pic')
        this.inptUser = document.querySelector('#input-user')
        this.inptUser.value
        this.inptPassw = document.querySelector('#input-password')
        this.inptPassw.value
        this.btnLogIn = document.getElementById('btn-login')
        this.sectionUno = document.querySelector('.uno')
        window.localStorage.setItem('user1', 'daniel')
        window.localStorage.setItem('user2', 'mofli')
        window.localStorage.setItem('pass1', 'Navidad1')
        window.localStorage.setItem('pass2', 'Chuchi22')
        this.userUno = localStorage.getItem('user1')
        this.userDos = localStorage.getItem('user2')
        this.passUno = localStorage.getItem('pass1')
        this.passDos = localStorage.getItem('pass2')
        this.usuarioUnoOk = this.userUno + this.passUno
        this.msgLogin = document.querySelector('.msg-login')
        this.mainSectionOculta = document.querySelector('.main-sections')
        //Seccion uno
        this.AInputsGastosFijos = document.querySelectorAll('.uno input')
        console.log(this.AInputsGastosFijos)
        console.log('seccion uno')
        this.aBtnGastosFijos = document.querySelectorAll('.uno button') 
        this.sumarTotal = document.querySelector('.btn-sumar-total')
        //comienzo
        this.btnComenzar.addEventListener('click', this.mostrarLoginSection.bind(this))
        //login-wrapper
        this.btnLogIn.addEventListener('click', this.logIn.bind(this))
        //seccion uno
        this.sumarTotal.addEventListener('click', this.sumarResultadoTotal.bind(this))
    }
    sumarResultadoTotal(AInputsGastosFijos){
        /* this.AInputsGastosFijos.value */
        let name = []
        for (let index = 0; index < this.AInputsGastosFijos.length; index++) {
            /* let element = this.AInputsGastosFijos[index];  */
            name.push(this.AInputsGastosFijos[index].value)
            console.log('esta es el name:', name)    
        }
        let suma = name.toString()
        /* element */
        console.log('esta es la suma:', suma)
    }
    mostrarLoginSection(){
        this.LoginSection.classList.toggle('login-wrapper-hide')
        this.btnComenzar.classList.add('btn-comenzar-hide') 
        this.btnComenzar.classList.remove('btn-comenzar')
        this.pComenzar.innerHTML = 'Introduce usuario y contraseña'  
        this.UserPic.innerHTML = '<div class="UnknoUser"></div>' 
    }
    logIn(){
        let mensageUserDosSuccess = 'Hola Cornelia!'
        let mensageUserUnoSuccess = 'Hola Daniel!'
        let mensageUserDosWarning = 'Introduce usuario y contraseña'
        let mensageUserDosWrong = 'Error de usuario o password'
        if(this.inptUser.value === this.userUno && this.inptPassw.value === this.passUno){
            this.msgLogin.classList.add('msg-succes')
            this.msgLogin.classList.remove('msg-login')
            this.msgLogin.classList.remove('msg-wrong')
            this.msgLogin.classList.remove('msg-warning')
            this.msgLogin.innerHTML = mensageUserUnoSuccess
            console.log('enhorabuena Daniel')
            this.UserPic.innerHTML = '<div class= "user-pic-uno"></div>'
            this.mainSectionOculta.classList.toggle('main-sections')
            this.inptUser.value = ''
            this.inptPassw.value = ''
        }else if(this.inptUser.value === this.userDos && this.inptPassw.value === this.passDos){
            /* let succesLoginDos = document.createElement('p')
            succesLoginDos.innerHTML = mensageUserDos
            document.body.appendChild(succesLoginDos) */
            this.msgLogin.classList.add('msg-succes')
            this.msgLogin.classList.remove('msg-login')
            this.msgLogin.classList.remove('msg-wrong')
            this.msgLogin.classList.remove('msg-warning')
            this.msgLogin.innerHTML = mensageUserDosSuccess     

            console.log('enhorabuena Cornelia')
            this.UserPic.innerHTML = '<div class= "user-pic-dos"></div>'
            this.mainSectionOculta.classList.toggle('main-sections')
            this.inptUser.value = ''
            this.inptPassw.value = ''
        }else if(this.inptUser.value == '' || this.inptPassw == ''){
            this.msgLogin.classList.remove('msg-succes')
            this.msgLogin.classList.remove('msg-login')
            this.msgLogin.classList.remove('msg-wrong')
            this.msgLogin.classList.add('msg-warning')
            this.msgLogin.innerHTML = mensageUserDosWarning
            console.log('Por favor introduce usuario y contraseña')
        }else{
            this.msgLogin.classList.remove('msg-succes')
            this.msgLogin.classList.remove('msg-login')
            this.msgLogin.classList.add('msg-wrong')
            this.msgLogin.classList.remove('msg-warning')
            this.msgLogin.innerHTML = mensageUserDosWrong
            console.log('error de usuario o password incorrecto')
        }
    }
    
}





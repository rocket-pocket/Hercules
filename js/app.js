export class Main{
    constructor(){
        //comienzo
        this.btnComenzar = document.querySelector('.btn-comenzar')
        this.LoginSection = document.querySelector('.login-wrapper-hide')
        //login-wrapper
        this.UserPic = document.querySelector('.user-pic')
        this.inptUser = document.querySelector('#input-user')
        this.inptUser.value
        this.inptPassw = document.querySelector('#input-password')
        this.inptPassw.value
        this.btnLogIn = document.getElementById('btn-login')
        this.sectionUno = document.querySelector('.uno')
        window.localStorage.setItem('user1', 'daniel')
        window.localStorage.setItem('user2', 'cory')
        window.localStorage.setItem('pass1', 'Navidad1')
        window.localStorage.setItem('pass2', 'Chuchi22')
        this.userUno = localStorage.getItem('user1')
        this.userDos = localStorage.getItem('user2')
        this.passUno = localStorage.getItem('pass1')
        this.passDos = localStorage.getItem('pass2')
        this.usuarioUnoOk = this.userUno + this.passUno
        this.msgLogin = document.querySelector('.msg-login')
        //comienzo
        this.btnComenzar.addEventListener('click', this.mostrarLoginSection.bind(this))
        //login-wrapper
        this.btnLogIn.addEventListener('click', this.logIn.bind(this))
    }
    mostrarLoginSection(){
        this.LoginSection.classList.toggle('login-wrapper-hide')        
    }
    logIn(){
        let mensageUserDosSucces = 'Hola Cornelia!'
        let mensageUserDosWarning = 'Introduce usuario y contraseña'
        let mensageUserDosWrong = 'Error de usuario o password'
        if(this.inptUser.value === this.userUno && this.inptPassw.value === this.passUno){
            console.log('enhorabuena Daniel')
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
            this.msgLogin.innerHTML = mensageUserDosSucces     

            console.log('enhorabuena Cornelia')
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


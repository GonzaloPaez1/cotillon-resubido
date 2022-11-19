const register = document.querySelector(".register"),
    email = document.querySelector("#email"),
    username = document.querySelector("#username"),
    password = document.querySelector("#password"),
    btnRegistrar = document.querySelector("#registrar"),
    checkBox = document.getElementById("checkBox"),
    aviso = document.getElementById("aviso"),
    password2 = document.getElementById("password2"),
    avisoUsername = document.getElementById("avisoUsername"),
    avisoEmail = document.getElementById("avisoEmail"),
    avisoPassword = document.getElementById("avisoPassword");
    

let usuarios;
let estado = false;
if (localStorage.getItem("usuarios")) {
    usuarios = JSON.parse(localStorage.getItem("usuarios"));
} else {
    usuarios = [];
}

class Usuario {
    constructor(username, email, password, checkBox) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.checkBox = checkBox;
    }
}

function limpiarCampos() {
    username.value = "";
    password.value = "";
    email.value = "";
    checkBox.checked = "";
    password2.value = "";
}

function guardarUsuario(usuario) {
    return usuarios.push(usuario)
}

function guardarEnStorage(element) {
    return localStorage.setItem("usuarios", JSON.stringify(element))
}

btnRegistrar.addEventListener("click", (e) => {
    e.preventDefault();
    let newUser = new Usuario(
        username.value,
        email.value,
        password.value,
        checkBox.checked,
    );
    limpiarAvisos();
    validarFormulario();
    if (estado) {
        guardarUsuario(newUser);
        limpiarCampos();
        guardarEnStorage(usuarios);
        redireccion();
    }
});



function limpiarAvisos(){
    avisoUsername.innerHTML = "";
    avisoEmail.innerHTML = "";
    avisoPassword.innerHTML = "";

}
function validarFormulario() {
    if(username.value == "" || username.value.length < 5){
        avisoUsername.innerText = `El usuario tiene que tener al menos 5 letras!`
        avisoUsername.classList = "avisos"
    }
    else if(email.value == ""){
        avisoEmail.innerText = `Email incompleto!`
        avisoEmail.classList = "avisos"
    }
    else if (password.value != password2.value || password.value == "" || password2.value == "") {
        avisoPassword.innerText = `Revisa las contraseñas!`
        avisoPassword.classList = "avisos"
    } 
    else {
        enviando();
        estado = true;
    }return estado
}

// funcion para una vez registrado entrar al index 
function redireccion(){
    setTimeout(() =>{
        location.href = "../index.html"
    },1000);
}

function enviando(){
    swal.fire({
        title: '<h1>"cargando..."</h1>',
        icon: "success",
        width: "50%",
        bakcdrop: true,
        timer: 850,
        timerProgressBar: true,
        allowOutsideClick: false,
        allowEnterKey: false,
        allowEscapeKey: false,
        
    });
}
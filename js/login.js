const btnIngresar = document.querySelector("#ingresar"),
    usuarioReg = document.querySelector("#usuarioReg"),
    contraseniaReg = document.querySelector("#contraseniaReg"),
    avisoIS = document.getElementById("avisoIS");



function inicioSesion(usuarios) {
    let userFound = usuarios.find((usuario) => {
        return usuario.username === usuarioReg.value && usuario.password === contraseniaReg.value
    })

    if (userFound) {
        iniciarSecion();
        
        
    } else {
        avisoIS.innerText = "usuario incorrecto"
        avisoIS.classList = "avisos"
    }
}


function recuperarLS() {
    let datos = JSON.parse(localStorage.getItem("usuarios"));
    return datos;
}

const usuariosLS = recuperarLS();


btnIngresar.addEventListener("click", (e) => {
e.preventDefault();
inicioSesion(usuariosLS);
   
});


function limpiezaDeDatos() {
    usuarioReg.value = ""
    contraseniaReg.value = ""
}

function cargarPagina() {

    return new Promise((res, rej) => {

        setTimeout(() => {
            location.reload();
            res(usuarioReg.value);
        }, 1000);

    });
}

function saludo(userFound) {
    const saludo = document.createElement("h1")
    saludo.innerHTML = `¡Bienvenido ${userFound}!`
    swal.fire(saludo)
}


async function iniciarSecion(){
     saludo(usuarioReg.value);
     cargarPagina(); 
}


/////// MI IDEA ERA QUE SE RECARGUE LA PAGINA Y DE AHI ME MUESTRE EL SALUDO :(
// async function iniciarSecion(){
//     let dato = await cargarPagina(); 
//     saludo(dato);
//     console.log("dato");
    
    
// }

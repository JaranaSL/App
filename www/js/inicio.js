const usuarios = [{
        username: "pepe",
        pass: "pep1234"
    },
    {
        username: "paco",
        pass: "pac1234"
    },
    {
        username: "juan",
        pass: "jua1234"
    }
];

document.getElementById("enlaceBotonRegistrase").addEventListener("click", irARegistrarse);
document.getElementById("enlaceBotonRegistrase").addEventListener("pointerdown", botonPulsado);
document.getElementById("enlaceBotonRegistrase").addEventListener("pointerleave", botonSoltado);
document.getElementById("enlaceBotonContinuar").addEventListener("click", iniciarSesion);
document.getElementById("enlaceBotonContinuar").addEventListener("pointerdown", botonPulsado);
document.getElementById("enlaceBotonContinuar").addEventListener("pointerleave", botonSoltado);
document.getElementById("instagramBoton").addEventListener("click", instagramIniciarSesion);
document.getElementById("instagramBoton").addEventListener("pointerdown", botonPulsado);
document.getElementById("instagramBoton").addEventListener("pointerleave", botonSoltado);


function irARegistrarse() {
    location.href = "registro.html";
}

function iniciarSesion() {
    const userBuscado = comprobarUsuaio(document.getElementById("name").value);
    if(userBuscado){
        if(comprobarContraseña(userBuscado,document.getElementById("passwd").value))
            location.href = "principal.html";
        else
            mostarMensaje("Usuario o contraseña incorrecto");
    }else
        mostarMensaje("Usuario no registrado");
}

function instagramIniciarSesion() {

}

function botonPulsado(event) {
    const botonPulsado = event.currentTarget;
    botonPulsado.classList.add("pulsacion");
}

function botonSoltado(event) {
    const botonSoltado = event.currentTarget;
    botonSoltado.classList.remove("pulsacion");
}

function comprobarUsuaio(usuario){
    return usuarios.find((user)=>user.username == usuario);
}

function comprobarContraseña(usuario, contraseña){
    return contraseña == usuario.pass;
}

function mostarMensaje(texto){
    document.getElementById("mensaje").innerHTML = texto;
    mensaje.classList.add("visible");
    setTimeout(()=>{mensaje.classList.remove("visible")},10000);
}
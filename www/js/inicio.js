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
    location.href = "principal.html";
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
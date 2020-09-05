/*  JS asociado al archivo registro.html cuyo estilo está en el archivo index.css */

/*  Constantes  */
const ERROR_USUARIO = "El usuario ya existe";
const ERROR_CONTRASEÑA = "Formato de la contraseña incorrecto";
const ERROR_REPETIR_CONTRASEÑA = "Las contraseñas no coinciden";
const DELAY_MS = 10000;

/*  Array que contiene los usuarios y contraseñas registrados esta en el archivo inicio.js
    (No definitivo: esta información debe estar en la base de datos)  */

/*   Añade una función como respuesta a un evento sobre un elemento del html determinado  */
document.getElementById("enlaceBotonContinuar").addEventListener("click", registrarUsuario);
document.getElementById("enlaceBotonContinuar").addEventListener("pointerdown", botonPulsado);
document.getElementById("enlaceBotonContinuar").addEventListener("pointerleave", botonSoltado);

/*  Función que almacena la información del usuario (NO IMPLEMENTADA)   */
function registrarUsuario() {
    location.href = "inicio.html";
}

/*  Función que al ser pulsado un elemento le añade una clase para resaltarlo   */
function botonPulsado(event) {
    const botonPulsado = event.currentTarget; //Introduce en la variable botonPulsado el Id del elemento que ha sido pulsado
    botonPulsado.classList.add("pulsacion");
}

/*  Función que al ser soltado un elemento le quita la clase para resaltarlo    */
function botonSoltado(event) {
    const botonSoltado = event.currentTarget; //Introduce en la variable botonSoltado el Id del elemento que ha sido soltado
    botonSoltado.classList.remove("pulsacion");
}

/*  Función que comprueba si el usuario recibido está registrado y devuelve su posición en
    el array si lo ha encontrado o null si no lo ha hecho (Hay que modificarla para que
    compruebe el usuario en la base de datos)   */
function comprobarUsuaio(usuario) {
    return usuarios.find((user) => user.username == usuario); //.find() Le pasa todos los elementos del array usuarios al la función sin nombre en el parámetro user para que compruebe si coincide con el elemento buscado
}

/*  Función que comprueba si las contraseñas coinciden  */
function comprobarContraseña() {
    return document.getElementById("passwd").value == document.getElementById("Rpasswd").value;
}

/*  Función que muestra durante 10s el mensaje recibido como alerta de error al iniciar sesión
    (Cuando se llama a esta función antes de los 10s el mensaje cambia pero desaparece al completarse
    los 10s de la primera ejecución)  */
function mostarMensaje(texto) {
    document.getElementById("mensaje").textContent = texto; //Modifica el texto del elemento mensaje
    mensaje.classList.add("visible"); //Añade una clase al elemento mensaje para que sea visible
    setTimeout(() => { //setTimeout ejecuta la función del primer parámetro cuando ha pasado el tiempo indicado en el segundo parámetro en ms
        mensaje.classList.remove("visible") //La función sin nombre y con return implicito quita la clase al elemento mensaje para que vuelva a ser invisible
    }, DELAY_MS);
}
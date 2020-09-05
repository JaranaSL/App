/* JS asociado al archivo index.html cuyo estilo está en el archivo index.css */

/* Añade una función como respuesta a un evento determinado    */
document.addEventListener('deviceready', onDeviceReady, false);

/* Añade una función como respuesta a un evento sobre un elemento del html determinado */
document.body.addEventListener("click", cambiarPagina);

/* Función que añade una clase al elemento devicerady para cambiar su aspecto */
function onDeviceReady() {
   document.getElementById('deviceready').classList.add('ready');
}

/* Función que muestra la ventana de iniciar sesión   */
function cambiarPagina() {
   location.href = "inicio.html";
}
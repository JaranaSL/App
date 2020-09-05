/*  JS asociado al archivo inicio.html cuyo estilo está en el archivo index.css */

/*  Constantes  */
const ERROR_USUARIO = "Usuario o contraseña incorrecto";
const ERROR_CONTRASEÑA = "Usuario no registrado";
const DELAY_MS = 10000;

/*  Array que contiene los usuarios y contraseñas registrados (No definitivo: esta información debe
    estar en la base de datos)  */
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

/*   Añade una función como respuesta a un evento sobre un elemento del html determinado  */
document.getElementById("enlaceBotonRegistrase").addEventListener("click", irARegistrarse);
document.getElementById("enlaceBotonRegistrase").addEventListener("pointerdown", botonPulsado);
document.getElementById("enlaceBotonRegistrase").addEventListener("pointerleave", botonSoltado);
document.getElementById("enlaceBotonContinuar").addEventListener("click", iniciarSesion);
document.getElementById("enlaceBotonContinuar").addEventListener("pointerdown", botonPulsado);
document.getElementById("enlaceBotonContinuar").addEventListener("pointerleave", botonSoltado);
document.getElementById("instagramBoton").addEventListener("click", instagramIniciarSesion);
document.getElementById("instagramBoton").addEventListener("pointerdown", botonPulsado);
document.getElementById("instagramBoton").addEventListener("pointerleave", botonSoltado);

/*  Función que muestra la ventana de resgistro */
function irARegistrarse() {
    location.href = "registro.html";
}

/*  Función que comprueba las credenciales de inicio de sesión (No tiene en cuenta la opción
    de mantener sesión iniciada y/o recordar credenciales. Hay que añadirlo)    */
function iniciarSesion() {
    const usuarioBuscado = comprobarUsuaio(document.getElementById("name").value);
    if (usuarioBuscado) {
        if (comprobarContraseña(usuarioBuscado, document.getElementById("passwd").value))
            location.href = "principal.html";
        else
            mostarMensaje(ERROR_USUARIO);
    } else
        mostarMensaje(ERROR_CONTRASEÑA);
}

/*  Función que debe cambiar a la ventana de iniciar sesión con Instagram (NO IMPLEMENTADA) */
function instagramIniciarSesion() {

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

/*  Función que comprueba si la contraseña recibida corresponde al usuario recibido y devuelve
    true si la contraseña es correcta o false si no lo es (Hay que modificarla para que
    compruebe la contraseña en la base de datos)    */
function comprobarContraseña(usuario, contraseña) {
    return contraseña == usuario.pass;
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
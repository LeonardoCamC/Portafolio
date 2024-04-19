const formContacto = document.getElementById("contacto");
const inputs = document.querySelectorAll("#contacto input");
const mensaje = document.getElementById("mensaje");
const botonEnviar = document.getElementById("botonEnviar");


const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ0-9\s]{1,50}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	asunto: /^[a-zA-ZÀ-ÿ0-9\s]{1,50}$/, // Letras y espacios, pueden llevar acentos.
    mensaje: /^[a-zA-ZÀ-ÿ0-9\s]{10,300}$/, // Letras y espacios, pueden llevar acentos.
}


const validarFormulario = (e) => {

    let nombreValido = expresiones.nombre.test(inputs[0].value.trim());
    let emailValido = expresiones.email.test(inputs[1].value.trim());
    let asuntoValido = expresiones.asunto.test(inputs[2].value.trim());
    let mensajeValido = expresiones.mensaje.test(mensaje.value.trim());

    if (nombreValido && emailValido && asuntoValido && mensajeValido) {
        botonEnviar.disabled = false; // Habilita el botón si todos los campos son válidos
    } else {
        botonEnviar.disabled = true; // Deshabilita el botón si algún campo no es válido
    }

        if (mensaje.name === "mensaje"){
            if(expresiones.mensaje.test(mensaje.value)) {
                 mensaje.style.borderColor = 'green';
                 errorMensaje.style.display = 'none';
                 return true; // El recuadro se pone verde de estar ingresado de manera correcta la informacion
            } else {
                mensaje.style.borderColor = 'red';
                errorMensaje.style.display = 'block'; // El recuadro se pone rojo y muestra cual es el error de estar ingresado de manera incorrecta la informacion
            }
    }
    
    switch (e.target.name) {
       case "nombre":
            if(nombreValido) {
                 e.target.style.borderColor = 'green';
                 errorNombre.style.display = 'none';
                 return true; // El recuadro se pone verde de estar ingresado de manera correcta la informacion
            } else {
                e.target.style.borderColor = 'red';
                errorNombre.style.display = 'block'; // El recuadro se pone rojo y muestra cual es el error de estar ingresado de manera incorrecta la informacion
            }
       break;
       case "email":
            if (emailValido) {
                e.target.style.borderColor = 'green';
                errorEmail.style.display = 'none';
                return true; // El recuadro se pone verde de estar ingresado de manera correcta la informacion
            } else {
                e.target.style.borderColor = 'red';
                errorEmail.style.display = 'block'; // El recuadro se pone rojo y muestra cual es el error de estar ingresado de manera incorrecta la informacion
            }
       break;
       case "asunto":
            if(asuntoValido) {
                e.target.style.borderColor = 'green';
                errorAsunto.style.display = 'none';
                return true; // El recuadro se pone verde de estar ingresado de manera correcta la informacion
            } else {
                e.target.style.borderColor = 'red';
                errorAsunto.style.display = 'block'; // El recuadro se pone rojo y muestra cual es el error de estar ingresado de manera incorrecta la informacion
            }
       break;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup',validarFormulario)
    input.addEventListener('blur',validarFormulario)


});

mensaje.addEventListener('keyup',validarFormulario)
mensaje.addEventListener('blur',validarFormulario)

formContacto.addEventListener("submit", (e) => {
    e.preventDefault();
    limpiarForm();
    alert("Su formulario de contacto ha sido enviado");
    
});

const limpiarForm = () => {
    document.querySelector("#nombre").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#asunto").value = "";
    document.querySelector("#mensaje").value = "";
}
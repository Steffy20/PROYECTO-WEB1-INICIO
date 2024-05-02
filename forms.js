const nombre = document.getElementById("myname");
const apellidos = document.getElementById("surname");
const correo = document.getElementById("email");
const celular = document.getElementById("mobile");
const direccion = document.getElementById("direccion");
const fecha = document.getElementById("fecha");
const terminos = document.getElementById("terminos");
const form = document.getElementById("form");
const listInputs = document.querySelectorAll(".form-input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let condicion = validacionForm();
  if (condicion) {
    enviarFormulario();
  }
});

function validacionForm() {
  form.lastElementChild.innerHTML = "";
  let condicion = true;
  listInputs.forEach((element) => {
    element.lastElementChild.innerHTML = "";
  });

  if (nombredeusuario.value.length < 1 || nombredeusuario.value.trim() == "") {
    mostrarMensajeError("nyname", "Ingrese su Nombre de usuario");
    condicion = false;
  }
  if (contraseña.value.length < 1 || contraseña.value.trim() == "") {
    mostrarMensajeError("contraseña", "Ingrese contraseña");
    condicion = false;
  }

  if (!terminos.checked) {
    mostrarMensajeError("terminos", "Acepte los Terminos");
    condicion = false;
  } 
  return condicion;
}

function mostrarMensajeError(claseInput, mensaje) {
  let elemento = document.querySelector(`.${claseInput}`);
  elemento.lastElementChild.innerHTML = mensaje;
}

function IniciarSesionFormulario() {
  form.reset();
  form.lastElementChild.innerHTML = "";
  
}

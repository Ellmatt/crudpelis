import Pelicula from "./classPelicula.js";
import {
  cantidadCaracteresTitulo,
  validarDescripcion,
  validarGenero,
  validarImagen,
} from "./validaciones.js";

// declarar  variables
let listaPeliculas =
  JSON.parse(localStorage.getItem("listaPeliculasKey")) || [];

const modalFormPelicula = new bootstrap.Modal(
  document.querySelector("#modalPelicula")
);
const btnCrearPelicula = document.querySelector("#btnCrearPelicula");
let codigo = document.querySelector("#codigo");
// let titulo = documen.getElementById("titulo");
let descripcion = document.querySelector("#descripcion");
let imagen = document.querySelector("#imagen");
let genero = document.querySelector("#genero");
let formulario = document.querySelector("#formPelicula");

// agregar los eventis
btnCrearPelicula.addEventListener("click", mostrarFormulario);
formulario.addEventListener("submit", crearPelicula);

titulo.addEventListener("blur", () => {
  cantidadCaracteresTitulo(titulo);
});
descripcion.addEventListener("blur", () => {
  validarDescripcion(descripcion);
});
imagen.addEventListener("blur", () => {
  validarImagen(imagen);
});
genero.addEventListener("blur", () => {
  validarGenero(genero);
});

function mostrarFormulario() {
  modalFormPelicula.show();
  codigo.value = uuidv4();
  console.log(uuidv4());
}

function crearPelicula(e) {
  e.preventDefault();
  // agregar las validaciones
  //  crear pelicula
  if (
    cantidadCaracteresTitulo(titulo) &&
    validarDescripcion(descripcion) &&
    validarImagen(imagen) &&
    validarGenero(genero) 
  ){
  const nuevaPelicula = new Pelicula(
    codigo.value,
    descripcion.value,
    imagen.value,
    genero.value
  );
  console.log(nuevaPelicula);
  // guardar la pelicula en el arreglo
  listaPeliculas.push(nuevaPelicula);
  console.log(listaPeliculas);
  // guqardar los datos en el localstorage
  guardarDatosEnLS();
  // limpiar el formulario
  limpiarFormulario();
  // cerrar la ventana modal
  modalFormPelicula.hide();
}
}

function limpiarFormulario() {
  formulario.reset();
  titulo.className = "form-control";
  descripcion.className = "form-control";
  imagen.className = "form-control";
  genero.className = 'form-control'
  // resetear la clase de bootstrap form-control
}

function guardarDatosEnLS() {
  localStorage.setItem("listaPeliculasKey", JSON.stringify(listaPeliculas));
}

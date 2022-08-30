import Pelicula from "./classPelicula.js";
import {
  cantidadCaracteresTitulo,
  validarDescripcion,
  
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

cargaInicial();

function cargaInicial() {
  if (listaPeliculas.length > 0) {
    // dibujar filas en la tabla
    listaPeliculas.map((pelicula) => {
      crearFila(pelicula);
    });
  }
  // else mostrar un mensaje añ usuario que no hay elementos para mostrar
}

function crearFila(pelicula) {
 
  let tablaPelicula = document.querySelector("#listaPeliculas");
  
  tablaPelicula.innerHTML += ` <tr>
<th scope="row">${pelicula.codigo}</th>
<td>${pelicula.titulo}</td>
<td>
 ${pelicula.descripcion}
</td>
<td>
  ${pelicula.imagen}
</td>
<td>${pelicula.genero}</td>
<td>
  <button class="btn btn-warning">
    <i class="bi bi-pencil-square"></i>
  </button>
  <button class="btn btn-danger" onclick="borrarPeliculas('${pelicula.codigo}')">
    <i class="bi bi-x-square"></i>
  </button>
</td>
</tr>`;
}

titulo.addEventListener("blur", () => {
  cantidadCaracteresTitulo(titulo);
});
descripcion.addEventListener("blur", () => {
  validarDescripcion(descripcion);
});
imagen.addEventListener("blur", () => {
  validarImagen(imagen);
});
// genero.addEventListener("blur", () => {
//   validarGenero(genero);
// });

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
    validarImagen(imagen) 
    // validarGenero(genero)
  ) {
    const nuevaPelicula = new Pelicula(
      codigo.value,
      titulo.value,
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
    // crear fila
    crearFila(nuevaPelicula)
    // alet
    Swal.fire(
      'Pelicula creada!',
      'la pelicula fue creada correctamente!',
      'success'
    )
    // cerrar la ventana modal
    modalFormPelicula.hide();
  }
}

function limpiarFormulario() {
  formulario.reset();
  titulo.className = "form-control";
  descripcion.className = "form-control";
  imagen.className = "form-control";
  genero.className = "form-control";
  // resetear la clase de bootstrap form-control
}

function guardarDatosEnLS() {
  localStorage.setItem("listaPeliculasKey", JSON.stringify(listaPeliculas));
}


window.borrarPeliculas = function (codigo){
  Swal.fire({
    title: 'Eliminar pelicula?',
    text: "Esta por eliminar la pelicula seleccionada y no puedes revertir este paso!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, borrar!',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    console.log(result)

    if (result.isConfirmed) {
  // buscar en listaPeliculas el codigo de la peli que quiero borrar 
// opcion 1: findindex, splice(posicion,1 )
// opcion 2: filter
// let copiaListaPeliculas = listaPeliculas.filter((pelicula)=>{return pelicula.codigo != codigo})
let copiaListaPeliculas = listaPeliculas.filter((pelicula)=> pelicula.codigo != codigo) //return impricito

console.log(copiaListaPeliculas)
// tarea borrar del arreglo listaPeliculas el elemento con el cod recibido por parametro
listaPeliculas = copiaListaPeliculas;
  // actualizar el localstorage
guardarDatosEnLS()
  // actualizar la tabla
  
actualizarTabla();
      Swal.fire(
        'Borrado!',
        'La pelicula fue eliminada correctamente!',
        'success'
      )
    }
  })
  

}
function actualizarTabla (){
  let tablaPelicula = document.querySelector('#listaPeliculas')
  tablaPelicula.innerHTML='';
  cargaInicial();
}
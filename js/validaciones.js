export function cantidadCaracteresTitulo(input) {
    if (input.value.trim().length >= 3 && input.value.trim().length <= 50) {
      console.log("dato valido");
      input.className = "form-control is-valid";
      return true
    } else {
      console.log("dato invalido");
      input.className = "form-control is-invalid";
      return false
    }
  }
  //   trim es para quitar los espacios vacios al perder el foco
  
  export function validarDescripcion(input) {
    if (input.value.trim().length >= 20 && input.value.trim().length <= 90) {
        console.log("dato valido");
        input.className = "form-control is-valid";
        return true
      } else {
        console.log("dato invalido");
        input.className = "form-control is-invalid";
        return false
      }
  }
  export function validarImagen(input) {
      // /^[\d]{7,8}}$/ otra opcion
      if (input.value.trim().length >= 20 && input.value.trim().length <= 100) {
        console.log("dato valido");
        input.className = "form-control is-valid";
        return true
      } else {
        console.log("dato invalido");
        input.className = "form-control is-invalid";
        return false
      }
  }
  export function validarGenero(input) {
    let patron = /^[A-Z]{1,4}$/;
    if (patron.test(input.value)  && input.value<=9999) {
      input.className = "form-control is-valid";
      return true
    } else {
      input.className = "form-control is-invalid";
      return false
    }
  }
//   export function validarAltura(input) {
//     let patron =/^[0-2](\,[\d]{1,2})?$/;
//     if (patron.test(input.value)) {
//       input.className = "form-control is-valid";
//       return true
//     } else {
//       input.className = "form-control is-invalid";
//       return false
//     }
//   }
//   export function validarPeso(input) {
//     let patron =/^[0-2]{1,3}(\,[\d]{1,2})?$/;
//     if (patron.test(input.value)) {
//       input.className = "form-control is-valid";
//       return true
//     } else {
//       input.className = "form-control is-invalid";
//       return false
//     }
//   }
  
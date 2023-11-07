// funciones declarativas

function saludar() {
  // todas las funciones que quiero hacer para saludar
  document.write(`<p>Hola mundo</p>`);
}

function saludoNuevo(nombreIngresado, apellidoIngresado) {
  document.write(
    `<p>Hola ${nombreIngresado}, ${apellidoIngresado}. Que tengas un buen dia! </p>`
  );
}

// invocar o llamar una funcion
saludar();

const nombre = prompt("ingrese un nombre");
const apellido = prompt("ingrese un apellido");

saludoNuevo(nombre, apellido);

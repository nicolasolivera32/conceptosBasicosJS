// declarar una variable (var - let - const)

let anioActual = 2023;
const url =
  "https://universe.rollingcodeschool.com/live/videos/64a888547f8ffc05a8b8f37c";

// mostrar mensajes

console.log(anioActual);
console.log("anioActual");
console.log("año actual: " + anioActual);

// modificar el valor de una variable

anioActual = 2023 + 1;
console.log("año actual: " + anioActual);
console.log(url);

document.write("hola mundo");
document.write("<h1 class='titulo'>hola mundo " + anioActual + "</h1>");

// ventana emergente

alert("este es un ejemplo de alerta");

// solicitarle un numero al usuario y luego sumarle 5, por ultimo mostrar el resultado de la suma.

const numeroSolicitado = parseInt(prompt("ingrese un numero del 1 al 100"));
console.log(numeroSolicitado);
console.log("resultado: " + (numeroSolicitado + 5));
console.log(numeroSolicitado + 5)

// transformar o parsear un numero de string a formato numerico
// parseInt ("100") enteros
// parseFloat("100.5") decimales

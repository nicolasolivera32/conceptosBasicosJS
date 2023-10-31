/*
10- realiza un script que pida un numero de columnas y filas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7x5 deberá ir del 31 al 1.
*/

const filas = parseInt(prompt("ingrese las filas"));
const columnas = parseInt(prompt("ingrese las columnas"));

let totalCeldas = filas * columnas;

document.write(`<table><tbody>`);
for (let indiceFilas = 0; indiceFilas < filas; indiceFilas++) {
  document.write(`<tr>`);
  for (let indiceColumnas = 0; indiceColumnas < columnas; indiceColumnas++) {
    document.write(`<td>${totalCeldas}</td>`);
    totalCeldas--;
  }
  document.write(`</tr>`);
}

document.write(`</tbody></table>`);

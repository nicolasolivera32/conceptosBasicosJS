/*
if(condicion logica){
    todo el codigo que quiero ejecutar si se cumple la condicion
}
*/

// solicitar al usuario una edad, si el usuario es mayor a 16 años deberia votar
// entre 16 y 18 es optativo y mayores de 70 tambien
// entre 18 y 70 inclusive es obligatorio

const edad = parseInt(prompt("ingrese su edad"));

if ((edad >= 16 && edad < 18) || edad > 70) {
  alert("es optativo votar");
} else {
  if (edad >= 18 && edad <= 70) {
    alert("usted debe votar");
  } else {
    alert("no puede votar");
  }
}

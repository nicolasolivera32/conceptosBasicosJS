// si el usuario presiona 1 consulta el saldo, 2 extraer dinero, 3 ingresar dinero

let saldo = 1000;

const opcion = prompt(
  "Seleccione una opción: 1-consultar saldo, 2- extraer dinero, 3- ingresar dinero"
);

// if (opcion === 1) {
//   alert(`su saldo disponible es: $${saldo}`);
// } else if (opcion === 2) {
//   const monto = parseFloat(prompt("Ingrese la cantidad que desea extraer"));
//   if (monto > 0 && monto <= saldo) {
//     alert(
//       `Su extracción fue exitosa. Su saldo actual es de: $${saldo - monto}`
//     );
//   } else {
//     alert("Fondos insuficientes para realizar el retiro");
//   }
// } else if (opcion === 3) {
//   const montoIngresar = parseFloat(
//     prompt("Ingrese la cantidad que desea depositar en su cuenta:")
//   );
//   if (montoIngresar > 0) {
//     alert(
//       `Depósito realizado con éxito. Su saldo actual es de: $${
//         montoIngresar + saldo
//       }`
//     );
//   } else {
//     alert(`Ingrese un monto mayor a 0 (cero)`);
//   }
// } else {
//   alert("Ingresó una opción inválida");
// }

// Ejercicio resuelto con switch

switch (opcion) {
  case "saldo":
  case "consultar saldo":
  case "1":
    alert(`su saldo disponible es: $${saldo}`);
    break;
  case 2:
    const monto = parseFloat(prompt("Ingrese la cantidad que desea extraer"));
    if (monto > 0 && monto <= saldo) {
      alert(
        `Su extracción fue exitosa. Su saldo actual es de: $${saldo - monto}`
      );
    } else {
      alert("Fondos insuficientes para realizar el retiro");
    }
    break;
  case 3:
    const montoIngresar = parseFloat(
      prompt("Ingrese la cantidad que desea depositar en su cuenta:")
    );
    if (montoIngresar > 0) {
      alert(
        `Depósito realizado con éxito. Su saldo actual es de: $${
          montoIngresar + saldo
        }`
      );
    } else {
      alert(`Ingrese un monto mayor a 0 (cero)`);
    }
    break;
  default:
    alert("Ingresó una opción inválida");
}

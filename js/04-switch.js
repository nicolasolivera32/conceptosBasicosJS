// si el usuario presiona 1 consulta el saldo, 2 extraer dinero, 3 ingresar dinero

let saldo = 1000;

const opcion = parseFloat(
  prompt(
    "Seleccione una opción: 1-consultar saldo, 2- extraer dinero, 3- ingresar dinero"
  )
);

if (opcion === 1) {
  alert(`su saldo disponible es: $${saldo}`);
} else if (opcion === 2) {
  let monto = parseFloat(prompt("Ingrese la cantidad que desea extraer"));
  if (monto <= saldo) {
    alert(
      `Su extracción fue exitosa. Su saldo actual es de: $${saldo - monto}`
    );
  } else {
    alert("Fondos insuficientes para realizar el retiro");
  }
} else if (opcion === 3) {
  monto = parseFloat(
    prompt("Ingrese la cantidad que desea depositar en su cuenta:")
  );
  alert(
    `Depósito realizado con éxito. Su saldo actual es de: $${monto + saldo}`
  );
} else {
  alert("Ingresó una opción inválida");
}

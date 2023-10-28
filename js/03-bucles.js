/*
while(condicion logica){
    todas las lineas de codigo que quiero repetir varias veces
    agregar un codigo para que la condicion no se cumpla en algun momento
}
*/

let numero = 1;

// document.write("<p>renglon numero" + numero + "</p>");
while (numero <= 10) {
  document.write(`<p>renglon numero ${numero} </p>`);
  numero++; //   numero = numero + 1;
}

/*
do{
    todas las lineas de codigo que quiero repetir varias veces
    agregar un codigo para que la condicion no se cumpla en algun momento
}while(condicion logica)
*/

let contador = 10;

do {
  document.write(`<p>renglon numero ${contador} con do-while</p>`);
  contador--; //contador = contador - 1
} while (contador >= 1);

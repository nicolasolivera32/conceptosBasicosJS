// declarar un array

const productos = [];

const juegos = [
  "counter-strike",
  "minecraft",
  2023,
  true,
  "valorant",
  "half-life",
  "lol",
];

function mostrarJuegos(titulo) {
  document.write(`<h2>${titulo}</h2>`);
  document.write(`<ul>`);
  for (let i = 0; i < juegos.length; i++) {
    document.write(`<li>${juegos[i]}</li>`);
  }
  document.write(`</ul>`);
}

// cantidad de elementos en el array
console.log(juegos.length);

// mostrar un array por pantalla
document.write(juegos);
console.log(juegos);

document.write(`<p>El primer juego es ${juegos[0]}</p>`);
document.write(`<p>El ultimo juego es ${juegos[juegos.length - 1]}</p>`);
document.write(`<p>El juego de la posicion 20 ${juegos[20]}</p>`);

mostrarJuegos("Lista de Juegos");

// agregar elementos al array

juegos.unshift("god of war", "street fighter");
mostrarJuegos("Lista de juegos + 2 juego agregados");

juegos.splice(6, 0, "Dark souls");
mostrarJuegos(`Lista de juegos + 1, cantidad total (${juegos.length})`);

juegos.push("Moratl Kombat");
mostrarJuegos(`Lista de juegos + 1, cantidad total (${juegos.length})`);

// modificamos elementos de un array

juegos[5] = "Stardew Valley";
mostrarJuegos(
  `Lista de juegos modificamos un elemento del array (${juegos.length})`
);

// eliminar un elemento del array

juegos.shift();
mostrarJuegos(`Lista de juegos -1 elemento del array (${juegos.length})`);

juegos.splice(3, 1); //borra un elemento
// juegos.splice(3, 3) --- a partir del elemento 3 borra los 3 siguientes
// juegos.splice(3) --- a partir del elemento 3 borra toldos los que siguen
mostrarJuegos(`Lista de juegos -1 elemento del array (${juegos.length})`);

juegos.pop();
mostrarJuegos(`Lista de juegos -1 elemento del array (${juegos.length})`);

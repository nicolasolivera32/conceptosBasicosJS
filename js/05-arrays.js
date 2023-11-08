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

function mostrarJuegos() {
  document.write(`<h2>Lista de juegos</h2>`);
  document.write(`<ul>`);
  for (let i = 0; i < juegos.length; i++) {
    document.write(`<li>${juegos[i]}</li>`);
  }
  document.write(`</ul>`);
}

mostrarJuegos();

// cantidad de elementos en el array
console.log(juegos.length);

// mostrar un array por pantalla
document.write(juegos);
console.log(juegos);

document.write(`<p>El primer juego es ${juegos[0]}</p>`);
document.write(`<p>El ultimo juego es ${juegos[juegos.length - 1]}</p>`);
document.write(`<p>El juego de la posicion 20 ${juegos[20]}</p>`);

document.write(`<h2>Lista de juegos</h2>`);
document.write(`<ul>`);
for (let i = 0; i < juegos.length; i++) {
  document.write(`<li>${juegos[i]}</li>`);
}
document.write(`</ul>`);

// agregar elementos al array

juegos.unshift("god of war", "street fighter");
document.write(`<h2>Lista de juegos + 2 juego agregados</h2>`);
document.write(`<ul>`);
for (let i = 0; i < juegos.length; i++) {
  document.write(`<li>${juegos[i]}</li>`);
}
document.write(`</ul>`);

juegos.splice(6, 0, "Dark souls");
document.write(
  `<h2>Lista de juegos + 1, cantidad total (${juegos.length})</h2>`
);
document.write(`<ul>`);
for (let i = 0; i < juegos.length; i++) {
  document.write(`<li>${juegos[i]}</li>`);
}
document.write(`</ul>`);

juegos.push("Moratl Kombat");
document.write(
  `<h2>Lista de juegos + 1, cantidad total (${juegos.length})</h2>`
);
document.write(`<ul>`);
for (let i = 0; i < juegos.length; i++) {
  document.write(`<li>${juegos[i]}</li>`);
}
document.write(`</ul>`);

// modificamos elementos de un array

juegos[5] = "Stardew Valley";

document.write(
  `<h2>Lista de juegos modificamos un elemento del array (${juegos.length})</h2>`
);
document.write(`<ul>`);
for (let i = 0; i < juegos.length; i++) {
  document.write(`<li>${juegos[i]}</li>`);
}
document.write(`</ul>`);

// eliminar un elemento del array

juegos.shift();
document.write(
  `<h2>Lista de juegos -1 elemento del array (${juegos.length})</h2>`
);
document.write(`<ul>`);
for (let i = 0; i < juegos.length; i++) {
  document.write(`<li>${juegos[i]}</li>`);
}
document.write(`</ul>`);

juegos.splice(3, 1); //borra un elemento
// juegos.splice(3, 3) --- a partir del elemento 3 borra los 3 siguientes
// juegos.splice(3) --- a partir del elemento 3 borra toldos los que siguen
document.write(
  `<h2>Lista de juegos -1 elemento del array (${juegos.length})</h2>`
);
document.write(`<ul>`);
for (let i = 0; i < juegos.length; i++) {
  document.write(`<li>${juegos[i]}</li>`);
}
document.write(`</ul>`);

juegos.pop();
document.write(
  `<h2>Lista de juegos -1 elemento del array (${juegos.length})</h2>`
);
document.write(`<ul>`);
for (let i = 0; i < juegos.length; i++) {
  document.write(`<li>${juegos[i]}</li>`);
}
document.write(`</ul>`);

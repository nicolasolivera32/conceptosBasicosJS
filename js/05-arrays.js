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

juegos.unshift("god of war", "street fighter")
document.write(`<h2>Lista de juegos + 2 juego agregados</h2>`);
document.write(`<ul>`);
for (let i = 0; i < juegos.length; i++) {
  document.write(`<li>${juegos[i]}</li>`);
}
document.write(`</ul>`);

juegos.splice(6,0,"Dark souls")
document.write(`<h2>Lista de juegos + 1, cantidad total (${juegos.length})</h2>`);
document.write(`<ul>`);
for (let i = 0; i < juegos.length; i++) {
  document.write(`<li>${juegos[i]}</li>`);
}
document.write(`</ul>`);

juegos.push("Moratl Kombat")
document.write(`<h2>Lista de juegos + 1, cantidad total (${juegos.length})</h2>`);
document.write(`<ul>`);
for (let i = 0; i < juegos.length; i++) {
  document.write(`<li>${juegos[i]}</li>`);
}
document.write(`</ul>`);
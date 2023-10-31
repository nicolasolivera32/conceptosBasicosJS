// length -> cantidad de caracteres de un string
// frase.charAt(0)
//  frase.toLowerCase() pasa el contenido de la frase a minúsculas

const frase = prompt("Ingrese una frase").toLowerCase();

console.log(frase.length);
console.log(frase);
console.log(frase.charAt(0));

for (let i = 0; i < frase.length; i++) {
  if (
    frase.charAt(i) === "a" ||
    frase.charAt(i) === "e" ||
    frase.charAt(i) === "i" ||
    frase.charAt(i) === "o" ||
    frase.charAt(i) === "u"
  ) {
    document.write(frase.charAt(i));
  }
}

class ViedeoJuego {
  constructor(
    tituloParam,
    precioParam,
    desarroladorParam,
    generoParam,
    etiquetasParam,
    anioLanzamientoParam
  ) {
    // declaramos las propiedades que tendra un videojuego
    this._titulo = tituloParam;
    this._precio = precioParam;
    this.desarrollador = desarroladorParam;
    this.genero = generoParam;
    this.etiquetas = etiquetasParam;
    this.anioLanzamiento = anioLanzamientoParam;
    // propiedad por defecto
    this.publicado = false;
  }

  // ----------- propiedades computadas get y set ------------
  get titulo() {
    return this._titulo;
  }

  get precio() {
    return this._precio;
  }

  set titulo(nuevoTitulo) {
    if (nuevoTitulo !== "") {
      this._titulo = nuevoTitulo;
    } else {
      alert("Debe ingresar un nuevo titulo");
    }
  }

  // ----------- aqui declaro mis metodos ------------
mostrarDatos(){
    document.write(`<ul>
    <li>Titulo: ${this.titulo}</li>
    <li>Precio: $${this.precio}</li>
    <li>Genero: ${this.genero}</li>
    <li>Desarrollador: ${this.desarrollador}</li>
    </ul>`)
}
}

// -------------- notación literal ---------------

const usuario = {
  // propirdades clave: valor
  nombre: "Thiago",
  apellido: "Fiol",
  edad: 14,
  correo: "thiago@gmail.com",
  password: "12345Ab@",
  // metodos
  login: function () {
    // este this devuelve una referencia a mi objeto usuario
    console.log(this)
    document.write(`<p>El usuario ${this.nombre}, inició sesión</p>`);
  },
//   este this no devuelve el objeto, devuelve el objeto window
  logout: function () {
    document.write(`<p>El usuario cerró sesión</p>`);
  },
};

// -------------- mostrar un objeto ---------------
console.log(usuario);
document.write(usuario);
document.write(`<h1>Usuario: ${usuario.nombre}, ${usuario.apellido}</h1>`);
document.write(`<p>Correo: ${usuario["correo"]}</p>`);

// -------------- modificar la propiedad de un objeto ---------------
usuario.edad = usuario.edad + 1; // usuario.edad ++ (otra forma de realizarlo)
document.write(`<p>Edad: ${usuario.edad}</p>`);

// -------------- agregar una propiedad a un objeto ---------------
usuario.perfil = "alguna foto";
document.write(`<p>Perfil: ${usuario.perfil}</p>`);

// -------------- cuidado con las propiedades mal escritas o que no existen ---------------
document.write(`<p>Tel: ${usuario.Nombre}</p>`);

// -------------- borrar una propiedad del objeto ---------------
delete usuario.perfil;
console.log(usuario);

// -------------- metodo para saber si mi objeto tiene una propiedad ---------------
console.log(usuario.hasOwnProperty("edad"));

// -------------- invocar un metodo del objeto ---------------
usuario.login();
usuario.logout()
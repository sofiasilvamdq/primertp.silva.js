class Usuario {
    constructor(nombre, apellido, username, password, saldo ) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.username = username;
        this.password = password;
        this.saldo = saldo;
    }
}


const arrayUsuarioNuevo = [];

const formularioNuevoUsuario = document.getElementById("formularioNuevoUsuario");

formularioNuevoUsuario.addEventListener("submit", (e)=>{
    e.preventDefault();

    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const username = document.getElementById("username");
    const password = document.getElementById("password");
   
 
    const cliente = new Usuario(nombre.value, apellido.value, username.value, password.value);
    arrayUsuarioNuevo.push(cliente);
    console.log(arrayUsuarioNuevo);
    formularioNuevoUsuario.reset();

const clienteJSON = JSON.stringify(arrayUsuarioNuevo);
console.log(clienteJSON, typeof clienteJSON);

localStorage.setItem("usuario", clienteJSON);

const usuarioGuardadoJSON = localStorage.getItem("usuario");

const usuarioRegistrado = JSON.parse(usuarioGuardadoJSON);

console.log(usuarioRegistrado, typeof usuarioRegistrado);


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', enviar); 
  });

function enviar(evento) {
    evento.preventDefault();
    var usuario = document.getElementById('usuario').value;
    if(usuario = true) {
  window.location.href="/index.html"
    }
 
    this.submit();
  }


})
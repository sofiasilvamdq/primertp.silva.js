class Usuario {
    constructor(nombre, apellido, alias, clave, saldo ) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.alias = alias;
        this.clave = clave;
        this.saldo = saldo;
    }
}



const arrayUsuarioNuevo = [];

const formularioNuevoUsuario = document.getElementById("formularioNuevoUsuario");

formularioNuevoUsuario.addEventListener("submit", (e)=>{
    e.preventDefault();

    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const alias = document.getElementById("alias");
    const clave = document.getElementById("clave");
   
 
    const cliente = new Usuario(nombre.value, apellido.value, alias.value, clave.value);
    arrayUsuarioNuevo.push(cliente);
    console.log(arrayUsuarioNuevo);
    formularioNuevoUsuario.reset();

const clienteJSON = JSON.stringify(arrayUsuarioNuevo);
console.log(clienteJSON, typeof clienteJSON);

localStorage.setItem("usuario", clienteJSON);

const usuarioGuardadoJSON = localStorage.getItem("usuario");

const usuarioRegistrado = JSON.parse(usuarioGuardadoJSON);

console.log(usuarioRegistrado, typeof usuarioRegistrado);

})
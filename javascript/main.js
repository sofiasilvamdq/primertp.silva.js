class Usuario {
    constructor(nombre, apellido, alias, clave, ) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.alias = alias;
        this.clave = clave;
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



const usuarioJSON = localStorage.getItem("usario");

const usuarioObjeto = JSON.parse(usuarioJSON);

console.log(usuarioObjeto, typeof usuarioObjeto);

const contenedorUsuarioNuevo = document.getElementById("formularioNuevoUsuario")

usuarioObjeto.forEach(usuario => {
    contenedorUsuarioNuevo.innerHTML += `<p> ${usuario.nombre} - ${usuario.alias} </p>`;
});

})
/*class Usuario {
    constructor(nombre, alias, clave, saldo) {
        this.nombre = nombre;
        this.alias = alias;
        this.clave = clave;
        this.saldo = saldo;
    }
}

const cliente1 = new Usuario("Rodrigo", "Rodri90", "Chapa", 27000);
const cliente2 = new Usuario("Sofia", "Sofi91", "Plato", 15000);
const cliente3 = new Usuario("Benicio", "Beni25", "Roblox", 9000);

const arrayUsuarios = [cliente1, cliente2, cliente3];


console.log("Usuarios activos: ");
console.log(arrayUsuarios);


const usuario = arrayUsuarios.find(usuario => usuario.alias === "Rodri90");

const usuarioAutorizado = "2";
const claveAutorizada = "1234";
const saldoInicial = 37000;

arrayUsuarios.forEach((usuario) => { 
    let usuarioIngresado = prompt("Ingrese su nombre de Usuario:");
    if (usuarioIngresado === usuario.alias) {
        for(let i = 0 ; i < 3 ; i++) {
            let claveIngresada = prompt("Bienvenido/a " + usuario.nombre + ". Ingresa tu Clave:");
            if (claveIngresada === usuario.clave) {
                for(let i = 0 ; i < 1 ; i++) {
                let saldoRetirado = parseInt(prompt("Saldo disponible: $" + usuario.saldo + ". Ingrese el monto a retirar: "))
                let saldoDisponible = resta(usuario.saldo, saldoRetirado)
                if (saldoRetirado <= usuario.saldo) {
                    saldoRetirado = alert("Quedan $" + saldoDisponible + " en su cuenta")  
                } else { saldoRetirado = alert("¡ERROR! Saldo insuficiente para realizar la operación")}
            break;
             };} else { claveIngresada = prompt("¡CONTRASEÑA INCORRECTA! Intente una vez más:")
             if (claveIngresada === usuario.clave) {
                for(let i = 0 ; i < 1 ; i++) {
                let saldoRetirado = parseInt(prompt("Saldo disponible: $" + usuario.saldo + ". Ingrese el monto a retirar: "))
                let saldoDisponible = resta(usuario.saldo, saldoRetirado)
                if (saldoRetirado <= usuario.saldo) {
                    saldoRetirado = alert("Quedan $" + saldoDisponible + " en su cuenta. Muchas gracias.")  
                } else { saldoRetirado = alert("¡ERROR! Saldo insuficiente para realizar la operación")}
            break;
             };}
            break;
  
  
        }
        
        }

    ;
    } else {
    usuarioIngresado = alert("¡Usuario incorrecto!");
    }
});


function resta(valorA, valorB) {
    let resultado = valorA - valorB;
    return resultado;

 }*/

 function Usuario (nombre, apellido, alias, clave, ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.alias = alias;
    this.clave = clave;
}


const arrayUsuarioNuevo = [];

const formularioNuevoUsuario = document.getElementById("formularioNuevoUsuario");

formularioNuevoUsuario.addEventListener("submit", (e)=>{
e.preventDefault();

const nombre = document.getElementById("nombre").value;
const apellido = document.getElementById("apellido").value;
const alias = document.getElementById("alias").value;
const clave = document.getElementById("clave").value;

const usuario = new Usuario(nombre, apellido, alias, clave);
arrayUsuarioNuevo.push(usuario);
console.log(arrayUsuarioNuevo);
 formularioNuevoUsuario.reset();
})

const usuarioNuevoJSON = JSON.stringify(formularioNuevoUsuario);
console.log(usuarioNuevoJSON, typeof usuarioNuevoJSON);


localStorage.setItem("usuario", usuarioNuevoJSON);

const usuarioRecuperado = localStorage.getItem("usario");

const usuarioObjeto = JSON.parse(usuarioRecuperado);

console.log(usuarioObjeto, typeof usuarioObjeto);











const usuarioAutorizado = "Coder";
const claveAutorizada = "1234";
let saldoInicial = 37000;
let saldoRetirado = saldoRetirado;





for(let i = 0 ; i < 3 ; i++) {
    let usuarioIngresado = prompt("Ingrese su nombre de Usuario:");
    if (usuarioIngresado === usuarioAutorizado) {
        for(let i = 0 ; i < 3 ; i++) {
            let claveIngresada = prompt("Ingrese su Clave:");
            if (claveIngresada === claveAutorizada) {
                let saldoRetirado = parseInt(prompt("Saldo disponible: $" + saldoDisponible + " Ingrese el monto a retirar: "))
                if (saldoRetirado < saldoDisponible) {
                    saldoRetirado = alert("Quedan $" + saldoDisponible + " en su cuenta")  
                } else { saldoRetirado = alert("Saldo no disponible")}
            break;
        }
        
        }

    break;
    } else {
    usuarioIngresado = alert("¡Usuario incorrecto!");
    }
}

function resta(valorA, valorB) {
    let resultado = valorA - valorB;
    return resultado;
} 

 let saldoDisponible = resta(saldoInicial, saldoRetirado);
 console.log (resultado);













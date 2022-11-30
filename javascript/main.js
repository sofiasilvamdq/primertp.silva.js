// CALCULAMOS INDICE DE MASA CORPORAL 

let peso = parseInt(prompt("Ingrese su peso"));
let altura = parseInt(prompt("Ingrese su altura"));

let imc = peso/ (altura * altura);

console.log("El indice de masa corporal es de: "+ (imc * 10000).toFixed(2));














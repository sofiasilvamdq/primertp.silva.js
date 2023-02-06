const usuarioLogueadoJSON = localStorage.getItem("usuarioLogueado")

const usuarioLogueado = JSON.parse(usuarioLogueadoJSON);

const usuarioGuardadoJSON = localStorage.getItem("usuario")
const usuarioGuardado = JSON.parse(usuarioGuardadoJSON)
console.log(usuarioLogueado, typeof usuarioLogueado)
console.log(usuarioGuardado, typeof usuarioGuardado)
const indiceBuscado = (usuarioGuardado.find(usuarioGuardado => usuarioGuardado === usuarioLogueado))
console.log(indiceBuscado)

const nombreLogin = document.getElementById("nombreUsuario"); nombreLogin.innerHTML = usuarioLogueado.name;
if (usuarioLogueado.apellido) {
  const apellidoLogin = document.getElementById("apellidoUsuario"); apellidoLogin.innerHTML = usuarioLogueado.apellido;
}
const mostrarSaldo = document.getElementById("consultaSaldo");

consultaSaldo.addEventListener("click", () => {
  let saldoUsuario = parseInt(usuarioLogueado.saldo)
  swal.fire({
    title: "Saldo disponible",
    html:
      `<h1>Total:$${(saldoUsuario.toFixed(2))}</h1>`,

    confirmButtonText: 'Aceptar',
    background: "YellowGreen",
  })
})





retirarSaldo.addEventListener("click", () => {
  swal.fire({

    title: "Ingrese el monto a retirar:",
    html:
      '<input tipe ="number" id = "montoRetirado" class= "smal2-input" placeholder = "saldo en pesos"></input>',
    confirmButtonText: 'Ingresar',
    showCancelButton: true,
    cancelButtonText: 'Cancelar',
    background: "YellowGreen",
  }).then((result) => {
    if (result.isConfirmed) {
      const montoRetirado = document.getElementById("montoRetirado").value;
      const montoRetiradoNum = parseInt(montoRetirado)
      if (montoRetirado <= usuarioLogueado.saldo) {
        let saldoDisponible = (usuarioLogueado.saldo - montoRetiradoNum)
        usuarioLogueado.saldo = saldoDisponible
        console.log(usuarioLogueado)
        const usuarioSaldoModifJSON = JSON.stringify(usuarioLogueado);
        localStorage.setItem("usuarioLogueado", usuarioSaldoModifJSON);
        let usuarioLogueadoModif = JSON.parse(usuarioLogueadoModifJSON);
        console.log(usuarioLogueadoModif, typeof usuarioLogueadoModif);
        let nuevoSaldo = usuarioLogueado.saldo;
        console.log(nuevoSaldo)
        let usuarioObjeto = usuarioLogueado.username;
        console.log(usuarioObjeto)
        usuarioGuardado.map(function (dato) {
          if (dato.username == usuarioObjeto) {
            dato.saldo = nuevoSaldo;
          }
          return dato;
        })
        const nuevoUsuarioRegistrado = JSON.stringify(usuarioGuardado)
        localStorage.setItem("usuario", nuevoUsuarioRegistrado)
        let timerInterval
        Swal.fire({
          title: '¡Operación exitosa!',
          html: 'podrá visualisar el saldo actualizado pulsando el boton "Saldo"',
          timer: 5000,
          timerProgressBar: true,
          background: "YellowGreen",
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
          }
        });
      }
      else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Saldo insuficiente para realizar la operación',
          background: "YellowGreen",
        })
      }
    }
  })
})

ingresarSaldo.addEventListener("click", () => {
  swal.fire({

    title: "Ingrese el monto a depositar:",
    html:
      '<input tipe ="number" id = "montoIngresado" class= "smal2-input" placeholder = "saldo en pesos"></input>',
    confirmButtonText: 'Ingresar',
    showCancelButton: true,
    cancelButtonText: 'Cancelar',
    background: "YellowGreen",
  }).then((result) => {
    if (result.isConfirmed) {
      const montoIngresado = document.getElementById("montoIngresado").value;

      if (isNaN(montoIngresado)) {

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Por favor ingrese un Número',
          background: "YellowGreen",
        });
      } else {
        if (montoIngresado % 1 == 0) {
          const montoIngresadoNum = parseInt(montoIngresado)
          let saldoDisponible = (usuarioLogueado.saldo + montoIngresadoNum)
          const saldoIngresado = document.getElementById("montoIngresado").value;
          usuarioLogueado.saldo = saldoDisponible
          console.log(usuarioLogueado)
          const usuarioSaldoModifJSON = JSON.stringify(usuarioLogueado);
          localStorage.setItem("usuarioLogueado", usuarioSaldoModifJSON);
          let usuarioLogueadoModif = JSON.parse(usuarioLogueadoModifJSON);
          console.log(usuarioLogueadoModif, typeof usuarioLogueadoModif);
          let nuevoSaldo = usuarioLogueado.saldo;
          console.log(nuevoSaldo)
          let usuarioObjeto = usuarioLogueado.username;
          console.log(usuarioObjeto)
          usuarioGuardado.map(function (dato) {
            if (dato.username == usuarioObjeto) {
              dato.saldo = nuevoSaldo;
            }
            return dato;
          })
          const nuevoUsuarioRegistrado = JSON.stringify(usuarioGuardado)
          localStorage.setItem("usuario", nuevoUsuarioRegistrado)

          let timerInterval
          Swal.fire({
            title: 'El monto ha sido ingresado',
            html: 'Porá Visualizarlo ingresando<b></b> al menú "SALDO"',
            timer: 5000,
            timerProgressBar: true,
            background: "YellowGreen",
          }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
              console.log('I was closed by the timer')
            }
          });
        } else {

          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'el valor ingresado no es correcto',
            background: "YellowGreen",
          });
        }
      }
    }
  }
  )
})

const usuarioRegistradoJSON = localStorage.getItem("usuario")
const usuarioSaldoModifJSON = JSON.stringify(usuarioLogueado);
localStorage.setItem("usuarioLogueado", usuarioSaldoModifJSON);
let usuarioLogueadoModifJSON = localStorage.getItem("usuarioLogueado");
let usuarioLogueadoModif = JSON.parse(usuarioLogueadoModifJSON);
console.log(usuarioLogueadoModif, typeof usuarioLogueadoModif);
let nuevoSaldo = usuarioLogueado.saldo;
console.log(nuevoSaldo)
let usuarioObjeto = usuarioLogueado.username;
console.log(usuarioObjeto)

usuarioGuardado.map(function (dato) {
  if (dato.username == usuarioObjeto) {
    dato.saldo = nuevoSaldo;
  }
  return dato;
});
console.log(usuarioGuardado)
const nuevoUsuarioRegistrado = JSON.stringify(usuarioGuardado)
localStorage.setItem("usuario", nuevoUsuarioRegistrado)

function resta(valorA, valorB) {
  let resultado = valorA - valorB;
  return resultado;
}

function suma(valorA, valorB) {
  let resultado = valorA + valorB;
  return resultado;
}


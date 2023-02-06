class Usuario {
  constructor(name, apellido, username, password, saldo) {
      this.name = name;
      this.apellido = apellido;
      this.username = username;
      this.password = password;
      this.saldo = saldo;
  }
}

const verificarExistente = (localStorage.getItem("usuario"))
if (verificarExistente) {
  console.log("los usuarios ya fueron cargados en la base de datos anteriormente");
  const usuarioGuardadoApiJSON = localStorage.getItem("usuario");
  const usuarioRegistrado = JSON.parse(usuarioGuardadoApiJSON);
  console.log(usuarioRegistrado, typeof usuarioRegistrado);
  console.log("nombres de usuarios registrados: ");
  console.table(usuarioRegistrado.map(usuarioRegistrado => usuarioRegistrado.username))
} else {
  console.log("se cargaron los usuarion por primera vez");
  fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(buscarUsuarios);
  function buscarUsuarios(datos) {
      const arrayUsersApi = datos;
      arrayUsersApi[0].password = "0123"
      arrayUsersApi[0].saldo = "0"
      arrayUsersApi[1].password = "1234"
      arrayUsersApi[1].saldo = "500"
      arrayUsersApi[2].password = "2345"
      arrayUsersApi[2].saldo = "300"
      arrayUsersApi[3].password = "3456"
      arrayUsersApi[3].saldo = "10800"
      arrayUsersApi[4].password = "4567"
      arrayUsersApi[4].saldo = "650"
      arrayUsersApi[5].password = "5678"
      arrayUsersApi[5].saldo = "323"
      arrayUsersApi[6].password = "4321"
      arrayUsersApi[6].saldo = "27"
      arrayUsersApi[7].password = "5432"
      arrayUsersApi[7].saldo = "1300"
      arrayUsersApi[8].password = "6543"
      arrayUsersApi[8].saldo = "6830"
      arrayUsersApi[9].password = "7654"
      arrayUsersApi[9].saldo = "99940"
      const clienteApiJSON = JSON.stringify(arrayUsersApi);
      localStorage.setItem("usuario", clienteApiJSON);
      const usuarioGuardadoApiJSON = localStorage.getItem("usuario");
      const usuarioRegistrado = JSON.parse(usuarioGuardadoApiJSON);
      console.log(usuarioRegistrado, typeof usuarioRegistrado);
      console.log("nombres de usuarios registrados: ");
      console.table(usuarioRegistrado.map(usuarioRegistrado => usuarioRegistrado.username))
  }
}



const arrayUsuarioNuevo = [];

if (document.getElementById("formularioNuevoUsuario")) {


  const formularioNuevoUsuario = document.getElementById("formularioNuevoUsuario");
  formularioNuevoUsuario.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name");
      const apellido = document.getElementById("apellido");
      const username = document.getElementById("username");
      const password = document.getElementById("password");
      let saldo = 0;
      const cliente = new Usuario(name.value, apellido.value, username.value, password.value, saldo);
      arrayUsuarioNuevo.push(cliente);
      console.log(arrayUsuarioNuevo);
      formularioNuevoUsuario.reset();


      const usuarioExistenteJSON = localStorage.getItem("usuario");
      const usuarioExistente = JSON.parse(usuarioExistenteJSON)
      const agregarUsuario = usuarioExistente.concat(arrayUsuarioNuevo);
      localStorage.setItem('usuario', JSON.stringify(agregarUsuario))

      document.addEventListener("DOMContentLoaded", function () {
          document.getElementById("formulario").addEventListener('submit', enviar);
      });



      function enviar(evento) {
          evento.preventDefault();
          return true;

      } if (enviar = true) {

          swal.fire({
              title: 'Usuario creado correctamente',
          text: 'Será redirigido a la página principal',
          background: "YellowGreen",
          backdrop: "Teal",
          })
          setTimeout(() => {
              window.location.href = "/index.html";
          }, 5000)
      }
  });
}

function buscarUsuario() {
  const usuarioRegistrado = JSON.parse(localStorage.getItem("usuario"))
  const usuarioBuscado = (usuarioRegistrado.find(usuarioRegistrado => usuarioRegistrado.username))
  console.log(usuarioBuscado)
  if (usuarioIngresado === usuarioRegistrado.username) {
      return;
  }
}

const botonIniciodeSesion = document.getElementById("botonIniciodeSesion")

function foco(username) {
  document.getElementById(username).focus();
}

if (botonIniciodeSesion) {
  botonIniciodeSesion.addEventListener("click", () => {
      swal.fire({

          title: "LOGIN",
          html:
              '<input tipe = "text" id = "username" class= "smal2-input" placeholder= "usuario" ></input>',

          confirmButtonText: 'Ingresar',
          showCancelButton: true,
          cancelButtonText: 'Cancelar',
          background: "YellowGreen",
          backdrop: "Teal",

      }).then((result) => {
          if (result.isConfirmed) {
              const usuarioIngresado = document.getElementById("username").value;
              const usuarioRegistrado = JSON.parse(localStorage.getItem("usuario"))
              console.log(usuarioRegistrado.username)
              console.log(usuarioIngresado)
              if (usuarioRegistrado.find(usuarioRegistrado => usuarioRegistrado.username === usuarioIngresado)) {
                  const usuarioBuscado = (usuarioRegistrado.find(usuarioRegistrado => usuarioRegistrado.username === usuarioIngresado))
                  console.log(usuarioBuscado)
                  console.log("la contraseña para acceder es : ", usuarioBuscado.password);
                  swal.fire({
                      title: "INGRESE SU CLAVE",
                      html:
                          '<input tipe ="password" id = "clave" class= "smal2-input" placeholder ="contraseña"></input>',
                      confirmButtonText: 'Ingresar',
                      showCancelButton: true,
                      cancelButtonText: 'Cancelar',
                      background: "YellowGreen",
                      backdrop: "Teal",
                  }).then((result) => {
                      if (result.isConfirmed) {
                          const claveIngresada = document.getElementById("clave").value;
                          if (claveIngresada === usuarioBuscado.password) {
                              const clienteLogueadoJSON = JSON.stringify(usuarioBuscado);
                              localStorage.setItem("usuarioLogueado", clienteLogueadoJSON);
                              window.location.href = "/paginas/ingresoCuenta.html"
                          } else {
                              swal.fire({
                                  title: "Contraseña incorrecta, intente nuevamente",
                                  html:
                                      '<input tipe ="password" id = "clave" class= "smal2-input" placeholder = "contraseña"></input>',
                                  confirmButtonText: 'Ingresar',
                                  showCancelButton: true,
                                  cancelButtonText: 'Cancelar',
                                  background: "YellowGreen",
                                  backdrop: "Teal",
                              }).then((result) => {
                                  if (result.isConfirmed) {
                                      const claveIngresada = document.getElementById("clave").value;
                                      if (claveIngresada === usuarioBuscado.password) {
                                          const clienteLogueadoJSON = JSON.stringify(usuarioBuscado);
                                          localStorage.setItem("usuarioLogueado", clienteLogueadoJSON);
                                          window.location.href = "/paginas/ingresoCuenta.html"
                                      }


                                  }
                              })
                          }
                      }
                  })

              } else {
                  swal.fire({
                      title: "El usuario ingresado no existe en nuestra base de datos",
                  })
              }
          }
      })
  })
}
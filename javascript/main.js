class Usuario {
  constructor(nombre, apellido, username, password, saldo ) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.username = username;
      this.password = password;
      this.saldo = saldo;
  }
}
const arrayUsuariosPorDefecto = []

const usuarioPorDefecto1 = new Usuario("User1", "User1", "User1", "password", 0);
const usuarioPorDefecto2 = new Usuario("User2", "User2", "User2", "password", 0);
arrayUsuariosPorDefecto.push(usuarioPorDefecto1, usuarioPorDefecto2);
const usuarioPorDefectoJSON = JSON.stringify(arrayUsuariosPorDefecto);
console.log(usuarioPorDefectoJSON, typeof usuarioPorDefectoJSON);

localStorage.setItem("usuario", usuarioPorDefectoJSON);


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




document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("formulario").addEventListener('submit', enviar); 
});



function enviar(evento) {
  evento.preventDefault();
  return true;

} if(enviar=true){

  swal.fire({
    icon:'ok',
    title: "Usuario creado correctamente, será redirigido a la página principal",
    background: "YellowGreen",
    backdrop: "Teal",
      
  })
  setTimeout(()=> {
    window.location.href = "/paginas/ingreso.html";
}, 5000)
}






});
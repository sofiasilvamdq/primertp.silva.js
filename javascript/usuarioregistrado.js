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

const usuarioGuardadoJSON = localStorage.getItem("usuario");

const usuarioRegistrado = JSON.parse(usuarioGuardadoJSON);

console.log(usuarioRegistrado, typeof usuarioRegistrado);
 

console.log(usuarioRegistrado.find(usuarioRegistrado => usuarioRegistrado.username))


const botonIniciodeSesion = document.getElementById("botonIniciodeSesion")


botonIniciodeSesion.addEventListener("click", () => {
    swal.fire({
        title: "LOGIN",
        html:
            '<input tipe = "text" id = "username" class= "smal2-input" placeholder= "usuario"></input>',

        confirmButtonText: 'Ingresar',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        background: "YellowGreen",
        backdrop: "Teal",

    }).then((result) => {
        if (result.isConfirmed) {
            fetch("https://dummyjson.com/users")
                .then((res) => res.json())
                .then(buscarUsuarios);

            function buscarUsuarios(datos) {
                console.log(typeof datos);

                const arrayUsersApi = datos;

                console.log(arrayUsersApi)

                const clienteApiJSON = JSON.stringify(arrayUsersApi.users);
                console.log(clienteApiJSON, typeof clienteApiJSON);

                localStorage.setItem("usuarioApi", clienteApiJSON);

                const usuarioGuardadoApiJSON = localStorage.getItem("usuarioApi");

                const usuarioRegistradoApi = JSON.parse(usuarioGuardadoApiJSON);

                console.log(usuarioRegistradoApi, typeof usuarioRegistradoApi);




                const usuarioIngresado = document.getElementById("username").value;
                if ((usuarioRegistradoApi.find(usuarioRegistradoApi => usuarioRegistradoApi.username === usuarioIngresado)) || (usuarioRegistrado.find(usuarioRegistrado => usuarioRegistrado.username === usuarioIngresado))) {
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
                            if ((usuarioRegistrado.find(usuarioRegistrado => usuarioRegistrado.password === claveIngresada)) || (usuarioRegistradoApi.find(usuarioRegistradoApi => usuarioRegistradoApi.password === claveIngresada)))
                                for (let i = 0; i < 1; i++) {
                                    window.location.href = "/paginas/ingresoCuenta.html"
                                } else {
                                swal.fire({
                                    icon:'error',
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
                                        if ((usuarioRegistrado.find(usuarioRegistrado => usuarioRegistrado.password === claveIngresada)) || (usuarioRegistradoApi.find(usuarioRegistradoApi => usuarioRegistradoApi.password === claveIngresada))) { window.location.href = "/paginas/ingresoCuenta.html" }


                                    }
                                })
                            }
                        }
                    })

                } else {
                    swal.fire({
                        icon:'error',
                        title: 'El usuario ingresado no existe en nuestra base de datos',
                        background: "YellowGreen",
                        backdrop: "Teal",
                        confirmButtonColor: '#3085d6',  
                        
                    })
                }
            }
        }
    })
})
/* DECLARACION DE FUNCIONES */
const usuario = { nombre: "luis", clave: "123" };
const arrayUsuario = [usuario];

function bienvenida() {
    alert("Bienvenidos a MyO Artesanal");
}



function ingresoUsuarios() {

    let existeUsuario = parseInt(prompt("Tiene una cuenta?\n1) Iniciar Sesión.\n2) Crear Cuenta."));

    if (existeUsuario === 1) {
    accesoExistoso = inicioSesion();
    } else {
        crearCuenta();
    }
    
    return accesoExistoso;
}

function inicioSesion() {

    let user = prompt("Ingrese su nombre de usuario:");
    user = user.toLowerCase();
    let pass = prompt("Ingrese su clave:");
    pass = pass.toLowerCase();

    let acceso = verificaUsuario(user, pass);
    return acceso;
}



function verificaUsuario(user, pass) {
    let existeUsuario = false;
    let existeClave = false;
    let usuarioValido = false;

    for (const usuario of arrayUsuario) {
        alert("buscando usuario");

        existeUsuario = usuario.nombre.includes(user);
        existeClave = usuario.clave.includes(pass);
        console.log(existeUsuario);
        console.log(existeClave);

        if(existeUsuario === true && existeClave === true){

            usuarioValido = true;
        }else{
            alert("No se encontro el usuario y la contraseña");
        }
    }
        console.log(usuarioValido);
        return usuarioValido;

}
    function menu() {

        let preguntaMenu = parseInt(prompt("Seleccione el numero de la Categoria que desea mirar: \n1) Macetas.\n2) Fuentes de agua.\n3) Bebederos de aves.\n4) Adornos de jardin.\n5) Salir del sistema"));

        switch (preguntaMenu) {
            case 1:

                break;
            case 2:

                break;
            case 3:

                break;
            case 4:

                break;
            case value:

                break;

            default:
                break;
        }
    }






    /* INICIO DEL SISTEMA */


    /* DECLARACION DE ARRAYS */
    const producto = { categoria: "maceta", codigo: 001, precio: 200, color: "verde" };
    const arrayProducto = [producto];



    const carrito = { categoria: null, codigo: null, precio: null, color: null };

    /* const carrito = [];} */

    let accesoExistoso;

    do {

        bienvenida();
        ingresoUsuarios();


    } while (accesoExistoso != true);
    alert("Acceso exitoso!")

    menu();
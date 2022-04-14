/* DECLARACION DE FUNCIONES */

function bienvenida() {
    alert("Bienvenidos a MyO Artesanal");
}



function ingresoUsuarios() {

    let existeUsuario = parseInt(prompt("Tiene una cuenta?\n1) Iniciar Sesión.\n2) Crear Cuenta."));

    if (existeUsuario === 1) {
        inicioSesion();
    } else {
        crearCuenta();
    }
}

function inicioSesion() {

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

const objeto1 = { id: 1, producto: "Arroz" };
const array = [objeto1, { id: 2, producto: "Fideo" }];

/* DECLARACION DE ARRAY */
const producto = { categoria: "maceta", codigo: 001, precio: 200, color: "verde" };
const arrayProducto = [producto];

const usuario = { nombre: "luis", clave: 123 };
const arrayUsuario = [usuario];

const carrito = [];}

do {

    bienvenida();
    ingresoUsuarios();


} while (usuarioValido != 0);


menu();
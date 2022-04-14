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

function crearCuenta(){
    
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

        if (existeUsuario === true && existeClave === true) {

            usuarioValido = true;
        } else {
            alert("No se encontro el usuario y la contraseña");
        }
    }
    console.log(usuarioValido);
    return usuarioValido;

}
function menu() {

    let preguntaMenu = parseInt(prompt("Seleccione el numero de la Categoria que desea mirar: \n1) Macetas.\n2) Fuentes de agua.\n3) Bebederos de aves.\n4) Adornos de jardin.\n5) Salir del sistema"));

    switch (preguntaMenu) {
        case 1: {


            const resultado = arrayProducto.filter(producto => producto.categoria === "MACETA")
            console.log(resultado);
            menu();

        }
            break;
        case 2: {
            const resultado = arrayProducto.filter(producto => producto.categoria === "FUENTE")
            console.log(resultado);
            menu();
        }

            break;
        case 3:{
            const resultado = arrayProducto.filter(producto => producto.categoria === "BEBEDERO")
            console.log(resultado);
            menu();
        }

            break;
        case 4:{
            const resultado = arrayProducto.filter(producto => producto.categoria === "ADORNO")
            console.log(resultado);
            menu();
        }

            break;
        case 5:{

            alert("FIN DEL PROGRAMA. GRACIAS!")
        }

            break;

        default:
            break;
    }
}






/* INICIO DEL SISTEMA */


/* DECLARACION DE ARRAYS */
class producto {
    constructor(categoria, codigo, precio, color) {
        this.categoria = categoria.toUpperCase();
        this.codigo = parseInt(codigo);
        this.precio = parseFloat(precio);
        this.color = color.toUpperCase();
    }
}
const arrayProducto = [];
arrayProducto.push(new producto("Maceta", "001", "200", "verde"));
arrayProducto.push(new producto("Maceta", "002", "300", "roja"));
arrayProducto.push(new producto("Maceta", "003", "500", "azul"));
arrayProducto.push(new producto("Maceta", "004", "900", "marron"));
arrayProducto.push(new producto("Fuente", "005", "300", "rosa"));
arrayProducto.push(new producto("Fuente", "006", "100", "violeta"));
arrayProducto.push(new producto("Fuente", "007", "1000", "roja"));
arrayProducto.push(new producto("Fuente", "008", "400", "cemento"));
arrayProducto.push(new producto("Bebedero", "009", "1500", "roja"));
arrayProducto.push(new producto("Bebedero", "010", "1400", "cemento"));
arrayProducto.push(new producto("Adorno", "011", "1200", "azul"));
arrayProducto.push(new producto("Adorno", "012", "700", "verde"));




const carrito = { categoria: null, codigo: null, precio: null, color: null };

/* const carrito = [];} */

let accesoExistoso;

do {

    bienvenida();
    ingresoUsuarios();


} while (accesoExistoso != true);
alert("Acceso exitoso!")

menu();
const carro = new Carrito();
const carrito = document.getElementById('carrito');
const productos = document.getElementById('lista-productos');
const listaProductos = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
const procesarPedidoBtn = document.getElementById('procesar-pedido');

cargarEventos();

function cargarEventos(){

    //Se ejecuta cuando se presionar agregar carrito
    productos.addEventListener('click', carro.comprarProducto);

    //Cuando se elimina productos del carrito
    carrito.addEventListener('click',carro.eliminarProducto);

    //Al vaciar carrito
    vaciarCarritoBtn.addEventListener('click', carro.vaciarCarrito);

    //Al cargar documento se muestra lo almacenado en LS
    document.addEventListener('DOMContentLoaded', carro.leerLocalStorage);

    //Enviar pedido a otra pagina
    procesarPedidoBtn.addEventListener('click', carro.procesarPedido);
}
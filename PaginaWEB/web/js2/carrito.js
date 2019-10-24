var carrito = document.getElementById('carrito');
var productos = document.getElementById('lista-productos');
var listaProductos = document.querySelector('#lista-carrito tbody');
var vaciarCarritoBtn = document.getElementById('vaciar-carrito');
var procesarPedidoBtn = document.getElementById('procesar-pedido');

//variavlesmas

var listaCompra = document.querySelector("#lista-compra tbody");

var procesarCompraBtn = document.getElementById('procesar-compra');
var  cliente = document.getElementById('cliente');
var  correo = document.getElementById('correo');





cargarEventos();

function cargarEventos() {

    //Se ejecuta cuando se presionar agregar carrito
    productos.addEventListener('click', comprarProducto);

    //Cuando se elimina productos del carrito
    carrito.addEventListener('click', eliminarProducto);

    //Al vaciar carrito
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

    //Al cargar documento se muestra lo almacenado en LS
    document.addEventListener('DOMContentLoaded', leerLocalStorage);

    //Enviar pedido a otra pagina
    procesarPedidoBtn.addEventListener('click', procesarPedido);


    //+funciones

    document.addEventListener('DOMContentLoaded', leerLocalStorageCompra);

    //Eliminar productos del carrito
    carrito.addEventListener('click', eliminarProducto);

    calcularTotal();






}









//Añadir producto al carrito
function comprarProducto(e) {
    e.preventDefault();
    //Delegado para agregar al carrito
    if (e.target.classList.contains('agregar-carrito')) {
        var producto = e.target.parentElement.parentElement;
        //Enviamos el producto seleccionado para tomar sus datos
        leerDatosProducto(producto);
    }
}

//Leer datos del producto
function leerDatosProducto(producto) {
    var infoProducto = {
        imagen: producto.querySelector('img').src,
        titulo: producto.querySelector('h4').textContent,
        precio: producto.querySelector('.precio span').textContent,
        id: producto.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    };
    var productosLS;
    productosLS = obtenerProductosLocalStorage();
    productosLS.forEach(function (productoLS) {
        if (productoLS.id === infoProducto.id) {
            productosLS = productoLS.id;
        }
    });

    if (productosLS === infoProducto.id) {
        return"el producto ya esta agregado";
    } else {
        insertarCarrito(infoProducto);
    }

}

//muestra producto seleccionado en carrito
function insertarCarrito(producto) {
    var row = document.createElement('tr');
    row.innerHTML =`
            <td>
                <img src="${producto.imagen}" width=100>
            </td>
            <td>${producto.titulo}</td>
            <td>${producto.precio}</td>
            <td>
                <a href="#" class="borrar-producto fas fa-times-circle" data-id="${producto.id}"></a>
            </td>
        `;
    listaProductos.appendChild(row);
    guardarProductosLocalStorage(producto);

}

//Eliminar el producto del carrito en el DOM
function  eliminarProducto(e) {
    e.preventDefault();
    let producto, productoID;
    if (e.target.classList.contains('borrar-producto')) {
        e.target.parentElement.parentElement.remove();
        producto = e.target.parentElement.parentElement;
        productoID = producto.querySelector('a').getAttribute('data-id');
    }
    eliminarProductoLocalStorage(productoID);
    //calcularTotal();

}

//Elimina todos los productos
function vaciarCarrito(e) {
    e.preventDefault();
    while (listaProductos.firstChild) {
        listaProductos.removeChild(listaProductos.firstChild);
    }
    vaciarLocalStorage();

    return false;
}

//Almacenar en el LS
function  guardarProductosLocalStorage(producto) {
    let productos;
    //Toma valor de un arreglo con datos del LS
    productos = obtenerProductosLocalStorage();
    //Agregar el producto al carrito
    productos.push(producto);
    //Agregamos al LS
    localStorage.setItem('productos', JSON.stringify(productos));
}

//Comprobar que hay elementos en el LS
function  obtenerProductosLocalStorage() {
    let productoLS;

    //Comprobar si hay algo en LS
    if (localStorage.getItem('productos') === null) {
        productoLS = [];
    } else {
        productoLS = JSON.parse(localStorage.getItem('productos'));
    }
    return productoLS;
}

//Mostrar los productos guardados en el LS
function leerLocalStorage() {
    let productosLS;
    productosLS = obtenerProductosLocalStorage();
    productosLS.forEach(producto => {
        //Construir plantilla
        const row = document.createElement('tr');
        row.innerHTML = `
                <td>
                    <img src="${producto.imagen}" width=100>
                </td>
                <td>${producto.titulo}</td>
                <td>${producto.precio}</td>
                <td>
                    <a href="#" class="borrar-producto fas fa-times-circle" data-id="${producto.id}"></a>
                </td>
            `;
        listaProductos.appendChild(row);
    });
}

//Mostrar los productos guardados en el LS en compra.html
function leerLocalStorageCompra() {
    let productosLS;
    productosLS = obtenerProductosLocalStorage();
    productosLS.forEach(producto => {
        const row = document.createElement('tr');
        row.innerHTML = `
                <td>
                    <img src="${producto.imagen}" width=100>
                </td>
                <td>${producto.titulo}</td>
                <td>${producto.precio}</td>
                <td>
                    <input type="number" class="form-control cantidad" min="1" value=${producto.cantidad}>
                </td>
                <td id='subtotales'>${producto.precio * producto.cantidad}</td>
                <td>
                    <a href="#" class="borrar-producto fas fa-times-circle" style="font-size:30px" data-id="${producto.id}"></a>
                </td>
            `;
       listaCompra.appendChild(row);
    });
}

//Eliminar producto por ID del LS
function eliminarProductoLocalStorage(productoID) {
    let productosLS;
    //Obtenemos el arreglo de productos
    productosLS = obtenerProductosLocalStorage();
    //Comparar el id del producto borrado con LS
    productosLS.forEach(function (productoLS, index) {
        if (productoLS.id === productoID) {
            productosLS.splice(index, 1);
        }
    });

    //Añadimos el arreglo actual al LS
    localStorage.setItem('productos', JSON.stringify(productosLS));
}

//Eliminar todos los datos del LS
function vaciarLocalStorage() {
    localStorage.clear();
}

//Procesar pedido
function  procesarPedido(e) {
    e.preventDefault();

    if (obtenerProductosLocalStorage().length === 0) {

        return"fallo";

    } else {
        location.href = "compra.html";
    }
}

//Calcular montos
   function calcularTotal(){
        var productosLS;
        var total = 0;
       var igv = 0;
       var subtotal = 0;
        productosLS = obtenerProductosLocalStorage();
        for(var i = 0; i < productosLS.length; i++){
            var element = (productosLS[i].precio * productosLS[i].cantidad);
            total = total + element;
            
        }
        
        igv = Math.round(total * 0.18);
        subtotal = Math.round(total-igv);

        document.getElementById('subtotal').innerHTML = "S/. " + subtotal;
        document.getElementById('igv').innerHTML = "S/. " + igv;
        document.getElementById('total').innerHTML = "S/. " + total;
    }

function obtenerEvento(e) {
    e.preventDefault();
    let id, cantidad, producto, productosLS;
    if (e.target.classList.contains('cantidad')) {
        producto = e.target.parentElement.parentElement;
        id = producto.querySelector('a').getAttribute('data-id');
        cantidad = producto.querySelector('input');
        let actualizarMontos = document.querySelectorAll('#subtotales');
        productosLS = obtenerProductosLocalStorage();
        productosLS.forEach(function (productoLS, index) {
            if (productoLS.id === id) {
                productoLS.cantidad = cantidad;
                actualizarMontos[index].innerHTML = Number(cantidad * productosLS[index].precio);
            }
        });
        localStorage.setItem('productos', JSON.stringify(productosLS));

    } else {
        console.log("click afuera");
    }
}


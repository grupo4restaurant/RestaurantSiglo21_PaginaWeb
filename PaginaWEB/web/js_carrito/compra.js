const compra = new Carrito();
const listaCompra = document.querySelector("#lista-compra tbody");
const carrito = document.getElementById('carrito');
const procesarCompraBtn = document.getElementById('procesar-compra');
var form = document.forms.namedItem("procesar-pago");




cargarEventos();

function cargarEventos() {
    document.addEventListener('DOMContentLoaded', compra.leerLocalStorageCompra());

    //Eliminar productos del carrito
    carrito.addEventListener('click', (e)=>{compra.eliminarProducto(e);});

    compra.calcularTotal();

    //cuando se selecciona procesar Compra
    //procesarCompraBtn.addEventListener('click', procesarCompra);
    form.addEventListener('submit', procesarCompra);

    carrito.addEventListener('change', (e)=>{compra.obtenerEvento(e)});
    carrito.addEventListener('keyup', (e)=>{compra.obtenerEvento(e)});

    
}

function procesarCompra(e){
    e.preventDefault();
    if(compra.obtenerProductosLocalStorage().length === 0){
        Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'No hay productos, selecciona alguno',
            showConfirmButton: false,
            timer: 2000
        }).then(function(){
            window.location = "index.html";
        })
    }
    else if(mesa_id.value === '' || usuario_id.value === ''){
        Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'Ingrese todos los campos requeridos',
            showConfirmButton: false,
            timer: 2000
        })
    }
    else {
        
const mesa_id = document.getElementById('mesa_id').value;
const usuario_id = document.getElementById('usuario_id').value;
const total = document.getElementById('total').innerHTML;
const parseando = JSON.parse(localStorage.getItem("productos"));
const fechahoy = document.getElementById('fechaing').value;





//for(i=0;i<parseando.length;i++){
 //const id = parseando[i]['id'];  
 //}
//document.write(parseando[i]['id']);
//const hola = JSON.stringify(parseando[i]['id']);
//}

     
	
                
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost:8090/siglo21/orden_mesa/");
        xhr.responseType = 'json';
        xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    



        xhr.send(JSON.stringify({
        mesa_id:mesa_id,
        usuario_id:usuario_id,
        fecha: fechahoy,
        total:total,
        estado:1
        //probanding: parseando
        
        }));
       
        
        
        
    
    
        
        
        const cargandoGif = document.querySelector('#cargando');
        cargandoGif.style.display = 'block';

        const enviado = document.createElement('img');
        enviado.src = 'img/mail.gif';
        enviado.style.display = 'block';
        enviado.width = '150';
        
       

        
             


        setTimeout(() => {

    
            cargandoGif.style.display = 'none';
            document.querySelector('#loaders').appendChild(enviado);
            setTimeout(() => {
                
                
                enviado.remove();
                //compra.vaciarLocalStorage();
                window.location = "resumen.html";
            }, 2000);
        }, 3000);
    }
    }


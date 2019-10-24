// VARS
const carrito = document.getElementById('carrito'); // Elemento Carrito de Compras
const cursos = document.getElementById('lista-cursos'); // Elemento curso del body
const listaCursos = document.querySelector('#lista-carrito tbody'); // Lista de cursos agregados al carrito 
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito'); // Boton Vaciar Carrito

// console.log(carrito);


listeners(); // Escucha todos los evento definidos

// LISTENERS

function listeners() {
    cursos.addEventListener('click', comprarCurso); // Al dar click en comprar curso
    carrito.addEventListener('click', borrarCurso); // Al dar click en la X del carrito
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito); // Al dar click en boton vaciar carrito
    document.addEventListener('DOMContentLoaded', leerLocalStorage) // Inicializar carrito al iniciar la pagina
}


// FUNCTIONS

function comprarCurso(e) {
    e.preventDefault();
    // Si el target tiene la clase agregar carrito seleccionamos el card
    if (e.target.classList.contains('agregar-carrito')) {
        const curso = e.target.parentElement.parentElement;  
        leerDatosCurso(curso); // leemos los datos de la tarjeta
    }

}

// recibe como parametro la tarjeta y crea un json con la data del curo
function leerDatosCurso(curso) {
    // Capturamos la informacion del curso con queryselector
    const infoCurso = {
        
      imagen : curso.querySelector('img').src,
        titulo : curso.querySelector('h4').textContent,
        precio : curso.querySelector('.precio span').textContent,
        id : curso.querySelector('a').getAttribute('data-id')
    };

    insertarCarrito(infoCurso); // agrega el curso al carrito recibe como param la data del curso
    guardarCursoLS(infoCurso); // Guarda en el localstorage
}

















// funcion para insertar en el carrito
function insertarCarrito(curso) {
    // console.log(curso);
    // creamos el elemento tr que se agregara al tbody
    const row = document.createElement('tr');
    row.innerHTML = `
          <td>  
               <img src="${curso.imagen}" width=100>
          </td>
          <td>${curso.titulo}</td>
          <td>${curso.precio}</td>
          <td>
               <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
          </td>
     `;

    listaCursos.appendChild(row); // agregamos el tr creado
}

// Funcion para borrar curso del carrito
function borrarCurso(e) {
    e.preventDefault();

    // Capturamos el click en el target con la clase borrar-curso (X)
    if (e.target.classList.contains('borrar-curso')) {
        let curso = e.target.parentElement.parentElement; // capturamos todo el tr del curso
        let cursoId = curso.querySelector('a').getAttribute('data-id'); // capturamos el atributo data-ip del elemento
        curso.remove(); // borramos el elemento tr 
        borrarCursoLS(cursoId); // borramos del Localstorage
    }


}

// Funcion para borrar curso del Localstorage
function borrarCursoLS(cursoId) {
    let cursosLS = obtenerCursosLS(); // Obtenemos los cursos ya almacenados en LS

    cursosLS.forEach((cursoLS, index) => {
        if (cursoLS.id === cursoId) { // Si alguno de los curso tiene el mismo Id que se quiere borrar se 
            cursosLS.splice(index, 1) // Elimina del Localstorage
        }
    });

    localStorage.setItem('cursos', JSON.stringify(cursosLS)); // Se convierte el json a string para almacenar
                                                              // El nuevo arreglo en LS
}

// Funcion para borrar todos los items del carrito
function vaciarCarrito(e) {
    e.preventDefault();

    // Mientras el tbody tengo algun tr borrar el primer tr
    while (listaCursos.firstChild) {
        listaCursos.removeChild(listaCursos.firstChild);
    }

    localStorage.clear(); // limpiar el localstorage
}

// Funcion para guardar los cursos en Localstorage
function guardarCursoLS(curso) {
    let cursos;
    cursos = obtenerCursosLS(); // obtenemos los cursos ya almacenados en LS
    cursos.push(curso); // Agregamos el nuevo curso
    localStorage.setItem('cursos', JSON.stringify(cursos)); // convertimos a string para grabar en LS  
}

// Funcion para obtener cursos del LS
function obtenerCursosLS() {
    let cursosLS;

    if (localStorage.getItem('cursos') === null) {
        cursosLS = []; // Si no hay cursos poner arreglo vacio
    } else {
        cursosLS = JSON.parse(localStorage.getItem('cursos')); // Convertir a arreglo y devolver
    }

    return cursosLS; // retorna un array
}

// Lee los datos ya almacenados en localstorage para cargarlos al actualizar la pagina
function leerLocalStorage() {
    let cursos = obtenerCursosLS();
    cursos.forEach(curso => {
        insertarCarrito(curso);
    });
}
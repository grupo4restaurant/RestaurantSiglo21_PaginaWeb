var form = document.forms.namedItem("form");
form.addEventListener('submit', function(ev){


var nombrevar = document.getElementById('nombre').value;
var comentariosvar = document.getElementById('comentarios').value;
	  
const xhr = new XMLHttpRequest();
xhr.open("POST", "http://localhost:8090/siglo21/reserva");
xhr.responseType = 'json';
xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    

    

 

    xhr.send(JSON.stringify({nombre:nombrevar, comentarios: comentariosvar}));
	ev.preventDefault();
  });

        

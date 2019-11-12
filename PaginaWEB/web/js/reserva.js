var form = document.forms.namedItem("form");
form.addEventListener('submit', function(ev){


var nombrevar = document.getElementById('nombre').value;
var rut_clientevar = document.getElementById('rut_cliente').value;
var cantidad_personavar = document.getElementById('cantidad_persona').value;
var e_mail_clientevar = document.getElementById('e_mail_cliente').value;
var fono_clientevar = document.getElementById('fono_cliente').value;
var hora_iniciovar = document.getElementById('hora_inicio').value;
var fechavar = document.getElementById('fecha').value;
var comentariosvar = document.getElementById('comentarios').value;

	  
const xhr = new XMLHttpRequest();
xhr.open("POST", "http://localhost:8090/siglo21/reserva");
xhr.responseType = 'json';
xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    

    

 

    xhr.send(JSON.stringify({
        nombre:nombrevar, 
        comentarios: comentariosvar,
        rut_cliente: rut_clientevar,
        cantidad_persona: cantidad_personavar,
        e_mail_cliente: e_mail_clientevar,
        fono_cliente: fono_clientevar,
        hora_inicio: hora_iniciovar,
        fecha: fechavar
    }));
	ev.preventDefault();
  });

        

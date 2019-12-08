var form = document.forms.namedItem("form2");
form.addEventListener('submit', function(ev){


var mesa_id = document.getElementById('id_mesaNO').innerHTML;
var mesa_numero = document.getElementById('mesa_numeroNO').innerHTML;
var mesa_capacidad = document.getElementById('mesa_capacidadNO').innerHTML;


	  
const xhr = new XMLHttpRequest();
xhr.open("POST", "http://localhost:8090/siglo21/mesa/");
xhr.responseType = 'json';
xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    

    

 

    xhr.send(JSON.stringify({
        mesa_id:mesa_id,
        mesa_numero:mesa_numero,
        mesa_estado:1,
        mesa_capacidad:mesa_capacidad
    }));
	ev.preventDefault();
         
      
        
        
  });
 

        

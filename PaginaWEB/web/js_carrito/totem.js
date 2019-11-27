// Retrieve wine list when application starts 
EncontrarMesasDisponibles();
EncontrarMesasNODisponibles();







function EncontrarMesasDisponibles() {
	console.log('EncontrarMesasDisponibles');
	$.ajax({
		type: 'GET',
		url: "http://localhost:8090/siglo21/mesas/1",
		dataType: "json", // data type of response
		success: renderList
	});
    
}

function EncontrarMesasNODisponibles() {
	console.log('EncontrarMesasNODisponibles');
	$.ajax({
		type: 'GET',
		url: "http://localhost:8090/siglo21/mesas/0",
		dataType: "json", // data type of response
                
		success: renderListNoDisponible
	});
}














function renderList(data) {
	// JAX-RS serializes an empty list as null, and a 'collection of one' as an object (not an 'array of one')
	var list = data == null ? [] : (data instanceof Array ? data : [data]);
        
	$.each(list, function(index, producto) {
		            
var divOut = document.getElementById('txtOut');
    var txtOut = "";
    for (var k in list) {

 txtOut += '<div class="card mb-4 shadow-sm">';
  txtOut += '<div class="card-body">';
  txtOut += '<img src="img/verde.jpg" width="200" height="150"  >';
  txtOut += '<div class="info-card">';
  //txtOut += ('<h3> '+ list[k].cat_prod_id +'</h3>');

   
  txtOut +=('Mesa<h1 class="my-0 font-weight-bold" id="mesa_numero">'+  list[k].mesa_numero + '</h1>');
  //txtOut += ('<p>' + list[k].cod+ '</p>');
  txtOut +=  ('<h3 class="precio">  Capacidad <span class="card-title pricing-card-title precio" id="mesa_capacidad">' + list[k].mesa_capacidad + '</span></h3>');
  txtOut +=  ('<h3 class="precio">  Personas <span class="card-title pricing-card-title precio"></span></h3>');
  txtOut +=('ID<h4 class="my-0 font-weight-bold" id="id_mesa">'+ list[k].mesa_id + '</h4>');
  txtOut +=  '<button type="submit" class="btn btn-block btn-primary agregar-carrito" ">Cambiar estado </button>';
  txtOut += '</div>';
  txtOut += '</div>';
   txtOut += '</div>';
    txtOut += '</div>';


   
   
    }
    divOut.innerHTML = txtOut;
	});               
        
        
        
        
       
}










function renderListNoDisponible(data) {
	// JAX-RS serializes an empty list as null, and a 'collection of one' as an object (not an 'array of one')
	var list = data == null ? [] : (data instanceof Array ? data : [data]);
        
	$.each(list, function(index, producto) {
		            
var divOut = document.getElementById('txtOutMesaNoDisponible');
    var txtOutMesaNoDisponible= "";
    for (var k in list) {

   
 txtOutMesaNoDisponible += '<div class="card mb-4 shadow-sm">';
  txtOutMesaNoDisponible += '<div class="card-body">';
  txtOutMesaNoDisponible += '<img src="img/rojo.jpg" width="200" height="150"  >';
 txtOutMesaNoDisponible += '<div class="info-card">';
  //txtOut += ('<h3> '+ list[k].cat_prod_id +'</h3>');

   
  txtOutMesaNoDisponible +=('Mesa<h1 class="my-0 font-weight-bold" id="mesa_numeroNO">'+  list[k].mesa_numero + '</h1>');
  //txtOut += ('<p>' + list[k].cod+ '</p>');
  txtOutMesaNoDisponible +=  ('<h3 class="precio">  Capacidad <span class="card-title pricing-card-title precio" id="mesa_capacidadNO">' + list[k].mesa_capacidad + '</span></h3>');
  txtOutMesaNoDisponible +=  ('<h3 class="precio">  Personas <span class="card-title pricing-card-title precio"></span></h3>');
  txtOutMesaNoDisponible+=('ID<h4 class="my-0 font-weight-bold" id="id_mesaNO">'+ list[k].mesa_id + '</h4>');
  txtOutMesaNoDisponible+=  ('<button type="submit" class="btn btn-block btn-primary agregar-carrito" ">Cambiar estado </button>');
 txtOutMesaNoDisponible += '</div>';
  txtOutMesaNoDisponible += '</div>';
   txtOutMesaNoDisponible += '</div>';
    txtOutMesaNoDisponible += '</div>';
   
   
    }
    divOut.innerHTML = txtOutMesaNoDisponible;
	});               
        
        
        
        
       
}


            
        
        
        
        
       











// Helper function to serialize all the form fields into a JSON string
function formToJSON() {
	var mesa_id = $('#mesa_id').val();
	return JSON.stringify({
		"mesa_id": mesa_id === "" ? null : mesa_id, 
		"mesa_numero": $('#mesa_numero').val(), 
		"mesa_capacidad": $('#mesa_capacidad').val()
		});
}

// Retrieve wine list when application starts 
EncontrarBebestibles();
EncontrarEntradas();






function EncontrarBebestibles() {
	console.log('EncontrarBebestibles');
	$.ajax({
		type: 'GET',
		url: "http://localhost:3000/bebidas?catalogo=Bebidas",
		dataType: "json", // data type of response
		success: renderList
	});
}

function EncontrarEntradas() {
	console.log('EncontrarEntradas');
	$.ajax({
		type: 'GET',
		url: "http://localhost:3000/bebidas?catalogo=Entrada",
		dataType: "json", // data type of response
		success: renderListEntradas
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
  txtOut += '<img src="img/menu-grid/bebidas.jpg" width="200" height="150"  >';
  txtOut += '<div class="info-card">';
  txtOut += ('<h3> '+ list[k].catalogo +'</h3>');
  txtOut +=('<h4 class="my-0 font-weight-bold">' + list[k].nombre + '</h4>');
  txtOut += ('<p>' + list[k].descripcion + '</p>');
  txtOut +=  ('<h1 class="precio">  $<span class="card-title pricing-card-title precio">'  + list[k].valor + '</span></h1>');
  txtOut +=  ('<a href="#" class="btn btn-block btn-primary agregar-carrito" data-id="' +list[k].id +'">Agregar Al Carrito</a>');
  txtOut += '</div>';
  txtOut += '</div>';
   txtOut += '</div>';
    txtOut += '</div>';
   
   
    }
    divOut.innerHTML = txtOut;
	});               
        
        
        
        
       
}







function renderListEntradas(data) {
	// JAX-RS serializes an empty list as null, and a 'collection of one' as an object (not an 'array of one')
	var list = data == null ? [] : (data instanceof Array ? data : [data]);
        
	$.each(list, function(index, producto) {
		            
var divOut = document.getElementById('txtOutEntradas');
    var txtOutEntradas = "";
    for (var k in list) {

   
 txtOutEntradas += '<div class="card mb-4 shadow-sm">';
  txtOutEntradas += '<div class="card-body">';
  txtOutEntradas += '<img src="img/menu-grid/Menu_Grid-9.jpg" width="200" height="150"  >';
  txtOutEntradas += '<div class="info-card">';
  txtOutEntradas += ('<h3> '+ list[k].catalogo +'</h3>');
  txtOutEntradas +=('<h4 class="my-0 font-weight-bold">' + list[k].nombre + '</h4>');
  txtOutEntradas += ('<p>' + list[k].descripcion + '</p>');
  txtOutEntradas += ('<h1 class="precio">  $<span class="card-title pricing-card-title precio">' + list[k].valor + '</span></h1>');
  txtOutEntradas +=  ('<a href="#" class="btn btn-block btn-primary agregar-carrito" data-id="' +list[k].id +'">Agregar Al Carrito</a>');
  txtOutEntradas += '</div>';
  txtOutEntradas += '</div>';
   txtOutEntradas += '</div>';
    txtOutEntradas += '</div>';
   
   
    }
    divOut.innerHTML = txtOutEntradas;
	});               
        
        
        
        
       
}










// Helper function to serialize all the form fields into a JSON string
function formToJSON() {
	var wineId = $('#wineId').val();
	return JSON.stringify({
		"id": wineId == "" ? null : wineId, 
		"catalogo": $('#catalogo').val(), 
		"nombre": $('#nombre').val(),
		"descripcion": $('#descripcion').val(),
		"region": $('#region').val(),
		"valor": $('#valor').val(),
		"picture": currentWine.picture,
		"description": $('#description').val()
		});
}

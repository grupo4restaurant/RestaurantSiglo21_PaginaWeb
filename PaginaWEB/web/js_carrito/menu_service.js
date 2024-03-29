// Retrieve wine list when application starts 
EncontrarBebestibles();
EncontrarEntradas();
EncontrarFondos();
EncontrarPostres();






function EncontrarBebestibles() {
	console.log('EncontrarBebestibles');
	$.ajax({
		type: 'GET',
		url: "http://localhost:8090/siglo21/menu_items/21",
		dataType: "json", // data type of response
		success: renderList
	});
    
}

function EncontrarFondos() {
	console.log('EncontrarFondos');
	$.ajax({
		type: 'GET',
		url: "http://localhost:8090/siglo21/menu_items/23",
		dataType: "json", // data type of response
                
		success: renderListFondo
	});
}

function EncontrarPostres() {
	console.log('EncontrarPostres');
	$.ajax({
		type: 'GET',
		url: "http://localhost:8090/siglo21/menu_items/24",
		dataType: "json", // data type of response
                
		success: renderListPostres
	});
}

function EncontrarEntradas() {
	console.log('EncontrarEntradas');
	$.ajax({
		type: 'GET',
		url: "http://localhost:8090/siglo21/menu_items/22",
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
  //txtOut += ('<h3> '+ list[k].cat_menu_id +'</h3>');
  txtOut +=('<h4 class="my-0 font-weight-bold">' + list[k].item_nombre + '</h4>');
  txtOut += ('<p>' + list[k].item_desc+ '</p>');
  txtOut +=  ('<h1 class="precio">  $<span class="card-title pricing-card-title precio">'  + list[k].item_val + '</span></h1>');
  txtOut +=  ('<a href="#" class="btn btn-block btn-primary agregar-carrito" data-id="' +list[k].item_id +'">Agregar Al Carrito</a>');
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
  txtOutEntradas += '<img src="img/menu-grid/entradas.jpg" width="200" height="150"  >';
  txtOutEntradas += '<div class="info-card">';
  //txtOutEntradas += ('<h3> '+ list[k].cat_menu_id +'</h3>');
  txtOutEntradas +=('<h4 class="my-0 font-weight-bold">' + list[k].item_nombre + '</h4>');
  txtOutEntradas += ('<p>' + list[k].item_desc + '</p>');
  txtOutEntradas += ('<h1 class="precio">  $<span class="card-title pricing-card-title precio">' + list[k].item_val + '</span></h1>');
  txtOutEntradas +=  ('<a href="#" class="btn btn-block btn-primary agregar-carrito" data-id="' +list[k].item_id +'">Agregar Al Carrito</a>');
  txtOutEntradas += '</div>';
  txtOutEntradas += '</div>';
   txtOutEntradas += '</div>';
    txtOutEntradas += '</div>';
   
   
    }
    divOut.innerHTML = txtOutEntradas;
	});               
        
        
        
        
       
}


function renderListFondo(data) {
	// JAX-RS serializes an empty list as null, and a 'collection of one' as an object (not an 'array of one')
	var list = data == null ? [] : (data instanceof Array ? data : [data]);
        
	$.each(list, function(index, producto) {
		            
var divOut = document.getElementById('txtOutFondo');
    var txtOutFondo = "";
    for (var k in list) {

   
 txtOutFondo += '<div class="card mb-4 shadow-sm">';
  txtOutFondo += '<div class="card-body">';
  txtOutFondo += '<img src="img/menu-grid/fondo.jpg" width="200" height="150"  >';
  txtOutFondo += '<div class="info-card">';
  //txtOutFondo += ('<h3> '+ list[k].cat_menu_id +'</h3>');
  txtOutFondo+=('<h4 class="my-0 font-weight-bold">' + list[k].item_nombre + '</h4>');
  txtOutFondo += ('<p>' + list[k].item_desc + '</p>');
 txtOutFondo += ('<h1 class="precio">  $<span class="card-title pricing-card-title precio">' + list[k].item_val + '</span></h1>');
  txtOutFondo +=  ('<a href="#" class="btn btn-block btn-primary agregar-carrito" data-id="' +list[k].item_id +'">Agregar Al Carrito</a>');
 txtOutFondo+= '</div>';
  txtOutFondo += '</div>';
   txtOutFondo += '</div>';
    txtOutFondo += '</div>';
   
   
    }
    divOut.innerHTML = txtOutFondo;
	});               
        
        
        
        
       
}


function renderListPostres(data) {
	// JAX-RS serializes an empty list as null, and a 'collection of one' as an object (not an 'array of one')
	var list = data == null ? [] : (data instanceof Array ? data : [data]);
        
	$.each(list, function(index, producto) {
		            
var divOut = document.getElementById('txtOutPostres');
    var txtOutPostres = "";
    for (var k in list) {

   
 txtOutPostres += '<div class="card mb-4 shadow-sm">';
  txtOutPostres += '<div class="card-body">';
  txtOutPostres += '<img src="img/menu-grid/postres.jpg" width="200" height="150"  >';
  txtOutPostres += '<div class="info-card">';
  //txtOutPostres += ('<h3> '+ list[k].cat_menu_id +'</h3>');
  txtOutPostres +=('<h4 class="my-0 font-weight-bold">' + list[k].item_nombre + '</h4>');
  txtOutPostres += ('<p>' + list[k].item_desc + '</p>');
  txtOutPostres += ('<h1 class="precio">  $<span class="card-title pricing-card-title precio">' + list[k].item_val + '</span></h1>');
  txtOutPostres +=  ('<a href="#" class="btn btn-block btn-primary agregar-carrito" data-id="' +list[k].item_id +'">Agregar Al Carrito</a>');
  txtOutPostres += '</div>';
  txtOutPostres += '</div>';
   txtOutPostres += '</div>';
    txtOutPostres += '</div>';
   
   
    }
    divOut.innerHTML = txtOutPostres;
	});               
        
        
        
        
       
}










// Helper function to serialize all the form fields into a JSON string
function formToJSON() {
	var item_id = $('#item_id').val();
	return JSON.stringify({
		"item_id": item_id == "" ? null : item_id, 
		"cat_menu_id": $('#cat_menu_id').val(), 
		"item_nombre": $('#item_nombre').val(),
		"item_desc": $('#item_desc').val(),
		"item_val": $('#item_val').val(),
		"picture": currentWine.picture,
		
		});
}

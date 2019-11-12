$(document).ready(function() {
    
    // DOM variables
    var $orders = $('#orders');
    var $cantidad_persona = $('#cantidad_persona');
    var $e_mail_cliente = $('#e_mail_cliente');
    var $fono_cliente = $('#fono_cliente');
    var $nombre = $('#nombre');
    
    //Orders template (Mustache.js)
    var orderTemplate = $('#order-template').html();
    
    // Adds and displays orders 
    function addOrder(order){
        $orders.append(Mustache.render(orderTemplate, order));
    }
    
    
    // Ajax GET request to show orders
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/bebidas',
        success: function(orders){
            $.each(orders, function(i, order){
                // Display the order
               addOrder(order);
            });
        },
        error: function(){
            alert('Error loading orders');
        }
    });
    // END Ajax GET request
    
    //Ajax POST request from Add Button
    $('#add-order').on('click', function(){
        
        // Info sent from data line in POST request
        var order = {
            cantidad_persona: $cantidad_persona.val(),
            e_mail_cliente: $e_mail_cliente.val(),
            fono_cliente: $fono_cliente.val(),
            nombre: $nombre.val()
        };
        
        
        $.ajax({
            type: 'POST',
            contentType: 'application/json',
            url: 'http://localhost:8090/siglo21/reserva',
            dataType: "json",
			
            success: function(formToJSON){
                // Display the order
                addOrder(formToJSON);
            },
            error: function(){
                alert('Error saving orders');
            }
        });
    });
	
	
	
	function formToJSON() {
	return JSON.stringify({ 
		"cantidad_persona": $('#cantidad_persona').val(), 
		"e_mail_cliente": $('#e_mail_cliente').val(),
		"fono_cliente": $('#fono_cliente').val(),
		"nombre": $('#nombre').val(),
		});
}
    
    // Remove An Order With Remove Button
    $orders.delegate('.remove','click', function(){
        
        var $li = $(this).closest('li');
        
        // To be able to use this inside success function
        var self = this;
        
        $.ajax({
            type: 'DELETE',
            url: 'http://localhost:3000/orders/' + $(this).attr('data-id'),
            success: function(){
               $(self);
               $li.fadeOut(300, function(){
                   $(this).remove();
               });
            }
        });
        
    });

    // Edit Orders
    $orders.delegate('.editOrder', 'click', function(){
        // Find the closest list item
        var $li = $(this).closest('li');

        // Set the value of the input box to the value of the cantidad_persona and e_mail_cliente displayed
        $li.find('input.cantidad_persona').val($li.find('span.cantidad_persona').html());
        $li.find('input.e_mail_cliente').val($li.find('span.e_mail_cliente').html());
        $li.find('input.fono_cliente').val($li.find('span.fono_cliente').html());
        $li.find('input.nombre').val($li.find('span.nombre').html());

        // Add the edit class so it appears
        $li.addClass('edit');
    });

    // Cancel Edit Orders
    $orders.delegate('.cancelEdit', 'click', function(){
        // Remove the edit class to return to order listing
        $(this).closest('li').removeClass('edit');
    });
    
    // Save Order Edits Using PUT Request
    $orders.delegate('.saveEdit', 'click', function(){
       // Find the closest list item
       var $li = $(this).closest('li');

        // Orders object
        var order = {
            cantidad_persona: $li.find('input.cantidad_persona').val(),
            e_mail_cliente: $li.find('input.e_mail_cliente').val(),
            fono_cliente: $li.find('input.fono_cliente').val(),
            nombre: $li.find('input.nombre').val()
        };

        $.ajax({
            type: 'POST',
            url: 'http://localhost:8090/siglo21/reserva',
           dataType: "application/json",
            success: function(newOrder){
                //Update the span so the order displays the edits
                $li.find('span.cantidad_persona').html(order.cantidad_persona);
                $li.find('span.e_mail_cliente').html(order.e_mail_cliente);
                $li.find('span.fono_cliente').html(order.fono_cliente);
                $li.find('span.nombre').html(order.nombre);
                $li.removeClass('edit');
            },
            error: function(){
                alert('Error updating orders');
            }
        });
    });
});
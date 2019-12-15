let submit = document.querySelector('#submit');


if(submit != null){
    submit.onclick = function (e) {
        let form_name = document.querySelector('#name').value;
        let form_email = document.querySelector('#email').value;
        
       
        window.localStorage.setItem("name", form_name);
        window.localStorage.setItem("email", form_email);
        
    }
}

function pdf() {
    
  
//const parseando = JSON.parse(localStorage.getItem("productos"));

//for(i=0;i<parseando.length;i++){
 //const id = parseando[i]['id'];  
 //}
//document.write(parseando[i]['id']);
//const hola = JSON.stringify(parseando[i]['id']);

    
    let name = window.localStorage.getItem("name");
    let email = window.localStorage.getItem("email");
    let doc = new jsPDF();
    doc.setFontSize(40);
    doc.text(30, 20, "Boleta Electronica");
    doc.setFontSize(16);
    doc.setLineWidth(1.5);
    doc.line(20, 25,200, 25);
     doc.text(20, 35,"Cliente:");
    doc.text(50, 35, name);
     doc.text(20, 40,"Email:");
    doc.text(50, 40,email);
    doc.text(20, 60, "Productos");
    doc.text(120, 60, "Cantidad");
    doc.text(160, 60, "Precio");
    doc.text(20, 70, "Coca-Cola");
    doc.text(120, 70, "1");
    doc.text(160, 70, "$1300");
    doc.text(20, 80, "Empanadas de queso/camaron");
    doc.text(120, 80, "1");
    doc.text(160, 80, "$3400");
    doc.text(20, 90, "Pie de limon");
    doc.text(120, 90, "1");
    doc.text(160, 90, "$2300");
    doc.text(20, 100, "Cazuela de vacuno ");
    doc.text(120, 100, "1");
    doc.text(160, 100, "$5500");
    doc.text(120, 130, "Total");
    doc.text(160, 130, "$12500");
    doc.save('Boleta.pdf');
    window.localStorage.clear();
}



(function () {
        let name = window.localStorage.getItem("name");
        let email = window.localStorage.getItem("email");
  


        //const total = document.getElementById('total').innerHTML;
            //var num = parseInt(total);
            //alert(total);
       
      
       
        let options = {
            "key": "rzp_test_Y3ZqWJHAv7fVti",
            "amount": 1250000,
            "currency": "INR",
            "receipt":"order_rcptid_11",
            "payment_capture":false,
            "name": "Restaurant Siglo XXI",
            "description": "Pago",
            "image": "../img/logo_002.jpg",
            "handler": (response) => {
                setTimeout(function () {
                    pdf();
                    window.location = "../gracias.html";
                }, 2000);
            },
            "prefill": {
                "email": email
            },
            "theme": {
                "color": "#a30a00"
            }
        };
        let rzp1 = new Razorpay(options);

        let rzpBtn1 = document.getElementById('rzp-button1');

        if(rzpBtn1 != null){
            rzpBtn1.onclick = function (e) {
                rzp1.open();
                e.preventDefault();
                
            }
        }
    })();
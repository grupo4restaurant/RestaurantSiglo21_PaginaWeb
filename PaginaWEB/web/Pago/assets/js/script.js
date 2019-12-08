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
    let name = window.localStorage.getItem("name");
    let email = window.localStorage.getItem("email");
    let doc = new jsPDF();
    doc.setFontSize(26);
    doc.setTextColor(92, 76, 76);
    doc.text(23, 12, "EVENT!")
    doc.text(23, 81, name);
    doc.text(23, 101, email);
    doc.save('Boleta.pdf');
    window.localStorage.clear();
}

(function () {
        let name = window.localStorage.getItem("name");
        let email = window.localStorage.getItem("email");
        let options = {
            "key": "rzp_test_Y3ZqWJHAv7fVti",
            "amount": "200",
            "currency": "INR",
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
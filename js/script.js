var ModalWrap = null; 
var ModalWrap1 = null; 
const showModal = () => {
    ModalWrap = document.createElement('div');
    ModalWrap.innerHTML = 
    `<div class="modal fade" id="contact-modal" tabindex="-1" aria-labelledby="contact-modal-label"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-md">
        <div class="modal-content">
            <div class="modal-body">
                <p class="title-modal text-center">
                    THANK YOU!
                </p>

                <p class="content-modal text-center">
                    We've received your message and<br>
                    will get back to you as soon as<br>
                    possible
                    <br>
                    <br>
                    Thank you for contacting us!
                </p>
                <div class="footbar-btn">
                    <a href="index.html" class="footbar-button btn btn-lg rounded-pill" role="button">back to home</a>
                </div>
            </div>
        </div>
            </div>
        </div>
    
    `;
    document.body.append(ModalWrap);
    var modal2 = new bootstrap.Modal(ModalWrap.querySelector('.modal'));
    modal2.show();


}

const showModal1 = () => {
    ModalWrap1 = document.createElement('div');
    ModalWrap1.innerHTML = 
    `<div class="modal fade" id="contact-modal" tabindex="-1" aria-labelledby="contact-modal-label"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-md">
        <div class="modal-content">
            <div class="modal-body">
                <p class="title-modal text-center">
                    Incomplete Forms
                </p>

                <p class="content-modal text-center">
                    Looks like there's a box that hasn't be fill.
                </p>
                <div class="footbar-btn">
                    <a href="contact.html" class="footbar-button btn btn-lg rounded-pill" role="button">confirm</a>
                </div>
            </div>
        </div>
            </div>
        </div>
    
    `;
    document.body.append(ModalWrap1);
    var modal1 = new bootstrap.Modal(ModalWrap1.querySelector('.modal'));
    modal1.show();


}
function validation(){
    let email = null;
    let firstname = null;
    let message1 = null;
    let lastname = null;
    let company = null;
    let businessType = null;
    let PhoneNumber = null;
    email = document.getElementById('fromEmail').value;
    firstname = document.getElementById('firstname').value;
    message1 = document.getElementById('form4Example3').value;
    lastname = document.getElementById('lastname').value;
    company = document.getElementById('company').value;
    businessType = document.getElementById('businessType').value;
    PhoneNumber = document.getElementById('PhoneNumber').value;
        // console.log(value1, value2, value3);


        if(email && firstname && message1 && lastname && company && businessType && PhoneNumber){
            sendMail();
            showModal();
        }else{
            showModal1();
        }
    }

    

function sendMail(params){
    
  
        var tempParams = {
            from_name: document.getElementById("fromEmail").value,
            to_name: document.getElementById("firstname").value,
            message: document.getElementById("form4Example3").value,
        };
        emailjs.send('service_mwyk9pu','template_stpx0a8',tempParams)
        .then(function(res){
        console.log("success",res.status);
        })
    
    
    
}


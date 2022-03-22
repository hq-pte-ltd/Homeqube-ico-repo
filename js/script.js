function sendMail(params){
    var tempParams = {
        from_name: document.getElementById("fromEmail").value,
        to_name: document.getElementById("firstname").value,
        message: document.getElementById("form4Example3").value,
    };

    emailjs.send('gmail','template_vsln0ui',tempParams)
    .then(function(res){
        console.log("success",res.status)
    })
}
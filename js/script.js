function sendMail(params){
    var tempParams = {
        from_name: document.getElementById("fromEmail").value,
        to_name: document.getElementById("firstname").value,
        message: document.getElementById("form4Example3").value,
    };

    emailjs.send('gmail','template_xtc581g',tempParams)
    .then(function(res){
        console.log("success",res.status)
    })
}
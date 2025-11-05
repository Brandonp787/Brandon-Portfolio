window.alert("welcome to my site!"); 
function sendMail(){
    let parms = {
        name : document.getElementById("name").Value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_2omki7c","template_dlu2x6n",parms).then(alert("Email sent!!"))
}

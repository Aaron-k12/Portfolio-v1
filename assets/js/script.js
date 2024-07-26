function sendMail(){
    let params = {
        name: document.getElementById("name").value,
        email_id: document.getElementById("email").value,
        message: document.getElementById("message").value,

    }
    emailjs.send("service_x9e3vmn", "template_t6lon42", params).then(alert("Email Sent"))
}

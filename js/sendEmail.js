// function sendMail() {
//     var params = {
//         name: document.getElementById("name").value,
//         email: document.getElementById("email").value,
//         phone: document.getElementById("phone").value,
//         subject: document.getElementById("subject").value,
//         message: document.getElementById("message").value,
//     };

//     const serviceID = "service_0istt3l";
//     const templateID = "template_nlfkdm5";
//     const button = document.getElementById("submit-button");
//     const responseMessage = document.getElementById("response-message");

//     button.disabled = true;
//     button.querySelector("span").innerText = "Sending...";

//     emailjs.send(serviceID, templateID, params)
//         .then(res => {
//             document.getElementById("name").value = "";
//             document.getElementById("email").value = "";
//             document.getElementById("phone").value = "";
//             document.getElementById("subject").value = "";
//             document.getElementById("message").value = "";

//             responseMessage.innerHTML = "<span style='color: green;'>Your message has been sent successfully!</span>";
//             button.querySelector("span").innerText = "Submit";
//             button.disabled = false;
//         })
//         .catch(err => {
//             responseMessage.innerHTML = "<span style='color: red;'>Failed to send your message. Please try again later.</span>";
//             button.querySelector("span").innerText = "Submit";
//             button.disabled = false;
//         });
// }


function validateAndSendMail() {
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var subject = document.getElementById("subject").value.trim();
    var message = document.getElementById("message").value.trim();
    const responseMessage = document.getElementById("response-message");

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    var phonePattern = /^[0-9]{10}$/;

    if (!name || !email || !phone || !subject || !message) {
        responseMessage.innerHTML = "<span style='color: red;'>All fields are required.</span>";
        return;
    }

    if (!emailPattern.test(email)) {
        responseMessage.innerHTML = "<span style='color: red;'>Please enter a valid email address.</span>";
        return;
    }

    if (!phonePattern.test(phone)) {
        responseMessage.innerHTML = "<span style='color: red;'>Please enter a valid 10-digit phone number.</span>";
        return;
    }

    sendMail(name, email, phone, subject, message);
}

function sendMail(name, email, phone, subject, message) {
    var params = {
        name: name,
        email: email,
        phone: phone,
        subject: subject,
        message: message,
    };

    const serviceID = "service_0istt3l";
    const templateID = "template_nlfkdm5";
    const button = document.getElementById("submit-button");
    const responseMessage = document.getElementById("response-message");

    button.disabled = true;
    button.querySelector("span").innerText = "Sending...";

    emailjs.send(serviceID, templateID, params)
        .then((res) => {
            button.disabled = false;
            button.querySelector("span").innerText = "Submit";
            responseMessage.innerHTML = "<span style='color: green;'>Your message has been sent successfully!</span>";
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("subject").value = "";
            document.getElementById("message").value = "";
        })
        .catch((err) => {
            button.disabled = false;
            button.querySelector("span").innerText = "Submit";
            responseMessage.innerHTML = "<span style='color: red;'>An error occurred. Please try again.</span>";
        });
}

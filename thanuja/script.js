 function validateform()
{

    let name =
    document.getElementById("name").value;

    let phone =
    document.getElementById("phone").value;

    let service =
    document.getElementById("service").value;

    let date =
    document.getElementById("date").value;

    if(name==""){
        alert("Please enter your name");
        return false;
    }

    if(phone==""){
        alert("Please enter phone number");
        return false;
    }

    if(phone.length != 10){
        alert("Phone number must be 10 digits");
        return false;
    }

    if(service==""){
        alert("Please select a service");
        return false ;
    }

    if(date==""){
        alert("Please select appointment date");
        return false ;
    }

    alert(
        "Appointment Booked Successfully!\n\n" +
        "Name: " + name +
        "\nService: " + service +
        "\nDate: " + date
    );
    

    document.getElementById("name").value="";
    document.getElementById("phone").value="";
    document.getElementById("service").selectedindex=0;
    document.getElementById("date").value="";

}

function sendMessage(){


    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    if(name == ""){
        alert("Please enter your name");
        return false;
    }

    if(email == ""){
        alert("Please enter your email");
        return false;
    }

    if(subject == ""){
        alert("Please enter subject");
        return false;
    }

    if(message == ""){
        alert("Please enter your message");
        return false;
    }

    alert("Message Sent Successfully!");

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
}

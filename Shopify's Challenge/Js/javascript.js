function validateForm(event) {
    event.preventDefault();
    var empty_email = document.forms["myForm"]["email"].value;
    var user_email= document.getElementById("email").value;

   
    if (empty_email == "") {
        document.getElementById("email-error").innerHTML = "Please enter a valid email address";
        return false;
    } else{
    document.getElementById("email-error").innerHTML = "";
    console.log("User Email: "+user_email);
    var opt = option.options[option.selectedIndex];
    console.log("Interest in : " + opt.value);
   }
}
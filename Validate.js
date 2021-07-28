function validateEmail(inputText){
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const icon = document.querySelector(".icon")
    const error =document.querySelector(".error")
    const email = document.getElementById("email")
    if(inputText.value.match(mailformat))
    {
        document.form.email.focus();
        return true;
        }
        else
        {
        icon.classList.toggle("active")
        error.classList.toggle("active")
        document.form.email.focus();
        return false;
        }
    
}
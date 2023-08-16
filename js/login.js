document.getElementById("btn-submit").addEventListener('click', function(){
    //step 2: get the email inside email input field
    //use .value for input
    const emailField = document.getElementById("email_field");
    const email = emailField.value;
    //step 3: get pass
    const passFiled = document.getElementById("user-password")
    const pass = passFiled.value;
    // console.log(email, pass)

    //verify email and pass
    if(email === 'blabla@gamil.com' && pass === 'hello'){
        window.location.href = 'bank.html'
    } 
    else{
        alert('Tui pass kn vulli?')
    }
})

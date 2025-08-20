const form = document.getElementById('form')
const firstname = document.getElementById('firstName')
const lastname = document.getElementById('lastName')
const email = document.getElementById('email')
const phoneNo = document.getElementById('mobileno')
const Password = document.getElementById('Password')
const confirmPassword = document.getElementById('confirmPassword')

form.addEventListener('submit' , (e)=>{
     e.preventDefault();
     validateInputs()
})

function validateInputs () {
   let firstnameval = firstname.value.trim();
   if (firstnameval == '') {
     setError(firstname, 'Plz enter your first name ')
   }
   else {
    setSuccess(firstname)
   }


   let lastnameval = lastname.value.trim();
   if (lastnameval == '') {
    setError(lastname, 'Plz enter your last name ')
   }
   else {
    setSuccess(lastname)
   }

  let emailadd = email.value.trim();
if (emailadd === '') {
    setError(email, 'enter email add');
} else if (!isValidEmail(emailadd)) { // <-- This is the new part
    setError(email, 'Provide a valid email address');
} else {
    setSuccess(email);
}

  
  let phone =  phoneNo.value.trim();
  if (phone == '') {
    setError(phoneNo , 'enter phoneNo no  ')
   }
   else {
    setSuccess(phoneNo)
   }

  let pass =  Password.value.trim();
    if (pass == '') {
   setError(Password , 'enter your phone Password ')
   }
   else {
    setSuccess(Password) 
   }

  

  let confpass =  confirmPassword.value.trim();
    if (confpass == '') {
   setError(confirmPassword , 'plz enter your pass')
   }
   else if (confpass != pass) {
    setError(confirmPassword , 'plz enter same pass')
   }
   else {
   setSuccess(confirmPassword)
   }

}

function setError(element, message) {
    let inputerror = element.parentElement;
    let errordisplay = inputerror.querySelector('.error-msg')

    errordisplay.innerText = message
      inputerror.classList.add('error');
      inputerror.classList.remove('success')
}

function setSuccess(element) {
     let inputerror = element.parentElement;
    let errordisplay = inputerror.querySelector('.error-msg')
     errordisplay.innerText = ''
      inputerror.classList.remove('error');
      inputerror.classList.add('success')
}

function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
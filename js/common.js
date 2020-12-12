const loginDiv = document.getElementById('loginDiv')
const signupDiv = document.getElementById('signupDiv')
const AdminDiv = document.getElementById('AdminDiv')
const Adminbtn = document.getElementById('admin')
const Loginbtn = document.getElementById('Login')
const SignUpbtn = document.getElementById('SignUp')
signupDiv.style.display='none'
AdminDiv.style.display='none'



Loginbtn.addEventListener('click', () => {
    signupDiv.style.display='none'
    AdminDiv.style.display='none'
    SignUpbtn.classList.remove('active')
    Adminbtn.classList.remove('active')
    Loginbtn.classList.add('active')
    loginDiv.style.display='block'
});

SignUpbtn.addEventListener('click', () => {
    loginDiv.style.display='none'
    AdminDiv.style.display='none'
    Loginbtn.classList.remove('active')
    Adminbtn.classList.remove('active')
    SignUpbtn.classList.add('active')
    signupDiv.style.display='block'
});

Adminbtn.addEventListener('click', () => {
    loginDiv.style.display='none'
    signupDiv.style.display='none'
    Loginbtn.classList.remove('active')
    SignUpbtn.classList.remove('active')
    Adminbtn.classList.add('active')
    AdminDiv.style.display='block'
});


if(!navigator.cookieEnabled){
    let newAlert = $("#message");
    message = 'This site uses cookies in order to ensure secure login and logout. Please enable cookies in your browser and comeback..'
    newAlert.html(`
        <div class="fade-in text-center m-0 alert alert-warning fade show" role="alert">
            <i class="fa fa-exclamation-circle alert-warning" aria-hidden="true"></i> ${message}
        </div>`);
}


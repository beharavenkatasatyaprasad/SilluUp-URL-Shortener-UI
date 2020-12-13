const sendotpBtn = document.getElementById('sendotp');
const AdminLoginForm = document.getElementById('AdminLogin-Form');

sendotpBtn.addEventListener('click', async () => {
    sendotpBtn.disabled = true;
    sendotpBtn.innerHTML = 'sending...'
    AdminLoginForm.innerHTML = ""
    let response = await fetch('https://sillyfy.herokuapp.com/adminOTPrequest', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    let res = await response.json()
    sendotpBtn.innerHTML = res.message
    if (res.type_ == 'success') {
        const otpdiv = document.createElement('div');
        otpdiv.className = 'otpHandler fade-in'
        otpdiv.innerHTML = `
        <div class="form-group mt-1">
             <label for="password">OTP</label>
             <input type="password" class="form-control" id="password__" required>
        </div>
        <div class="form-group">
                <button type="button" id="adminloginbtn" onclick="adminlogin()" class="btn btn-block">Login</button>
        </div>
        `
        AdminLoginForm.appendChild(otpdiv)
        resendTimer()
    }
})



function adminlogin() {
    loginbtn.innerHTML = "loading..."
    const password = document.getElementById('password__').value;
    if (!password) {
        custom_alert('warning', 'Please Fill all the Fields...')
        loginbtn.innerHTML = 'Try again'
    } else {
        Checkotp(password)
        
    }
}


function resendTimer() {
    let timeLeft = 40;
    let elem = document.getElementById('sendotp');
    
    let timerId = setInterval(countdown, 1000);
    function countdown() {
      if (timeLeft == -1) {
        clearTimeout(timerId);
        sendotpBtn.disabled = false;
        elem.innerHTML = `Resend OTP`
      } else {
        elem.innerHTML = `Resend OTP (${timeLeft})`;
        timeLeft--;
      }
    }
}


async function Checkotp(password) {
    const adminloginbtn = document.getElementById('adminloginbtn');
    adminloginbtn.innerHTML = "Loading..."
    let data = {
        password: password
    }
    loginbtn.innerHTML = 'Loading...'
    let response = await fetch('https://sillyfy.herokuapp.com/adminlogin', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    let res = await response.json()
    custom_alert(res.type_, res.message);
    if (res.type_ == 'success') {
        loginbtn.innerHTML = 'login successful'
        window.localStorage.setItem("email", res.user);
        window.localStorage.setItem("username", res.name);
        setTimeout(() => {
            window.location.href = 'user/dashboard.html';
        }, 1000);
    } else {
        loginbtn.innerHTML = 'Login'
    }
}
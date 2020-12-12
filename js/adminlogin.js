const sendotpBtn = document.getElementById('sendotp');
const AdminLoginForm =  document.getElementById('AdminLogin-Form');

sendotpBtn.addEventListener('click',async ()=>{
    sendotpBtn.disabled = 'true';
    sendotpBtn.innerHTML = 'sending...'
    let response = await fetch('https://sillyfy.herokuapp.com/admin_OTP_request', {
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
        <div class="form-group">
             <label for="password">OTP</label>
             <input type="password" class="form-control" id="password__" required>
        </div>
        <div class="form-group">
                <button type="button" onclick="adminlogin()" class="btn btn-block">Login</button>
        </div>
        `
        AdminLoginForm.appendChild(otpdiv)
    }               
})



function adminlogin() {
    loginbtn.innerHTML = "loading..."
    const password = document.getElementById('password__').value;
    if (!password) {
        custom_alert('warning', 'Please Fill all the Fields...')
        loginbtn.innerHTML = 'Try again'
    } else {
        CheckCredentials(password)
    }
}



async function CheckCredentials(password) {
    let data = {
        password: password
    }
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
        window.localStorage.setItem("user", res.user);
        window.localStorage.setItem("username", res.name);
        // setTimeout(() => {
        //     window.location.href = 'user/dashboard.html';
        // }, 1000);
    } else {
        loginbtn.innerHTML = 'Login'
    }
}
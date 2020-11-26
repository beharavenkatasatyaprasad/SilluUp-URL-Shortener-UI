const loginbtn = document.getElementById('loginbtn');

function login() {
    loginbtn.innerHTML = "loading..."
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (!email || !password) {
        custom_alert('warning', 'Please Fill all the Fields...')
        loginbtn.innerHTML = 'Try again'
    } else {
        CheckCredentials(email, password)
    }
}


async function CheckCredentials(email, password) {
    let data = {
        email: email,
        password: password
    }
    let response = await fetch('https://sillyfy.herokuapp.com/login', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    let res = await response.json()
    custom_alert(res.type_, res.message);
    if (res.type_ == 'success') {
        loginbtn.innerHTML = 'login successful'
        window.localStorage.setItem("user_token", res.token);
        window.location.href = './home.html';
        form.reset()
    } else {
        loginbtn.innerHTML = 'login'
    }
}
const username = window.localStorage.getItem("user");
const token = window.localStorage.getItem("token");



document.getElementById('Sillyfy').addEventListener('click', () => {
    window.location.href = "./home.html";
});

document.getElementById('myLinks').addEventListener('click', () => {
    window.location.href = "./myLinks.html";
});

document.getElementById('LogOut').addEventListener('click', () => {
    window.localStorage.removeItem("user");
    window.localStorage.removeItem("token");
    custom_alert("warning", "logging out!");
    setTimeout(() => (window.location.href = "../index.html"), 2000);
});

login()



function login() {
    if (!token || !username) {
        custom_alert("warning", "UnAuthorized Login!!!");
        setTimeout(() => {
            window.location.href = "../index.html";
        }, 2000);
    } else {
        document.getElementById('username').innerHTML = username.split('@')[0]
    }
}


function custom_alert(type, message) {
    let newAlert = $("#message");
    if (type === 'success') {
        newAlert.html(`
        <div class="fade-in text-center m-0 alert alert-${type} fade show" role="alert">
            <i class="fa fa-check-circle alert-success" aria-hidden="true"></i> ${message}
        </div>`);
    } else if (type === 'warning') {
        newAlert.html(`
        <div class="fade-in text-center m-0 alert alert-${type} fade show" role="alert">
            <i class="fa fa-exclamation-circle alert-warning" aria-hidden="true"></i> ${message}
        </div>`);
    } else {
        newAlert.html(`
        <div class="fade-in text-center m-0 alert alert-${type} fade show" role="alert">
            <i class="fa fa-times-circle alert-danger" aria-hidden="true"></i> ${message}
        </div>`);
    }

    setTimeout(() => {
        newAlert.html("");
    }, 4000);

}
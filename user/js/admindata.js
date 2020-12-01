
getlinks()
async function getlinks() {
    let response = await fetch('https://sillyfy.herokuapp.com/getlinks', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    let res = await response.json()
    document.getElementById('links').innerHTML = res.length
}

getusers()
async function getusers() {
    let response = await fetch('https://sillyfy.herokuapp.com/getusers', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    let res = await response.json()
    document.getElementById('users').innerHTML = res.length - 1
}
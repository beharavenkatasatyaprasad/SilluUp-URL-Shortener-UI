
getlinks()
async function getlinks() {
    let response = await fetch('https://sillyfy.herokuapp.com/getlinks', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    let res = await response.json()
    console.log(res)
}

getusers()

getlinks()
async function getData() {
    let response = await fetch('https://sillyfy.herokuapp.com/getusers', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    let res = await response.json()
    console.log(res)
}
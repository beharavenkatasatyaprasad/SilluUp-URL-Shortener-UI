const user = window.localStorage.getItem('user');

const result_div = document.getElementById('result__');
const sendbtn = document.getElementById('sendbtn');

function send() {
    const Longlink = document.getElementById('Longlink').value;
    if (!Longlink) {
        custom_alert('warning', 'Empty Field !!');
        btn.innerHTML = "SillyFy"
    } else {
        validURL(Longlink)
    }
}

function validURL(longUrl) {
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + //port
        '(\\?[;&amp;a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i');
    if (pattern.test(longUrl)) {
        sillyFy(longUrl)
    } else {
        custom_alert('warning', 'Invalid Url !!')
        btn.innerHTML = "SillyFy"
    }
}


async function sillyFy(longLink) {
    // console.log(longLink)
    sendbtn.innerHTML = 'Wait..'
    sendbtn.disabled = true
    let data = {
        req_by: user,
        longLink: longLink,
    }
    let response = await fetch('https://sillyfy.herokuapp.com/sillyFy', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    let res = await response.json()
    custom_alert(res.type_, res.message);
    if (res.type_ == 'success') {
        sendbtn.innerHTML = 'SillyFy'
        sendbtn.disabled = false
        displayResult(res)
    }
    myLinks()
}

function displayResult(res) {
    result_div.innerHTML = ''
    const result = document.createElement('div');
    result.className = 'result p-1 row justify-content-around cols-sm-12 col-lg-12 input-div'
    result.style.margin = 'auto'
    result.innerHTML = (`
    <div class="card fade-in links-card col col-sm-10 col-md-10 m-2 col-xs-12 p-0 col-lg-5">
        <div class="short-link row p-2 m-0 text-center">
            <div class="col-lg-6  col-sm-12">
                <span class="description">
                    SillyFyed Url
                </span><br>
                <small>
                    <a href="${res.shortLink}">${res.shortLink}</a>
                </small>
            </div>
            <div class="col-lg-6 col-sm-12">
                <span class="description">
                    SillyFyed On 
                </span><br>
                <span style="color:hsl(300, 24%, 80%);">
                    ${res.date}
                </span>
            </div>
        </div>
        <div class="long-link p-0 col">
            <div class="description text-center col-sm-12">
                long Url
            </div>
            <div class="col-sm-12 px-0 text-center">
                <a href="${res.longLink}"><small>${res.longLink}</small></a>
            </div>
        </div>
        <div class="col btns col-sm-12 p-0">
            <div class="my-links-btns row m-0">
                <div class="col-sm-6 p-0">
                    <button type="button" onclick="copy('${res.longLink}')" class="btn btn-block">Copy Long Url &nbsp; <i class="fa fa-clone" aria-hidden="true"></i></button>
                </div>
                <div class="col-sm-6 p-0">
                    <button type="button" onclick="copy('${res.shortLink}')" class="btn btn-block">Copy SillyFyed Url &nbsp; <i class="fa fa-clone" aria-hidden="true"></i></button>
                </div>
            </div>
        </div>
    </div>
    `)
    result_div.appendChild(result)
}
const user = window.localStorage.getItem('user');
const result_div = document.getElementById('result_');

myLinks()
async function myLinks() {
    let data = {
        user: user
    }
    let response = await fetch('http://localhost:3000/MyLinks', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    let res = await response.json()
        // custom_alert(res.type_, res.message);    
    displayResult(res)

}

function displayResult(data) {
    let dataArray = data.result
    console.log(dataArray)
    result_div.innerHTML = ''
    dataArray.forEach(link => {
        const card = document.createElement('div');
        card.className = 'card fade-in links-card col-lg-6'
        card.innerHTML = (`
            <div class="short-link row p-2 m-0 text-center">
                <div class="col-lg-6  col-sm-12">
                    <span class="description">
                        SillyFyed Url
                    </span><br>
                    <a href="http://localhost:3000/fy/${link.shortLink}">http://localhost:3000/fy/${link.shortLink}</a>
                </div>
                <div class="col-lg-6 col-sm-12">
                    <span class="description">
                        SillyFyed On 
                    </span><br>
                    <span style="color: rgb(255, 255, 255);">
                        ${link.issuedOn}
                    </span>
                </div>
            </div>
            <div class="long-link p-0 col">
                <div class="description text-center col-sm-12">
                    long Url
                </div>
                <div class="col-sm-12 px-0 text-center">
                    <a href="${link.longLink}"><small>${link.longLink}</small></a>
                </div>
            </div>
            <div class="col btns col-sm-12 p-0">
                <div class="my-links-btns row m-0">
                    <div class="col-sm-6 p-0">
                        <button type="button" class="btn btn-block">Copy Long Url &nbsp; <i class="fa fa-clone" aria-hidden="true"></i></button>
                    </div>
                    <div class="col-sm-6 p-0">
                        <button type="button" class="btn btn-block">Copy SillyFyed Url &nbsp; <i class="fa fa-clone" aria-hidden="true"></i></button>
                    </div>
                </div>
            </div>
        `)
        result_div.appendChild(card)
    })
}
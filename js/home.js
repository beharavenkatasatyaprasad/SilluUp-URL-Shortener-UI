let IPadd

$.getJSON("https://ipfind.co/?ip=103.203.172.222&auth=298b7e64-1a90-470e-9494-50f4c53e245f", function(result){
    // console.log(result.ip_address);
    IPadd = result.ip_address
});

function send(){
    const Longlink = document.getElementById('longlink').value;
    if(!Longlink){
        custom_alert('warning', 'Empty Field !!')
    }else{
        sillyfy()
    }
}
function sillyfy(){
    
} 
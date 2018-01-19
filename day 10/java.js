
function lightOn() {
    document.getElementById('myImage').src='img/bulbon.gif';
}
function lightOff() {
    document.getElementById('myImage').src='img/bulboff.gif';
    
}

let light = confirm("Do you want the light on?");
if (light == true) {
    lightOn();
} else {
    lightOff();
}

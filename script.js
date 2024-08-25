//darkmode
document.getElementById("darkmode").onclick = function () {
    document.getElementById('theme').innerHTML = '<link rel="stylesheet" href="dark.css" id="theme">';
}


//lightmode
document.getElementById("lightmode").onclick = function () {
    document.getElementById('theme').innerHTML = '<link rel="stylesheet" href="light.css" id="theme">';
}
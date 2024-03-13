
let body = document.querySelector('body');
let div = document.getElementById('div');
let table = document.getElementById('table');
let width = 100;
let increament = 2;
let interveralID = 0;

function myFunction() {
    clearInterval(interveralID);
    interveralID = setInterval(expand, 50);
}

function expand() {
    if (width < 1600) {
        width = width + increament;
        document.getElementById("div").style.width = width;
        console.log(width);
    }
}

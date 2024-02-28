const button = document.querySelector("#generator");
const display = document.querySelector("#display");
const body = document.body


function changeColor() {
    let hexr = Math.floor(Math.random() * 256).toString(16);
    let hexg = Math.floor(Math.random() * 256).toString(16);
    let hexb = Math.floor(Math.random() * 256).toString(16);
    hexr.length < 2 ? hexr = "0" + hexr : hexr;
    hexg.length < 2 ? hexg = "0" + hexg : hexg;
    hexb.length < 2 ? hexb = "0" + hexb : hexb;
    let hexcolor = "#" + hexr + hexg + hexb;
    display.innerHTML = hexcolor;
    body.style.backgroundColor = hexcolor;
};

button.addEventListener("click",changeColor);
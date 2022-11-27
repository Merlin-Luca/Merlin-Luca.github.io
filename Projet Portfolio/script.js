// TEXTE QUI APPARAIT COMME SI IL ÉTAIT ÉCRIT ?
const checkBox = document.getElementById('checkbox');
var menuItems = document.getElementById('menu-items');
const ul = document.querySelector('ul');
var line1 = document.querySelector('.line1');
var line2 = document.querySelector('.line2');
var line3 = document.querySelector('.line3');

checkBox.addEventListener("click", menu_Apparition);
ul.addEventListener("click", menu_Disparition);

function menu_Apparition()
{
    if(checkBox.checked == true)
    {
    menuItems.style.transform = 'translateX(0%)';
    line1.style.transform = 'rotate(45deg)';
    line1.style.marginLeft = '5px';
    line2.style.transform = 'scaleY(0)';
    line2.style.marginLeft = '5px';
    line3.style.transform = 'rotate(-45deg)';
    line3.style.marginLeft = '5px';
    }
    if(checkBox.checked == false)
    {
    menuItems.style.transform = 'translate(+150%)';
    line1.style.transform = 'rotate(0deg)';
    line1.style.marginLeft = '0px';
    line2.style.transform = 'scaleY(1)';
    line2.style.marginLeft = '0px';
    line3.style.transform = 'rotate(0deg)';
    line3.style.marginLeft = '0px'
    }
}

function menu_Disparition()
{
    menuItems.style.transform = 'translate(+150%)';
    checkBox.checked = false;
    line1.style.transform = 'rotate(0deg)';
    line1.style.marginLeft = '0px';
    line2.style.transform = 'scaleY(1)';
    line2.style.marginLeft = '0px';
    line3.style.transform = 'rotate(0deg)';
    line3.style.marginLeft = '0px';
}

let html = document.querySelectorAll('.progressChargement');
let progressBar = [];
console.log(html);
html.forEach(currentValue => {
    progressBar.push(currentValue);
    });
console.log(progressBar[0].innerHTML);

let i = 15;
let y = 15;
let z = 15;
let u = 15;
function zeroTo100(){
    if( i < 100 ) {
        progressBar[0].innerHTML = ++i + "%";
        setTimeout(zeroTo100, 30);
    }
    if(y != 85){
        progressBar[1].innerHTML = ++y + "%";
    }
    if(z != 80){
        progressBar[2].innerHTML = ++z + "%";
    }
    if(u != 50){
        progressBar[3].innerHTML = ++u + "%";
    }
}
zeroTo100();

const progress = document.querySelectorAll('.progressbar');
let barre = [];
progress.forEach(currentValue => {
    barre.push(currentValue);
    });

let h = 9;
let c = 6;
let s = 3;
let j = 0;
function load()
{
    if(h < 100){
        h++;
        progress[0].style.width = h+"%"
    }
    if(c < 85){
        c++
        progress[1].style.width = c+"%"
    }if(s < 80){
        s++
        progress[2].style.width = s+"%"
    }if(j < 50){
        j++
        progress[3].style.width = j+"%"
    }
    setTimeout(load, 25);
}
load();
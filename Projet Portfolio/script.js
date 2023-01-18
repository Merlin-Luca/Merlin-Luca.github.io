const checkBox = document.getElementById('checkbox');
let menuItems = document.getElementById('menu-items');
const ul = document.querySelector('ul');
let line1 = document.querySelector('.line1');
let line2 = document.querySelector('.line2');
let line3 = document.querySelector('.line3');

checkBox.addEventListener("click", menu_Apparition);
ul.addEventListener("click", menu_Disparition);

window.addEventListener("load",()=>{
    let divLeft = document.getElementById("left");
    let divRight = document.getElementById("right");
    let left = document.querySelector(".left");
    let right = document.querySelector(".right");
    const options = {duration: 5000, direction: "alternate"}
    apparaitreLeft()
    apparaitreRight()
    
function apparaitreLeft(){
    const keyframesLeft = [{left: "0"}, {left: "-115%"}, {left: "0"}];
    const keyframesLeft2 = [{left: "0"}, {left: "-65%"}, {left: "0"}];
    if(left.innerHTML == "Developpeur")
    {
        const LeftAnimation = divLeft.animate(keyframesLeft, options);
        LeftAnimation.addEventListener("finish", ()=>{
        left.innerHTML= "Merlin"
        apparaitreLeft()
    })
    }
    else
    {
        const LeftAnimation2 = divLeft.animate(keyframesLeft2, options);
        LeftAnimation2.addEventListener("finish", ()=>{
        left.innerHTML= "Developpeur"
        apparaitreLeft()
        })  
    }    
}
    function apparaitreRight()
    {
        const keyframesRight = [{right: "0"}, {right: "-70%"}, {right: "0"}];
        const RightAnimation = divRight.animate(keyframesRight, options);
        RightAnimation.addEventListener("finish", ()=>{
            if(right.innerHTML == "Web")
            {
                right.innerHTML= "Luca"
            }
            else{
                right.innerHTML = "Web"
            }
            apparaitreRight()
        })
    }
});  
  

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
html.forEach(currentValue => {
    progressBar.push(currentValue);
    });

let i = 15;
let y = 15;
let z = 15;
let u = 15;

const progressTest = new IntersectionObserver((entries)=>{
    if(entries[0].isIntersecting){
        zeroTo100()
        load()
    }
})

let competences = document.querySelector('.container-css')
progressTest.observe(competences)

// Myflix 
const my_flix_observe = new IntersectionObserver((entries)=>{
    let my_flix_p = document.querySelector('.my-flix-p')
    let my_flix_img = document.querySelector('.my_flix_img')
    if(entries[0].isIntersecting)
    {
        my_flix_p.style.opacity = "1";
        my_flix_img.style.opacity = "0.4";
    }
    else
    {
        my_flix_p.style.opacity = "0";
        my_flix_img.style.opacity = "1";
    }
}, {threshold: 0.95})

let my_flix_observer = document.querySelector('.my_flix_observer')
my_flix_observe.observe(my_flix_observer)

// E-commerce
const e_commerce_observe = new IntersectionObserver((entries)=>{
    let e_commerce_p = document.querySelector('.e_commerce_p')
    let e_commerce_img = document.querySelector('.e_commerce_img')
    if(entries[0].isIntersecting)
    {
        e_commerce_p.style.opacity = "1";
        e_commerce_img.style.opacity = "0.4";
    }
    else
    {
        e_commerce_p.style.opacity = "0";
        e_commerce_img.style.opacity = "1";
    }
}, {threshold: 0.95})

let e_commerce_observer = document.querySelector('.e_commerce_observer')
e_commerce_observe.observe(e_commerce_observer)

// Autres
const autres_projet_observe = new IntersectionObserver((entries)=>{
    let autres_projet_p = document.querySelector('.autres_projet_p')
    let autres_projet_img = document.querySelector('.autres_projet_img')
    if(entries[0].isIntersecting)
    {
        autres_projet_p.style.opacity = "1";
        autres_projet_img.style.opacity = "0.4";
    }
    else
    {
        autres_projet_p.style.opacity = "0";
        autres_projet_img.style.opacity = "1";
    }
}, {threshold: 0.95})

let autres_projet_observer = document.querySelector('.autres_projet_observer')
autres_projet_observe.observe(autres_projet_observer)

function zeroTo100(){
        if( i < 100 ) {
            progressBar[0].innerHTML = ++i + "%";
            setTimeout(zeroTo100, 16);
        }
        if(y != 85){
            progressBar[1].innerHTML = ++y + "%";
        }
        if(z != 80){
            progressBar[2].innerHTML = ++z + "%";
        }
        if(u != 60){
            progressBar[3].innerHTML = ++u + "%";
        } 
}

const progress = document.querySelectorAll('.progressbar');
let barre = [];
progress.forEach(currentValue => {
    barre.push(currentValue);
    });

let h = 45;
let c = 40;
let s = 45;
let j = 38;
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
    }if(j < 60){
        j++
        progress[3].style.width = j+"%"
    }
    setTimeout(load, 25);
}

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
    menuItems.style.transform = 'translateX(0)';
    line1.style.transform = 'rotate(45deg)';
    line1.style.marginLeft = '5px';
    line2.style.transform = 'scaleY(0)';
    line2.style.marginLeft = '5px';
    line3.style.transform = 'rotate(-45deg)';
    line3.style.marginLeft = '5px';
    }
    if(checkBox.checked == false)
    {
    menuItems.style.transform = 'translate(-150%)';
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
    menuItems.style.transform = 'translate(-150%)';
    checkBox.checked = false;
    line1.style.transform = 'rotate(0deg)';
    line1.style.marginLeft = '0px';
    line2.style.transform = 'scaleY(1)';
    line2.style.marginLeft = '0px';
    line3.style.transform = 'rotate(0deg)';
    line3.style.marginLeft = '0px';
}



  
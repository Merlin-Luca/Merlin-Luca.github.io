"use strict";

// Horloge
horloge();                                                                                    
function horloge() {
  const date = new Date();
  const heures = ((date.getHours() + 11) % 12 + 1);
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const heure = heures * 30;
  const minute = minutes * 6;
  const seconde = seconds * 6;
  document.querySelector('.hour').style.transform = `rotate(${heure}deg)`;
  document.querySelector('.minute').style.transform = `rotate(${minute}deg)`;
  document.querySelector('.second').style.transform = `rotate(${seconde}deg)`;
}
setInterval(horloge, 1000);

// Changer la date
const span = document.querySelector("footer > h3 > span");
span.textContent = "2022";

// Horloge Numérique
const interval = setInterval(time, 1000);
// Afficher l'horloge
function time() {
  const date = new Date();
  document.getElementById("time").innerHTML = date.toLocaleTimeString();
}
// Arreter l'horloge
function stop() {
  clearInterval(interval);
}

//------------------------------- Barre de progression ---------------------------------
function barreProgression(){
var elem = document.getElementById("barre_Progression_id");
var longueur = 0;
var id = setInterval(progression, 20);
var delay = setTimeout(progression, 1000)
function progression(){
        if (longueur < 100){
            longueur++;
            elem.style.width = longueur + '%';
        if (longueur == 100){
            clearTimeout();
        }
        }else{
            clearInterval(id);
        }
    }
}
barreProgression();
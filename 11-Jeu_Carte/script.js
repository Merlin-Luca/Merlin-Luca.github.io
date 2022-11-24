let displayNone = document.getElementById("display_none");
let textArea = document.getElementById("entries");
let indice = document.getElementsByClassName("indice")[0];
let essais = 0;
let proposer = document.getElementById("proposer");
let carte = document.getElementById("carte");
function entierAleatoire(min, max)
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
}

let aleatoire = entierAleatoire(0, 100);
console.log(aleatoire);
function verif(e){
    if(e.target.value < aleatoire)
    {
        indice.textContent = "C'est plus grand que " + e.target.value;
        essais++;
    }
    if(e.target.value == aleatoire)
    {
        indice.textContent = "C'est gagné! Vous avez trouvé : " + e.target.value + " le numéro gagnant";
        displayNone.style.display = "block";
        proposer.style.display = "none";
        textArea.style.display = "none";
        carte.style.backgroundImage = "url(./win.png)"
        carte.style.transform = "rotateY(190deg)";
        carte.style.transition = "transform 0.5s linear";
    }
    if(e.target.value > aleatoire)
    {
        indice.textContent = "C'est plus petit que " + e.target.value;
        essais++;
    }
    if(essais >= 7 && e.target.value != aleatoire)
    {
        indice.textContent = "C'est perdu !";
        displayNone.style.display = "block";
        proposer.style.display = "none";
        textArea.style.display = "none";
        carte.style.transform = "rotateY(190deg)";
        carte.style.transition = "transform 0.5s linear";
        carte.style.backgroundImage = "url(./uno.png)";
    }
}
textArea.addEventListener("change", verif)
displayNone.addEventListener("click", ()=> location.reload())

// Generer nombre aléatoire + chaque proposition dire + petit ou plus grand
// Donner 7 essais
// Bouton Recomencer, comment relancer le jeu ?
// bonus : faire une carte qui se retourne + afficher le bouton

////----- LES EVENEMENTS

/* Les évènements vont me permettre de déclencher une fonction, c'est à dire : une série d'instructions suite à une action de mon utilisateu

    OBJECTIF : entre en mesure de capturer ces évènemements à travers 
    
    Les evenements MOUSE (souris)

        click : au clic sur un élément
        mouseenter : la souris passe au dessus de la zone qu'occupe un élément
        mouseleave : la souris sort de cette zone

    Les évènements : KEYBOARD (Clavier)

        keydown : une touche du clavier est enfoncée
        keyup : une touche du clavier a été relachée. 

    Les évènements : WINDOW (fenêtre)

        scroll : défilement de la fenêtre 
        resize : redimensionnement de la fenêtre

    Les évènements : FORM (formulaire)

        change : pour les éléments <input>, <select> et <textarea>


"#################### LES ECOUTEURS D'EVENEMENTS #######################
    Pour attacher un évènement à un élément, ou autrement dir, pour déclarer
    un écouteur d'évènement, je vais utiliser la syntaxe suivante : 


    */

var p = document.getElementById("MonParagraphe"); 

// Je souhaite que mon paragrapghe soit rouge au clic de la souris 

// Je définis une fonction charger d'éxecuter cette action 
function changeColorToRed(){
    p.style.color = "red";
}

p.addEventListener("click", changeColorToRed);

// Exercice 
// Création du champ imput
var input = document.createElement("input");

// attribution d'un attribut
input.setAttribute("type", "text"); 
input.setAttribute("placeholder", "saisissez un contenu"); 
input.id = "moninput"; 
document.body.appendChild(input);

function alerte(){
    alert(input.value);
}

input.addEventListener("change", alerte);
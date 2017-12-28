////***** LA MANIPULATION DES CONTENUS */

function l(e){
    console.log(e);}

// -- Je souhaite récupérer mon lien, comment procéder ? 

var google = document.getElementById("google");
l(google);

//--- Maintenant, je souhaite accéder aux informations de ce lien

    // A : Le lien vers lequel pointe la balise
    l(google.href);

    // B : L'ID de la balise
    l(google.id);

    // C : la Classe de la balise

    l(google.className);

    // D : Le Texte de la balise
    l(google.textContent)


    //*** Modifier le texte de mon lien 
    // Comme une variable classique, je vais simplement venir affecter une nouvelle valeur. 
    google.textContent = "Ici c'est Google !";

    /// AJOUTER UN ELEMENT DANS MA PAGE 

//*** Nous allons utiliser 2 méthodes */

//1 La fonction document.createElement() va permettre de générer un nouvel élément dans le DOM ; que je pourrais par la suite modifier avec les méthodes ci dessus. 
//P.S : Ce nouvel élement est placé en mémoire. 

// Définition de l'élément

var span = document.createElement("span");

// -- Si je souhaite lui donner un ID 

span.id="MonSpan";

// -- Si je souhaite lui attribuer du contenu
span.textContent = "Mon Beau texte en JS"; 

//-- Comment j'ajoute mon élément dans la page ? 
// -- La fonction appendChild va permettre de rajouter un enfant à un élément du DOM.

google.appendChild(span);


//// EXERCICE 

var h1 = document.createElement("h1"); 
var a = document.createElement("a");
h1.textContent = "Titre de mon Article";
a.href = "https://www.zouzous.fr/";
h1.appendChild(a);
document.body.appendChild(h1);

// Je veux que mon lien soit de couleur rouge

a.style.color ="red"; 
a.style.TextDecoration = "none"; 
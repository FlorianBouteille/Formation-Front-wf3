                    /* ************************
                            LES FONCTIONS
                    ************************** */

// -- Déclarer une fonction 
// Cette fonction ne retourne aucune valeur 

function disBonjour() {
    //-- Lors de l'appel de la fonction, les instructions ci dessous seront exécutées 
    alert("Bonjour !");
}

/** Je vais appeler ma fonction "disBonjour" et déclencher ses instructions */

 disBonjour();

//-- Déclarer une fonction qui prend une variable en paramètre 
function Bonjour(Prenom, Nom) {
    document.write("<p>Bonjour <strong>" + Prenom + " " + Nom + "</strong> !</p>");

}

//-- Appeler / Utiliser une fonction avec des paramètres 
Bonjour('Florian','Bouteille');

// EXERCICE 

function addition(nb1,nb2){
    document.write(nb1+nb2);
}

addition(7,9);


// Correction 

function additionb(nb1,nb2) {
    return nb1 + nb2;
}

document.write("<p>" + additionb(10, 5) + "</p>");

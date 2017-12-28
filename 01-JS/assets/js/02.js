// -- Déclarer un tableau indexé
var monTableau = [];
var myArray = new Array;

// -- Affecter des valeurs à un tableau indexé
monTableau[0] = "Marie-Pierre";
monTableau[1] = "Hamid";
monTableau[2] = "HUgo";

// -- Afficher le contenu de mon tableau dans la console
console.log(monTableau[1]); //-- Hamid
console.log(monTableau); //-- Afficher toutes les données. 

//-- Déclarer et affecter des valeurs à un tableau indexé
var NosPrenoms = ["Marie-Pierre","Thomas","Olivier","Chloé","Riad","Hugo"];
console.log(NosPrenoms);

// -- Déclarer et affecter des valeurs à un objet 
// -- PAS DE TABLEAU ASSOCIATIF EN JS !!!!

var Coordonees = {
    prenom : "Hugo",
    nom : "Liegeard",
    age : 28
};

console.log (Coordonees);
console.log(typeof Coordonees);

// -- Je vais créer 2 tableaux indexés

var listeprenoms = ["Hugo","Marie-Pierre","Lounis","Romain"];
var listenoms = ["Liegeard","Dupoux","Dgaden","Elie"];

// -- Je vais créer un tableau à 2 dimensions à partir de mes deux tableaux précédents

var Annuaire = [listeprenoms, listenoms];
console.log(Annuaire);

//-- Lounis Dgaden
console.log(Annuaire[0][2]);
console.log(Annuaire[1][2]);

//-- Exercice

var Nom = ["Arthur", "Florian", "Thierry"];
var Prenom = ["Bocquiny", "Bouteille", "Caron"];
var tel = [33654784512, 33630784623, 33745123698];

var Bottin = [Nom, Prenom, tel];
console.log(Bottin);

// -- Correction 

var AnnuairedesStagiaires = [
    {prenom:'hugo', nom:'LIEGEARD', tel:'0789451325'},
    {prenom:'Chloé', nom:'Thuillier', tel:'XXX XX XXX'},
    {prenom:'Anis', nom:'Chahbani', tel:'YY YYY YYY YYY'},
];

console.log(AnnuairedesStagiaires);
console.log(AnnuairedesStagiaires[1]);
console.log(AnnuairedesStagiaires[1]['prenom']);
console.log(AnnuairedesStagiaires[1].prenom);

// -- Exemple de Tableau 3D

var Contacts = [

    {
        prenom      : "Hugo",
        nom         : "LIEGEARD",
        coordonnees : {
                        email   : "wf3@hl-media.fr",
                        adresse : {
                                    ville   : "Ducos",
                                    cp      : 97224,
                                    region  : "Martinique",
                                    pays    : "France"
                                  },
                        tel     : {
                                    fixe    : "0596 108 328",
                                    fax     : "0596 108 632",
                                    port    : "0783 97 15 15"
                                  }
                      }
    },
    {
        prenom      : "Rodrigue",
        nom         : "NOUEL",
        coordonnees : {
                        email   : "wellcommunication.net@gmail.com",
                        adresse : {
                                    ville   : "Fort-de-France",
                                    cp      : 97200,
                                    region  : "Martinique",
                                    pays    : "France"
                                  },
                        tel     : {
                                    fixe    : "0596 XXX XXX",
                                    fax     : "0596 XX XX XX",
                                    port    : "0696 07 04 34"
                                  }
                      }
    }

];

console.log(Contacts);
console.log(Contacts[0].coordonnees.tel.port);
console.log(Contacts[1].coordonnees.tel.port);

// AJOUTER UN ELEMENT DANS UN TABLEAU 

var Couleurs = ["rouge", "jaune", "vert"];
console.log(Couleurs);

// Si je souhaite ajouter un élément dans mon tableau, je fais appel à la fonction push() qui me renvoie le nombre d'éléments de mon tableau, que je peux récupérer facultativement dans une variable. 

var NombreElementsDeMonTableau = Couleurs.push("Orange");
console.log(Couleurs);

// La fonction unshift() permet d'ajouter un ou plusieurs éléments en début de tableau. 

/********************************************* 

    REECUPERER ET SORTIR LE DERNIER ELEMENT

**********************************************/

// La fonction pop() permet de supprimer le dernier élément de mon tableau et d'en récupérer la valeur

// La même chose est possible avec le premier élément avec la fonction shift()

// N.B : La fonction splice () vous permet de faire sortir un ou plusieurs éléments de notre tableau 

var mondernierelement = Couleurs.pop();
console.log(mondernierelement);
console.log(Couleurs);


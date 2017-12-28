//  alert('Super ! Tu es arrivé !');

// Deux slash pour faire un commentaire uniligne

/*

Ici je peux faire un commentaire sur 
plusieurs lignes...

Racourci : CTRL + /
      ou : CTRL + SHIFT + /
*/
// -- 1. Déclarer une vraiable en JS
var Prenom;

// -- 2. Affecter une valeur 
Prenom = "Anakin";

// -- 3. Afficher la valeur de ma variable dans la console du navigateur
console.log(Prenom);

                    /**----------------------------------- 
                    |       LES TYPES DE VARIABLES        |
                    --------------------------------------*/

    // -- "typeof" me permet de connaître le type de ma variable
console.log(typeof Prenom);

// -- Déclaration et affectation d'une valeur à une variable 
var Age = 22;

// -- Afficher dans la console
console.log(Age);

// -- Verifier son type 
console.log(typeof Age)


                    /*----------------------------------------------
                                 LA PORTEE DES VARIABLES     

                        Les variables déclarées directement à la 
                        racine du fichier sont appelées variables
                        "GLOBAL"

                        Elles sont disponibles dans l'ensemble de
                        votre document, y compris dans les focntions
                        et les boucles. 

                        La portée des variables GLOBALES s'arrêtent
                        au fichier. Si je change de page, les 
                        variables n'existent plus. 

                        Les variables déclarées à l'intérieur d'une
                        fonction sont appelées variables "LOCALES";

                        Elles sont disponibles uniquement à 
                        l'intérieur de celles-ci. 

                    --------------------------------------------*/
// -- Les variables de type FLOAT 

var unedecimale = -2.984;
console.log(unedecimale);
console.log(typeof unedecimale);

// -- Les Booléens (VRAI / FAUX)

var unbooleen = false; // true
console.log(unbooleen);
console.log(typeof unbooleen);

                    /*--------------------------------------------------
                                        LES CONSTANTES

                    La déclaration CONST permet de créer une constante
                    accessible UNIQUEMENT en lecture. 

                    Sa valeur ne pourra pas être modifiée par des 
                    réaffectations ultérieures. 

                    Une constante ne peut pas être déclarée à nouveau. 

                    Généralement par convention les constantes sont en
                    MAJUSCULES.

                    ----------------------------------------------------*/

const HOST = "localhost";
const USER = "root";
const PASW = "mysql";

// Je ne peux pas faire cela 

// USER = "127.0.0.1";
// TypeError: Assignment to constant variable. 

                    /*--------------------------------------------------
                                      LA MINUTE INFO

                    Au fur et à mesure que l'on affecte ou réaffecte des
                    valeurs à une variable, celle-ci prend la nouvelle
                    valeur et le nouveau type.

                    En Javascript (ECMA Script - ES), les variables sont
                    auto-typées. 

                    Pour convertir une variable de type NUMBER en STRING
                    et STRING en NUMBER je peux utiliser les fonctions
                    natives de javascrpit. 

                    ----------------------------------------------------*/

var unnombre = "24";
console.log(unnombre);
console.log(typeof unnombre);   

// La fcontion parseInt permet de retourner un entier à partir d'un string

unnombre = parseInt(unnombre)
console.log(unnombre)
console.log(typeof unnombre)

// je réafecte une valeur à ma variable

unnombre = "12.55";
console.log(unnombre);
console.log(typeof unnombre);

// La fonction parseFloat permet de retourner un FLOAT à partie d'un STRING

unnombre = parseFloat(unnombre);
console.log(unnombre);
console.log(typeof unnombre);

// Conversion d'un nombre en String avec toString()
var UnNombreversunString = 10;
console.log(typeof UnNombreversunString);
console.log(typeof UnNombreversunString.toString() );
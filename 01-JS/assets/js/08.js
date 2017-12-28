                                /***************************
                                      LES CONDITIONS
                                ****************************/

/* var MajoriteLegaleFR = 18;

if (14 >= MajoriteLegaleFR){
    alert("Bienvenue !");
}
// -- Le else n'est pas obligatoire 
else {
    alert('google');
}

var Majorite = 18;

function age(){
    let age = parseInt(prompt("What is your age ?", "age"));
    if (age >= Majorite) {
        alert("Bienvenue !");
    }

    else  {
        alert("Ooops, tu es bien trop jeune, petit coquin !")
        document.location.href="http://google.fr";
    }

}

age();

// correction 

// 1 Déclarer la majorité légale
 


// -- Déclarer ma fonction

/** Si l'age de l'utilisateur passé en paramètre en supérieur ou égale à la majorité égale, alors la fonction retourne vrai.
 * Sinon, elle retourne faux
@param {Int} age
@return {Boolean} */
var MajoriteLegale = 18;
function verifierage(age) {
    if (age >= MajoriteLegale) {
        return true;
    }
    else {
        return false;
    }
}
 // -- 3 Je demande à l'utilisateur son âge

 var age = parseInt(prompt("Bonjour, quel âge avez vous ?", "Saississez votre âge"));

 // -- 4 Vérification de l'âge de l'utilisateur 
 
 if (verifierage(age)) {

    // 4a. J'affiche un message de bienvenue
    alert("Bienvenue sur mon site internet pour adultes");
}

else {

    // 4b. J'effectue une redirection   
    document.location.href = "http://google.fr";

} 

/************ LES OPERATEURS DE COMPARAISON *****************/

/*  L'opérateur de comparaison " == " signigie : Egal à, il permet
de vérifier que deux variables sont identiques. 

    L'opérateur de comparaison " === " signifie : strictement
    égal à, il va comparer la valeur ET LE TYPE de donnée.     

    L'opérateur de comparaison " != " signifie Différent de. 

    L'opérateur de comparaison " !== " signifie Strictement
    différent de. 

*************************************************************/

// Exercice 

 /*var email, mdp;

email = "wf3@hl-media.fr";
mdp = "wf3";

function mail(){
    var mail = prompt("Rentrez votre email", "votre e-mail");
    if (mail==email) {
        return true;
    }
    else {
        return false
    }
 }



function psw(){
    
    var mdp1 = prompt("Rentrez votre mot de passe", "votre mot de passe");
    
    if (mdp1==mdp) {
        return true;
    }
    else {
        return false
    }
}


function a() {

if (mail() && psw()) {
    alert("Bienvenue !");
}
if     (mail() == false)  {
    alert("try again");
}
if     (psw() == false)  {
    alert("try again");
}
}

a();

/*/ /*correction

// 1 Demander à l'utilisateur son email 

var emailUser = prompt("Bonjour, quelle est votre email", "saisissez votre email");

// 2 Je vérifie si l'email correspond à celui en BDD

if (emailuser == email) {
      // 2a tout est ok, je continue la vérification avec le mot de passe. 
      // 2a1  
      var mdpUser = prompt("Votre mot de passe ?", "saisissez votre mdp");
        if (mdpUsef == mdp) {
            alert('Bienvenue !');
        }
        else {
            alert("Attention, nous n'avons pas reconnu votre mot de passe");
        }
}

else {
      // 2b Les emails ne correspondent pas... 
      alert("ATTENTION, nous n'avons pas reconnu votre email");
}  */

// Correction avec des fonctions 
email = "wf3@hl-media.fr";
mdp = "wf3";

function CorrectUser(emailuser,mdpuser) {
    if (emailuser == email && mdpuser == mdp) {
        return true;
    }
    else {
        return false; 
    }
}

var emailuser = prompt("Bonjour, quelle est votre email", "saisissez votre email");
var mdpuser = prompt("Votre mot de passe ?", "saisissez votre mdp");

 if (CorrectUser(emailuser,mdpuser)) {
     alert("Bienvenue " + emailuser );
 }
else {
    alert("NOPE");
}

/************** LES OPERATEURS LOGIQUES ********************

        # L'opérateur ET : && ou AND 

    Si la combinaison emailuser et email correspond ET si
    la combinaison mdpuser et mdp correspond. 
        Dans cette condition, les deux doivent obligatoirement
        correspondre pour être validés. 
    ex : if(emailuser==email && mdpuser==mdp) {...}
    
        # L'opérateur OU : || ou OR 

    Si la combinaison emailuser et email correspond ET/OU si 
    la combinaison mdpuser et mdp correspond. 
        Dans cette condition, au moins l'une deux deux 
        combinaisons doit correspondre pour être 
        validée.     
    ex : if(emailuser==email || mdpuser==mdp) {...}

        # L'opérateur ! ou encore NOT 

    L'opérateur ! signifie le CONTRAIRE DE ou NOT

    var monuserestApprouve = true; 
    if(!monuserestApprouve) {...}  : si mon utilisateur 
    N'EST PAS approuvé. 

    reviens à écrire : 
    if(monuserestApprouve == false) {...}
 n
*/
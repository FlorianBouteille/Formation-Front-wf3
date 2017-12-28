 /*var ladate = new Date();
function prenom(){
    var prenom = prompt("Entrez votre prénom", "prenom");
    var age = prompt("Bonjour" + prenom + "quel age as tu ?", "age");
    alert("Tu es donc né en" + " " + (ladate.getFullYear() - age) +".");
    document.write("Bonjour" + " " + prenom + " " + "tu as"+ " " + age +" " +"ans" + "!")
} */






/// Correction 

// 1. Initialisation des variables 
var date = new Date();
var annee = date.getFullYear();

// 2. Création d'une fonction
function Hello(){

    // 2a. je demande à l'utilisateur son prénom
    let prenom = prompt("Hello ! What is yout name ?", "<Saisir votre prénom>"); // let c'est comme var mais pour quand la variable est dans un bloc défini (comme une fonction)
    console.log(prenom);
    console.log(typeof prenom);

            

    // 2b. je lui demande son âge 
    let age = parseInt( prompt("Hello " + prenom + " how old are you ?", "<saisir votre âge>"));
    console.log(age);
    console.log(typeof age);

    // 2c. Déduire l'année de naissance, et l'afficher dans une "alert". 
    alert("Amazing ! So you were born in " + (annee - age) + " ! " );

    // 2d. J'affiche tout ça sur la page (récapitulatif)
    document.write("Hello" + " " + prenom + " " + "you are"+ " " + age + " " + "years old !");
}

// 3. Execution de ma fonction 
Hello();
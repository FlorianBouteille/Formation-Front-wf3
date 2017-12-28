/**********   LA CONCATENATION   ************/

var debutDePhrase ="Aujourd'hui ";
var laDate = new Date();
var SuiteDePhrase = ", sont présents ";
var nombreDeStagiaires = 18;
var finDePhrase = " stagiaires.<br/>"

// -- Nous souhaitons maintenant, grâce à la concatenation afficher tout ce petit monde, en un seul morceau ! 

document.write (debutDePhrase + laDate.getDate() + '/' + (laDate.getMonth() + 1) + '/' + laDate.getFullYear() + ' ' + nombreDeStagiaires + finDePhrase);

// -- Créer une concatenation à partir des éléments suivants 

var phrase1 = "Je m'appelle ";
var phrase2 = "Florian et j'ai ";
var age     = 26;
var phrase3 = " ans ! <br/>";

document.write (phrase1 + phrase2 + age + phrase3);

document.write (laDate.getMilliseconds() + "<br/>");

document.write (laDate.getSeconds());
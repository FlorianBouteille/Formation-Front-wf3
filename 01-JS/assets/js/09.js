   //////************************ LES BOUCLES  ******/////////////////

 // -- La boucle FOR 
 // Pour i = 1 ; tant que i <= inférieur ou égal à 10 ; alors j'incrémente i de 1. 

 for(let i = 1; i <=10 ; i++)   {
     document.write("<p>Instruction exécutée : <strong>" + i +"</strong></p>" );
 }

 document.write ("<hr>")

 // -- La boucle WHILE 

 var j = 1;
 while (j<=10) {
    document.write("<p>Instruction exécutée : <strong>" + j +"</strong></p>" );

    // NE PAS OUBLIER L'INCREMENTATION

    j++;

 }

 /// Supposons les tableaux suivants : 

 var prenoms = ["jean", "pierre", "marc", "matthieu","luc","paul", "hugo"];
 var Noms = ["loj", "hfiauez", "dhfzoeaf", "az", "dhazuei", "hafiz", "hfdaiez", "fhj"];

 // Grace a une boucle for, afficher la lise des prénoms du tableau suivant dans la console ou sur votre page 

 for(let i = 0 ; i <= 6 ; i++){
    document.write("<p>Prénom : " + prenoms[i] + "</strong></p>" );
 }

 for(let j = 0 ; j < Noms.length ; j++){
    console.log(Noms[j]);
 }

 console.log (" --- ")
 var z = 0;
 while(z < prenoms.length){
     console.log(prenoms[z]);
     z++;
 }

prenoms.forEach(afficheprenoms); 

function afficheprenoms(prenom, indice) {
    console.log(prenom);
}

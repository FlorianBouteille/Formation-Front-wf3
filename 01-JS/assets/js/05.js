/* ----------------------------------
    iNCREMENTATION ET DECREMENTATION
-------------------------------------*/

// ----- INCREMENTATION ------ //

var nb1 = 1;
nb1 = nb1 + 1;

// Affichage dans la console

console.log(nb1);

// Ecriture simplifiée 

nb1++; //Racourci de nb1 = nb1 + 1; + : incémentation par pas de 1

// Affichage 
console.log(nb1);

// ----- DECREMENTATION ------ //

nb1 = nb1 - 1;
// Ecriture simplifiée 

nb1--; //Racourci de nb1 = nb1 - 1; - : incémentation par pas de 1

// Affichage 
console.log(nb1);

///// ------ Subtilité ---- ////

nb1 = 0;
console.log("nb1++ = " + nb1++);
nb1 = 0;
console.log("++nb1 = " + ++nb1);
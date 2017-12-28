/**var PremierTrimestre = [
    {
        Prenom : "Etienne" 
                      notes:{
                            maths : 15;
                            philo :12;
                            physique : 9;
                            jonglage : 18;
                            yoga : 14;
                            potions : 4;
                            }
                        },
    
        { Prenom = "Lulu" 
                        notes: {
                            maths : 8;
                            philo : 14;
                            physique : 7;
                            jonglage : 9;
                            yoga: 19;
                            potions : 11;
                            }
                        },
      {  Prenom = "Batman" 
                        notes: {
                            maths : 11;
                            philo : 14 ;
                            physique : 4.5;
                            jonglage : 19;
                            yoga : 3;
                            potions : 7;
                            }
                        },
      {  Prenom = "Sacha" 
                        notes: {
                            maths : 20;
                            philo : 18;
                            physique : 17;
                            jonglage : 18;
                            yoga : 14;
                            potions : 13;
                            }
                        },
       { Prenom = "Zoe" notes: {
                            maths : 12;
                            philo : 12;
                            physique : 17;
                            jonglage : 14;
                            yoga : 7;
                            potions : 3;
                        } 
                }
            ];

console.log(PremierTrimestre);

function moyenne() {
    for(let i = 0; i < 5 ; i++);
    document.write("Moyenne de " + PremierTrimestre[i]);
}

moyenne(); */

var PremierTrimestre = [
    {
        nom : "Wayne",
        prénom : "Bruce",
        moyenne : {
            français : 7,
            maths : 14,
            physique : 16,
        }
    },
    {
        nom : "Stark",
        prénom : "Tony",
        moyenne : {
            français : 18,
            maths : 17,
            physique : 19,
            biologie : 16,
        } 
    },
    {
        nom : "Skywalker",
        prénom : "Leia",
        moyenne : {
            français : 15,
            maths : 13,
            physique : 9,
            potions : 7,
        }
    },

];


//  CORRECTION  

// -- lesFlemmards.js 

function w(CeciestUnParametreddeMaFonction){
    document.write(CeciestUnParametreddeMaFonction);
}

function l(e){
    console.log(e);
}

l(PremierTrimestre);
w("<ol>");
// -- Je souhaite afficher la liste de mes étudiants. 

for(let i = 0 ; i < PremierTrimestre.length ; i++) {

    //-- On récupère l'objet étudiant de l'itération
    let Etudiant = PremierTrimestre[i];

    //-- Aperçu dans la console
    l(Etudiant);

    // -- Ici, mes variables seront remises à zéro à chaque tour de boucle. 

    var NombredeMatieres = 0, SommedesNotes = 0;

    //-- Afficher le prénom et le nom d'un étudiant
    w("<li>");
        w(Etudiant.prénom + " " + Etudiant.nom);

        w("<ul>");
        for(let matiere in Etudiant.moyenne) {
            l(matiere);
            l(Etudiant.moyenne[matiere]);

            NombredeMatieres++;
            SommedesNotes += Etudiant.moyenne[matiere];            
                w("<li>");
                    w(matiere + " : " + Etudiant.moyenne[matiere]);
                w("</li>");
        } // -- Fin de la boucle matière

        w("<li>");
            w("<strong>Moyenne générale : </strong>" + (SommedesNotes / NombredeMatieres).toFixed(2));
        w("</li>");
        w("</ul>");
    w("</li><br>");
} //-- Fin de la Boucle Etudiant 
w("</ol>");
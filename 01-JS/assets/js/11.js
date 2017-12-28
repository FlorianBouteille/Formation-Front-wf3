/* ///////////////////////////////////////////// LE DOM //////////////////////////////////// 
            
        Le Dom est une interface de développement en JS pour HTML. Grâce au DOM, je vais
        être en mesure d'accéder / modifier mon HTML. 

        L'Objet "document" : c'est le point d'entrée vers mon contenu HTML ! 

        Chaque page chargée dans mon navigateur a un objet "document". 
                                                                                            */

// Comment puis-je faire pour récupérer les différentes informations de ma page HTML ? 


 // Flemmards.JS
 function w(a){document.write(a);}   
 function l(b){console.log(b);}

        //-- document.getElementById 
        // document.getElementBiId : c'est une fonction qui va permettre de récupérer un élément HTML à partir de son ID

    
var bonjour = document.getElementById("bonjour");
l(bonjour);

        //-- document.getElementsByClassName
        // document.getElementsByClassName : c'est une fonction qui va permettre de récupérer un élément HTML à partir de sa classe

var contenu = document.getElementsByClassName("contenu");
l(contenu);

// Me renvoie un tableau JS avec mes éléments HTML, ou autrement dit, une "Collection" d'éléments HTML. 

    //-- document.getElementsByTagName
    // document.getElementByTagName : c'est une fonction qui va permettre de récupérer un élément HTML à partir de son tag

var span = document.getElementsByTagName("span");
l(span);
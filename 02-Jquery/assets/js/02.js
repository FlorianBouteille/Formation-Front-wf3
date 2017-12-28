/*//////////////////////////////////////////////////////////
///////////////// ~ LES SELECTEURS JQUERY ~ ////////////////

Le format : &("selecteur")
En jQuery, tous les sélecteurs CSS sont disponibles 

*/

$(function(){
    //-- DOM READY !

    // -- branleurs.JS
    function l(a){console.log(a);}
    function w(a){document.write(a);}

// -- Sélectionner les balises SPAN :

    // Version Javascript

    l(document.getElementsByTagName("span"));

    // Version jQuery

    l($('span'));

// Selectionner mon menu : 

    // Version JS 

    l(document.getElementById("menu"));

    // Version jQuery

    l($("#menu"));

// Selectionner une classe : 

    // Version JS 

    l(document.getElementsByClassName("MaClasse"));

    // Version jQuery

    l($(".MaClasse"));

// Sélectionner par un attribut 

    // En jQUery 
    l($("[href='http://www.google.fr']"));



});


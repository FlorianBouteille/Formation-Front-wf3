/*//////////////////////////////////////////////////////////////////////////
///////////////////// LA DISPONIBILITE DU DOM /////////////////////////////

   A partir du moment ou le DOM, c'est à dire l'ensemble de l'arborescence
   de ma page est complètement chargé, je peux commencer à utiliser jQuery.
   
   Je vais mettre l'ensemble de mon code dans une fonction, cette fonction 
   sera appellée AUTOMATIQUEMENT par jQuery lorsque le DOM sera entièrement
   défini. 
   
   3 Façons de faire : 

   //////////////////////////////////////////////////////////////////////*/

   // 1ere possibilité 

   jQuery(document).ready(function() {
    // Ici, le DOM est entièrement chargé, je peux procéder à mon code JS. 

   });

   // 2eme possibilité

   $(document).ready(function(){

   });

   // 3eme possibilité 

   $(function(){

    // -- branleurs.JS
    function l(a){console.log(a);}
    function w(a){document.write(a);}

    //-- en JS 
    document.getElementById("TexteEnjQuery").innerHTML = "<strong>Mon texte en JS</strong>"

    //-- en jQuery, les sélecteurs sont les mêmes qu'en CSS : (voir les sélecteurs en css : >, +, ~)
    $("#TexteEnjQuery").html("Mon texte en JQ");

});
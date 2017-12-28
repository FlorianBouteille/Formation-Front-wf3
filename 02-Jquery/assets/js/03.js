/*////////////////////////////////////////////////////////
///////////////// ~ LE CHAINAGE DE METHODE ~ ///////////*/



$(function(){
    //-- DOM READY !

    // -- branleurs.JS
    function l(a){console.log(a);}
    function w(a){document.write(a);}

    // Selectionner toutes les divs de ma page 

    $('div').hide("slow", function(){
        //Une fois que la fonction est terminée, mon alerte peut s'éxecuter.
        alert("fin du hide")
        // NB : La fonction s'éxecutera autant de fois que d'élements sélectionnés. 
    
    $('div').css("background", "yellow");
    $('div').css("color", "red");
    $("div").show('slow');

}); // -- Fin de la fonction anonyme et du hide

$('p').hide(5000).css('color','blue').css({'color': 'red','font-size' : '12px'}).delay(3000).show(1500);

});
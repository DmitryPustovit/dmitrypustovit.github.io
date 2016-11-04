 var textIn, counter, lengthOfString, intVal = null; 
        
$( document ).ready(function() {
    counter = 0;
    textIn = $('.content').text();
    $('.content').html("");
    
    $('<span class="typeTextContent"></span><span class="afterText">|</span>').appendTo('.content');
    
    lengthOfString = textIn.length;
    $('.typeTextContent').show();
    
    type();
    });
        
function type()
{
    $('.typeTextContent').html($('.typeTextContent').text() + textIn.charAt(counter)).delay(600);
    
    counter++;
    
    if(counter == lengthOfString)
        $('.afterText').css("animation", "blinky 1s linear infinite");
    else
        setTimeout(type, (Math.floor(Math.random()*100) + 50));
}

// A plugin by Dmitry Pustovit
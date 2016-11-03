 var textIn, counter, lengthOfString, intVal = null; 
        
$( document ).ready(function() {
    counter = 0;
    textIn = $('.content').text();
    $('.content').html("");
    
    $('<span class="typeTextContent"></span><span class="afterText">|</span>').appendTo('.content');
    
    lengthOfString = textIn.length;
    $('.typeTextContent').show();
    
    intVal = setInterval(type, 200);
    });
        
function type()
{
    $('.typeTextContent').html($('.typeTextContent').text() + textIn.charAt(counter));
    counter++;
    
    if(counter == lengthOfString)
    {
        clearInterval(intVal);
        $('.afterText').css("animation", "blinky 1s linear infinite");
    }
}

// A plugin by Dmitry Pustovit
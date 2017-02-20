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
   if(!(textIn.charAt(counter) == '/' && textIn.charAt(counter + 1) == 's' && textIn.charAt(counter + 2) == '/'))
       $('.typeTextContent').html($('.typeTextContent').html() + textIn.charAt(counter)).delay(500);
    //$('.typeTextContent').append( textIn.charAt(counter)).delay(600);
   else
    {
        counter += 3;
        $('.typeTextContent').html($('.typeTextContent').html() + '<br/>').delay(1000);
    }
    
    counter++;
    
    if(counter == lengthOfString)
        $('.afterText').css("animation", "blinky 1s linear infinite");
    else
        setTimeout(type, (Math.floor(Math.random()*100) + 50)); //Random Delay (0-149ms)
}

// A plugin by Dmitry Pustovit
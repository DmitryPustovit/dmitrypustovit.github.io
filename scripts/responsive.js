$( document ).ready(function() {

$('.wrapper-masthead').on('scroll', function() {
    if($(this).scrollTop() + $(this).innerHeight() >= this.scrollHeight) {
        $('.hiddenHeader').show();
    }
});

});

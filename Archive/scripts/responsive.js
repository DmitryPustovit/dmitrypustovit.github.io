$(".hiddenHeader").hide();

$(".wrapper-masthead").scroll(function() {
    if($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
        $(".hiddenHeader").show();
    } else {
        $(".hiddenHeader").hide();
    }
});

$(document).ready(function() {
  $(".headerMenu").hide();
  $(".moreText").hide();
  $(".less").hide();

  $( ".logo" ).click(function() {
    $(".headerMenu").slideToggle();
  });

  $( ".change" ).click(function() {
    var bool;
    bool = !bool;
    $( this ).prev().slideToggle();
    $( this ).find("span").toggle();
  });

});

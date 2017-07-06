$(document).ready(function(){

  $("#burger-container").click(function(){
    $(this).toggleClass("open");
    $('#slide').toggleClass('animation');
  });

  $('#slide li a').click(function(){
    $('#burger-container').toggleClass("open");

  });

});

$(window).resize(function(){
  if ($(window).width()>768) {
    $('#slide').removeClass("animation");
    $('#burger-container').removeClass("open");
  }
});

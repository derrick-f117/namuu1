// click on the text to see the animation again. 

$(document).ready(function(){
    $('#text-drop').mouseleave(function(){
      $(this).removeClass('clicked');
    }).click(function(){
      $(this).addClass('clicked').html($(this).html());
    });
  });
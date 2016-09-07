var windowHeight = $(window).height();
var windowWidth = $(window).width();
var onoff = false
function returnTo(){
  $("#list").fadeIn();
  $(".Work").fadeOut();
  $(".About").fadeOut();
  $(".Contact").fadeOut();
  $(".menu-bar").animate({
    height: 350,
    width: 350,
    opacity: 1.0,
    top: '45%',
    left: '52%',
    transform: 'translate(-50%, -50%)'
  });
}

function autoHide(li) {
  $("#list").fadeOut();
  $(".menu-bar").animate({
        transform: '',
        left: windowWidth-55,
        top: 55,
        opacity: '0.5',
        height: '100px',
        width: '100px'
    });
  if (li.id == "Work")
    $(".Work").fadeIn();
  if (li.id == "About")
    $(".About").fadeIn();
  if (li.id == "Contact")
    $(".Contact").fadeIn();
}


$(document).ready(function(){
  $("#Work").click(function(){
    autoHide(this);
  });
  $("#About").click(function(){
    autoHide(this);
  });
  $("#Contact").click(function(){
    autoHide(this);
  });
  $('.menu-bar').click(function(){
    if($('.menu-bar').css('opacity') == '0.5')
      returnTo();
  });
});

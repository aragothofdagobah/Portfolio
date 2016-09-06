var windowHeight = $(window).height();
var windowWidth = $(window).width();
function autoHide(li) {
  $("#list").fadeOut();
  $(".menu-bar").animate({
        transform: '',
        left: windowWidth - 50,
        top: 50,
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
});

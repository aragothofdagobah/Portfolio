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
  console.log("normal");
}

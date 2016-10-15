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
  $('body').css("overflow", "hidden")
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
    $('body').css("overflow", "visible");
    $('body').css("background-repeat", "repeat-y");
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

  $('.work-item').on('click', function(){
    console.log("blah");

  });

  for(var x = 0;x<works.projects.length;x++){
    var image = works.projects[x].image
    $('.work-list').append("<div id="+x+" class='work-item'><a href='"+works.projects[x].link+"'target='_blank'><img src='"+image+"'/></a><h4>"+works.projects[x].name+"</h4></div>")
  }
});

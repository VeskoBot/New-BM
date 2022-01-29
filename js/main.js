const menuBtn = document.querySelector('.menu-btn')
const header = document.querySelector('header')
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen){
    menuBtn.classList.add('open');
    header.classList.add('open');
    menuOpen = true;
  } else{
    menuBtn.classList.remove('open');
    header.classList.remove('open');
    menuOpen = false;
  }
});

// SIZE

    //    var mainW = $('main').width();
    //    $('main').css({
    //        'height': mainW + 'px'
    //    });
var cw = $('.menu-btn').width();
$('.menu-btn').css({
    'height': cw + 'px'
});
var cw1 = $('.songCtn').width();
var w1 = $('.form').width();
var cw2 = $('.songCtn').width()*(3/2);
var cw3 = $('.singerImg').width();
var cw4 = $('.discordLogo').width();
var cw5 = $('.albumImg1').width()*(7/6);
var cw6 = $('.trackCtn').width();
var cw7 = $('.songName').height();
$('.centered').css({
    'height': cw6*(3/2) + cw7 + 'px'
});
$('.spaced').css({
    'height': cw6*(3/2) + 'px'
});
$('.sixnine1').css({
    'height': cw6*(3/2) + 'px'
});
$('.sixnine1').css({
    'width': cw6 + 'px'
});
$('.sixnine2').css({
    'height': cw6*(3/2) + 'px'
});
$('.sixnine2').css({
    'width': cw6 + 'px'
});
$('.sixnine3').css({
    'height': cw6*(3/2) + 'px'
});
$('.sixnine3').css({
    'width': cw6 + 'px'
});
$('.albumInfo').css({
    'height': cw5 + 'px'
});
$('.vr2').css({
    'height': cw5 + 'px'
});
$('.albumImg1').css({
    'height': cw5 + 'px'
});
$('.albumImg2').css({
    'height': cw5 + 'px'
});
$('.albumImg3').css({
    'height': cw5 + 'px'
});
$('.albumImg4').css({
    'height': cw5 + 'px'
});
$('.albumImg5').css({
    'height': cw5 + 'px'
});
$('.albumImg6').css({
    'height': cw5 + 'px'
});
$('.singerImg1').css({
    'height': cw3 + 'px'
});
$('.discordLogo').css({
    'height': cw4 + 'px'
});
$('.singerImg2').css({
    'height': cw3 + 'px'
});
$('.singerImg3').css({
    'height': cw3 + 'px'
});
$('.singerImg4').css({
    'height': cw3 + 'px'
});
$('.singerImg5').css({
    'height': cw3 + 'px'
});
$('.singerImg').css({
    'height': cw3 + 'px'
});
$('.vr').css({
    'height': cw3 + 'px'
});
$('.songCtn').css({
    'height': cw2 + 'px'
});
$('.travis1').css({
    'height': cw2 + 'px'
});
$('.travis1').css({
    'width': cw1 + 'px'
});
$('.travis2').css({
    'height': cw2 + 'px'
});
$('.travis2').css({
    'width': cw1 + 'px'
});
$('.travis3').css({
    'height': cw2 + 'px'
});
$('.travis3').css({
    'width': cw1 + 'px'
});
$('.travis4').css({
    'height': cw2 + 'px'
});
$('.travis4').css({
    'width': cw1 + 'px'
});
$('.travis5').css({
    'height': cw2 + 'px'
});
$('.travis5').css({
    'width': cw1 + 'px'
});
$('.musicList').css({
    'height': cw2 + 'px'
});
//$('.form').css({
//    'height': cw2 + 'px'
//});
  // $('.menu-btn').click(function(){
  //   $('.logo').css("margin","0px").css("margin-left","auto");
  //   $('.menu').css("left","25%").css("opacity","1").css("transition","1s");
  // });
  // $('.menu-btn.open').click(function(){
  //   $('.logo').css("margin","0px").css("margin-left","auto");
  //   $('.menu').css("left","-25%").css("opacity","1").css("transition","1s");
  // });

  // AUDIO
  function StartOrStop(audioFile) {
      var audie = document.getElementById("myAudio");
      if (!audie.src || audie.src !== audioFile) audie.src = audioFile; // check if there's a src already and if the current src is not the same with the new one, change it. Or don't do anything.
      if (audie.paused == false)
          audie.pause();
      else
          audie.play();
  }
// POSITION
  const playbtn = document.querySelector('.songStart')
  playbtn.addEventListener('click', () => {
    $('.songStart').css("z-index","-2");
    $('.songStop').css("z-index","2").css("opacity","1");
  });
  const pausebtn = document.querySelector('.songStop')
  pausebtn.addEventListener('click', () => {
    $('.songStart').css("z-index","2");
    $('.songStop').css("z-index","-2").css("opacity","0");
  });
  const playbtn2 = document.querySelector('.songStart2')
  playbtn2.addEventListener('click', () => {
    $('.songStart2').css("z-index","-2");
    $('.songStop2').css("z-index","2").css("opacity","1");
  });
  const pausebtn2 = document.querySelector('.songStop2')
  pausebtn2.addEventListener('click', () => {
    $('.songStart2').css("z-index","2");
    $('.songStop2').css("z-index","-2").css("opacity","0");
  });
  const playbtn3 = document.querySelector('.songStart3')
  playbtn3.addEventListener('click', () => {
    $('.songStart3').css("z-index","-2");
    $('.songStop3').css("z-index","2").css("opacity","1");
  });
  const pausebtn3 = document.querySelector('.songStop3')
  pausebtn3.addEventListener('click', () => {
    $('.songStart3').css("z-index","2");
    $('.songStop3').css("z-index","-2").css("opacity","0");
  });
  const playbtn4 = document.querySelector('.songStart4')
  playbtn4.addEventListener('click', () => {
    $('.songStart4').css("z-index","-2");
    $('.songStop4').css("z-index","2").css("opacity","1");
  });
  const pausebtn4 = document.querySelector('.songStop4')
  pausebtn4.addEventListener('click', () => {
    $('.songStart4').css("z-index","2");
    $('.songStop4').css("z-index","-2").css("opacity","0");
  });
  const playbtn5 = document.querySelector('.songStart5')
  playbtn5.addEventListener('click', () => {
    $('.songStart5').css("z-index","-2");
    $('.songStop5').css("z-index","2").css("opacity","1");
  });
  const pausebtn5 = document.querySelector('.songStop5')
  pausebtn5.addEventListener('click', () => {
    $('.songStart5').css("z-index","2");
    $('.songStop5').css("z-index","-2").css("opacity","0");
  });


  var modal = document.getElementById('loginForm');
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
function CloseForm(){
  document.getElementById('loginForm').style.display='none';
}
function Cancel(){
  document.getElementById('loginForm').style.display='none';
}

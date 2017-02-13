$(function(){
  var nav = $('.nav');
  //navの位置
  var navTop = nav.offset().top;
  nav.addClass('fixed')

  var position_top = $("#top").offset().top;
  var position_profile = $("#profile").offset().top;
  var position_games = $("#games").offset().top;
  var position_links = $("#links").offset().top;
  $("#menu_top").click(function(){
    $("html,body").animate({
        scrollTop : position_top
    }, {
        queue : false
    });
  });
  $("#menu_profile").click(function(){
    $("html,body").animate({
        scrollTop : position_profile
    }, {
        queue : false
    });
  });
  $("#menu_games").click(function(){
    $("html,body").animate({
        scrollTop : position_games
    }, {
        queue : false
    });
  });
  $("#menu_links").click(function(){
    $("html,body").animate({
        scrollTop : position_links
    }, {
        queue : false
    });
  });
});

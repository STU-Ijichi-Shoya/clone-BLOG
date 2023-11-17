// Flyout Menu Functions
var flyoutmenus = {
  ".lang-toggle": "#lang-menu",
  ".share-toggle": "#share-menu",
  ".nav-toggle": "#site-nav-menu"
};

$.each(flyoutmenus, function( key, value ) {
  $(key).on("click", function() {
    $(".flyout-menu").not($(value + ".flyout-menu")).removeClass("active");
    if ($("#wrapper").hasClass('overlay') && $(value).hasClass('active')) {
      $("#wrapper").removeClass('overlay');
    } else {
      $("#wrapper").addClass('overlay');
    }
    $(value).toggleClass('active');
  });
});


// Click anywhere outside a flyout to close
$(document).on("click", function(e) {
  if ($(e.target).is(".lang-toggle, .lang-toggle span, #lang-menu, .share-toggle, .share-toggle i, #share-menu, .search-toggle, search.toggle i, #search-menu, .nav-toggle, .nav-toggle i, #site-nav") === false) {
    $(".flyout-menu").removeClass("active");
    $("#wrapper").removeClass('overlay');
  }
});

// Check to see if the window is top if not then display button
$(window).scroll(function() {
  if ($(this).scrollTop()) {
    $('#back-to-top').fadeIn();
  } else {
    $('#back-to-top').fadeOut();
  }
});

// Click event to scroll to top
$('#back-to-top').click(function() {
  $('html, body').animate({scrollTop: 0}, 1000);
  return false;
});

window.onload=function(){
  var isok=false;
  document.cookie.split(";").forEach((v)=>{
    if(v.indexOf("visited=")>-1)
      isok=true;
  }
  )
if (!isok){
  const cookieStr="visited=true;max-age=7776000;path=/"
  // alert("detect empty cookie")
  const current=window.location.href;
  if (current.lastIndexOf("/about")>-1){
    document.cookie=cookieStr;
  }
  else if(current.indexOf("/blog/")>-1){
      document.cookie=cookieStr;
      if (window.confirm("あなたはこのブログに はじめて または 久しぶりに来たようです．\n 伊地知の経歴や活動について見る場合は \"はい\" を押してください．\n 自己紹介ページ(About Me)に遷移します．")){
        window.location.href="/about"
      }
  }
  else{
    document.cookie=cookieStr
    if (window.confirm("あなたはこのブログに はじめて または 久しぶりに来たようです．\n 伊地知の経歴や活動について見る場合は \"はい\" を押してください．\n 自己紹介ページ(About Me)に遷移します．")){
      window.location.href="/about"
    }
    window.location.href="/about"
  }
}
}
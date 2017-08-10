$( document ).ready(function() {
    console.log( "ready!" );

/*HEADER*/
$("header").html("<div class='desktop-navbar menu'>"+
"<a class='menu' href='index.html'>Home</a>"+
"<a class='menu' href='cv.html'>CV</a>"+
"<a class='menu' href='reviews.html'>Reviews</a>"+
"<a class='menu' href='gallery.html'>Gallery</a>"+
"<span class='info' id='email'>jbutz@wcastl.org</span>"+
"<span class='info'>314.957.8597</span>"+
"</div>");

/*NAVBAR ANIMATION SCRIPT*/
  $(function() {
    console.log('JQ has begun!');
    var navBar = $(".menu");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 500) {
            navBar.addClass("smaller");
            console.log('the navbar should get smaller');
        } else {
            navBar.removeClass("smaller");
            console.log('the navbar should get bigger')
        }
    });
});

    
});
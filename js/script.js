$(document).ready(function(){
    var $page = $('html, body');
    $(".nav-link").on("click", function (e) {
       e.preventDefault(); 
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800);
        return False;
    });
});
$(document).ready(function(){
    var $page = $('html, body');
    $(".nav-link").on("click", function (e) {
       e.preventDefault(); 
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800);
        return False;
    });

    $(window).scroll(function(){
		if($(window).scrollTop()>320){
			$('.depiction').fadeIn('slow','linear');
        }
        else {
        // длительность анимации - 'fast'
        // тип анимации -  'swing'
        $('.depiction').fadeOut('fast','swing');
        }
	});
});
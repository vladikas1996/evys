
jQuery(document).ready(function() {
var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 30
    }, 800);
    return false;
});
});

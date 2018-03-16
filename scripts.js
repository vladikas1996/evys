

jQuery(document).ready(function() {
$("nav").on("click","a", function (event) {
        event.preventDefault();

        var id  = $(this).attr('href'),

         top = $(id).offset().top - 59;

         $('body,html').animate({scrollTop: top}, 800);

    });
});

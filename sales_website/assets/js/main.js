$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $('#goto-top').fadeIn();
        } else {
            $('#goto-top').fadeOut();
        }
    });
    $("#goto-top").click(function () {
        $("html, body").animate({scrollTop: 0}, 1000);
    });
});

// setTimeout(function() {
//     alert('Chào mừng bạn đến với TA Shop!!!')
// }, 1000)
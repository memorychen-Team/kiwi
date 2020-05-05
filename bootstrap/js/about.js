$(document).ready(function() {
    handleClickEvent();
    initPageText();

    function handleClickEvent() {
        $("#chinese").click(function() {
            localStorage.setItem('language', 'cn');
            initPageText();
        });
        $("#english").click(function() {
            localStorage.setItem('language', 'en');
            initPageText();
        });
    }

    function initPageText() {
        var language = localStorage.getItem('language');
        if (language == 'en' ) {
            // 4-23
            $("#about_kiwi").html(EN.about_kiwi)
            $("#aboutus_intro_one").html(EN.aboutus_intro_one)
            $("#aboutus_intro_two").html(EN.aboutus_intro_two)
            $("#aboutus_intro_three").html(EN.aboutus_intro_three)
            $("#aboutus_intro_four").html(EN.aboutus_intro_four)
        } else if (language == 'cn' || language == null) {
            // 4-23
            $("#about_kiwi").html(CN.about_kiwi)
            $("#aboutus_intro_one").html(CN.aboutus_intro_one)
            $("#aboutus_intro_two").html(CN.aboutus_intro_two)
            $("#aboutus_intro_three").html(CN.aboutus_intro_three)
            $("#aboutus_intro_four").html(CN.aboutus_intro_four)
            $("#aboutus_intro_five").html(CN.aboutus_intro_five)
        }
    }
    // 订阅
    $("#subscribeBtn").click(function(e) {
        $("#userInfoBox").toggle();
    });
});
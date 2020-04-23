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
        if (language == 'en' || language == null) {
            // 4-23
            $("#joinus").html(EN.joinus)
            $("#join_intro_one").html(EN.join_intro_one)
            $("#join_intro_two").html(EN.join_intro_two)
            $("#future_two").html(EN.future_two)
            $("#future_three").html(EN.future_three)
        } else if (language == 'cn') {
            // 4-23
            $("#bannerIntro").html(CN.compant_intro)
            $("#kiwilab_content").html(CN.kiwilab_content)
            $("#future_one").html(CN.future_one)
            $("#future_two").html(CN.future_two)
            $("#future_three").html(CN.future_three)
        }
    }
    // 订阅
    $("#subscribeBtn").click(function(e) {
        $("#userInfoBox").toggle();
    });
});
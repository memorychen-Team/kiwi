$(document).ready(function() {
    var swiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    // goBackUp
    $('#goBackUp').on('click', function(e) {
        e.preventDefault();
        goTop()
    })

    function goTop() {
        //速度
        var speed = 100;
        //开启定时器
        var timer = setInterval(function() {
            //获取滚动条的高度
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            //设置滚动的高度
            document.documentElement.scrollTop = document.body.scrollTop = (scrollTop - speed);
            //清除定时器
            speed += 30;
            if (scrollTop <= 0) {
                clearInterval(timer);
            }
        }, 30)
    }
    // 订阅
    $("#subscribeBtn").click(function(e) {
        $("#userInfoBox").toggle();
    });
});
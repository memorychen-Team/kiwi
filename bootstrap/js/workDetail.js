$(document).ready(function() {
    var swiper = new Swiper('.swiper-container', {
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
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
    // up的显示隐藏
    $(window).scroll(function(){
        //为了保证兼容性，这里取两个值，哪个有值取哪一个
        var clientHeight  = $(window).height()
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop >= clientHeight) {
            $('#goBackUp').show()
        } else {
            $('#goBackUp').hide()
        }
    }); 
    // 订阅
    $("#subscribeBtn").click(function(e) {
        $("#userInfoBox").toggle();
    });
});
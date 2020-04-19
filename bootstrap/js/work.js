$(document).ready(function(){
    $('#myTab a').click(function (e) {
          e.preventDefault();
         $(this).tab('show');
    })
    $('.maskModal').on('mouseenter',function (e) { //direction
        // $(this).find('a').addClass('addMask');
        // $(this).find('.direction').css('display','inline-block')
    })
    $('.maskModal').on('mouseout',function (e) {
        $(this).find('a').removeClass('addMask')
        $(this).find('.direction').css('display','none')
    })
    $('.listOne').on('click',function (e) {
        e.preventDefault();
        $(this).find('a').css('opacity','1')
        location.href ='./workDetail.html'
    })
    // goBackUp
    $('#goBackUp').on('click',function (e) {
        e.preventDefault();
        goTop()
    })
    function goTop(){
        //速度
        var speed = 100;
        //开启定时器
        var timer = setInterval(function(){
            //获取滚动条的高度
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            //设置滚动的高度
            document.documentElement.scrollTop = document.body.scrollTop = (scrollTop - speed);
            //清除定时器
            speed += 30;
            if(scrollTop <= 0){
                clearInterval(timer);
            }
        },30)
    }
});

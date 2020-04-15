$(document).ready(function(){
    $('#myTab a').click(function (e) {
          e.preventDefault();
         $(this).tab('show');
    })
    $('.maskModal').on('mouseenter',function (e) { //direction
        $(this).find('a').addClass('addMask');
        $(this).find('.direction').css('display','inline-block')
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
});

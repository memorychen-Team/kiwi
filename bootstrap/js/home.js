$(document).ready(function() {
    // 轮播
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 80,
        speed: 2000,
        loop: true,
        auto: true,
        autoplayDisableOnInteraction : true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
    });
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
        $("#navList li").click(function() {
            $("#navList li").removeClass('active');
            $(this).addClass('active');
        });
    }

    function initPageText() {
        var language = localStorage.getItem('language');
        if (language == 'en' || language == null) {
            // $('#headline').html(EN.headline);
            $('#subtitle').html(EN.subtitle);
            $('#brandStrategy').html(EN.brandStrategy);
            $('#brandStrategyContent').html(EN.brandStrategyContent);
            $('#publicRelationship').html(EN.publicRelationship);
            $('#publicRelationshipContent').html(EN.publicRelationshipContent);
            $('#integratedMarketing').html(EN.integratedMarketing);
            $('#integratedMarketingContent').html(EN.integratedMarketingContent);
            $('#socialMarketing').html(EN.socialMarketing);
            $('#socialMarketingContent').html(EN.socialMarketingContent);
            $('#eventSpecialist').html(EN.eventSpecialist);
            $('#eventSpecialistContent').html(EN.eventSpecialistContent);
            $('#contentMarketing').html(EN.contentMarketing);
            $('#contentMarketingContent').html(EN.contentMarketingContent);
            $('#deepCooperation').html(EN.deepCooperation);
            $('#deepCooperationContent').html(EN.deepCooperationContent);
            $('#dataInsight').html(EN.dataInsight);
            $('#dataInsightContent').html(EN.dataInsightContent);
            $('#dataInsight').html(EN.dataInsight);
            $('#dataInsightContent').html(EN.dataInsightContent);
            $('#resourceMatrix').html(EN.resourceMatrix);
            $('#resourceMatrixContent').html(EN.resourceMatrixContent);
            $('#kiwiLab').html(EN.kiwiLab);
            $('#kiwiLabContent').html(EN.kiwiLabContent);
            // 4-23
            $("#bannerIntro").html(EN.compant_intro)
            $("#kiwilab_content").html(EN.kiwilab_content)
            $("#futureNode").html(EN.future_one)
            $("#future_two").html(EN.future_two)
            $("#future_three").html(EN.future_three)
        } else if (language == 'cn') {
            $('#headline').html(CN.headline);
            $('#subtitle').html(CN.subtitle);
            $('#brandStrategy').html(CN.brandStrategy);
            $('#brandStrategyContent').html(CN.brandStrategyContent);
            $('#publicRelationship').html(CN.publicRelationship);
            $('#publicRelationshipContent').html(CN.publicRelationshipContent);
            $('#integratedMarketing').html(CN.integratedMarketing);
            $('#integratedMarketingContent').html(CN.integratedMarketingContent);
            $('#socialMarketing').html(CN.socialMarketing);
            $('#socialMarketingContent').html(CN.socialMarketingContent);
            $('#eventSpecialist').html(CN.eventSpecialist);
            $('#eventSpecialistContent').html(CN.eventSpecialistContent);
            $('#contentMarketing').html(CN.contentMarketing);
            $('#contentMarketingContent').html(CN.contentMarketingContent);
            $('#deepCooperation').html(CN.deepCooperation);
            $('#deepCooperationContent').html(CN.deepCooperationContent);
            $('#dataInsight').html(CN.dataInsight);
            $('#dataInsightContent').html(CN.dataInsightContent);
            $('#dataInsight').html(CN.dataInsight);
            $('#dataInsightContent').html(CN.dataInsightContent);
            $('#resourceMatrix').html(CN.resourceMatrix);
            $('#resourceMatrixContent').html(CN.resourceMatrixContent);
            $('#kiwiLab').html(CN.kiwiLab);
            $('#kiwiLabContent').html(CN.kiwiLabContent);
            // 4-23
            $("#bannerIntro").html(CN.compant_intro)
            $("#kiwilab_content").html(CN.kiwilab_content)
            $("#futureNode").html(CN.future_one)
            $("#future_two").html(CN.future_two)
            $("#future_three").html(CN.future_three)
        }
    }
    // 订阅
    $("#subscribeBtn").click(function(e) {
        $("#userInfoBox").toggle();
    });
});
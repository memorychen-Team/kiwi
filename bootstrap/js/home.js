$(document).ready(function(){
    handleClickEvent();
    initPageText();
    function  handleClickEvent () {
        $("#chinese").click(function(){
            localStorage.setItem('language','cn');
            initPageText();
        });
        $("#english").click(function(){
            localStorage.setItem('language','en');
            initPageText();
        });
        $("#navList li").click(function(){
            $("#navList li").removeClass('active');
            $(this).addClass('active');
        });
    }
    function initPageText () {
        var language = localStorage.getItem('language');
        if(language == 'en' || language == null) {
            $('#headline').html(EN.headline);
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
        } else if(language == 'cn') {
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
        }
    }
});

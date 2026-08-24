// document.getElementById('submissionPage').value = location.href;
$(document).ready(function(){
    var dv = getUrlParameter('dv');
    var lv = getUrlParameter('lv');
    var cv = localStorage.getItem('cv');

    //PRESETS
    if (dv != null) {
        $('.component-demo').addClass("hidden");
        $('.component-code').addClass("hidden");
        $('.layout-submenu').addClass("hidden");
        $('#'+dv+'-demo').removeClass("hidden");
        $('#'+dv+'-code').removeClass("hidden");
        $('#'+dv+'-submenu').removeClass("hidden");
        $('#design-variant-menu').val(dv);
        if (lv !=null){
            $('#'+dv+'-demo .layout-demo').addClass("hidden");
            $('#'+dv+'-code .layout-code').addClass("hidden");
            $('#'+dv+'-demo #'+lv+'-layout').removeClass("hidden");
            $('#'+dv+'-code #'+lv+'-code').removeClass("hidden");
            $('#layout-variant-menu').val(lv);
        }
    }

    if (localStorage.getItem('cv') != null) {
        $('.code-variant').addClass("hidden");
        if (cv == "beta") {
            newCV = $("#code-variant-menu option:first").val();
            $('#code-variant-menu').val(newCV);
            $('.'+newCV+'-variant').removeClass("hidden");
        } else {
            $('#code-variant-menu').val(cv);
            $('.'+localStorage.getItem('cv')+'-variant').removeClass("hidden");
        }
    }

    //hide all component demos, show the selected one
    $("#design-variant-menu").change(function(){
        console.log(this.value);
        $('.component-demo').addClass("hidden");
        $('.component-code').addClass("hidden");
        $('.layout-submenu').addClass("hidden");
        $('.variant-usage').addClass("hidden");
        $('#'+this.value+'-demo').removeClass("hidden");
        $('#'+this.value+'-code').removeClass("hidden");
        $('#'+this.value+'-submenu').removeClass("hidden");
        $('#'+this.value+'-usage').removeClass("hidden");
    });

    $(".layout-variant-menu").change(function(){
        designID = this.id
        designName = designID.substr(0,designID.indexOf("-layout-menu"));
        $('#'+designName+'-demo .layout-demo').addClass("hidden");
        $('#'+designName+'-code .layout-code').addClass("hidden");
        $('#'+designName+'-demo #'+this.value+'-layout').removeClass("hidden");
        $('#'+designName+'-code #'+this.value+'-code').removeClass("hidden");
    });

    $("#code-variant-menu").change(function(){
        $('.code-variant').addClass("hidden");
        $('.'+this.value+'-variant').removeClass("hidden");
        localStorage.setItem("cv", this.value);
    });

    $('.component-code').on( "wb-contentupdated", function( event, data ){
        $( ".wb-prettify" ).trigger( "wb-init.wb-prettify" );
    });
});

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;
    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

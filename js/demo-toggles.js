// document.getElementById('submissionPage').value = location.href;
$(document).ready(function(){
var dv = getUrlParameter('dv');
var lv = getUrlParameter('lv');
var cv = localStorage.getItem('cv');

//PRESETS
if (dv != null) {
    $('.component-demo').addClass("hidden");
    $('.component-code').addClass("hidden");
    $('#'+dv+'-demo').removeClass("hidden");
    $('#'+dv+'-code').removeClass("hidden");
    $('#design-variant-menu').val(dv);

    //hide default layout menu
    //reveal design variant layout menu
    if (lv !=null){
        // hide layouts within
        // reveal specific layout
    }
}

if (localStorage.getItem('cv') != null) {
    $('.code-variant').addClass("hidden");
    $('#code-variant-menu').val(cv);
    $('.'+localStorage.getItem('cv')+'-variant').removeClass("hidden");
}

//hide all component demos, show the selected one
$("#design-variant-menu").change(function(){
    $('.component-demo').addClass("hidden");
    $('.component-code').addClass("hidden");
    $('.layout-submenu').addClass("hidden");
    $('#'+this.value+'-demo').removeClass("hidden");
    $('#'+this.value+'-code').removeClass("hidden");
    $('#'+this.value+'-submenu').removeClass("hidden");
});

$(".layout-variant-menu").change(function(){
    designID = this.id
    designName = designID.substr(0,designID.indexOf("-"));
    console.log('#'+designName+'-code #'+this.value+'-code');
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
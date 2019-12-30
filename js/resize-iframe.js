$(document).ready(function(){
    $('#resize-iframe-mobile').click(function(){
        $('.example-frame').animate({width:'300px'},200);
    });
    $('#resize-iframe-tablet').click(function(){
        $('.example-frame').animate({width:'600px'},200);
    });
    $('#resize-iframe-desktop').click(function(){
        $('.example-frame').animate({width:'1000px'},200);
    });
});

function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
    console.log(obj.contentWindow.document.documentElement.scrollHeight + 'px');
}

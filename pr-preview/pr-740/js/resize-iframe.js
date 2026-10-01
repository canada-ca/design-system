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
    //obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
    //console.log(obj.contentWindow.document.documentElement.scrollHeight + 'px');
   if ($(obj).is(":visible")) {
       obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
   } else {
       $(obj).css("visibility", "hidden");
       if ($(obj).parent().hasClass("hidden")) {
           $(obj).parent().removeClass("hidden");
           if ($(obj).parent().parent().hasClass("hidden")) {
                $(obj).parent().parent().removeClass("hidden");
                console.log(obj.contentWindow.document.documentElement.scrollHeight);
                console.log(obj.contentWindow.document.documentElement.height);
                obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
                console.log(obj.style.height);
                $(obj).parent().parent().addClass("hidden");
           } else {
                obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
                console.log(obj.style.height);
           }
           $(obj).parent().addClass("hidden");
       } else {
           if ($(obj).parent().parent().hasClass("hidden")) {
                $(obj).parent().parent().removeClass("hidden");
                obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
                console.log(obj.style.height);
                $(obj).parent().parent().addClass("hidden");
           }
       }
       $(obj).css("visibility", "");
       
   }
}

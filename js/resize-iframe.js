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
       console.log(obj);
       console.log(obj.classList);
       if ($(obj).parent().classList.contains("hidden")) {
           $(obj).parent().removeClass("hidden");
           if ($(obj).parent().parent().classList.contains("hidden")) {
                $(obj).parent().parent().removeClass("hidden");
                obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
               
                $(obj).parent().parent().addClass("hidden");
           } else {
                obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
           }
           $(obj).parent().addClass("hidden");
       } else {
           if ($(obj).parent().parent().classList.contains("hidden")) {
                $(obj).parent().parent().removeClass("hidden");
                obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
                $(obj).parent().parent().addClass("hidden");
           }
       }
       $(obj).css("visibility", "");
       
   }
}

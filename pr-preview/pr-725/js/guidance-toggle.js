$(document).ready(function(){

    //show guidance button
    $("#show-guidance-toggle").click(function(){
        $('#show-guidance-toggle').addClass("active");
        $('#hide-guidance-toggle').removeClass("active");
        $('.guidance-details').removeClass("hidden");
    });    

    //hide guidance button
    $("#hide-guidance-toggle").click(function(){
        $('#show-guidance-toggle').removeClass("active");
        $('#hide-guidance-toggle').addClass("active");
        $('.guidance-details').addClass("hidden");
    });   

});
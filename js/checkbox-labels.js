// If all checkboxes with the same name are checked, and there is a label with a related class name, check
$(document).ready(function(){
    $(".checklist-completion-check").change(function(field){
        var sName = field.target.name;
        var checks = $('input[name="'+ sName +'"]');
        if (checks.length === checks.filter(":checked").length) {
            $("#"+sName+"-complete").removeClass('hidden');
            $("#"+sName+"-incomplete").addClass('hidden');
        } else {
            $("#"+sName+"-incomplete").removeClass('hidden');
            $("#"+sName+"-complete").addClass('hidden');
        }
    });
});  
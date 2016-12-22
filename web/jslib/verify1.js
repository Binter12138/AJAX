function verify()
{
    var userName = $("#userName").val();
    $.get("AjaxService?name="+userName,null,function(data){

       $("#result").html(data);
    });

}
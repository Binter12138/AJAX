//定义用户名校验
function verify(){

    //document.getElementById("userName");
    var userName = $("#userName").val();
    //alert(userName);
    //使用JQuery的XMLHttprequest对象get请求的封装
    $.get("AjaxService?name="+userName,null,callback);
}
//回调函数
function callback(data)
{

    //alert("ss");

    //alert(data);

    $("#result").html(data);
}

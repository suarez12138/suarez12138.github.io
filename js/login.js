//表单验证
$(function () {
    $("[type='text'],[type='password']").focusin(
        function () {
            $(this).attr("placeholder", "")
        });
    $("[type='text'],[type='password']").focusout(function () {
        if($(this).attr("type") == "text"){
            $(this).attr("placeholder","  请输入手机号码/邮箱/用户名");
        }
        else{
            $(this).attr("placeholder","  请输入账号密码");
        }
    })
});

//登录
$('#btn').on('click',function(){
    var nm=$(this).parent().children(':nth-child(2)').children().val();
    var pw=$(this).parent().children(':nth-child(3)').children().val();
    var dv=$(this).parent().children(':nth-child(1)');
    console.log(dv);
    $.ajax({
        type:'POST',
        url:'data/oppo_login.php',
        data:{lname:nm,lpwd:pw},
        success:function(list){
            console.log("开始处理响应事件");
            console.log(arguments);
            if(list.code=="1"){

                location.href = "00000----index.html";
            }else{
                dv.html(list.msg);
            }
        }
    });
});



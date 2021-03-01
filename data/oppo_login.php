<?php
header('Content-Type:application/json');

@$lname = $_REQUEST['lname'] or die ('{"code":2,"msg":"lname required"}');
@$lpwd = $_REQUEST['lpwd'] or die ('{"code":3,"msg":"lpwd required"}');

require('init.php');

$sql = "SELECT * FROM oppo_login WHERE lname='$lname' AND lpwd='$lpwd'";

$result = mysqli_query($conn,$sql);

$list = mysqli_fetch_row($result);

if($list===null){
    echo '{"code":4,"msg":"用户名或密码错误"}';
}else{
    echo '{"code":1,"msg":"欢迎回来:"}';
}
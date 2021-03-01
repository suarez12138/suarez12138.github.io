//表单验证
$(function () {
    $("[type='text'],[type='password']").focusin(
        function () {
            $(this).attr("placeholder", "")
        });
    $("[type='text'],[type='password']").focusout(function () {
        if($(this).attr("type") == "text"){
            $(this).attr("placeholder","  请输入账号名");
        }else if($(this).attr("data-a")=="a1"){
            $(this).attr("placeholder","  请输入密码");
        }else if($(this).attr("data-a")=="a2"){
            $(this).attr("placeholder","  请确认密码");
        }
    })
});


//

// var pg = require('pg');

// // 数据库配置
// var config = {  
//     user:"checker",
//     database:"project2",
//     password:"222222",
//     port:5432,
//     // 扩展属性
//     max:10, // 连接池最大连接数
//     idleTimeoutMillis:3000, // 连接最大空闲时间 3s
// }
// // 创建连接池
// var pool = new pg.Pool(config);
// // 查询
// pool.connect(function(err, client, done) {  
//   if(err) {
//     return console.error('数据库连接出错', err);
//   }
//   // 简单输出个 Hello World
//   client.query('SELECT $1::varchar AS OUT', ["Hello World"], function(err, result) {
//     done();// 释放连接（将其返回给连接池）
//     if(err) {
//       return console.error('查询出错', err);
//     }
//     console.log(result.rows[0].out); //output: Hello World
//   });
// });


function check_r(){
    var username =r_form.user.value;
    var password1=r_form.password1.value;
    var password2=r_form.password2.value;
    if (!(/^.{2,16}$/.test(username))){
        alert("用户名长度需为2-16位！");
        r_form.user.select();
        return false;
    }else if (!(/^\w{6,15}$/.test(password1))){
        alert("密码长度需为6-15位,且需为字母或数字！");
        r_form.password1.select();
        return false;
    }else if (password2!=password1) {
        alert("两次输入密码不相同！");
        return false;
    }else return true;
}

// document.write(window.location.port);
document.write(navigator.userAgent);

// var pgConfig = {
//         user: 'postgres',
//         database: 'postgres',
//         password: '123456',
//         host: '192.168.1.234',
//         port: '5432',
//         poolSize: 5,
//         poolIdleTimeout: 30000,
//         reapIntervalMillis: 10000
// };
//     // var pgPool = new pgOpt.Pool(pgConfig);
//     var pgPool = new pgOpt.pools.getOrCreate(pgConfig);// 低版本的pg模块需要这样来创建连接池
    
//     pgPool.connect(function (isErr, client, done) {
//         if (isErr) {
//             console.log('connect query:' + isErr.message);
//             return;
//         }
//         client.query('select now();', [], function (isErr, rst) {
//             done();
//             if (isErr) {
//                 console.log('query error:' + isErr.message);
//             } else {
//                 console.log('query success, data is: ' + rst.rows[0].now);
//             }
//         })
//     });





// var pg = require('pg');
// //数据库配置
// var conString = "tcp://postgres:192.168.137.1:5432/project2"; //tcp://用户名：密码@localhost/数据库名
// var client =  new pg.Client(conString);
// var tem = 33;
// //sql语句
// selectSQLString = 'insert into pet(tem) values ('+tem+') ';
// //客户端连接，进行数据插入
// client.connect(function(error, results){
//   if (error) {
//     console.log('clientConnectionReady Error:'+error.message);
//     client.end();
//     return;
//   }
//   console.log('connection success...\n');
//   client.query(selectSQLString,function(error,results){
//     console.log(error);
//   })
// });


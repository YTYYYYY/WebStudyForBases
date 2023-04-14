
function check(){
    var usernameText = document.getElementById("username").value;
    var patt = /^\w{5,12}$/  //表示规则：长度5到12，只含数字，字母，下划线
    /*
    * patt 是一种正则表达式
    * /^   &/   表示从头到尾检查
    * /\w/      表示检查是否含有数字或字母或下划线
    * /{5,12}/  表示检查*包含*至少5个或者最多12个字符串
    * */
    var usernameSpanObj = document.getElementById("usernameSpan");
    if(usernameText == ""){
        usernameSpanObj.innerHTML = "长度5-12，只能含数字、字母、下划线";
        usernameSpanObj.style = "color : grey , font-size = 2px";
    }
    else if(patt.test(usernameText)){
        usernameSpanObj.innerHTML = "√";
        usernameSpanObj.style = "color : green";
        //alert('合法！');
        return true;
    }else{
        //alert('非法用户名！');
        usernameSpanObj.innerHTML = "X";
        usernameSpanObj.style = "color : red";
        return false;
    }
}

function checkAll(){
    var hobbiesArr = document.getElementsByName("hobby");
    for(var i=0;i<hobbiesArr.length;i++){
        hobbiesArr[i].checked = true;
    }
}

function checkNone(){
    var hobbiesArr = document.getElementsByName("hobby");
    for(var i=0;i<hobbiesArr.length;i++){
        hobbiesArr[i].checked = false;
    }
}


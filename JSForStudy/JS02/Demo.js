/*
JS里的特殊值
    undefined   未定义，所有js遍历未赋予初始值的时候，默认值是undefined
    null        空值
    NaN         全称是：not a number。非数字，非数值。

关系（比较）运算
    等于:      ==     等于是简单的做字面值的比较
    全等于:    ===    全等于还要比较数据类型

逻辑运算：
    且运算     &&
        当表达式全为真。返回最后一个表达式的值
        当表达式中有一个为假的时候。返回第一个为假的表达式的值
    或运算     ||
        当表达式全为假。返回最后一个表达式的值
        当表达式中有一个为真的时候。返回第一个为真的表达式的值
    取反运算    !
    （在JS中，所有变量都可以作为一个boolean类型的变量去使用:0,null,undefined,""都认为是false）
*/

    var a = "";


/*var a = 0;
if(""){
    alert("a=1");
}else{
    alert("a=0");
}*/

/*
var a;
a=12;
alert(typeof a);
a = "abc";
alert(typeof a);
var b = 12;
alert(a*b); //NaN
*/
/*
var a = "12";
var b = 12;
alert(a == b);  //true
alert(a === b); //false*/

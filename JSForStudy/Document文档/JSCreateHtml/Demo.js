//JS代码创建html
window.onload = function () {
    var divTag = document.createElement("div");
    /*divTag.innerHTML = "ygmjj";
    document.body.append(divTag);*/
    var textNode = document.createTextNode("ygmjj");
    divTag.appendChild(textNode);
    document.body.append(divTag);
}

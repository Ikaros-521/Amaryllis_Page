window.onload = function () {
    var language = sessionStorage.getItem("language");
    var p_explain = document.getElementById("p_explain");

    if(language == "ch") {
        p_explain.innerText = "上舰获取";
    } else if(language == "jp") {
        p_explain.innerText = "艦上取得";
    } else {
        p_explain.innerText = "Get on board";
    }
}
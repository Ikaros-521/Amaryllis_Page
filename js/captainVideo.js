// 视频内嵌参考：https://blog.csdn.net/DSH964/article/details/80961598
// 数据变量
var video_data = [
    {
        "up" : "SeiunSky_星云天空",
        "title" : "【艾玛莉莉丝】当某只史莱姆发现新的玩法【个人渣翻】",
        "src" : "//player.bilibili.com/player.html?aid=636442337&bvid=BV1Yb4y177iP&cid=505207402&page=1"
    },
    {
        "up" : "黑-kill",
        "title" : "【艾玛莉莉丝-channel】-因为没人来而感到寂寞的应急食品？",
        "src" : "//player.bilibili.com/player.html?aid=339889335&bvid=BV11R4y1F7b9&cid=554668925&page=1"
    },
    {
        "up" : "上上上上上上上昇気流",
        "title" : "【熟肉切片】史莱姆的健身环就不能涩涩？【艾玛莉莉丝】",
        "src" : "//player.bilibili.com/player.html?aid=980775202&bvid=BV1F44y1G7fU&cid=578865830&page=1"
    },
    {
        "up" : "DD同好会",
        "title" : "【艾玛莉莉丝】日本Vtuber锐评真人改：RNM退钱！",
        "src" : "//player.bilibili.com/player.html?aid=298445695&bvid=BV1RF411M7Hm&cid=583365289&page=1"
    },
    {
        "up" : "DD同好会",
        "title" : "【艾玛莉莉丝】日本Vtuber怎样评价《overlord》？反英雄神作？二次元都是假的？",
        "src" : "//player.bilibili.com/player.html?aid=255803623&bvid=BV19Y411j7LK&cid=580126314&page=1"
    },
    {
        "up" : "_笹",
        "title" : "【艾玛莉莉丝】《卧春》被屑SC引导变成蠢驴的新人Vtuber",
        "src" : "//player.bilibili.com/player.html?aid=551938873&bvid=BV1ri4y1y76q&cid=519422962&page=1"
    },
    {
        "up" : "上上上上上上上昇気流",
        "title" : "【熟肉切片】莉莉丝的涩涩的fanart拜托了【艾玛莉莉丝】",
        "src" : "//player.bilibili.com/player.html?aid=641054236&bvid=BV1kY4y187ET&cid=585991119&page=1"
    },
    {
        "up" : "DD同好会",
        "title" : "【艾玛莉莉丝】日本vtuber康康中国版的野兽先辈？",
        "src" : "//player.bilibili.com/player.html?aid=853615722&bvid=BV1TL4y1c7Di&cid=588133263&page=1"
    },
    {
        "up" : "上上上上上上上昇気流",
        "title" : "【熟肉切片】要社死了 直播听自己饱含爱意的 舰长音声【艾玛莉莉丝】",
        "src" : "//player.bilibili.com/player.html?aid=638573483&bvid=BV1dY4y1Y7YZ&cid=587612889&page=1"
    },
    {
        "up" : "上上上上上上上昇気流",
        "title" : "【熟肉切片】史莱姆V的小裤裤是什么颜色？【艾玛莉莉丝】",
        "src" : "//player.bilibili.com/player.html?aid=726427264&bvid=BV1uS4y1b7NR&cid=717590627&page=1"
    },
    {
        "up" : "上上上上上上上昇気流",
        "title" : "【熟肉切片】史莱姆调戏生草翻译机【艾玛莉莉丝】",
        "src" : "//player.bilibili.com/player.html?aid=213913950&bvid=BV1Ra411E7cW&cid=718099356&page=1"
    },
    {
        "up" : "執念ゅ",
        "title" : "【艾玛莉莉丝-channel】爆笑！日本史莱姆竟会唱山歌？",
        "src" : "//player.bilibili.com/player.html?aid=553941244&bvid=BV1tv4y1P7ry&cid=717308758&page=1"
    },
    {
        "up" : "執念ゅ",
        "title" : "【艾玛莉莉丝-channel】日本Vtuber竟直言不要30万日元??!",
        "src" : "//player.bilibili.com/player.html?aid=256533013&bvid=BV1SY411c7Gm&cid=721688649&page=1"
    },
    {
        "up" : "s冰豆包",
        "title" : "展示毕生所学的史莱姆满脸骄傲",
        "src" : "//player.bilibili.com/player.html?aid=342111239&bvid=BV1u94y1m7HK&cid=735337465&page=1"
    },
    {
        "up" : "s冰豆包",
        "title" : "魔界史莱姆鉴赏脑花寿司",
        "src" : "//player.bilibili.com/player.html?aid=897141608&bvid=BV12A4y1d7kH&cid=737514638&page=1"
    },
    {
        "up" : "s冰豆包",
        "title" : "【B限生肉切】魔界史莱姆化身讲师教授DD们...",
        "src" : "//player.bilibili.com/player.html?aid=769920977&bvid=BV13r4y137Hq&cid=743244328&page=1"
    },
    {
        "up" : "s冰豆包",
        "title" : "分享动态",
        "src" : "//player.bilibili.com/player.html?aid=727181113&bvid=BV1pS4y1B7o1&cid=737769479&page=1"
    },
];

window.onload = function() {
    var parent_div = document.getElementsByClassName("layui-row")[0];

    // 随机生成视频div
    var arr = randomArr(video_data.length, 0, video_data.length);

    for(var i = 0; i < video_data.length; i++) {
        var r = randomNum(0, 255 + 1);
        var g = randomNum(0, 255 + 1);
        var b = randomNum(0, 255 + 1);
        var alpha = randomNum(0, 100 + 1);

        var child_div1 = document.createElement("div");
        child_div1.className = "layui-col-md4";
        child_div1.id = arr[i];
        // 背景颜色设置
        child_div1.style.background = "rgba("+r+", "+g+", "+b+", "+(alpha / 100)+")";
        child_div1.onclick = function() {
            show_video(this.id);
        };

        var child_div2 = document.createElement("div");
        var child_div3 = document.createElement("div");
        child_div3.className = "common_content_div";
        child_div3.innerHTML = "UP主：" + video_data[arr[i]].up + "<br>视频名：" + video_data[arr[i]].title;
        child_div3.style.padding = "30px";

        child_div2.appendChild(child_div3);
        child_div1.appendChild(child_div2);
        parent_div.appendChild(child_div1);
    }
}

// 弹窗播放视频
function show_video(index) {
    var ovideo = document.getElementById('video-btn');
    var oatn = document.getElementById('video-area');
    var oshadow = document.getElementById('shadow');
    ovideo.style.display = 'block';
    oshadow.style.display = 'block';
    console.log("index:" + index);
    console.log("video_data:" + video_data);
    console.log("video_data[index].src:" + video_data[index].src);
    oatn.innerHTML = '<iframe src="' + video_data[index].src + '" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>';
}

// 关闭弹窗和视频
function close_video() {
    var ovideo = document.getElementById('video-btn');
    var oatn = document.getElementById('video-area');
    var oshadow = document.getElementById('shadow');

    ovideo.style.display = 'none';
    oshadow.style.display = 'none';
    oatn.innerHTML = "";
}
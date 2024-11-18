var music = [
    "/resource/musicResource/G.E.M.邓紫棋 - 多远都要在一起.flac",
    "/resource/musicResource/蔡健雅 - Letting Go.flac",
    "/resource/musicResource/美波 - ルードルーズダンス.flac",
    "/resource/musicResource/R3HAB - Sakura.flac",
    "/resource/musicResource/カワキヲアメク.mp3",
    "/resource/musicResource/jieshuyuedui.mp3",
    "/resource/musicResource/heroes.flac",
    "/resource/musicResource/ssssai.flac"
]
img_list = [
    "/resource/musicResource/GEM.jpg",
    "/resource/musicResource/letting_go.jpg",
    "/resource/musicResource/lose_day.jpg",
    "/resource/musicResource/sakura.jpg",
    "/resource/musicResource/sslj.jpg",
    "/resource/musicResource/jieshuyuedui.jpg",
    "/resource/musicResource/heroes.jpg",
    "/resource/musicResource/ssssa.png"
],
    music_list = [
        "邓紫棋—多远都要在一起",
        "蔡健雅—letting Go",
        "美波—ルードルーズダンス",
        "R3HAB—Sakura",
        "美波—カワキヲアメク",
        "結束バンド—ギターと孤独と蒼い惑星",
        "Alesso/Tove_Lo—Heroes (we could be)",
        "吴雨霏—生生世世爱"
    ],
    // play = true,                                           // 音乐播放状态
    loop = true,                                           //音乐循环状态
    music_namelist = 0,                                    //音乐名字
    i = 0,                                                  //音乐音频和图片
    music_time = 1,                                         //音乐时间判断
    muted = true,
    rotate_a = true,
    voice_range_tf = true,
    vomule = 1,                                          // 音乐列表数组值
    key_play = true,                                            //键盘播放
    prev_btn = document.querySelector('.fa-fast-backward'),       // 上一首按钮
    play_btn = document.querySelector('.fa-play'),       // 播放按钮
    next_btn = document.querySelector('.fa-fast-forward'),       // 下一首按钮
    audio = document.getElementById('audio'),           // 音乐
    voice_range = document.querySelector('.voice_range'),
    img = document.querySelector('.mp3_img'),
    time_start = document.querySelector('.start_time'),//开始时间
    time_out = document.querySelector('.end_time'),//结束时间
    loop_btn = document.querySelector('.fa-sync-alt'), //循环
    random_btn = document.querySelector('.fa-random'),    //随机
    silence_btn = document.querySelector('.fa-volume-mute'),//静音
    voice_btn = document.querySelector('.fa-volume-up'),
    music_name = document.querySelector('.music_name'),//音乐名
    // progress = document.getElementById("progress"),
    progress = document.querySelector(".progress-bar"),
    music_range = document.querySelector('.music_range'),//进度条
    p_1 = document.querySelector('.p'),                     //
    voice_range = document.querySelector('.voice_range'),
    mp3_img = document.querySelector('.mp3_img'),     //歌曲图片
    radiozzy = document.querySelector('.radiozzy'),
    radiozzy1 = document.querySelector('.radiozzy1'),
    p_2 = document.querySelector('.p2');                    //静音文字



//键盘按下播放
document.addEventListener('keydown', pause);
function pause(event) {
    if (event.keyCode == 32) {
        if (key_play) {
            audio.play()
            mp3_img.style.animation = 'myfirst 50s linear infinite'
            play_btn.classList.remove('fa-play')
            play_btn.classList.add('fa-pause')
            key_play = false
            rotate_a = false
        } else {
            audio.pause()
            mp3_img.style.animationPlayState = 'paused';
            play_btn.classList.add('fa-play')
            play_btn.classList.remove('fa-pause')
            key_play = true
            rotate_a = true
        }
        console.log('键盘值：32')
    } else {
        console.log("错误键盘值：" + event.keyCode)
    }
}

//音量
voice_btn.onclick = function () {
    if (voice_range_tf) {
        voice_range.style.opacity = '1'
        voice_range_tf = false
    } else {
        voice_range.style.opacity = '0'
        voice_range_tf = true
    }
}
//音量条控制音量
function voice_range_updown() {
    voice_range_v = document.querySelector('.voice_range').value
    console.log("当前音量值：", voice_range_v)
    audio.addEventListener('timeupdate', updateVolumn);
    function updateVolumn() {
        audio.volume = voice_range_v / 100;
    }
}
//自定义音量
// function p_t(){
//     var p_vol = prompt('输入1-100的音量值')
//     voice_range_v1 = document.querySelector('.voice_range').value
//     console.log(p_vol)
//     if(p_vol>=0||p_vol<=100){
//         // alert('000')
//         voice_range_v1 = p_vol
//         audio.addEventListener('timeupdate', updateVolumn);
//         function updateVolumn() {
//         audio.volume = p_vol / 100;
//     }
//     }else{
//         alert('输入不正确')
//     }
// }
//自动播放
audio.onended = function () {
    i = i + 1;
    music_namelist = music_namelist + 1;
    if (i > 7 || music_namelist > 7) {
        music_namelist = 0;
        i = 0;
        music_name.innerText = music_list[music_namelist]
        audio.src = music[i]
        img.style.background = "url(" + img_list[i] + ") center / cover";
        audio.play()
    } else {
        music_name.innerText = music_list[music_namelist]
        audio.src = music[i]
        img.style.background = "url(" + img_list[i] + ") center / cover";
        audio.play()
    }
}
// //随机播放
random_btn.onclick = function () {
    i = Math.floor(Math.random() * 8)
    alert("随机")
    key_play = false
    setTimeout(() =>{
        mp3_img.style.animation = 'none'
    })
    addrotate();
    play_btn.classList.remove('fa-play')
    play_btn.classList.add('fa-pause')
    //音乐名
    music_namelist = i
    music_name.innerText = music_list[music_namelist]
    //音频
    audio.src = music[i]
    audio.play()
    img.style.background = "url(" + img_list[i] + ") center / cover";
    random_play = false
    console.log("随机数0-7：", i)
}
//进度条
setInterval(function () {
    music_nowtime = audio.currentTime; //音乐播放时间
    music_alltime = audio.duration;    //音乐总时间
    inputvalue = music_nowtime / music_alltime;
    progress.style.width = inputvalue * 100 / 100;
    // minute = Math.floor(music_nowtime / 60 % 60);
    // second = Math.floor(music_nowtime % 60);
    // minute1 = Math.floor(music_alltime / 60 % 60);
    // second1 = Math.floor(music_alltime % 60);
    // minute < 10 ? min = '0' + minute : min = minute
    // second < 10 ? sec = '0' + second : sec = second
    // minute1 < 10 ? min1 = '0' + minute1 : min1 = minute1
    // second1 < 10 ? sec1 = '0' + second1 : sec1 = second1
    // time_start.innerText = min + ':' + sec;
    // time_out.innerText = min1 + ':' + sec1;
}, 500);
//播放
play_btn.onclick = function () {
    if (key_play) {
        audio.play();
        mp3_img.style.animation = 'myfirst 50s linear infinite'
        key_play = false;
        rotate_a = false
        this.classList.remove('fa-play')
        this.classList.add('fa-pause')
    } else {
        audio.pause();
        mp3_img.style.animationPlayState = 'paused';
        key_play = true;
        rotate_a = true;
        this.classList.add('fa-play')
        this.classList.remove('fa-pause')
    }
}
//上一首
prev_btn.onclick = function () {
    music_namelist -= 1;
    //音乐名
    if (music_namelist < 0) {
        music_namelist = 7;
    }
    music_name.innerText = music_list[music_namelist]
    //音频
    i -= 1;
    if (i < 0) {
        i = 7;
    }
    audio.src = music[i]
    audio.play()
    key_play = false
    
    //重置旋转
    setTimeout(() =>{
        mp3_img.style.animation = 'none'
    })
    //调用旋转函数
    addrotate();

    img.style.background = "url(" + img_list[i] + ") center / cover";
    play_btn.classList.remove('fa-play')
    play_btn.classList.add('fa-pause')
}
// 下一首
next_btn.onclick = function () {
    music_namelist += 1;
    if (music_namelist > 7) {
        music_namelist = 0;
    }
    music_name.innerText = music_list[music_namelist]
    i += 1;
    if (i > 7) { w
        i = 0;
    }
    audio.src = music[i]
    audio.play()
    key_play = false;
    //重置旋转
    setTimeout(() =>{
        mp3_img.style.animation = 'none'
    })
    //调用旋转函数
    addrotate();

    img.style.background = "url(" + img_list[i] + ") center / cover";
    play_btn.classList.remove('fa-play')
    play_btn.classList.add('fa-pause')
}

//循环
loop_btn.onclick = function () {
    if (loop) {
        audio.loop = true
        alert("循环")
        loop = false
    } else {
        audio.loop = false
        alert("取消循环")
        loop = true
    }
}

//静音
silence_btn.onclick = function () {
    if (muted) {
        audio.muted = true
        muted = false
    } else {
        audio.muted = false
        muted = true
    }
}

//添加旋转动画
function addrotate(){
        setTimeout(() =>{
            mp3_img.style.animation = 'myfirst 50s linear infinite'
        },500)
    }
// 音乐播放状态
setInterval(() => {
    if(key_play){
        radiozzy.classList.remove('show')
        radiozzy.classList.add('fade')
        radiozzy1.classList.remove('show')
        radiozzy1.classList.add('fade')
    }else{
        radiozzy.classList.remove('fade')
        radiozzy.classList.add('show')
        radiozzy1.classList.remove('fade')
        radiozzy1.classList.add('show')

    }
},500)
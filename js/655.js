//文字特效
setInterval(function(){
    music_name.innerHTML = music_name.textContent
    .split('')
    .map((c,i,arr) => `<span style="z-index: ${arr.length - i}">${c}</span>`)
    .join('');
},500)
console.log("color:red;font-size:2em;font-weight:bold","Don't paste unknown code here, your account may be hijacked!")
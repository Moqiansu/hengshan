$(document).ready(function (){
    $('[data-toggle="tpltip"]').tooltip();
})


document.body.onkeydown = function (event){
    var e = window.event || event;
    if(e.preventDefault){
        e.preventDefault();
    }else{
        window.event.returnValue = false;
    }
}
function notice(){
    document.querySelector('.radiozzy1').style.top = '5px'
}
// const leftBtn = document.querySelector('.left')
// const rightBtn = document.querySelector('.right')
var imgN = 0
function leftbtn(){
    // 第一张
    if(imgN<1){
        // console.log(imgs)
    document.querySelectorAll('.imgs').forEach(imgs => {
        imgs.style.right = '500px'
        
        
    })
    imgN++
    console.log(imgN)
    // 第二张
    }else if(0<imgN<2){
        document.querySelectorAll('.imgs').forEach(imgs => {
            imgs.style.right = '1000px'
            
            
        })
        imgN++
        console.log(imgN)
        // 第三张
    }else if(imgM>2){
        alert("极限啦")
    }
    
}
function rightbtn(){
    if(imgN<1){
        alert('不能再往前了')
    }else if(1<imgN<3){
        document.querySelectorAll('.imgs').forEach(imgs => {
        imgs.style.right = '500px'
        
        
    })
    imgN--
    console.log(imgN)
    }else if(0<imgN<2){
        document.querySelectorAll('.imgs').forEach(imgs => {
            imgs.style.right = '0'
            
           
        })
        imgN--
        console.log(imgN)
    }
    
    }
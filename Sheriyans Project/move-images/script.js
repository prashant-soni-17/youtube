var body = document.querySelector("body")
var img = document.querySelector("img")

var moveX = 0
var moveY = 0

body.addEventListener("keydown",function(key){
    img.style.position = "absolute"
    console.log(key.code);

    if(key.code === "ArrowRight"){
       if(moveX <87){
         moveX++
        img.style.left = moveX + "%"
       }
    }
    else if(key.code === "ArrowLeft"){
        if(moveX > 0){
            moveX--
            img.style.left = moveX + "%"
        }
    }
    else if(key.code === "ArrowDown"){
        if(moveY < 56){
            moveY++
            img.style.top = moveY + "%"
        }
    }

    else if(key.code === "ArrowUp"){
        if(moveY>0){
            moveY--
            img.style.top = moveY + "%"
        }
    }

    else{
        console.log("Other key press");
        
    }
})
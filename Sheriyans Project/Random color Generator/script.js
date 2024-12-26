var div = document.querySelector("div")
var btn = document.querySelector("button")

btn.addEventListener("click",function(){
    var r = Math.floor(Math.random() * 245)
    var g = Math.floor(Math.random() * 245)
    var b = Math.floor(Math.random() * 245)
    div.style.backgroundColor = `rgb(${r},${g},${b})`
})
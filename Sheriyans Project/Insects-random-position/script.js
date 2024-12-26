
var btn = document.querySelector('button')
var body = document.querySelector('body')


btn.addEventListener('click', function(){

    var idx = Math.floor(Math.random()*4)
    var left = Math.floor(Math.random()*95)
    var top = Math.floor(Math.random()*95)
    var image = ["https://png.pngtree.com/png-clipart/20240305/original/pngtree-illustration-of-a-cartoon-bug-png-image_14513974.png" , "https://w7.pngwing.com/pngs/486/74/png-transparent-insect-mosquito-cartoon-insect-animals-photography-cartoon-thumbnail.png" , "https://cdn.pngedits.com/uploads/thumbnail/insect-bug-transparent-png-free-download-116249265952qcz0onudy.png" , "https://freepngimg.com/download/bug/31-black-bug-png-image.png"]
    var img = document.createElement('img')

    var randomRotation = Math.floor(Math.random() * 360)
    img.style.transform = "rotate(" + randomRotation + "deg)"

    img.style.width = "70px"
    img.style.position ="absolute"
    img.style.left = left + "%"
    img.style.top = top + "%"
    
    var setImg = img.setAttribute("src", image[idx])
    body.appendChild(img)
})
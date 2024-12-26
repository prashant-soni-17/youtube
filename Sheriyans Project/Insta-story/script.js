var arr = [{
    dp: "https://images.unsplash.com/photo-1730066799485-1a5cfc70f627?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story: "https://images.unsplash.com/photo-1730238103847-89a39888ffe3?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: 'Zara'
}, {
    dp: "https://images.unsplash.com/photo-1694552532955-6eab71d3c07c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story: "https://images.unsplash.com/photo-1694980286798-7a3c1c45b1fe?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: 'Amélie'
}, {
    dp: "https://plus.unsplash.com/premium_photo-1734413175539-1e6dcb642998?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story: "https://images.unsplash.com/photo-1734366965504-44ca4877dba3?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: 'Liora'
}, {
    dp: "https://images.unsplash.com/photo-1684166220113-9d985bbeac54?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story: "https://images.unsplash.com/photo-1684166220113-9d985bbeac54?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: 'Sofia'
}, {
    dp: "https://images.unsplash.com/photo-1731484395012-472f9b973346?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story: "https://images.unsplash.com/photo-1731484396594-528cec87c35e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: 'Mila'
}, {
    dp: "https://images.unsplash.com/photo-1733682631362-5936ee967df3?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story: "https://images.unsplash.com/photo-1733682623005-7569e54c2b2b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: 'Kaia'
}]

var sum = ''

arr.forEach(function (elem, idx) {
    sum = sum + `<div class="story">
                <img id=${idx} src="${elem.dp} "alt="">
            </div>`


})
document.querySelector('.storian').innerHTML = sum;

var full = document.querySelector('.full')
var storian = document.querySelector('.storian')
var growth = document.querySelector('.growth')
var img = document.querySelector('.profile img')
var h4 = document.querySelector('h4')

console.log(storian);

storian.addEventListener('click', function (dets) {
    var target = arr[dets.target.id]

    var grow = 0;

    var interval = setInterval(function () {
        grow++;
        growth.style.width = grow + "%"

    }, 30)

    img.setAttribute('src', target.dp)
    h4.innerHTML = target.username


    full.style.display = 'block'
    full.style.backgroundImage = `url(${target.story})`

    setTimeout(function () {
        full.style.display = 'none'
        clearInterval(interval)
    }, 3000)

})
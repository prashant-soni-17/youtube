const wpStatusDetails = [{
    profileImage: "https://images.unsplash.com/photo-1730066799485-1a5cfc70f627?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    statusImage: "https://images.unsplash.com/photo-1730238103847-89a39888ffe3?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: 'Zara',
    uploadTime: "11:35 AM"
}, {
    profileImage: "https://images.unsplash.com/photo-1694552532955-6eab71d3c07c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    statusImage: "https://images.unsplash.com/photo-1694980286798-7a3c1c45b1fe?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: 'Amélie',
    uploadTime: "2:50 PM"
}, {
    profileImage: "https://plus.unsplash.com/premium_photo-1734413175539-1e6dcb642998?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    statusImage: "https://images.unsplash.com/photo-1734366965504-44ca4877dba3?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: 'Liora',
    uploadTime: "10:15 PM"
}, {
    profileImage: "https://images.unsplash.com/photo-1684166220113-9d985bbeac54?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    statusImage: "https://images.unsplash.com/photo-1684166220113-9d985bbeac54?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: 'Sofia',
    uploadTime: "8:34 AM"
}, {
    profileImage: "https://images.unsplash.com/photo-1731484395012-472f9b973346?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    statusImage: "https://images.unsplash.com/photo-1731484396594-528cec87c35e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: 'Mila',
    uploadTime: "3:59 AM"
}, {
    profileImage: "https://images.unsplash.com/photo-1733682631362-5936ee967df3?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    statusImage: "https://images.unsplash.com/photo-1733682623005-7569e54c2b2b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: 'Kaia',
    uploadTime: "4:49 AM"
},{
    name: "Freya",
    uploadTime: "7:01 AM",
    profileImage: "https://images.unsplash.com/photo-1733175697085-aa500b61ac74?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    statusImage: "https://images.unsplash.com/photo-1733175697085-aa500b61ac74?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
}]

var allstatus = document.querySelector(".allstatus")
var conctinent = ''

wpStatusDetails.forEach(function(elem, idx){
    conctinent += `<div class="status">
                <div id="${idx}" class="overlay"></div>
                <img src=${elem.profileImage}
                    alt="">
                <div class="detail">
                    <h2>${elem.name}</h2>
                    <h4>${elem.uploadTime}</h4>
                </div>
            </div>`

})
allstatus.innerHTML = conctinent

var fullStatus = document.querySelector('.underStatus')
var phone= document.querySelector('.frame')
var stimg = document.querySelector('#uS')
var picimg = document.querySelector('#uI')
var Na_me = document.querySelector('.underStatus .status .detail h2')
var Ti_me = document.querySelector('.underStatus .status .detail h4')
var loading = document.querySelector('.line .loading')

allstatus.addEventListener('click' , function(di_v){
    var Spic = wpStatusDetails[di_v.target.id].statusImage
    var Ppic = wpStatusDetails[di_v.target.id].profileImage
    var Name = wpStatusDetails[di_v.target.id].name
    var Time = wpStatusDetails[di_v.target.id].uploadTime
    
    fullStatus.style.display = 'block'
    phone.style.display = 'none'
    stimg.setAttribute('src', Spic)
    Na_me.innerHTML = Name
    Ti_me.innerHTML = Time
    picimg.setAttribute('src', Ppic)

    var w = 0


    var STnter =  setInterval(function(){
        loading.style.width = w + '%'
        w++;
    },70)

    setTimeout(function(){
        clearInterval(STnter);
        fullStatus.style.display = "none" 
        phone.style.display =  "block"
    },7000)
})


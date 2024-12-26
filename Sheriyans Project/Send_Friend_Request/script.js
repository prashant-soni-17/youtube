var btn = document.querySelector("button")
var h2 = document.querySelector("h2")
var flag = 0

btn.addEventListener("click",function(){
  if(flag == 0){
    h2.innerHTML = "Request Sending..."
    h2.style.color = "yellow"
    btn.innerHTML = "Adding Friend"

    setTimeout(function(){
    h2.innerHTML = "Friends"
    h2.style.color = "green"
    btn.innerHTML = "Remove friend"
    },3000)
    flag = 1
  }
  else{
    h2.innerHTML = "Stranger"
    h2.style.color = "red"
    btn.innerHTML = "Add Friend"
    flag = 0
  }

})
var btn = document.querySelector("button");
var resultBox = document.querySelector(".result-box");
var p = resultBox.querySelector("p")

var teams = ["./CSK.jpg", "./LSG.png", "./KKR.jpg", "./RR.jpg", "./PBKS.jpeg", "./RCB.jpg", "./GT.jpg", "./MI.jpg", "./SRH.jpg"];

btn.addEventListener("click", function () {
    var data = Math.floor(Math.random() * teams.length);
    resultBox.style.backgroundImage = `url(${teams[data]})`;
    p.style.display = "none";
});

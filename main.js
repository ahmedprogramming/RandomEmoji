let emoji = document.querySelector(".emoji");
let text = document.querySelector(".text");
function emojiGenerator(){
    fetch("https://emoji-api.com/emojis?access_key=773b58f681fb786fafdb8392e8b8a75ddc177fd1").then(res => res.json()).then(data => {
        // emoji.innerHTML = data[Math.floor(Math.random() * data.length)].character
        // text.innerHTML = data[Math.floor(Math.random() * data.length)].unicodeName
    console.log(data[0])
    console.log(data[0].character)
    console.log(data[0].unicodeName)
    console.log(Math.floor(Math.random() * data.length))
}) 
}
let btn = document.querySelector(".btn");
btn.addEventListener("click", emojiGenerator)
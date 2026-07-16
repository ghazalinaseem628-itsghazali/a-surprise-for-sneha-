// =========================================
// A Smile For Sneha ❤️
// Main Script
// =========================================

// Sections

const intro = document.getElementById("intro");
const countdown = document.getElementById("countdown");
const reveal = document.getElementById("reveal");
const messageBox = document.getElementById("messageBox");
const gallery = document.getElementById("gallery");
const ending = document.getElementById("ending");

// Elements

const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");
const flash = document.getElementById("flash");
const bgMusic = document.getElementById("bgMusic");
const countNumber = document.getElementById("countNumber");

const title = document.getElementById("messageTitle");
const text = document.getElementById("messageText");

const slide = document.getElementById("slideImage");

// Loader

window.onload = () => {

setTimeout(() => {

document.getElementById("loader").style.display="none";

intro.classList.add("active");

},1500);

};

// Floating Hearts

setInterval(()=>{

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(16+Math.random()*22)+"px";

heart.style.animationDuration=(5+Math.random()*4)+"s";

document.getElementById("hearts").appendChild(heart);

setTimeout(()=>{

heart.remove();

},9000);

},250);

// Start Button

startBtn.onclick=()=>{

if(navigator.vibrate){

navigator.vibrate(120);

}

bgMusic.volume=.45;

bgMusic.play();

intro.classList.remove("active");

countdown.classList.add("active");

startCountdown();

};

// Countdown

let count=5;

function startCountdown(){

countNumber.innerHTML=count;

const timer=setInterval(()=>{

count--;

countNumber.innerHTML=count;

if(count<=0){

clearInterval(timer);

flashReveal();

}

},1000);

}

// Flash Reveal

function flashReveal(){

flash.style.opacity="1";

setTimeout(()=>{

flash.style.opacity="0";

countdown.classList.remove("active");

reveal.classList.add("active");

setTimeout(()=>{

showMessages();

},2500);

},500);

}// =========================================
// MESSAGES
// =========================================

const messages = [

{
title:"🥺",
text:"I know... Aaj aapka mood theek nahi tha..."
},

{
title:"❤️",
text:"Par hum hai na... 😏"
},

{
title:"🥹",
text:"Aur shaam mein gir bhi gaye... Gussa aur badh gaya hoga na?"
},

{
title:"🌸",
text:"Aur kal jaa bhi rahe ho ghoomne..."
},

{
title:"📸",
text:"Toh chup chaap se muh dhoiye... haste hue ek selfie bhejiye ❤️"
},

{
title:"🤗",
text:"Aur haan... Bhut saare Hugssss 🤗 Kissessss 😘 Aur ek full dose Multivitamin 😬❤️"
}

];

let currentMessage = 0;

function showMessages(){

reveal.classList.remove("active");

messageBox.classList.add("active");

displayMessage();

}

function displayMessage(){

title.innerHTML = messages[currentMessage].title;

typeWriter(messages[currentMessage].text);

}

function typeWriter(sentence){

text.innerHTML="";

let i=0;

const typing=setInterval(()=>{

text.innerHTML += sentence.charAt(i);

i++;

if(i>=sentence.length){

clearInterval(typing);

setTimeout(nextMessage,3500);

}

},40);

}

function nextMessage(){

currentMessage++;

if(currentMessage>=messages.length){

messageBox.classList.remove("active");

startGallery();

return;

}

displayMessage();

}

// =========================================
// PHOTO SLIDESHOW
// =========================================

const photos=[

"image/photo1.jpg",
"image/photo2.jpg",
"image/photo3.jpg",
"image/photo4.jpg",
"image/photo5.jpg",
"image/photo6.jpg",
"image/photo7.jpg",
"image/photo8.jpg",
"image/photo9.jpg",
"image/photo10.jpg"

];

let currentPhoto=0;

function startGallery(){

gallery.classList.add("active");

slide.src=photos[currentPhoto];

const slideshow=setInterval(()=>{

currentPhoto++;

if(currentPhoto>=photos.length){

clearInterval(slideshow);

gallery.classList.remove("active");

showEnding();

return;

}

slide.style.opacity="0";

setTimeout(()=>{

slide.src=photos[currentPhoto];
slide.src = photos[currentPhoto];

slide.style.animation = "none";
slide.offsetHeight;
slide.style.animation = null;
slide.classList.remove("photoZoom");
slide.classList.add("photoZoom");

slide.style.opacity = "1";
slide.classList.add("flash");
setTimeout(()=>{
    slide.classList.remove("flash");
},500);
slide.style.opacity="1";

},500);

},4000);

}// =========================================
// ENDING
// =========================================

function showEnding(){

ending.classList.add("active");

// Music Fade

let volume=bgMusic.volume;

const fade=setInterval(()=>{

volume-=0.03;

if(volume<=0){

bgMusic.pause();

clearInterval(fade);

}

bgMusic.volume=Math.max(volume,0);

},180);

// Hearts Explosion

for(let i=0;i<120;i++){

setTimeout(createHeartExplosion,i*18);

}

}

// =========================================
// HEART EXPLOSION
// =========================================

function createHeartExplosion(){

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left="50%";

heart.style.top="50%";

heart.style.pointerEvents="none";

heart.style.fontSize=(18+Math.random()*24)+"px";

heart.style.zIndex="99999";

const angle=Math.random()*Math.PI*2;

const distance=150+Math.random()*350;

heart.animate([

{

transform:"translate(-50%,-50%) scale(.4)",

opacity:1

},

{

transform:`translate(calc(-50% + ${Math.cos(angle)*distance}px),calc(-50% + ${Math.sin(angle)*distance}px)) scale(1.5)`,

opacity:0

}

],{

duration:2200,

easing:"ease-out"

});

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},2200);

}

// =========================================
// TOUCH SPARKLE
// =========================================

document.addEventListener("click",(e)=>{

const spark=document.createElement("div");

spark.innerHTML="✨";

spark.style.position="fixed";

spark.style.left=e.clientX+"px";

spark.style.top=e.clientY+"px";

spark.style.fontSize="18px";

spark.style.pointerEvents="none";

spark.style.zIndex="99999";

spark.animate([

{

transform:"scale(.5)",

opacity:1

},

{

transform:"translateY(-35px) scale(1.8)",

opacity:0

}

],{

duration:900,

easing:"ease-out"

});

document.body.appendChild(spark);

setTimeout(()=>{

spark.remove();

},900);

});

// =========================================
// RESTART
// =========================================

restartBtn.onclick=()=>{

location.reload();

};// ======================
// Floating Sparkles
// ======================

setInterval(() => {

    const spark = document.createElement("div");

    spark.className = "spark";

    spark.style.left = Math.random() * window.innerWidth + "px";

spark.style.top = Math.random() * window.innerHeight + "px";
spark.style.animationDuration = (4 + Math.random() * 4) + "s";
    document.body.appendChild(spark);

    setTimeout(() => {

        spark.remove();

    }, 6000);

}, 250);
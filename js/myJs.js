const textConfig={
text1:"He luu my cutie cat!",
text2:"There's something I want to ask uuu",
text3:"Will you be my valentine <3 ._.",
text4:":3",
text5:"Nope :))",
text6:"YESSSS <3",
text7:"Tell me a reason why you love me? :vvvv",
text8:"Send me <3",
text9:"Because Alice is super handsome super cool super cute:)))",
text10:"Ehehehe",
text11:"I love u",
text12:"Love u too <3"
};

$(document).ready(function(){
setTimeout(function(){
firstQuestion();
$(".spinner").fadeOut();
$("#preloader").delay(350).fadeOut("slow");
$("body").delay(350).css({overflow:"visible"});
},600);

$("#text3").html(textConfig.text3);
$("#text4").html(textConfig.text4);
$("#no").html(textConfig.text5);
$("#yes").html(textConfig.text6);

function firstQuestion(){
$(".content").hide();
Swal.fire({
title:textConfig.text1,
text:textConfig.text2,
imageUrl:"img/cuteCat.jpg",
imageWidth:300,
imageHeight:300,
background:'#fff url("img/iput-bg.jpg")',
imageAlt:"Custom image"
}).then(function(){
$(".content").show(200);
});
}

function switchButton(){
try{new Audio("sound/duck.mp3").play();}catch(e){}
const $no=$("#no");
const $yes=$("#yes");
const leftNo=$no.css("left");
const topNo=$no.css("top");
const leftYes=$yes.css("left");
const topYes=$yes.css("top");
$no.css({left:leftYes,top:topYes});
$yes.css({left:leftNo,top:topNo});
}

function moveButton(){
try{new Audio("sound/Swish1.mp3").play();}catch(e){}
const x=screen.width<=600?Math.random()*300:Math.random()*500;
const y=Math.random()*500;
$("#no").css({left:x+"px",top:y+"px"});
}

let dodgeCount=0;
$("#no").on("mousemove",function(){
if(dodgeCount<1)switchButton();else moveButton();
dodgeCount++;
});

$("#no").on("touchstart touchmove",

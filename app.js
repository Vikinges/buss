// movement animation to happen 
const card = document.querySelector('.card');
const container = document.querySelector('.container');
// titlre
const title = document.querySelector('.title');
const tur = document.querySelector('.tur img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const tips = document.querySelector('.tips');

// moving animation Event 
container.addEventListener("mousemove", (e) => {
    // console.log(e.pageX, e.pageY);
let xAxis = (window.innerWidth / 2 - e.pageX) / 25; 
let yAxis = (window.innerHeight / 2 - e.pageY) / 25; 
card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// animate in 
container.addEventListener("mouseenter",(e)=>{
 card.style.transition = "none";
 //Popout
 title.style.transform ="translateZ(150px)";
 tur.style.transform ="translateZ(200px) rotateZ(-20deg)";
 description.style.transform ="translateZ(125px)";
 tips.style.transform ="translateZ(100px)";
 purchase.style.transform ="translateZ(75px)";
});
// animate out 
container.addEventListener("mouseleave", (e)=>{
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
// Popback
title.style.transform ="translateZ(0px)";
tur.style.transform ="translateZ(0px) rotateZ(0deg)";
 purchase.style.transform ="translateZ(0px)";
 description.style.transform ="translateZ(0px)";
 tips.style.transform ="translateZ(0px)";
}); 
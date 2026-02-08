gsap.registerPlugin(ScrollTrigger);

/* HERO INTRO */
gsap.from("#name",{y:60,opacity:0,duration:1.2,ease:"power4.out"});
gsap.from(".logo",{scale:0.6,opacity:0,delay:0.5,duration:1,ease:"back.out(1.7)"});
gsap.from("#role",{y:30,opacity:0,delay:0.9,duration:0.8});

/* FLOAT LOGO */
gsap.to(".logo",{y:12,duration:2,repeat:-1,yoyo:true,ease:"sine.inOut"});

/* SCROLL REVEAL */
gsap.utils.toArray(".reveal").forEach(el=>{
gsap.to(el,{
opacity:1,
y:0,
duration:1,
ease:"power3.out",
scrollTrigger:{trigger:el,start:"top 85%"}
});
});

/* GOLD SNOW BACKGROUND */
const canvas = document.getElementById("goldSnow");
const ctx = canvas.getContext("2d");

let w,h;
function resize(){
w = canvas.width = window.innerWidth;
h = canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize",resize);

const particles=[];
for(let i=0;i<90;i++){
particles.push({
x:Math.random()*w,
y:Math.random()*h,
r:Math.random()*2+1,
d:Math.random()*1+0.5,
s:Math.random()*0.6+0.2,
o:Math.random()*0.8+0.2
});
}

function draw(){
ctx.clearRect(0,0,w,h);
ctx.fillStyle="#d4af37";
particles.forEach(p=>{
ctx.globalAlpha=p.o;
ctx.beginPath();
ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
ctx.fill();
p.y+=p.d;
p.x+=Math.sin(p.y*0.01)*p.s;
if(p.y>h){p.y=-10;p.x=Math.random()*w;}
});
requestAnimationFrame(draw);
}
draw();

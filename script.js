
const words=['Software Developer','Linux Engineer','DevOps Enthusiast'];
let i=0;
setInterval(()=>{
document.getElementById('typed').textContent=words[i++%words.length];
},1800);

const c=document.getElementById('particles'),x=c.getContext('2d');
function rs(){c.width=innerWidth;c.height=innerHeight}
rs();onresize=rs;
let p=[...Array(100)].map(()=>({x:Math.random()*c.width,y:Math.random()*c.height,s:Math.random()*3+1}));
(function a(){
x.clearRect(0,0,c.width,c.height);
p.forEach(o=>{x.fillStyle='#2fb8ff';x.beginPath();x.arc(o.x,o.y,o.s,0,7);x.fill();o.y+=0.35;if(o.y>c.height)o.y=0;});
requestAnimationFrame(a);
})();

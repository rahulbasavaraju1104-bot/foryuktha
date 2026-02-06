
// Typing effect
function startTyping(text){
  const el = document.getElementById('typing');
  el.innerHTML = '';
  let i=0;
  function type(){
    if(i<text.length){
      el.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 40);
    }
  }
  type();
}

// Reveal memory messages
function revealText(id){
  const p = document.getElementById(id);
  p.classList.remove('hidden');
}

// Page transition
document.querySelectorAll('a.button').forEach(link=>{
  link.addEventListener('click', function(e){
    e.preventDefault();
    const target = this.href;
    document.body.style.opacity = '0';
    setTimeout(()=>{window.location.href=target;},600);
  });
});

// Floating hearts
function createHeart(){
  const heart = document.createElement('div');
  heart.innerHTML = '❤️';
  heart.style.position='absolute';
  heart.style.left=Math.random()*100+'vw';
  heart.style.animation='floatHeart 5s linear infinite';
  heart.style.fontSize = Math.random()*20+10+'px';
  document.querySelector('.hearts').appendChild(heart);
  setTimeout(()=>heart.remove(),5000);
}
setInterval(createHeart,500);

const style = document.createElement('style');
style.innerHTML=`@keyframes floatHeart {0%{transform:translateY(0);}100%{transform:translateY(-100vh);}}`;
document.head.appendChild(style);

// Confetti for final page
function startConfetti(){
  const container = document.querySelector('.confetti');
  for(let i=0;i<100;i++){
    const div=document.createElement('div');
    div.style.position='absolute';
    div.style.width='10px';
    div.style.height='10px';
    div.style.background=['#ff4d6d','#ffec4d','#4dffec'][Math.floor(Math.random()*3)];
    div.style.left=Math.random()*100+'%';
    div.style.top=Math.random()*-20+'%';
    div.style.opacity=1;
    div.style.transform='rotate('+Math.random()*360+'deg)';
    div.style.animation='confettiFall '+(2+Math.random()*3)+'s linear infinite';
    container.appendChild(div);
  }
}
const confettiStyle=document.createElement('style');
confettiStyle.innerHTML='@keyframes confettiFall{0%{transform:translateY(0);}100%{transform:translateY(100vh);}}';
document.head.appendChild(confettiStyle);

<script>
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < window.innerHeight - 100) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});

cards.forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(50px)";
  card.style.transition = "0.6s ease";
});
window.addEventListener("scroll",function(){

let sections=document.querySelectorAll(".section");

sections.forEach(function(sec){

let position=sec.getBoundingClientRect().top;

let screen=window.innerHeight;

if(position<screen-100){

sec.classList.add("show");

}

});

});
window.onscroll=function(){

let winScroll=document.documentElement.scrollTop;

let height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

let scrolled=(winScroll/height)*100;

document.getElementById("progress").style.width=scrolled+"%";

};
let text="Frontend Developer";

let i=0;

function type(){

if(i<text.length){

document.getElementById("typing").innerHTML+=text.charAt(i);

i++;

setTimeout(type,100);

}

}

type();
window.onload=function(){
document.getElementById("loader").style.display="none";
}
  var text=["Frontend Developer","HTML CSS Expert","Web Designer"];
var i=0;
setInterval(function(){
document.getElementById("role").innerHTML=text[i];
i=(i+1)%text.length;
},2000);
</script>



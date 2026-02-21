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
</script>

document.querySelectorAll('.program-card').forEach(card=>{
    card.addEventListener('click',()=>{
      card.querySelector('.program-inner').classList.toggle('rotate');
    });
  });



  document.querySelectorAll(".faq-question").forEach(button => {

    button.addEventListener("click", () => {
    
    const item = button.parentElement;
    const answer = item.querySelector(".faq-answer");
    const icon = button.querySelector(".faq-icon");
    
    document.querySelectorAll(".faq-answer").forEach(a => {
    if(a !== answer) a.classList.add("hidden");
    });
    
    document.querySelectorAll(".faq-icon").forEach(i => {
    if(i !== icon) i.textContent = "+";
    });
    
    answer.classList.toggle("hidden");
    icon.textContent = answer.classList.contains("hidden") ? "+" : "−";
    
    });
    
    });
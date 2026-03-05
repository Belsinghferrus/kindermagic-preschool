document.querySelectorAll('.program-card').forEach(card=>{
    card.addEventListener('click',()=>{
      card.querySelector('.program-inner').classList.toggle('rotate');
    });
  });
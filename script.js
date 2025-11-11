const modal = document.getElementById('modal');

function showModalAndReset(form){
  modal.style.display = 'flex';
  // ensure animation
  const card = modal.querySelector('.modal-card');
  card.style.animation = 'modalIn .45s forwards';
  setTimeout(()=>{
    modal.style.display = 'none';
    form.reset();
  }, 3000);
}

// main pedido form
const pedidoForm = document.getElementById('pedidoForm');
if(pedidoForm){
  pedidoForm.addEventListener('submit', e=>{
    e.preventDefault();
    showModalAndReset(pedidoForm);
  });
}

// sabores form
const saboresForm = document.getElementById('saboresForm');
if(saboresForm){
  saboresForm.addEventListener('submit', e=>{
    e.preventDefault();
    showModalAndReset(saboresForm);
  });
}

// ubic form
const ubicForm = document.getElementById('ubicForm');
if(ubicForm){
  ubicForm.addEventListener('submit', e=>{
    e.preventDefault();
    showModalAndReset(ubicForm);
  });
}

// contact form
const contactForm = document.getElementById('contactForm');
if(contactForm){
  contactForm.addEventListener('submit', e=>{
    e.preventDefault();
    showModalAndReset(contactForm);
  });
}

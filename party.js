' use strict ';
const envelopeImg = document.getElementById('envelopeImg');
const modal2 = document.getElementById('modal2');
const letter = document.getElementById('letterset');
const closeBtn = document.getElementById('closeBtn');

envelopeImg.addEventListener('click', () => {
  modal2.classList.add('show'); // 手紙（#modal）をフワッと出す
});

closeBtn.addEventListener('click' , () => {
  modal2.classList.remove('show');
});
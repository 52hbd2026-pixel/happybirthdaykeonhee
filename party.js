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

const rabbit = document.querySelector('.uss52'); 
const comingSoonModal = document.getElementById('comingSoonModal');

// 🐰 うさぎがタップされたら「制作中だよ！」を出す！
rabbit.addEventListener('click', () => {
  comingSoonModal.style.display = 'block';
});

// 💬 メッセージをクリックしたら閉じる！
comingSoonModal.addEventListener('click', () => {
  comingSoonModal.style.display = 'none';
});
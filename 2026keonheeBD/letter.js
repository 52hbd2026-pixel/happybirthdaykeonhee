' use strict ';
// 🎬 画面のパーツたちを、あなたのHTMLの名前（id）で呼び出す
const letterBox = document.getElementById('letterBox');
const modal = document.getElementById('modal');
const closebtn = document.getElementById('closebtn');
const blackoutOverlay = document.getElementById('blackoutOverlay');
const quizPopup = document.getElementById('quizPopup');
const liarPopup = document.getElementById('liarPopup');

const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const tapGuide = document.getElementById('tapGuide'); // 👈 tap! の文字のidね！

// ─── ここからゴニぴのサプライズ台本 ───

// ① 封筒（#letterBox）をタップしたら
letterBox.addEventListener('click', () => {
  modal.classList.add('show'); // 手紙（#modal）をフワッと出す
});

// ② 手紙の「×ボタン（#closebtn）」を押したら
closebtn.addEventListener('click', () => {
  modal.classList.remove('show'); // 手紙をじわっと消す
  blackoutOverlay.classList.add('show'); // 暗転背景（#blackoutOverlay）を0.8秒かけてじわ〜っとド暗転！
  quizPopup.classList.add('show'); // 同時に「準備できた？（#quizPopup）」をフワッと出す
});

// ③ クイズの「네（#yesBtn）」を押したら
yesBtn.addEventListener('click', () => {
  window.open('party.html', '_blank'); // パーティー会場へ大開通！
});

// ④ クイズの「아니요（#noBtn）」を押したら
noBtn.addEventListener('click', () => {
  quizPopup.classList.remove('show'); // 「準備できた？」をじわ〜っと消す
  liarPopup.classList.add('show'); // 代わりに「うそつきー（#liarPopup）」をじわ〜っと浮かび上がらせる！
});

// ⑤ うそつき画面の「tap!（#tapGuide）」を押したら
tapGuide.addEventListener('click', () => {
  window.open('party.html', '_blank'); // 問答無用で強制連行！
});

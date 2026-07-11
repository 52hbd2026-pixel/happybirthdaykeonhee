' use strict ';
const envelopeImg = document.getElementById('envelopeImg');
const modal2 = document.getElementById('modal2');
const letter = document.getElementById('letterset');
const closeBtn = document.getElementById('closeBtn');


const talkList = [
  { text: "오 왔어?", img: "img/uss1.png" },
  { text: "와줘서 고마워요!", img: "img/uss3.png" },
  { text: "내가 정말 소중하게 생각하는 사람의 생일파티를 준비했어요", img: "img/uss1.png" },
  { text: "재밌게 즐겨!", img: "img/uss2.png" }
];

let currentIndex = 0;
const defaultRabbitImg = "img/uss1.gif"; 

envelopeImg.addEventListener('click', () => {
  rabbit.style.display = 'none'; 
  modal2.classList.add('show');
  
});

closeBtn.addEventListener('click' , () => {
  modal2.classList.remove('show');
  rabbit.style.display = 'block'; 
});

const rabbit = document.querySelector('.uss52'); 
const darkOverlay = document.getElementById('darkOverlay'); 
const dialogModal = document.getElementById('dialogModal'); 
const dialogTxt = document.getElementById('dialogTxt');
const nextBtn = document.getElementById('nextBtn');

rabbit.addEventListener('click', () => {
  currentIndex = 0;
  rabbit.src = talkList[currentIndex].img; 
  
  // 💡 【ここが超重要！】会話が始まったらフワフワのアニメーションを強制ストップ！
  rabbit.style.animation = 'none'; 
  
  updateDialogue();
  darkOverlay.style.display = 'block';
});

if (dialogModal) dialogModal.style.display = 'block';

// 🇰🇷 「다음」ボタンで進む！
nextBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  currentIndex++;
  
  if (currentIndex < talkList.length) {
    updateDialogue();
  } else {
    // 終了！暗転を消して、画像をもとに戻す
    darkOverlay.style.display = 'none';
    rabbit.src = defaultRabbitImg; 
    
    // 💡 【ここが超重要！】会話が終わったら、いつものフワフワ（fuwa）を大復活させる！
    rabbit.style.animation = 'fuwa 1.5s ease-in-out infinite'; 
  }
});

function updateDialogue() {
  const currentTalk = talkList[currentIndex];
  dialogTxt.textContent = currentTalk.text;
  rabbit.src = currentTalk.img;
}



// // 🐰 うさぎがタップされたら「制作中だよ！」を出す！
// rabbit.addEventListener('click', () => {
//   comingSoonModal.style.display = 'block';
// });

// // 💬 メッセージをクリックしたら閉じる！
// comingSoonModal.addEventListener('click', () => {
//   comingSoonModal.style.display = 'none';
// });
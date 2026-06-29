// 웹 페이지 로드가 완료된 후 실행
document.addEventListener('DOMContentLoaded', () => {
  const card = document.getElementById('card');
  const toResumeBtn = document.getElementById('to-resume-btn');
  const toCardBtn = document.getElementById('to-card-btn');

  // 명함 → 이력서 (카드 뒤집기)
  if (toResumeBtn && card) {
    toResumeBtn.addEventListener('click', () => {
      card.classList.add('flipped');
    });
  }

  // 이력서 → 명함 (카드 복귀)
  if (toCardBtn && card) {
    toCardBtn.addEventListener('click', () => {
      card.classList.remove('flipped');
    });
  }

  // 연락처 칩 클릭 시 부드러운 탭 효과
  document.querySelectorAll('.contact-chip').forEach(chip => {
    chip.addEventListener('mousedown', () => {
      chip.style.transform = 'scale(0.97)';
    });
    chip.addEventListener('mouseup', () => {
      chip.style.transform = '';
    });
    chip.addEventListener('mouseleave', () => {
      chip.style.transform = '';
    });
  });
});

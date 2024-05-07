let currentIndex = 0;
const images = document.querySelectorAll('.ani-item');

function nextSlide() {
    if (currentIndex === images.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    updateSlide();
}

function updateSlide() {
    const translateValue = -currentIndex * 100 + '%';
    document.querySelector('.animation').style.transform = `translateX(${translateValue})`;
}

// 3초마다 다음 이미지로 슬라이딩
setInterval(nextSlide, 3000);
console.log('이동했음', 3000)

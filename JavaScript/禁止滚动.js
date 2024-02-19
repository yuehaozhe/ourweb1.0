// 核心是设置body标签的overflow属性 
const videoButton = document.querySelector('.video-font button')
const bodyScroll = document.querySelector('body')
const targetPosition = 1000; // 指定的滚动位置
bodyScroll.style.overflow = 'hidden'

function scroll() {
    bodyScroll.style.overflow = 'auto'
}

function scrollToPosition() {
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth' // 平滑滚动
    });
}

videoButton.addEventListener('click', function () {
    scroll()
    scrollToPosition()
})






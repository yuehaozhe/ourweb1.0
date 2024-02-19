// 获取元素
const timeElements = document.querySelectorAll('.time ul li');

// 定义一个时间戳
const togetherTime = new Date('2022-09-25T00:00:00').getTime(); // 获取时间戳

// 转换为天数小时分钟秒
function updatetime() {
    // 获取当前时间戳
    const nowTime = new Date().getTime();
    // 计算时间差（毫秒数）
    const timeDiff = nowTime - togetherTime;
    // 将毫秒数转换为天数差
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24)); // 每天有 24*60*60*1000 毫秒

    // 计算剩余的小时、分钟和秒数
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    // 更新到页面中
    const timeValues = [`${days}天`, `${hours}小时`, `${minutes}分钟`, `${seconds}秒`];
    timeElements.forEach(function (timeElement, index) {
        timeElement.innerHTML = timeValues[index];
    });
}

// 每秒更新一次时间
setInterval(updatetime, 1000);

// 初始加载时更新时间
updatetime();

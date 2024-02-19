setTimeout(() => {
    // 获取父元素
    const videofont = document.querySelector('.video-font')
    // 创建video标签
    const video = document.createElement('video')
    video.controls = true
    video.src = '../videos/生日祝福视频.mp4'
    // 查找父元素的节点
    const parentnode = videofont.parentNode
    // 将video标签添加到父元素节点后面
    parentnode.insertBefore(video, videofont.nextSibling)
}, 1000)
// 等 DOM 结构全部加载完毕后再执行
window.addEventListener('DOMContentLoaded', () => {
// 导航链接平滑滚动
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

//深色模式切换
const themeBtn = document.getElementById('theme-toggle');
const body = document.body;

if (themeBtn) {
    console.log('找到了按钮，准备绑定事件'); 
    // 检查本地存储是否保存过偏好
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark');
    }
    themeBtn.addEventListener('click', () => {
        body.classList.toggle('dark');// 加上/去掉 dark 类
        // 保存用户的偏好设置
        localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
    });
}

});

document.addEventListener('DOMContentLoaded', () => {
    const langToggleBtn = document.getElementById('lang-toggle');
    const langEnElements = document.querySelectorAll('.lang-en');
    const langZhElements = document.querySelectorAll('.lang-zh');

    // 检查本地存储中是否有用户偏好
    let currentLang = localStorage.getItem('wuji_lang') || 'en';

    // 应用语言设置的函数
    function applyLanguage(lang) {
        if (lang === 'zh') {
            langEnElements.forEach(el => el.style.display = 'none');
            langZhElements.forEach(el => el.style.display = 'block');
            // 切换按钮文字
            langToggleBtn.querySelector('.lang-en').style.display = 'none';
            langToggleBtn.querySelector('.lang-zh').style.display = 'inline';
        } else {
            langEnElements.forEach(el => el.style.display = 'block');
            langZhElements.forEach(el => el.style.display = 'none');
             // 切换按钮文字
            langToggleBtn.querySelector('.lang-en').style.display = 'inline';
            langToggleBtn.querySelector('.lang-zh').style.display = 'none';
        }
    }

    // 初始化语言
    applyLanguage(currentLang);

    // 按钮点击事件
    langToggleBtn.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'zh' : 'en';
        localStorage.setItem('wuji_lang', currentLang); // 保存偏好
        applyLanguage(currentLang);
    });
});
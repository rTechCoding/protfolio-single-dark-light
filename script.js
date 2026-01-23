const themeBtn = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeBtn.querySelector('span');

// 1. Check LocalStorage on load
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'light') {
    body.classList.add('light-mode');
    icon.innerText = '🌙'; // Switch icon to moon
}

// 2. Toggle Theme on Click
themeBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    
    // Save preference and swap icon
    if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
        icon.innerText = '🌙';
    } else {
        localStorage.setItem('theme', 'dark');
        icon.innerText = '☀️';
    }
});
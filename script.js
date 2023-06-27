// Capture the current theme from local storage and adjust the page to use the current theme.
const htmlEl = document.getElementsByTagName('html')[0];
const defaultTheme = window.matchMedia("(prefers-color-scheme:dark)").matches ? 'dark' : 'light';
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : defaultTheme;

if (currentTheme) {
    htmlEl.dataset.theme = currentTheme;
}

// When the user changes the theme, we need to save the new value on local storage
const toggleTheme = (theme) => {
    htmlEl.dataset.theme = theme;
    localStorage.setItem('theme', theme);
}
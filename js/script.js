// --- THEME TOGGLE FUNCTIONALITY ---

// Check for saved theme preference, otherwise default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);

// Update button text on page load to match current state
window.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('themeBtn');
    if (themeBtn) {
        themeBtn.textContent = currentTheme === 'dark' ? 'Light Mode' : 'Dark Mode';
    }
});

// Toggle theme function
function toggleTheme() {
    const htmlElement = document.documentElement;
    const themeBtn = document.getElementById('themeBtn');
    let currentMode = htmlElement.getAttribute('data-theme');
    let newMode = 'light';

    if (currentMode === 'light') {
        newMode = 'dark';
        if (themeBtn) themeBtn.textContent = 'Light Mode';
    } else {
        newMode = 'light';
        if (themeBtn) themeBtn.textContent = 'Dark Mode';
    }

    // Apply the theme to the page structure and save the preference
    htmlElement.setAttribute('data-theme', newMode);
    localStorage.setItem('theme', newMode);
}

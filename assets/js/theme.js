// Theme toggle functionality
(function() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeIcon = document.querySelector('.theme-icon');
  const root = document.documentElement;

  // Check for saved theme preference or default to light mode
  const currentTheme = localStorage.getItem('theme') || 'dark';
  root.setAttribute('data-theme', currentTheme);
  updateIcon(currentTheme);

  // Theme toggle handler
  themeToggleBtn.addEventListener('click', function() {
    const currentTheme = root.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    root.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateIcon(newTheme);
  });

  function updateIcon(theme) {
    themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
  }
})();

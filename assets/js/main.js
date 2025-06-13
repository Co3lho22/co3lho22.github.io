// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navigation = document.querySelector('.navigation');

  if (mobileToggle && navigation) {
    mobileToggle.addEventListener('click', function() {
      navigation.classList.toggle('active');
      mobileToggle.classList.toggle('active');
    });
  }

  // Dropdown functionality
  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(dropdown => {
    const toggle = dropdown.querySelector('.dropdown-toggle');
    const menu = dropdown.querySelector('.dropdown-menu');

    if (toggle && menu) {
      toggle.addEventListener('click', function(e) {
        e.preventDefault();
        menu.classList.toggle('active');
      });

      // Close dropdown when clicking outside
      document.addEventListener('click', function(e) {
        if (!dropdown.contains(e.target)) {
          menu.classList.remove('active');
        }
      });
    }
  });

  // Smooth scrolling for anchor links
  const anchors = document.querySelectorAll('a[href^="#"]');
  anchors.forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Copy code button functionality
  const codeBlocks = document.querySelectorAll('.highlight');
  codeBlocks.forEach(block => {
    const button = document.createElement('button');
    button.textContent = 'Copy';
    button.className = 'copy-button';
    button.addEventListener('click', () => {
      const code = block.querySelector('code');
      navigator.clipboard.writeText(code.textContent);
      button.textContent = 'Copied!';
      setTimeout(() => button.textContent = 'Copy', 2000);
    });
    block.style.position = 'relative';
    block.appendChild(button);
  });
});

// Add CSS for copy button
const style = document.createElement('style');
style.textContent = `
  .copy-button {
    position: absolute;
    top: 8px;
    right: 8px;
    background: var(--color-accent);
    color: white;
    border: none;
    padding: 4px 8px;
    border-radius: 3px;
    font-size: 0.75rem;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.2s;
  }

  .highlight:hover .copy-button {
    opacity: 1;
  }

  .copy-button:hover {
    background: #60a5fa;
  }
`;
document.head.appendChild(style);


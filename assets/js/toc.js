// Table of Contents Generator
(function() {
  'use strict';

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initToC);
  } else {
    initToC();
  }

  function initToC() {
    // Check if we're on a content page (post, writeup, or project)
    const contentContainer = document.querySelector('.post-content, .writeup-content, .project-content');
    if (!contentContainer) return;

    // Get all h2 and h3 headings
    const headings = contentContainer.querySelectorAll('h2, h3');
    if (headings.length < 2) return; // Don't show ToC if less than 2 headings

    // Create ToC structure
    const toc = buildToC(headings);
    if (!toc) return;

    // Insert ToC into page
    insertToC(toc, contentContainer);

    // Set up scroll spy
    setupScrollSpy(headings);

    // Set up smooth scrolling
    setupSmoothScroll();
  }

  function buildToC(headings) {
    const tocList = document.createElement('ul');
    tocList.className = 'toc-list';

    let currentH2Item = null;

    headings.forEach((heading, index) => {
      // Add ID to heading if it doesn't have one
      if (!heading.id) {
        heading.id = generateId(heading.textContent);
      }

      const listItem = document.createElement('li');
      const link = document.createElement('a');
      link.href = `#${heading.id}`;
      link.textContent = heading.textContent;
      link.className = 'toc-link';
      link.setAttribute('data-heading-id', heading.id);

      if (heading.tagName === 'H2') {
        // Top-level item
        listItem.className = 'toc-item toc-item-h2';
        listItem.appendChild(link);
        tocList.appendChild(listItem);
        currentH2Item = listItem;
      } else if (heading.tagName === 'H3' && currentH2Item) {
        // Sub-item under current h2
        let subList = currentH2Item.querySelector('.toc-sublist');
        if (!subList) {
          subList = document.createElement('ul');
          subList.className = 'toc-sublist';
          currentH2Item.appendChild(subList);
        }
        listItem.className = 'toc-item toc-item-h3';
        listItem.appendChild(link);
        subList.appendChild(listItem);
      }
    });

    if (tocList.children.length === 0) return null;
    return tocList;
  }

  function generateId(text) {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
  }

  function insertToC(tocList, contentContainer) {
    // Create ToC container
    const tocContainer = document.createElement('aside');
    tocContainer.className = 'toc-container';
    tocContainer.innerHTML = `
      <div class="toc-header">
        <h4 class="toc-title">Table of Contents</h4>
        <button class="toc-toggle" aria-label="Toggle table of contents">
          <span class="toc-toggle-icon">−</span>
        </button>
      </div>
      <nav class="toc-nav"></nav>
    `;

    // Add the list to nav
    tocContainer.querySelector('.toc-nav').appendChild(tocList);

    // Insert before content
    contentContainer.parentElement.insertBefore(tocContainer, contentContainer);

    // Add toggle functionality
    const toggleBtn = tocContainer.querySelector('.toc-toggle');
    const toggleIcon = tocContainer.querySelector('.toc-toggle-icon');
    const tocNav = tocContainer.querySelector('.toc-nav');

    toggleBtn.addEventListener('click', () => {
      const isExpanded = tocContainer.classList.toggle('toc-collapsed');
      toggleIcon.textContent = isExpanded ? '+' : '−';
      tocNav.style.display = isExpanded ? 'none' : 'block';
    });
  }

  function setupScrollSpy(headings) {
    const links = document.querySelectorAll('.toc-link');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          const link = document.querySelector(`.toc-link[data-heading-id="${id}"]`);

          if (entry.isIntersecting) {
            // Remove active from all links
            links.forEach(l => l.classList.remove('active'));
            // Add active to current link
            if (link) link.classList.add('active');
          }
        });
      },
      {
        rootMargin: '-80px 0px -80% 0px',
        threshold: 0
      }
    );

    headings.forEach((heading) => {
      observer.observe(heading);
    });
  }

  function setupSmoothScroll() {
    document.querySelectorAll('.toc-link').forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          const offset = 80; // Account for fixed header
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });

          // Update URL without jumping
          history.pushState(null, null, `#${targetId}`);
        }
      });
    });
  }
})();


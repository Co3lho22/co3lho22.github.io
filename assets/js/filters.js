// Tag Filtering System for Writeups and Projects
(function() {
  'use strict';

  // Initialize filters when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeFilters);
  } else {
    initializeFilters();
  }

  function initializeFilters() {
    // Check if we're on a listing page that needs filters
    const writeupsList = document.querySelector('.writeups-list');
    const projectsList = document.querySelector('.projects-list');
    const postsList = document.querySelector('.posts-list');

    if (writeupsList) {
      setupFiltering('writeup', writeupsList);
    }

    if (projectsList) {
      setupFiltering('project', projectsList);
    }

    if (postsList) {
      setupFiltering('post', postsList);
    }
  }

  function setupFiltering(type, listElement) {
    const items = Array.from(listElement.children);
    const allTags = extractAllTags(items, type);

    if (allTags.length === 0) return; // No tags to filter

    // Create filter UI
    const filterContainer = createFilterUI(allTags, type);

    // Insert filter before the list
    listElement.parentElement.insertBefore(filterContainer, listElement);

    // Setup filter logic
    const selectedTags = new Set();
    const tagButtons = filterContainer.querySelectorAll('.filter-tag');
    const clearButton = filterContainer.querySelector('.clear-filters');
    const countDisplay = filterContainer.querySelector('.filter-count');

    // Tag click handler
    tagButtons.forEach(button => {
      button.addEventListener('click', () => {
        const tag = button.dataset.tag;

        if (selectedTags.has(tag)) {
          selectedTags.delete(tag);
          button.classList.remove('active');
        } else {
          selectedTags.add(tag);
          button.classList.add('active');
        }

        filterItems(items, selectedTags, type);
        updateClearButton(clearButton, selectedTags.size);
        updateCount(countDisplay, items, selectedTags);
      });
    });

    // Clear button handler
    clearButton.addEventListener('click', () => {
      selectedTags.clear();
      tagButtons.forEach(btn => btn.classList.remove('active'));
      filterItems(items, selectedTags, type);
      updateClearButton(clearButton, 0);
      updateCount(countDisplay, items, selectedTags);
    });

    // Initial count
    updateCount(countDisplay, items, selectedTags);
  }

  function extractAllTags(items, type) {
    const tagsSet = new Set();

    items.forEach(item => {
      const metaDiv = item.querySelector(`.${type}-preview-meta`);
      if (!metaDiv) return;

      // For writeups: get category
      if (type === 'writeup') {
        const category = metaDiv.querySelector('.category');
        if (category) {
          tagsSet.add(category.textContent.trim());
        }
      }

      // For all types: get tags
      const tagsSpan = metaDiv.querySelector('.tags');
      if (tagsSpan) {
        const tags = tagsSpan.querySelectorAll('.tag');
        tags.forEach(tag => {
          tagsSet.add(tag.textContent.trim());
        });
      }
    });

    return Array.from(tagsSet).sort();
  }

  function createFilterUI(tags, type) {
    const container = document.createElement('div');
    container.className = 'filter-container';

    const header = document.createElement('div');
    header.className = 'filter-header';

    const title = document.createElement('h3');
    title.className = 'filter-title';
    title.textContent = 'Filter by tags';

    const controls = document.createElement('div');
    controls.className = 'filter-controls';

    const count = document.createElement('span');
    count.className = 'filter-count';

    const clearBtn = document.createElement('button');
    clearBtn.className = 'clear-filters';
    clearBtn.textContent = 'Clear all';
    clearBtn.style.display = 'none';

    controls.appendChild(count);
    controls.appendChild(clearBtn);

    header.appendChild(title);
    header.appendChild(controls);

    const tagsContainer = document.createElement('div');
    tagsContainer.className = 'filter-tags';

    tags.forEach(tag => {
      const button = document.createElement('button');
      button.className = 'filter-tag';
      button.dataset.tag = tag;
      button.textContent = tag;
      tagsContainer.appendChild(button);
    });

    container.appendChild(header);
    container.appendChild(tagsContainer);

    return container;
  }

  function filterItems(items, selectedTags, type) {
    if (selectedTags.size === 0) {
      // Show all items
      items.forEach(item => {
        item.style.display = '';
        item.style.animation = 'fadeInUp 0.5s ease-out';
      });
      return;
    }

    // Filter items
    items.forEach(item => {
      const itemTags = getItemTags(item, type);
      const matches = Array.from(selectedTags).every(tag => itemTags.has(tag));

      if (matches) {
        item.style.display = '';
        item.style.animation = 'fadeInUp 0.5s ease-out';
      } else {
        item.style.display = 'none';
      }
    });
  }

  function getItemTags(item, type) {
    const tags = new Set();
    const metaDiv = item.querySelector(`.${type}-preview-meta`);

    if (!metaDiv) return tags;

    // For writeups: include category
    if (type === 'writeup') {
      const category = metaDiv.querySelector('.category');
      if (category) {
        tags.add(category.textContent.trim());
      }
    }

    // Get all tags
    const tagsSpan = metaDiv.querySelector('.tags');
    if (tagsSpan) {
      const tagElements = tagsSpan.querySelectorAll('.tag');
      tagElements.forEach(tag => {
        tags.add(tag.textContent.trim());
      });
    }

    return tags;
  }

  function updateClearButton(button, count) {
    button.style.display = count > 0 ? 'inline-block' : 'none';
  }

  function updateCount(countDisplay, items, selectedTags) {
    if (selectedTags.size === 0) {
      const total = items.length;
      countDisplay.textContent = `Showing all ${total}`;
    } else {
      const visible = items.filter(item => item.style.display !== 'none').length;
      const total = items.length;
      countDisplay.textContent = `Showing ${visible} of ${total}`;
    }
  }
})();


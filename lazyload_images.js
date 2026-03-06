// Simple automatic lazy loading for all <img> elements
(function() {
  function enableLazy() {
    document.querySelectorAll('img:not([loading])').forEach(img => {
      // If the image uses data-src for lazy loading, swap it now when possible
      const dataSrc = img.getAttribute('data-src')
      if (dataSrc && !img.getAttribute('src')) {
        img.src = dataSrc
      }
      img.setAttribute('loading', 'lazy')
    })
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', enableLazy)
  } else {
    enableLazy()
  }
})();

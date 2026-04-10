/* navpanel.js - TechSites Template Master - Mobile Nav */
(function() {
  'use strict';

  var toggle = document.getElementById('navPanelToggle');
  var panel = document.getElementById('navPanel');
  var overlay = document.createElement('div');
  overlay.id = 'navPanel-overlay';
  document.body.appendChild(overlay);

  function openPanel() {
    document.body.classList.add('navPanel-visible');
  }

  function closePanel() {
    document.body.classList.remove('navPanel-visible');
  }

  if (toggle) {
    toggle.addEventListener('click', function(e) {
      e.preventDefault();
      if (document.body.classList.contains('navPanel-visible')) {
        closePanel();
      } else {
        openPanel();
      }
    });
  }

  overlay.addEventListener('click', closePanel);

  // Close on nav link click
  if (panel) {
    var links = panel.querySelectorAll('a');
    links.forEach(function(link) {
      link.addEventListener('click', closePanel);
    });
  }

  // Scroll behavior for header
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      document.body.classList.add('scrolled');
    } else {
      document.body.classList.remove('scrolled');
    }
  });

})();

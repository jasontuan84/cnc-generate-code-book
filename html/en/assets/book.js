/* Shared navigation for the book: mobile menu + active-item highlight
   + version injection (single source of truth).

   ┌──────────────────────────────────────────────────────────────┐
   │  BUMPING THE VERSION: edit the two constants right below, then │
   │  add an entry to ../CHANGELOG.md. Every page updates itself.   │
   │  Semantic versioning MAJOR.MINOR.PATCH (see CHANGELOG).        │
   └──────────────────────────────────────────────────────────────┘ */
var BOOK_VERSION = '1.0.0';
var BOOK_UPDATED = '2026-07-02';

(function () {
  // Inject version into any element marked [data-book-version] / [data-book-updated]
  document.querySelectorAll('[data-book-version]').forEach(function (e) { e.textContent = BOOK_VERSION; });
  document.querySelectorAll('[data-book-updated]').forEach(function (e) { e.textContent = BOOK_UPDATED; });

  // Inject a version block at the foot of the sidebar (every page)
  document.querySelectorAll('.sidebar').forEach(function (sb) {
    if (sb.querySelector('.sidebar-version')) return;
    var v = document.createElement('div');
    v.className = 'sidebar-version';
    v.innerHTML = 'Version <b>v' + BOOK_VERSION + '</b><span>Updated ' + BOOK_UPDATED + ' · English</span>';
    sb.appendChild(v);
  });
})();

(function () {
  // Highlight the current item in the table of contents
  var here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.sidebar nav a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === here) {
      a.classList.add('active');
      a.scrollIntoView({ block: 'center' });
    }
  });

  // Mobile menu button
  var btn = document.querySelector('.menu-btn');
  var backdrop = document.querySelector('.backdrop');
  function close() { document.body.classList.remove('nav-open'); }
  if (btn) btn.addEventListener('click', function () {
    document.body.classList.toggle('nav-open');
  });
  if (backdrop) backdrop.addEventListener('click', close);
  document.querySelectorAll('.sidebar nav a').forEach(function (a) {
    a.addEventListener('click', close);
  });
})();

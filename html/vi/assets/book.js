/* Điều hướng dùng chung cho quyển sách: menu di động + đánh dấu mục đang xem
   + chèn phiên bản (nguồn sự thật duy nhất).

   ┌──────────────────────────────────────────────────────────────┐
   │  NÂNG PHIÊN BẢN: chỉ sửa 2 hằng số ngay dưới đây, rồi thêm     │
   │  một mục vào ../CHANGELOG.md. Toàn bộ trang sẽ tự cập nhật.    │
   │  Quy ước semantic versioning MAJOR.MINOR.PATCH (xem CHANGELOG).│
   └──────────────────────────────────────────────────────────────┘ */
var BOOK_VERSION = '1.0.2';
var BOOK_UPDATED = '2026-07-02';

(function () {
  // Chèn phiên bản vào mọi phần tử đánh dấu [data-book-version] / [data-book-updated]
  document.querySelectorAll('[data-book-version]').forEach(function (e) { e.textContent = BOOK_VERSION; });
  document.querySelectorAll('[data-book-updated]').forEach(function (e) { e.textContent = BOOK_UPDATED; });

  // Chèn khối phiên bản vào chân thanh điều hướng (áp dụng cho mọi trang)
  document.querySelectorAll('.sidebar').forEach(function (sb) {
    if (sb.querySelector('.sidebar-version')) return;
    var v = document.createElement('div');
    v.className = 'sidebar-version';
    v.innerHTML = 'Phiên bản <b>v' + BOOK_VERSION + '</b><span>Cập nhật ' + BOOK_UPDATED + ' · Tiếng Việt</span>';
    sb.appendChild(v);
  });
})();

(function () {
  // Đánh dấu liên kết đang mở trong mục lục
  var here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.sidebar nav a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === here) {
      a.classList.add('active');
      a.scrollIntoView({ block: 'center' });
    }
  });

  // Nút menu di động
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

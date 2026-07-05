# Nhật ký thay đổi — Sách "Từ Vector đến Mã Máy"

Quyển sách HTML này tuân theo **Semantic Versioning** (`MAJOR.MINOR.PATCH`):

| Thành phần | Tăng khi |
|-----------|----------|
| **MAJOR** | Tái cấu trúc lớn: đổi/gộp/tách chương, thay đổi mục lục, thay đổi phá vỡ điều hướng hoặc hệ thống thiết kế. |
| **MINOR** | Bổ sung nội dung tương thích ngược: thêm chương/mục mới, thêm hình minh hoạ, thêm bản dịch ngôn ngữ mới. |
| **PATCH** | Sửa lỗi nhỏ: đính chính nội dung, chỉnh hình SVG, sửa lỗi chính tả, tinh chỉnh CSS. |

## Nguồn sự thật về phiên bản

Phiên bản được khai báo **một chỗ duy nhất cho mỗi ngôn ngữ**, trong file JS dùng chung:

- Tiếng Việt: `vi/assets/book.js` → hằng số `BOOK_VERSION` và `BOOK_UPDATED`
- Tiếng Anh (khi có): `en/assets/book.js`

Giá trị này được JS tự động chèn vào **chân thanh điều hướng của mọi trang** và **huy hiệu phiên bản trên trang bìa** (qua các thuộc tính `data-book-version` / `data-book-updated`).

## Quy trình nâng phiên bản

1. Sửa `BOOK_VERSION` (và `BOOK_UPDATED` sang ngày hiện tại) trong `vi/assets/book.js`.
2. Nếu sửa bản tiếng Anh, làm tương tự trong `en/assets/book.js`.
3. Thêm một mục mới vào đầu phần "Lịch sử phiên bản" bên dưới, mô tả thay đổi.
4. Không cần sửa từng file chương — phiên bản hiển thị tự cập nhật.

---

## Lịch sử phiên bản

### English edition v1.0.0 - 2026-07-02

Phát hành **bản tiếng Anh** đầy đủ trong `en/`, mirror bản tiếng Việt đã xác minh (nội dung ở trạng thái v1.0.2).

- 14 file: trang bìa + 13 chương, dùng slug tiếng Anh (`00-introduction.html` … `12-inputs-edge-cases.html`).
- Tái sử dụng nguyên hệ thống thiết kế: `en/assets/book.css` (giống VI) và `en/assets/book.js` (chuỗi hiển thị đổi sang tiếng Anh: "Version"/"Updated"/"English").
- Mọi hình SVG giữ nguyên hình học của bản VI, chỉ dịch nhãn `<text>`/`aria-label`/`figcaption` sang tiếng Anh.
- Văn bản lấy từ 12 tài liệu `.md` gốc (bản gốc tiếng Anh có thẩm quyền); đã gồm đính chính chamfer (~8%) và đủ 7 nguyên tắc.
- Phiên bản bản tiếng Anh khai báo tại `en/assets/book.js` (`BOOK_VERSION`), độc lập với bản tiếng Việt.

### v1.0.2 - 2026-07-02

- **Bổ sung nội dung còn thiếu (Chương 0):** khôi phục đủ **7 nguyên tắc** khi sinh mã cho khớp với README gốc. Thêm nguyên tắc #6 (ưu tiên primitive bền vững về tô-pô, dựng offset trên trường khoảng cách) và #7 (bộ chọn tự động mã hoá năng lực chiến lược, phải re-tune khi tăng cường). Đổi tiêu đề mục "Năm nguyên tắc" thành "Bảy nguyên tắc".

### v1.0.1 - 2026-07-02

Đính chính sau khi rà soát đối chiếu nguồn + kiểm chứng với kiến thức công khai (4 agent).

- **Sửa lỗi sự thật (Chương 2, §7 - trường khoảng cách):** phép biến đổi chamfer trọng số (1, √2) trước đây mô tả sai là "thấp hơn Euclid ~2-3%". Thực tế chamfer 3×3 **luôn ước lượng cao hơn** Euclid thật, sai số cực đại **~8%** (tại hướng ~22,5°). Đã sửa trong `vi/02-hinh-hoc.html` và đồng bộ lại tài liệu gốc `02-geometry-foundations.md`.
- Xác nhận toàn bộ các khẳng định phổ quát khác (luminance Rec.601, Zhang–Suen, shoelace, rotating calipers, Sutherland–Hodgman, Floyd–Steinberg, lệnh GRBL/HPGL, hằng số quy đổi đơn vị…) đều chính xác so với kiến thức công khai.
- Xác nhận 13 chương HTML trung thực với 12 tài liệu gốc (không có lệch số/công thức/logic).

### v1.0.0 - 2026-07-02

Phát hành lần đầu **bản tiếng Việt** đầy đủ.

- Dựng hệ thống thiết kế dùng chung (`vi/assets/book.css`, `vi/assets/book.js`): typography, thanh điều hướng, hộp callout, bảng, khối mã, bảng màu SVG ngữ nghĩa nhất quán, menu di động, nút prev/next.
- Trang bìa + mục lục (`index.html`) với lộ trình đọc.
- 13 chương viết lại từ 12 tài liệu gốc trong `docs/knowledge/code-generate-algorithm/`:
  - 0 · Ý tưởng cốt lõi: mô hình Chuỗi
  - 1 · Kiến trúc & Pipeline
  - 2 · Nền tảng hình học
  - 3 · Thuật toán tô & Bộ chọn tự động (chương trung tâm)
  - 4 · Đường viền & Contour
  - 5 · Chữ nét đơn (Centerline)
  - 6 · Hoa văn & Tô bóng
  - 7 · Sắp xếp đường chạy
  - 8 · Sinh mã máy
  - 9 · Khắc Raster (ảnh bitmap)
  - 10 · Độ mượt & Liên tục đường cong
  - 11 · Hiệu năng & Độ phức tạp
  - 12 · Đầu vào, Đơn vị & Trường hợp biên
- Khoảng 68 hình minh hoạ vẽ bằng SVG thuần, đã kiểm tra hợp lệ XML.
- Giữ nguyên các ngưỡng, công thức và lý do (rationale) từ tài liệu gốc; giữ tên thuật toán tiếng Anh kèm giải thích tiếng Việt.

**Trạng thái:** bản tiếng Việt chờ xác minh. Bản tiếng Anh (`en/`) sẽ được dựng sau khi bản tiếng Việt được duyệt.

<!--
### vX.Y.Z — YYYY-MM-DD  (mẫu cho lần sau)
- (thêm/sửa/xoá) ...
-->

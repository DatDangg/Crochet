# SPEC - Website Bán Len

## 1. Tổng quan

Website bán len là nền tảng thương mại điện tử chuyên bán các loại len và sản phẩm liên quan. Ứng dụng cho phép khách hàng xem sản phẩm, tìm kiếm, lọc, thêm vào giỏ hàng, thanh toán, quản lý tài khoản và theo dõi đơn hàng. Ngoài ra, hệ thống có khu vực Admin để quản lý sản phẩm, tồn kho, đơn hàng và báo cáo.

---

## 2. User chính

### 2.1 Guest
Người dùng chưa đăng nhập.

Có thể:
- Xem danh sách sản phẩm
- Xem chi tiết sản phẩm
- Tìm kiếm và lọc sản phẩm
- Thêm sản phẩm vào giỏ hàng
- Đăng ký / đăng nhập

### 2.2 Customer
Người dùng đã có tài khoản.

Có thể:
- Quản lý thông tin cá nhân
- Quản lý địa chỉ giao hàng
- Thêm sản phẩm vào giỏ hàng
- Thanh toán đơn hàng
- Theo dõi trạng thái đơn hàng
- Đánh giá sản phẩm sau khi mua
- Lưu sản phẩm yêu thích

### 2.3 Admin / Staff
Nhân viên hoặc quản trị viên hệ thống.

Có thể:
- Quản lý sản phẩm
- Quản lý danh mục, màu sắc, kích cỡ, thương hiệu
- Quản lý tồn kho
- Quản lý đơn hàng
- Quản lý người dùng
- Xem báo cáo bán hàng và tồn kho

---

## 3. Tính năng chính

## 3.1 Trang sản phẩm

### Mô tả
Hiển thị danh sách sản phẩm len để người dùng duyệt và lựa chọn.

### Chức năng
- Hiển thị danh sách sản phẩm dạng card
- Mỗi sản phẩm gồm:
  - Hình ảnh
  - Tên sản phẩm
  - Giá bán
  - Giá khuyến mãi nếu có
  - Đánh giá
  - Tình trạng còn hàng / hết hàng
- Phân trang hoặc infinite scroll
- Nút xem chi tiết sản phẩm

---

## 3.2 Chi tiết sản phẩm

### Mô tả
Hiển thị thông tin đầy đủ của một sản phẩm.

### Chức năng
- Xem hình ảnh sản phẩm / gallery
- Xem tên, mô tả, giá, tồn kho
- Xem thành phần len
- Chọn màu sắc
- Chọn kích cỡ / trọng lượng
- Chọn số lượng
- Thêm vào giỏ hàng
- Xem đánh giá và bình luận
- Xem hướng dẫn sử dụng / bảo quản

---

## 3.3 Tìm kiếm sản phẩm

### Mô tả
Cho phép người dùng tìm sản phẩm theo từ khóa.

### Chức năng
- Tìm kiếm theo tên sản phẩm
- Tìm kiếm theo mã SKU
- Tìm kiếm theo loại len
- Hiển thị kết quả tìm kiếm
- Sắp xếp kết quả theo:
  - Liên quan
  - Mới nhất
  - Bán chạy
  - Giá tăng dần
  - Giá giảm dần

---

## 3.4 Lọc sản phẩm

### Mô tả
Giúp người dùng tìm sản phẩm phù hợp nhanh hơn.

### Bộ lọc
- Loại len: cotton, wool, acrylic, silk, blended...
- Màu sắc
- Khoảng giá
- Kích cỡ / trọng lượng
- Độ dày
- Thương hiệu
- Đánh giá
- Trạng thái còn hàng

### Chức năng
- Có thể kết hợp nhiều bộ lọc
- Có nút xóa tất cả bộ lọc
- URL có thể phản ánh trạng thái filter để share link

---

## 3.5 Giỏ hàng

### Mô tả
Cho phép người dùng quản lý sản phẩm trước khi thanh toán.

### Chức năng
- Thêm sản phẩm vào giỏ hàng
- Chọn biến thể sản phẩm: màu, kích cỡ
- Cập nhật số lượng
- Xóa sản phẩm khỏi giỏ
- Xóa toàn bộ giỏ hàng
- Hiển thị tổng tiền tạm tính
- Áp dụng mã giảm giá
- Tính phí vận chuyển nếu có
- Chuyển sang trang thanh toán

---

## 3.6 Thanh toán

### Mô tả
Cho phép khách hàng hoàn tất đơn hàng.

### Chức năng
- Nhập / chọn địa chỉ giao hàng
- Nhập thông tin người nhận
- Chọn phương thức vận chuyển
- Chọn phương thức thanh toán:
  - COD
  - Chuyển khoản ngân hàng
  - Ví điện tử nếu tích hợp sau
- Xem lại đơn hàng trước khi xác nhận
- Tạo đơn hàng
- Hiển thị trạng thái đặt hàng thành công / thất bại
- Gửi email xác nhận đơn hàng nếu có

---

## 3.7 Tài khoản người dùng

### Chức năng
- Đăng ký
- Đăng nhập
- Đăng xuất
- Quên mật khẩu
- Cập nhật thông tin cá nhân
- Quản lý địa chỉ giao hàng
- Xem lịch sử đơn hàng
- Quản lý wishlist

---

## 3.8 Quản lý đơn hàng cho Customer

### Chức năng
- Xem danh sách đơn hàng
- Xem chi tiết đơn hàng
- Theo dõi trạng thái đơn hàng:
  - Chờ xử lý
  - Đã xác nhận
  - Đang giao
  - Đã giao
  - Đã hủy
- Hủy đơn hàng nếu chưa xử lý
- Đánh giá sản phẩm sau khi nhận hàng

---

## 3.9 Admin - Quản lý sản phẩm

### Chức năng
- Xem danh sách sản phẩm
- Thêm sản phẩm mới
- Cập nhật thông tin sản phẩm
- Xóa / ẩn sản phẩm
- Upload hình ảnh sản phẩm
- Quản lý giá bán, giá khuyến mãi
- Quản lý tồn kho theo biến thể
- Quản lý trạng thái sản phẩm:
  - Draft
  - Published
  - Hidden

---

## 3.10 Admin - Quản lý kho

### Chức năng
- Xem số lượng tồn kho
- Cập nhật tồn kho thủ công
- Ghi nhận nhập kho
- Ghi nhận xuất kho
- Ghi chú lý do thay đổi tồn kho
- Cảnh báo sản phẩm sắp hết hàng
- Xem lịch sử thay đổi tồn kho

---

## 3.11 Admin - Quản lý đơn hàng

### Chức năng
- Xem danh sách đơn hàng
- Lọc đơn hàng theo trạng thái
- Xem chi tiết đơn hàng
- Cập nhật trạng thái đơn hàng
- Hủy đơn hàng
- Ghi chú nội bộ cho đơn hàng

---

## 4. Stack kỹ thuật

## 4.1 Frontend

Sử dụng **Next.js**.

Đề xuất:
- Next.js App Router
- TypeScript
- Tailwind CSS
- Shadcn UI hoặc component tự build
- React Hook Form
- Zod validation
- Zustand hoặc Context API cho cart state
- Supabase Client SDK

---

## 4.2 Backend

Sử dụng **Supabase** làm backend chính.

Thành phần:
- Supabase Auth: đăng ký, đăng nhập, quản lý session
- Supabase Database: PostgreSQL
- Supabase Storage: lưu hình ảnh sản phẩm
- Supabase Row Level Security: phân quyền Guest / Customer / Admin
- Supabase Edge Functions: xử lý webhook hoặc logic phức tạp nếu cần

---

## 4.3 Database

Database dùng PostgreSQL trên Supabase.

Các bảng chính:
- users / profiles
- products
- product_images
- product_variants
- categories
- colors
- sizes
- carts
- cart_items
- orders
- order_items
- addresses
- reviews
- wishlists
- inventory_logs
- coupons

---

## 5. Database schema đề xuất

## 5.1 profiles

Lưu thông tin mở rộng của user.

Fields:
- id: uuid, primary key, ref auth.users.id
- full_name: text
- phone: text
- avatar_url: text
- role: enum: customer, admin, staff
- created_at: timestamp
- updated_at: timestamp

---

## 5.2 products

Fields:
- id: uuid, primary key
- name: text
- slug: text, unique
- description: text
- category_id: uuid
- brand: text
- material: text
- care_instruction: text
- base_price: numeric
- sale_price: numeric, nullable
- status: enum: draft, published, hidden
- created_at: timestamp
- updated_at: timestamp

---

## 5.3 product_images

Fields:
- id: uuid, primary key
- product_id: uuid
- image_url: text
- sort_order: integer
- is_main: boolean
- created_at: timestamp

---

## 5.4 product_variants

Fields:
- id: uuid, primary key
- product_id: uuid
- sku: text, unique
- color: text
- size: text
- thickness: text
- price: numeric
- stock_quantity: integer
- status: enum: active, inactive
- created_at: timestamp
- updated_at: timestamp

---

## 5.5 carts

Fields:
- id: uuid, primary key
- user_id: uuid, nullable
- session_id: text, nullable
- created_at: timestamp
- updated_at: timestamp

---

## 5.6 cart_items

Fields:
- id: uuid, primary key
- cart_id: uuid
- product_id: uuid
- variant_id: uuid
- quantity: integer
- created_at: timestamp
- updated_at: timestamp

---

## 5.7 orders

Fields:
- id: uuid, primary key
- user_id: uuid
- order_code: text, unique
- status: enum: pending, confirmed, shipping, delivered, cancelled
- payment_method: enum: cod, bank_transfer, e_wallet
- payment_status: enum: unpaid, paid, failed, refunded
- subtotal: numeric
- shipping_fee: numeric
- discount_amount: numeric
- total_amount: numeric
- receiver_name: text
- receiver_phone: text
- receiver_email: text
- shipping_address: text
- note: text
- created_at: timestamp
- updated_at: timestamp

---

## 5.8 order_items

Fields:
- id: uuid, primary key
- order_id: uuid
- product_id: uuid
- variant_id: uuid
- product_name: text
- variant_label: text
- price: numeric
- quantity: integer
- total: numeric
- created_at: timestamp

---

## 5.9 addresses

Fields:
- id: uuid, primary key
- user_id: uuid
- receiver_name: text
- phone: text
- address_line: text
- ward: text
- district: text
- city: text
- is_default: boolean
- created_at: timestamp
- updated_at: timestamp

---

## 5.10 reviews

Fields:
- id: uuid, primary key
- user_id: uuid
- product_id: uuid
- order_id: uuid
- rating: integer
- comment: text
- image_urls: text[]
- created_at: timestamp
- updated_at: timestamp

---

## 5.11 inventory_logs

Fields:
- id: uuid, primary key
- product_id: uuid
- variant_id: uuid
- quantity_change: integer
- reason: text
- created_by: uuid
- created_at: timestamp

---

## 6. Phân quyền

## 6.1 Guest
- Được xem sản phẩm published
- Được tìm kiếm và lọc sản phẩm
- Được thêm sản phẩm vào cart theo session

## 6.2 Customer
- Được xem và sửa profile của chính mình
- Được quản lý địa chỉ của chính mình
- Được tạo đơn hàng của chính mình
- Được xem đơn hàng của chính mình
- Được đánh giá sản phẩm đã mua

## 6.3 Admin / Staff
- Được quản lý sản phẩm
- Được quản lý tồn kho
- Được quản lý đơn hàng
- Được xem báo cáo

---

## 7. Trang chính cần làm

## Public / Customer
- `/` - Trang chủ
- `/products` - Danh sách sản phẩm
- `/products/[slug]` - Chi tiết sản phẩm
- `/cart` - Giỏ hàng
- `/checkout` - Thanh toán
- `/login` - Đăng nhập
- `/register` - Đăng ký
- `/account` - Tài khoản
- `/account/orders` - Đơn hàng của tôi
- `/account/orders/[id]` - Chi tiết đơn hàng
- `/wishlist` - Sản phẩm yêu thích

## Admin
- `/admin` - Dashboard
- `/admin/products` - Quản lý sản phẩm
- `/admin/products/new` - Thêm sản phẩm
- `/admin/products/[id]` - Sửa sản phẩm
- `/admin/orders` - Quản lý đơn hàng
- `/admin/inventory` - Quản lý tồn kho
- `/admin/categories` - Quản lý danh mục
- `/admin/reports` - Báo cáo

---

## 8. MVP đề xuất

## Phase 1 - MVP

Ưu tiên làm trước:
- Trang chủ
- Danh sách sản phẩm
- Chi tiết sản phẩm
- Tìm kiếm / lọc cơ bản
- Giỏ hàng
- Checkout COD
- Auth bằng Supabase
- Profile cơ bản
- Admin quản lý sản phẩm
- Admin quản lý đơn hàng
- Admin quản lý tồn kho cơ bản

## Phase 2

- Wishlist
- Mã giảm giá
- Đánh giá sản phẩm
- Email xác nhận đơn hàng
- Báo cáo bán hàng cơ bản
- Upload nhiều ảnh sản phẩm

## Phase 3

- Tích hợp ví điện tử / payment gateway
- Analytics nâng cao
- Gợi ý sản phẩm
- Tối ưu hiệu năng
- Mobile app nếu cần

---

## 9. Yêu cầu UI/UX

- Giao diện thân thiện, dễ dùng
- Responsive trên desktop, tablet, mobile
- Header có logo, menu, search, cart, tài khoản
- Product card rõ ràng, ưu tiên hình ảnh sản phẩm
- Checkout đơn giản, ít bước
- Có toast khi thêm giỏ hàng, cập nhật, lỗi
- Admin dashboard rõ ràng, thao tác nhanh

---

## 10. Yêu cầu phi chức năng

- Trang tải nhanh, mục tiêu dưới 3 giây
- Bảo mật bằng Supabase Auth và RLS
- Validate dữ liệu ở cả client và server/database
- Ảnh sản phẩm được lưu trong Supabase Storage
- Dữ liệu quan trọng có log, đặc biệt là tồn kho và đơn hàng
- Code nên dùng TypeScript để dễ maintain

---

## 11. Ghi chú triển khai

- Nên thiết kế database trước khi code UI phức tạp
- Nên bật RLS ngay từ đầu trên Supabase
- Cart có thể hỗ trợ cả guest và logged-in user
- Khi tạo order, cần trừ tồn kho hoặc giữ tồn kho theo logic đã chọn
- Admin route cần check role trước khi truy cập
- Slug sản phẩm cần unique để dùng cho URL chi tiết


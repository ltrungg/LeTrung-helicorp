# 🟢 VitaRing AI — Smart Health Ring Landing Page

[![Deploy Status](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel)](https://le-trung-helicorp.vercel.app/)
[![PageSpeed Desktop](https://img.shields.io/badge/PageSpeed%20Desktop-99%2F100-success?style=for-the-badge)](https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fle-trung-helicorp.vercel.app%2F)
[![PageSpeed Mobile](https://img.shields.io/badge/PageSpeed%20Mobile-89%2F100-success?style=for-the-badge)](https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fle-trung-helicorp.vercel.app%2F)

> 🔗 **Live Demo:** [https://le-trung-helicorp.vercel.app/](https://le-trung-helicorp.vercel.app/)

Dự án Landing Page giới thiệu sản phẩm công nghệ sức khỏe **VitaRing AI**.  
Đây là bài test thực hành vòng 2 cho vị trí **Thực tập sinh IT phát triển website** tại HeLiCorp.

**Thực hiện bởi:** Lê Trung  
**Thời gian hoàn thành:** 03/07/2026

---

## 🎯 Tổng quan dự án

VitaRing AI Landing Page được xây dựng với mục tiêu mang lại trải nghiệm người dùng cao cấp (Premium UX/UI), tốc độ tải trang siêu tốc và cấu trúc mã nguồn dễ dàng mở rộng. Thay vì sử dụng các UI Framework cồng kềnh, dự án tự xây dựng hệ thống Design Tokens và Custom CSS để đạt được hiệu năng tối đa (PageSpeed Desktop 99/100).

## 🚀 Tính năng nổi bật

### Yêu cầu cốt lõi (Core Features)
- **Hero Section:** Banner ấn tượng kèm Call-to-Action (CTA) rõ ràng.
- **Tính năng nổi bật (Features):** Grid layout trình bày các tính năng của nhẫn thông minh.
- **Thông số kỹ thuật (Specs):** Bảng thông số chi tiết, rõ ràng.
- **Form Liên hệ & Đăng ký:** Validate dữ liệu chặt chẽ, tích hợp Webhook.
- **Responsive Design:** Hiển thị hoàn hảo trên mọi thiết bị (Mobile, Tablet, Desktop).
- **Chuẩn SEO:** Tối ưu hóa thẻ Meta (Title, Description, Open Graph, Theme Color).

### Điểm cộng (Bonus & Advanced Features)
- 🌗 **Dark/Light Mode:** Chuyển đổi giao diện sáng/tối mượt mà, tự động nhận diện hệ thống và lưu cấu hình qua `localStorage`.
- 💬 **Smart Chatbot Widget:** Chatbot thu nhỏ ở góc màn hình với các quy tắc hỏi đáp nhanh (Rule-based).
- 🎬 **Micro-Interactions & Animations:** Hiệu ứng scroll reveal (IntersectionObserver), hover lift, glassmorphism, custom dropdown.
- 📊 **Analytics Tracking:** Theo dõi hành vi người dùng (Click CTA, cuộn trang, gửi form) qua Custom Hook.
- ⚡ **Web Performance:** Tối ưu hóa render-blocking (Google Fonts preconnect), CSS Variables, đạt 99 điểm PageSpeed Desktop.

---

## 🏗️ Kiến trúc mã nguồn (Feature-Based Architecture)

Dự án áp dụng kiến trúc **Feature-Based** giúp dễ dàng bảo trì và mở rộng trong tương lai. Mỗi component đều được đóng gói độc lập với CSS và Logic riêng biệt.

```text
src/
├── components/            # UI Components độc lập
│   ├── Header/            # Thanh điều hướng & Theme Toggle
│   ├── Hero/              # Section giới thiệu chính
│   ├── ProductVisual/     # Minh họa sản phẩm SVG & Animations
│   ├── Features/          # Danh sách tính năng
│   ├── Story/             # Hành trình trải nghiệm (Scrollytelling)
│   ├── Specs/             # Bảng thông số kỹ thuật
│   ├── ContactForm/       # Form thu thập dữ liệu & Webhook
│   ├── Footer/            # Chân trang
│   └── Chatbot/           # Widget Chatbot nổi
├── constants/             # Biến tĩnh & nội dung cấu hình (Text, Links)
├── hooks/                 # Custom React Hooks (useTheme, useScrollReveal, useTracking)
├── styles/                # Global CSS, Design Tokens (Variables) & Keyframes
├── types/                 # TypeScript Interfaces & Types
├── utils/                 # Business logic (Validation, Webhook integration)
├── App.tsx                # Component gốc (Root Layout)
└── main.tsx               # Entry point
```

---

## 🛠️ Công nghệ sử dụng

| Công nghệ | Vai trò |
| :--- | :--- |
| **React 19** | Xây dựng giao diện người dùng (CSR) |
| **TypeScript** | Định dạng kiểu dữ liệu chặt chẽ (Type Safety) |
| **Vite** | Build tool siêu tốc & Dev Server |
| **Vanilla CSS** | Styling với CSS Variables, không phụ thuộc thư viện |
| **IntersectionObserver** | Xử lý hiệu ứng xuất hiện khi cuộn trang (Scroll Reveal) |

---

## ⚙️ Hướng dẫn cài đặt & Chạy cục bộ

Yêu cầu môi trường: **Node.js 18+**

**1. Clone dự án và cài đặt thư viện:**
```bash
git clone https://github.com/ltrungg/LeTrung-helicorp.git
cd LeTrung-helicorp
npm install
```

**2. Chạy môi trường phát triển (Development):**
```bash
npm run dev
```
> Truy cập tại: `http://localhost:5173`

**3. Build cho Production:**
```bash
npm run build
npm run preview
```

---
*Bản quyền dự án thuộc về Lê Trung - Phát triển dành riêng cho bài test HeLiCorp 2026.*

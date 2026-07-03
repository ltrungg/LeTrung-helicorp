# VitaRing AI — Smart Health Ring Landing Page

> Landing page giới thiệu sản phẩm công nghệ sức khỏe **VitaRing AI**.  
> Dự án bài test vòng 2 — **Thực tập sinh IT phát triển website** tại HeLiCorp.  
> Thực hiện bởi: **Lê Trung**

---

## 🏗️ Kiến trúc dự án (Feature-Based Architecture)

```
src/
├── components/            # UI Components (Feature-Based)
│   ├── Header/            # Header + Navigation + Theme Toggle
│   │   ├── Header.tsx
│   │   ├── Header.css
│   │   └── index.ts
│   ├── Hero/              # Hero Section + CTA
│   ├── ProductVisual/     # SVG Ring Illustration
│   ├── Features/          # Feature Cards Grid
│   ├── Story/             # Scrollytelling Journey
│   ├── Specs/             # Technical Specifications
│   ├── ContactForm/       # Contact Form + Validation
│   ├── Footer/            # Footer + Links
│   └── Chatbot/           # Floating Chatbot Widget
├── constants/             # Static data & configuration
│   └── index.ts
├── hooks/                 # Custom React Hooks
│   ├── useTheme.ts        # Dark/Light mode management
│   ├── useScrollReveal.ts # IntersectionObserver animations
│   ├── useTracking.ts     # Analytics & scroll tracking
│   └── index.ts           # Barrel export
├── styles/                # Global CSS & Design Tokens
│   ├── variables.css      # CSS Custom Properties
│   ├── global.css         # Reset & utilities
│   └── animations.css     # Reusable keyframes
├── types/                 # Shared TypeScript interfaces
│   └── index.ts
├── utils/                 # Business logic utilities
│   ├── validation.ts      # Form validation
│   └── webhook.ts         # Webhook submission
├── App.tsx                # Root component
└── main.tsx               # Entry point
```

## 🛠️ Tech Stack

| Công nghệ | Mô tả |
|---|---|
| React 19 | UI Library |
| TypeScript | Type safety |
| Vite | Build tool & Dev server |
| Vanilla CSS | Styling (Design Tokens + CSS Variables) |
| IntersectionObserver | Scroll animations |

## ✅ Yêu cầu đã đáp ứng

- [x] Hero Section với CTA rõ ràng
- [x] Tính năng nổi bật (Feature Grid)
- [x] Thông số kỹ thuật (Specs Table)
- [x] Form đăng ký nhận tin (Validation + Webhook)
- [x] Responsive Desktop / Tablet / Mobile
- [x] SEO: Title, Description, Robots, Open Graph, Theme Color

## 🎁 Bonus Features (Điểm cộng)

- [x] Dark Mode (Toggle + localStorage + System Preference)
- [x] Scroll Animations (IntersectionObserver reveal)
- [x] Mini Chatbot Rule-Based (Quick Questions)
- [x] Tracking hành vi: CTA click, Nav click, Scroll depth, Form submit
- [x] Webhook integration qua biến môi trường
- [x] Scrollytelling Story section
- [x] Micro-interactions (hover effects, nav underline, card lift)

## 🚀 Chạy local

```bash
npm install
npm run dev
```

Mở: `http://localhost:5173`

## 📦 Build production

```bash
npm run build
npm run preview
```

## 🔗 Cấu hình Webhook

```bash
cp .env.example .env
```

Tạo endpoint tại [webhook.site](https://webhook.site), dán URL:

```env
VITE_WEBHOOK_URL=https://webhook.site/your-unique-url
```

Nếu không cấu hình, form hoạt động ở chế độ demo (localStorage).

## 🌐 Deploy lên Vercel

1. Push code lên GitHub (Public)
2. Vercel → Add New Project → Import repo
3. Framework: **Vite** | Build: `npm run build` | Output: `dist`
4. (Optional) Thêm Environment Variable `VITE_WEBHOOK_URL`
5. Deploy!

---

**Made with 💚 by Lê Trung — HeLiCorp Internship Test 2025**

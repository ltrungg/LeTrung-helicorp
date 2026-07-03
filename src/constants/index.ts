/* =========================================================================
 * VitaRing AI — Constants & Product Data
 * All static content is centralized here for easy maintenance.
 * ========================================================================= */

import type {
  Feature,
  FooterLinkGroup,
  HeroStat,
  NavLink,
  QuickQuestion,
  Spec,
  StoryStep,
} from '../types';

// ---------------------------------------------------------------------------
// Site configuration
// ---------------------------------------------------------------------------

export const SITE_CONFIG = {
  name: 'VitaRing AI',
  tagline: 'Smart Health Ring',
  description:
    'Nhẫn thông minh theo dõi sức khỏe toàn diện với AI cá nhân hóa.',
  url: 'https://vitaring.ai',
} as const;

// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------

export const NAV_LINKS: NavLink[] = [
  { label: 'Tính năng', href: '#features', id: 'nav-features' },
  { label: 'Trải nghiệm', href: '#story', id: 'nav-story' },
  { label: 'Thông số', href: '#specs', id: 'nav-specs' },
  { label: 'Đăng ký', href: '#contact', id: 'nav-contact' },
];

// ---------------------------------------------------------------------------
// Hero section
// ---------------------------------------------------------------------------

export const HERO_STATS: HeroStat[] = [
  { value: '7 ngày', label: 'Thời lượng pin' },
  { value: '5ATM', label: 'Chống nước' },
  { value: '24/7', label: 'Health tracking' },
];

// ---------------------------------------------------------------------------
// Features
// ---------------------------------------------------------------------------

export const FEATURES: Feature[] = [
  {
    icon: '🌙',
    title: 'Theo dõi giấc ngủ AI',
    description:
      'Phân tích nhịp ngủ sâu, REM, thời gian phục hồi và gợi ý thói quen ngủ tốt hơn.',
  },
  {
    icon: '❤️',
    title: 'Nhịp tim thời gian thực',
    description:
      'Cảm biến quang học ghi nhận nhịp tim liên tục và cảnh báo bất thường trong ngày.',
  },
  {
    icon: '🧘',
    title: 'Stress & phục hồi',
    description:
      'Kết hợp HRV, giấc ngủ và vận động để tạo điểm số cân bằng cơ thể hằng ngày.',
  },
  {
    icon: '✨',
    title: 'AI Health Insight',
    description:
      'Tóm tắt dữ liệu sức khỏe thành lời khuyên dễ hiểu, cá nhân hóa theo từng người dùng.',
  },
  {
    icon: '🔋',
    title: 'Pin 7 ngày',
    description:
      'Tối ưu năng lượng cho trải nghiệm theo dõi liên tục, ít bị gián đoạn.',
  },
  {
    icon: '💧',
    title: 'Chống nước 5ATM',
    description:
      'Thoải mái rửa tay, tập luyện và sinh hoạt hằng ngày mà không lo hư hỏng.',
  },
];

// ---------------------------------------------------------------------------
// Story / Journey
// ---------------------------------------------------------------------------

export const STORY_STEPS: StoryStep[] = [
  {
    order: 1,
    timeOfDay: 'Buổi sáng',
    title: 'Bắt đầu ngày mới bằng điểm phục hồi',
    description:
      'Ứng dụng tóm tắt chất lượng giấc ngủ, nhịp tim nghỉ và HRV thành một điểm số dễ hiểu.',
  },
  {
    order: 2,
    timeOfDay: 'Trong ngày',
    title: 'Theo dõi stress và vận động tự nhiên',
    description:
      'VitaRing AI ghi nhận biến động cơ thể mà không cần thao tác phức tạp như đồng hồ thông minh.',
  },
  {
    order: 3,
    timeOfDay: 'Buổi tối',
    title: 'Gợi ý thói quen ngủ tốt hơn',
    description:
      'AI insight đề xuất giờ nghỉ, nhịp thư giãn và cách cải thiện giấc ngủ dựa trên dữ liệu cá nhân.',
  },
];

// ---------------------------------------------------------------------------
// Specs
// ---------------------------------------------------------------------------

export const SPECS: Spec[] = [
  { label: 'Cảm biến', value: 'PPG, SpO₂, nhiệt độ da, gia tốc kế 3 trục' },
  { label: 'Kết nối', value: 'Bluetooth 5.3 Low Energy' },
  { label: 'Pin', value: 'Tối đa 7 ngày, sạc đầy trong 80 phút' },
  { label: 'Chống nước', value: '5ATM cho sinh hoạt và tập luyện' },
  { label: 'Ứng dụng', value: 'iOS 14+, Android 10+' },
  { label: 'Trọng lượng', value: '4.2g, vỏ titan siêu nhẹ' },
];

// ---------------------------------------------------------------------------
// Chatbot
// ---------------------------------------------------------------------------

export const QUICK_QUESTIONS: QuickQuestion[] = [
  { key: 'pin', label: 'Pin dùng bao lâu?' },
  { key: 'water', label: 'Có chống nước không?' },
  { key: 'price', label: 'Giá dự kiến?' },
  { key: 'app', label: 'Kết nối app thế nào?' },
  { key: 'ai', label: 'AI insight là gì?' },
];

export const CHATBOT_ANSWERS: Record<string, string> = {
  pin: 'VitaRing AI có thời lượng pin tối đa 7 ngày và sạc đầy trong khoảng 80 phút.',
  water:
    'Sản phẩm hỗ trợ chống nước 5ATM, phù hợp cho sinh hoạt hằng ngày và tập luyện.',
  price:
    'Landing page demo chưa công bố giá. Bạn có thể để lại thông tin trong form để nhận báo giá sớm.',
  app: 'VitaRing AI đồng bộ dữ liệu qua Bluetooth 5.3 với ứng dụng iOS và Android.',
  ai: 'AI Health Insight tổng hợp dữ liệu giấc ngủ, nhịp tim, HRV và vận động để đưa ra khuyến nghị cá nhân hóa.',
};

// ---------------------------------------------------------------------------
// Contact form
// ---------------------------------------------------------------------------

export const INTEREST_OPTIONS = [
  'Theo dõi giấc ngủ',
  'Theo dõi stress',
  'Nhịp tim và vận động',
  'Tư vấn mua sản phẩm',
] as const;

// ---------------------------------------------------------------------------
// Footer
// ---------------------------------------------------------------------------

export const FOOTER_LINKS: FooterLinkGroup[] = [
  {
    title: 'Sản phẩm',
    links: [
      { label: 'Tính năng', href: '#features' },
      { label: 'Thông số', href: '#specs' },
      { label: 'Đăng ký tư vấn', href: '#contact' },
    ],
  },
  {
    title: 'Về dự án',
    links: [
      { label: 'GitHub', href: 'https://github.com/ltrungg/LeTrung-helicorp' },
      { label: 'HeLiCorp', href: '#' },
    ],
  },
];

// ---------------------------------------------------------------------------
// Storage keys
// ---------------------------------------------------------------------------

export const TRACKING_STORAGE_KEY = 'vitaring_tracking_events';
export const SUBMISSIONS_STORAGE_KEY = 'vitaring_submissions';

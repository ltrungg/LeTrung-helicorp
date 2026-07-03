import { ProductVisual } from '../ProductVisual';
import { pushTrackingEvent } from '../../hooks';
import { HERO_STATS } from '../../constants';
import './Hero.css';

/** Hero section — main landing fold with copy, CTA buttons, and product visual. */
export function Hero() {
  return (
    <section className="hero container" id="top">
      <div className="hero__copy reveal">
        <span className="hero__eyebrow">Smart wearable • AI health insight</span>
        <h1>
          Nhẫn thông minh giúp bạn hiểu cơ thể mỗi ngày.
        </h1>
        <p className="hero__description">
          VitaRing AI theo dõi giấc ngủ, nhịp tim, stress và khả năng phục hồi
          để đưa ra gợi ý chăm sóc sức khỏe cá nhân hóa, dễ hiểu.
        </p>

        <div className="hero__actions">
          <a
            className="btn btn--primary"
            href="#contact"
            id="cta-hero-register"
            onClick={() => pushTrackingEvent('cta_click', 'hero_register')}
          >
            Đăng ký nhận tư vấn
          </a>
          <a
            className="btn btn--secondary"
            href="#features"
            id="cta-hero-features"
            onClick={() => pushTrackingEvent('cta_click', 'hero_features')}
          >
            Xem tính năng
          </a>
        </div>

        <div className="hero__stats" aria-label="Thống kê nổi bật">
          {HERO_STATS.map((stat) => (
            <div className="hero__stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <ProductVisual />
    </section>
  );
}

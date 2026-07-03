import { FEATURES } from '../../constants';
import './Features.css';

/** Features section — grid of feature cards with icons. */
export function Features() {
  return (
    <section className="features section-padding" id="features">
      <div className="container">
        <div className="features__heading reveal">
          <span className="features__eyebrow">Tính năng nổi bật</span>
          <h2>Một thiết bị nhỏ, nhiều dữ liệu sức khỏe quan trọng.</h2>
          <p>
            VitaRing AI tích hợp cảm biến tiên tiến và trí tuệ nhân tạo để mang
            đến trải nghiệm theo dõi sức khỏe toàn diện, chính xác và dễ hiểu.
          </p>
        </div>

        <div className="features__grid">
          {FEATURES.map((feature) => (
            <article className="features__card reveal" key={feature.title}>
              <span className="features__icon" aria-hidden="true">
                {feature.icon}
              </span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

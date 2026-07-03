import { SPECS } from '../../constants';
import './Specs.css';

/** Technical specifications section — definition list in a card layout. */
export function Specs() {
  return (
    <section className="specs section-padding" id="specs">
      <div className="container">
        <div className="specs__heading reveal">
          <span className="specs__eyebrow">Thông số kỹ thuật</span>
          <h2>
            Thiết kế tối giản nhưng đủ mạnh cho theo dõi sức khỏe hằng ngày.
          </h2>
        </div>

        <dl className="specs__card reveal">
          {SPECS.map((spec) => (
            <div className="specs__row" key={spec.label}>
              <dt>{spec.label}</dt>
              <dd>{spec.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

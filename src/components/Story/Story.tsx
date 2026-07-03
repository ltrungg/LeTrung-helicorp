import { STORY_STEPS } from '../../constants';
import './Story.css';

/** Story section — scrollytelling journey through a day with VitaRing. */
export function Story() {
  return (
    <section className="story section-padding" id="story">
      <div className="container story__layout">
        <div className="story__sticky reveal">
          <span className="story__eyebrow">Trải nghiệm</span>
          <h2>Theo dõi sức khỏe theo nhịp sống thật.</h2>
          <p>
            VitaRing AI đồng hành cùng bạn suốt cả ngày — từ lúc thức dậy đến
            khi đi ngủ, mang đến góc nhìn toàn diện về sức khỏe.
          </p>
        </div>

        <div className="story__steps">
          {STORY_STEPS.map((step) => (
            <article className="story__card reveal" key={step.title}>
              <span className="story__label">
                0{step.order} • {step.timeOfDay}
              </span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

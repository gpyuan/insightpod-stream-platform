import "./Benefit.scss";
import benefitImg from "@/assets/images/benefit.png";
import checkIcon from "@/assets/images/checkIcon.png";

const Benefit = () => {
  const features = [
    "Content Relevance",
    "Depth of Insight",
    "Combination of Information and Entertainment",
    "Reliable Source of Knowledge",
  ];

  return (
    <section className="benefit">
      {/* 左側圖片 */}
      <img
        src={benefitImg}
        alt=""
        role="presentation"
        className="benefit__img"
      />

      {/* 右側內容 */}
      <div className="benefit__content">
        <div className="benefit__content__title-group">
          <h2 className="benefit__content__title h2">
            What makes us different from other
          </h2>
          <p className="benefit__content__description body4">
            Our commitment is to keep you comfortable by delivering quality
            podcast content, trusted sources, and useful material.
          </p>
        </div>

        <ul className="benefit__content__features">
          {features.map((feature) => (
            <li key={feature} className="benefit__content__feature-item">
              <img
                src={checkIcon}
                alt="checkIcon"
                className="benefit__content__feature-icon"
              />
              <span className="benefit__content__feature-text">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Benefit;

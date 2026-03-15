import "./CTA.scss";
import CTAImg from "@/assets/images/ctaImg.png";
import Button from "@/components/common/button/Button";
import PlayButton from "@/components/common/button/PlayButton";

const CTA = () => {
  return (
    <section className="cta">
      {/* 左側圖片 */}
      <div className="cta__container">
        <img src={CTAImg} alt="" role="presentation" className="cta__img" />

        {/* 右側內容 */}
        <div className="cta__content">
          <h2 className="cta__title h2">
            Listen to the latest and exciting podcast content
          </h2>
          <p className="cta__desc">
            Don't miss the valuable updates in each session and listen existing
            podcast{" "}
          </p>
          <Button variant="primary" className="cta__listen-btn body3">
            <span className="cta__listen-btn__content">Listen Now</span>
            <PlayButton variant="primary" asIcon></PlayButton>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;

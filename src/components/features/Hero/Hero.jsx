import "./Hero.scss";
import Button from "@/components/common/Button/Button";
import PlayButton from "@/components/common/Button/PlayButton";
import heroImg from "@/assets/images/hero.png";

const Hero = () => {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero__container">
        {/* 左側內容 */}
        <div className="hero__content">
          <h1 id="hero-heading" className="hero__title h1">
            Navigating Ideas, Sharing Insights.
          </h1>
          <p className="hero__desc body2">
            Unlock invaluable wisdom personalized for you in our top-notch
            podcast. Dive into episodes designed to deliver relevant insights
            that cater to your interests and needs.
          </p>

          <Button variant="primary" className="hero__listen-btn body3">
            <span className="hero__listen-btn__content">Listen Now</span>
            <PlayButton variant="primary" asIcon />
          </Button>
        </div>
        {/* 右側圖片 */}
        <img
          src={heroImg}
          alt="Podcast community illustration"
          className="hero__img"
        />
      </div>
    </section>
  );
};

export default Hero;

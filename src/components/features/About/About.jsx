import "./About.scss";
import aboutImg from "@/assets/images/about.png";

const About = () => {
  return (
    <section className="about">
      <div className="about__header">
        <h2 className="about__header__title">
          Our podcast dives into diverse topics like life, finances,
          <span className="about__header__text">
            {" "}
            and personal experiences, offering valuable insights and practical
            advice.
          </span>
        </h2>
        <img src={aboutImg} alt="" role="presentation" />
      </div>

      <div className="about__content">
        <div className="about__content__achivements">
          <div className="about__content__achivement">
            <p className="about__content__number h1">5+</p>
            <p className="about__content__name body2">Awards Gained</p>
          </div>
          <div className="about__content__achivement">
            <p className="about__content__number h1">12+</p>
            <p className="about__content__name body2">Years of Experience</p>
          </div>
          <div className="about__content__achivement">
            <p className="about__content__number h1">236+</p>
            <p className="about__content__name body2">Podcasters</p>
          </div>
        </div>
        <div className="about__content__description">
          <p className="about__content__description__text body4">
            Unlock invaluable wisdom personalized for you in our top-notch
            podcast. Dive into episodes designed to deliver relevant insights
            that cater to your interests and needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

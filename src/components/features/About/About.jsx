import "./About.scss";
import aboutImg from "@/assets/images/about.png";

const About = () => {
  const stats = [
    { number: "5+", label: "Awards Gained" },
    { number: "12+", label: "Years of Experience" },
    { number: "236", label: "Podcasters" },
  ];
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
        <img
          src={aboutImg}
          alt=""
          role="presentation"
          className="about__header__img"
        />
      </div>

      <div className="about__content">
        <div className="about__content__achivements">
          {stats.map((item, index) => (
            <div key={index} className="about__content__item">
              <span className="about__content__number h1">{item.number}</span>
              <p className="about__content__lable body2">{item.label}</p>
            </div>
          ))}
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

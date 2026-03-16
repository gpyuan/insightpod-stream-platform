import "./WeeklyPodcastCard.scss";
import PlayButton from "@/components/common/Button/PlayButton";

const WeeklyPodcastCard = ({ data, variant = "list", className = "" }) => {
  const { id, image, title, author, duration } = data;
  const headingId = `podcast-${id}`;

  return (
    <article
      aria-labelledby={headingId}
      className={`weekly-podcast-card weekly-podcast-card--${variant} ${className}`}
    >
      {/* 左側圖片 */}
      <div className="weekly-podcast-card__img">
        <img src={image} alt="" />
      </div>
      {/* 右側資訊 */}
      <div className="weekly-podcast-card__content">
        <h3 id={headingId} className="weekly-podcast-card__content__title h5">
          {title}
        </h3>
        <p className="weekly-podcast-card__content__author body4">{author}</p>
        <p className="weekly-podcast-card__content__duration body1">
          {duration}
        </p>
      </div>
      {/* 播放鍵 */}
      <div className="weekly-podcast-card__btn">
        <PlayButton variant="secondary" ariaLabel={`Play ${title}`} />
      </div>
    </article>
  );
};

export default WeeklyPodcastCard;

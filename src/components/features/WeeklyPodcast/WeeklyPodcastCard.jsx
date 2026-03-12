import "./WeeklyPodcastCard.scss";
import PlayButton from "@/components/common/button/PlayButton";

const WeeklyPodcastCard = ({ data, variant = "list", className }) => {
  const { id, image, title, author, duration } = data;

  return (
    <div
      className={`weekly-podcast-card  weekly-podcast-card--${variant}  ${
        className || ""
      }`}
    >
      {/* 左側圖片 */}
      <div className="weekly-podcast-card__img">
        <img src={image} alt="weekly-podcast-card-image" />
      </div>
      {/* 右側資訊 */}
      <div className="weekly-podcast-card__content">
        <h5 className="weekly-podcast-card__content__title h5">{title}</h5>
        <p className="weekly-podcast-card__content__author body4">{author}</p>
        <p className="weekly-podcast-card__content__duration body1">
          {duration}
        </p>
      </div>
      {/* 播放鍵 */}
      <div className="weekly-podcast-card__btn">
        <PlayButton variant="secondary"></PlayButton>
      </div>
    </div>
  );
};

export default WeeklyPodcastCard;

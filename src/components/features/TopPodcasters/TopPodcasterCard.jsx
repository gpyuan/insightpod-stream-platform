import "./TopPodcasterCard.scss";

const TopPodcasterCard = ({ data, size }) => {
  const { id, image, author, streams } = data;

  const formatStreams = (streams) => {
    if (!streams) return null;
    if (streams >= 1000000)
      return parseFloat((streams / 1000000).toFixed(1)) + " million";
    if (streams >= 1000)
      return parseFloat((streams / 1000).toFixed(1)) + " Kilo";
    return streams.toString();
  };

  return (
    <div className={`top-podcaster-card top-podcaster-card--${size}`}>
      <div
        className={`top-podcaster-card__info top-podcaster-card__info--${size}`}
      >
        <h2
          className={`top-podcaster-card__author top-podcaster-card__author--${size}`}
        >
          {author}
        </h2>
        {size === "large" && streams && (
          <p className="top-podcaster-card__streams">
            {formatStreams(streams)} streams
          </p>
        )}
      </div>
      <img
        src={image}
        alt="top-podcaster"
        className={`top-podcaster-card__img top-podcaster-card__img--${size}`}
      />
    </div>
  );
};

export default TopPodcasterCard;

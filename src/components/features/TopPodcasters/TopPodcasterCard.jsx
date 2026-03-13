import "./TopPodcasterCard.scss";

const TopPodcasterCard = ({ size = "large" }) => {
  const data = {
    id: "top-1",
    image: `${import.meta.env.BASE_URL}images/topPodcast/top-podcaster-1.png`,
    author: "Mr. Mark baba",
    streams: 1600000,
  };

  const formatStreams = (streams) => {
    if (!streams) return null;
    if (streams >= 1000000)
      return parseFloat((streams / 1000000).toFixed(1)) + "million";
    if (streams >= 1000)
      return parseFloat((streams / 1000).toFixed(1)) + "Kilo";
    return streams.toString();
  };

  return (
    <div className={`top-podcaster-card top-podcaster-card--${size}`}>
      <div className="top-podcaster-card__info">
        <h2
          className={`top-podcaster-card__author top-podcaster-card__author--${size} h4`}
        >
          {data.author}
        </h2>
        {size === "large" && data.streams && (
          <p className="top-podcaster-card__streams">
            {formatStreams(data.streams)} streams
          </p>
        )}
      </div>
      <img src={data.image} alt="top-podcaster-author" />
    </div>
  );
};

export default TopPodcasterCard;

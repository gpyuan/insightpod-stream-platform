import "./TopPodcasters.scss";
import { TopPodcastersData } from "@/data";
import TopPodcasterCard from "./TopPodcasterCard";

const TopPodcasters = () => {
  return (
    <section
      className="top-podcasters"
      aria-labelledby="top-podcasters-heading"
    >
      <h2 id="top-podcasters-heading" className="top-podcasters__title h2">
        Top Podcasters of the Week
      </h2>
      <ul className="top-podcasters__list">
        {TopPodcastersData?.length > 0 ? (
          TopPodcastersData.map((podcaster, index) => (
            <li key={podcaster.id}>
              <TopPodcasterCard
                data={podcaster}
                size={index === 0 ? "large" : "normal"}
              />
            </li>
          ))
        ) : (
          <p className="empty">No podcasters available at the moment</p>
        )}
      </ul>
    </section>
  );
};

export default TopPodcasters;

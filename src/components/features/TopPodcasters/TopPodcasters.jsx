import "./TopPodcasters.scss";
import { TopPodcastersData } from "@/data";
import TopPodcasterCard from "./TopPodcasterCard";

const TopPodcasters = () => {
  return (
    <section className="top-podcasters">
      <h2 className="top-podcasters__title h2">Top Podcasters of the Week</h2>
      <div className="top-podcasters__list">
        {TopPodcastersData?.length > 0 ? (
          TopPodcastersData.map((podcaster, index) => (
            <TopPodcasterCard
              key={podcaster.id}
              data={podcaster}
              size={index === 0 ? "large" : "normal"}
            />
          ))
        ) : (
          <p>目前沒有任何Podcaster</p>
        )}
      </div>
    </section>
  );
};

export default TopPodcasters;

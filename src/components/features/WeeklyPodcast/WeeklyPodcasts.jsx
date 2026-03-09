import "./WeeklyPodcasts.scss";
import Button from "@/components/common/button/Button";
import { weeklyPodcasts } from "@/data";
import WeeklyPodcastCard from "./WeeklyPodcastCard";

const WeeklyPodcasts = () => {
  return (
    <section className="weekly-podcasts">
      {/* header */}
      <div className="weekly-podcasts__title-group">
        <h2 className="weekly-podcasts__title-group__title h2">
          Weekly Podcast
        </h2>
        <Button
          variant="secondary"
          className="weekly-podcasts__title-group__btn body3"
        >
          See All
        </Button>
      </div>

      {/* podcasts */}
      <div className="weekly-podcasts__podcast-list">
        {weeklyPodcasts?.length > 0 ? (
          weeklyPodcasts.map((podcast) => (
            <WeeklyPodcastCard key={podcast.id} data={podcast} />
          ))
        ) : (
          <p>目前沒有任何Podcast</p>
        )}
      </div>
    </section>
  );
};

export default WeeklyPodcasts;

import "./WeeklyPodcasts.scss";
import { Link } from "react-router-dom";
import Button from "@/components/common/Button/Button";
import { weeklyPodcastsData } from "@/data";
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
          as={Link}
          to="/all-weekly-podcast"
          variant="secondary"
          className="weekly-podcasts__title-group__btn body3"
        >
          See All
        </Button>
      </div>

      {/* podcasts */}
      <div className="weekly-podcasts__podcast-list">
        {weeklyPodcastsData?.length > 0 ? (
          weeklyPodcastsData
            .slice(0, 3)
            .map((podcast) => (
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

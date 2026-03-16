import "./WeeklyPodcasts.scss";
import { Link } from "react-router-dom";
import Button from "@/components/common/Button/Button";
import { weeklyPodcastsData } from "@/data";
import WeeklyPodcastCard from "./WeeklyPodcastCard";

const WeeklyPodcasts = () => {
  return (
    <section
      className="weekly-podcasts"
      aria-labelledby="weekly-podcasts-heading"
    >
      {/* header */}
      <div className="weekly-podcasts__title-group">
        <h2
          id="weekly-podcasts-heading"
          className="weekly-podcasts__title-group__title h2"
        >
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

      {weeklyPodcastsData?.length > 0 ? (
        <ul className="weekly-podcasts__podcast-list">
          {weeklyPodcastsData.slice(0, 3).map((podcast) => (
            <li key={podcast.id}>
              <WeeklyPodcastCard data={podcast} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="empty"> No podcasts available at the moment</p>
      )}
    </section>
  );
};

export default WeeklyPodcasts;

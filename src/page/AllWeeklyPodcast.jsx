import "./AllWeeklyPodcast.scss";
import { useState, useEffect } from "react";
import WeeklyPodcastCard from "@/components/features/WeeklyPodcast/WeeklyPodcastCard";
import { weeklyPodcasts } from "@/data";
import { MdOutlineGridView } from "react-icons/md";
import { IoIosList } from "react-icons/io";

const AllWeeklyPodcast = () => {
  const [view, setView] = useState("grid");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className={`all-weekly-podcast`}>
        {/* 切換按鈕 */}
        <div className="all-weekly-podcast__controls">
          <button onClick={() => setView("grid")}>
            <MdOutlineGridView />
          </button>
          <button onClick={() => setView("list")}>
            <IoIosList />
          </button>
        </div>

        <div
          className={`all-weekly-podcast__list  all-weekly-podcast__list--${view}`}
        >
          {weeklyPodcasts?.length > 0 ? (
            weeklyPodcasts.map((podcast) => (
              <WeeklyPodcastCard
                key={podcast.id}
                data={podcast}
                variant={view}
              />
            ))
          ) : (
            <p className="no-data">目前沒有任何Podcast</p>
          )}
        </div>
      </div>
    </>
  );
};

export default AllWeeklyPodcast;

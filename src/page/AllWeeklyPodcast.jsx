import "./AllWeeklyPodcast.scss";
import { useState, useEffect } from "react";
import WeeklyPodcastCard from "@/components/features/WeeklyPodcast/WeeklyPodcastCard";
import { weeklyPodcastsData } from "@/data";
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
        <div
          className="all-weekly-podcast__controls"
          role="group"
          aria-label="View mode"
        >
          <button
            onClick={() => setView("grid")}
            aria-label="Grid view"
            aria-pressed={view === "grid"}
          >
            <MdOutlineGridView aria-hidden="true" />
          </button>
          <button
            onClick={() => setView("list")}
            aria-label="List view"
            aria-pressed={view === "list"}
          >
            <IoIosList aria-hidden="true" />
          </button>
        </div>

        <div
          className={`all-weekly-podcast__list  all-weekly-podcast__list--${view}`}
        >
          {weeklyPodcastsData?.length > 0 ? (
            weeklyPodcastsData.map((podcast) => (
              <WeeklyPodcastCard
                key={podcast.id}
                data={podcast}
                variant={view}
              />
            ))
          ) : (
            <p className="no-data">No podcasts available at the moment.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default AllWeeklyPodcast;

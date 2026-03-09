import React from "react";
import Header from "@/components/layout/header/Header";
import Hero from "@/components/features/Hero";
import WeeklyPodcasts from "@/components/features/WeeklyPodcast/WeeklyPodcasts";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Hero />
      <WeeklyPodcasts />
    </div>
  );
};

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "@/components/layout/header/Header";
import Hero from "@/components/features/Hero/Hero";
import WeeklyPodcasts from "@/components/features/WeeklyPodcast/WeeklyPodcasts";
import AllWeeklyPodcast from "@/page/AllWeeklyPodcast";

const App = () => {
  return (
    <>
      <Header />

      <main className="app">
        <Routes>
          {/* 首頁 */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <WeeklyPodcasts />
              </>
            }
          />

          {/* all-weekly-podcast 列表 */}
          <Route path="/all-weekly-podcast" element={<AllWeeklyPodcast />} />

          {/* 錯誤訊息 */}
          <Route
            path="*"
            element={
              <div className="no-data">
                這頁面不存在，請檢查網址路徑是否正確。
              </div>
            }
          />
        </Routes>
      </main>
    </>
  );
};

export default App;

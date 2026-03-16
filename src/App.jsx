import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "@/components/layout/header/Header";
import Hero from "@/components/features/Hero/Hero";
import WeeklyPodcasts from "@/components/features/WeeklyPodcast/WeeklyPodcasts";
import AllWeeklyPodcast from "@/page/AllWeeklyPodcast";
import TopPodcasters from "@/components/features/TopPodcasters/TopPodcasters";
import About from "@/components/features/About/About";
import Benefit from "@/components/features/Benefit/Benefit";
import CTA from "@/components/features/CTA/CTA";
import Footer from "./components/layout/Footer/Footer";

const App = () => {
  return (
    <>
      <Header path="/" />

      <main className="app">
        <Routes>
          {/* 首頁 */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <WeeklyPodcasts />
                <TopPodcasters />
                <About />
                <Benefit />
                <CTA />
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
                Page not found. Please check if the URL is correct.
              </div>
            }
          />
        </Routes>
      </main>

      <Footer />
    </>
  );
};

export default App;

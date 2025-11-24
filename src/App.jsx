import React from "react";
import NavBar from "../src/components/NavBar.jsx";
import Hero from "../src/components/Hero.jsx";
import HomeCards from "../src/components/HomeCards.jsx";
import JobsListings from "./components/JobsListings.jsx";

const App = () => {
  return (
    <body>
      <NavBar />
      <Hero />
      <HomeCards />
      <JobsListings />

      <section className="m-auto max-w-lg my-10 px-6">
        <a
          href="jobs.html"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >
          View All Jobs
        </a>
      </section>
    </body>
  );
};

export default App;

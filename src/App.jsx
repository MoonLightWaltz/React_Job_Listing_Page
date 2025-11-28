import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import React from "react";
// import HomePage from "../../pages/HomePage";
import NavBar from "../src/components/NavBar.jsx";
import Hero from "../src/components/Hero.jsx";
import HomeCards from "../src/components/HomeCards.jsx";
import JobsListings from "./components/JobsListings.jsx";
import ViewAllJobs from "./components/ViewAllJobs.jsx";

// const router = createBrowserRouter(
//   createRoutesFromElements(<Route index element={<HomePage />} />)
// );

// const App = () => {
//   return <RouterProvider router={router} />;
// };

// export default App;

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <HomeCards />
      <JobsListings />
      <ViewAllJobs />
    </>
  );
};

export default App;

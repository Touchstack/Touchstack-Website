import { useState, useEffect } from "react";
import NavBar from "../../components/Homepage/NavBar";
import Footer from "../../components/Homepage/Footer";
import ProjectIdea from "../../components/Homepage/ProjectIdea";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <ProjectIdea />
      <Footer />
    </div>
  );
};
export default HomePage;

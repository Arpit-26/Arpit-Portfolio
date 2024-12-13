// import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
// import About from "./components/About";
// import Contact from "./components/Contact";
import Footer from "./Components/Footer";
import Projects from "./Components/Projects";

const siteProps = {
  name: "Arpit Bhardwaj",
  title: "Full-Stack Developer",
  email: "bhardwajarpit79@gmail.com",
  gitHub: "Arpit-26",
  instagram: "microsoft",
  linkedIn: "arpit-bhardwaj-53b2b5234",
  medium: "",
  twitter: "microsoft",
  youTube: "Code",
};

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <div>
          <Home />
          <Projects />
          {/* <About />
          <Contact /> */}
          <Footer {...siteProps} />
        </div>
      </div>
    </>
  );
}

export default App;

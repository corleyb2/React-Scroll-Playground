import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import dummyText from "./Components/DummyText";
import { animateScroll as scroll } from "react-scroll";

// This repo is a recreation of a tutorial on React-Scroll, using the newest React version and converting components from class to functional.  I'll be working to use more of the React-Scroll library.  S/o to James Quick, who authored the original tutorial and repo.

// Link to original tutorial: https://www.digitalocean.com/community/tutorials/how-to-implement-smooth-scrolling-in-react

// Link to original public repo: https://github.com/do-community/React-With-Smooth-Scrolling

function App() {
  //not operational - but why?
  // const autoScrollDown = () => {
  //   scroll.scrollToBottom({
  //     duration: 10000,
  //     delay: 2000,
  //     smooth: "linear",
  //   });
  // };

  //also not operational
  // const resetToTop = () => {
  //   scroll.scrollToTop({
  //     duration: 100,
  //     delay: 2000,
  //     smooth: false,
  //   });
  // };

  // This works from Navbar, but not from App (when paired with a HTML button onClick) - what gives?
  // const scrollToTop = () => {
  //   scroll.scrollToTop();
  // };

  return (
    <div className="App">
      <Navbar />
      <Section
        title="Section 1"
        subtitle={dummyText}
        dark={true}
        id="section1"
      />
      <Section
        title="Section 2"
        subtitle={dummyText}
        dark={false}
        id="section2"
      />
      <Section
        title="Section 3"
        subtitle={dummyText}
        dark={true}
        id="section3"
      />
      <Section
        title="Section 4"
        subtitle={dummyText}
        dark={false}
        id="section4"
      />
      <Section
        title="Section 5"
        subtitle={dummyText}
        dark={true}
        id="section5"
      />
    </div>
  );
}

export default App;

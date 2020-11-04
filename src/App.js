import React from 'react';
import Fade from 'react-reveal/Fade';
import Slide from "react-reveal/Slide";
// import { Parallax } from "react-parallax";
import Container from "react-bootstrap/Container";

//compoents
import "./App.css";
import MyNavbar from "../src/components/my-navbar/mynavbar.components";
import MyCarousal from "../src/components/my-carousal/my-carousal.components";
import TypeWriter from "../src/components/title-message/title-message.component";
import About from "./pages/about/about.component";
import Skills from "./pages/skill/skills.component";
import Experience from "./pages/experience/experience.component";


const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyNavbar />
      <MyCarousal />
      <TypeWriter />
      {/* about me section */}
      <div>
      {/* <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt=""
          // strength={-200}
      > */}
      <Container className="container-box rounded">
      <Fade duration={2500}>
         <hr />
        <About />

      </Fade>

      </Container>
      {/* </Parallax> */}
      </div>


      {/* Skill Section */}
      <Container className="container-box rounded">
        <Slide bottom duration={700} >
          <hr />
          <Skills />
        </Slide>
      </Container>

      {/* Experience */}

      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />

            <Experience />
          </Fade>
        </Container>
      </div>
      
    </div>
  );
}

export default App;

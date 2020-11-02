import React from 'react';
import Fade from 'react-reveal/Fade'
import { Parallax } from "react-parallax";
import Container from "react-bootstrap/Container";

//compoents
import "./App.css";
import MyNavbar from "../src/components/my-navbar/mynavbar.components";
import MyCarousal from "../src/components/my-carousal/my-carousal.components";
import TypeWriter from "../src/components/title-message/title-message.component";
import About from "./pages/about/about.component";


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
      <Fade duration={500}>
        <About />

      </Fade>

      </Container>
        

      {/* </Parallax> */}
      </div>
      {/* <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt="paralaax img"
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div> */}
    </div>
  );
}

export default App;

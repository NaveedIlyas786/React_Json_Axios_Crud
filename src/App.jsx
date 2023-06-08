//TODO:: IMPORTANT NOTE
//! It is the Implementation of the " CRUD " operation with " JSON " server  usinf " AXIOS " for fetching, posting, view data etc

import React from "react";
import AddStudent from "./components/AddStudent";
import EditStudent from "./components/EditStudent";
import ReadStudent from "./components/ReadStudent";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import "./App.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

function App() {

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  });

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddStudent />} />
        <Route path="/read/:id" element={<ReadStudent />} />
        <Route path="/edit/:id" element={<EditStudent />} />
      </Routes>
      <Particles
      className="myparticles"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fps_limit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            // onClick: {
            //   enable: true,
            //   mode: "push",
            // },
          },
          modes: {
            repulse: {
              distance: 180,
              duration: 0.3,
            },
            // push:{
            //   quantity:2
            // }
          },
        },
        particles: {
          color: {
            value: "#1A84DD",
          },
          links: {
            color: "#1A84DD",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          shape: {
            type: "circle",
            options: {
              color: "blue",
            },
          },
          size: {
            value: { min: 2, max: 5},
          },
          number: {
            value:50,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: {
              default: "bounce",
            },
            speed: 2,
          },
          opacity: {
            value: 0.4,
          },
          collisions: {
            enable: true,
          },
        },
      }}
    />
    </BrowserRouter>
  );
}

export default App;

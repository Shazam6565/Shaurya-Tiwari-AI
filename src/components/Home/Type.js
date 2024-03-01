import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Data Analyst, Software Engineer, Web Developer, Data Scientist and Machine Learning Enthusiast",
          "Speaker, Communicator, and Team Player, with a passion for learning and growth",
        ],
        autoStart: true,
        loop: true,
        speed: 1000,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;

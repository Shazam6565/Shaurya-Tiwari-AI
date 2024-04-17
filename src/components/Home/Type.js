import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Machine Learning Engineer",
          "Deep Learning Enthusiast",
          "Language Model Developer",
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

import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
    <h2>About Me</h2>
    <p>I like to code</p>
    <img src={image} alt="I made this"/>
  </div>;
}

export default About;

/*

an <h2> element with the content of "About Me"
a <p> element with any content of your choosing
an <img> element with the src attribute set to the imported image variable, and the alt attribute set to "I made this"
*/
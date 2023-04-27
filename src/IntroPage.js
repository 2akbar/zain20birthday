import React, { useState, useEffect } from "react";
import "./IntroPage.css";

function IntroPage(props) {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setShowText(true);
  }, []);

  return (
    <div>
      <h1>Happy 20th Birthday Zain!</h1>
      <img alt="Zain while she was baby" src={props.zainImage} />
      <p className={`animated-text ${showText ? "fade-in" : ""}`}>
        Happy Birthday, Zain!{" "}
        <span className={`animated-text ${showText ? "fade-in" : ""}`}>
          I am so excited to celebrate your special day!{" "}
        </span>
        <span className={`animated-text ${showText ? "fade-in" : ""}`}>
          May your day be filled with joy, laughter, and lots of love from
          family and friends.{" "}
        </span>
        <span className={`animated-text ${showText ? "fade-in" : ""}`}>
          I hope this website will make your birthday even more memorable and
          that you enjoy exploring all the different sections.{" "}
        </span>
        <span className={`animated-text ${showText ? "fade-in" : ""}`}>
          From the beautiful nature and landscapes to the amazing racing tracks
          that Daniel Ricciardo has conquered, we've included all your favorite
          things.{" "}
        </span>
        <span className={`animated-text ${showText ? "fade-in" : ""}`}>
          Cheers to a wonderful 20th year of life and many more to come!
        </span>
      </p>
    </div>
  );
}

export default IntroPage;

import React, { useState, useEffect } from "react";
import "./IntroPage.css";
import zainImage from "./zain.jpg";

function IntroPage() {
  const [currentSentence, setCurrentSentence] = useState(0);

  const sentences = [
    "Happy Birthday, Zain!",
    "I am so excited to celebrate your special day!",
    "May your day be filled with joy, laughter, and lots of love from family and friends.",
    "I hope this website will make your birthday even more memorable and that you enjoy exploring all the different sections.",
    "From the beautiful beaches and serene landscapes to the amazing racing tracks that Daniel Ricciardo has conquered, we've included all your favorite things.",
    "Cheers to a wonderful 20th year of life and many more to come!",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSentence((currentSentence) =>
        currentSentence < sentences.length - 1 ? currentSentence + 1 : 0
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [sentences.length]);

  return (
    <div className="intro-container">
      <h1 className="intro-heading">Happy 20th Birthday Zain!</h1>
      <img src={zainImage} alt="Zain" className="intro-image" />
      <p className="intro-text">
        {sentences[currentSentence].split(" ").map((word, index) => (
          <span key={index} className="animated-text">
            {word}{" "}
          </span>
        ))}
      </p>
    </div>
  );
}

export default IntroPage;

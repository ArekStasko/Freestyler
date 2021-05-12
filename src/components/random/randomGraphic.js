import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useGet } from "restful-react";
const {REACT_APP_UNSPLASH_KEY} = process.env;

const RandomGraphic = ({ sec, setEffect, showEffect }) => {

  const complete = () => {
    setTimeout(() => {
      setEffect(!showEffect);
    }, 1000);
  };

  const { data: randomImage, loading } = useGet({
    path: `/photos/random/?client_id=${REACT_APP_UNSPLASH_KEY}`,
  });

  return (
    <>
      {loading ? (
        <div>Loading</div>
      ) : (
        <div className="graphic-container">
          <img alt="random" src={randomImage.urls.small} className="graphic-container__image"/>
          <div className="graphic-container__timer">
            <CountdownCircleTimer
              isPlaying
              duration={sec}
              onComplete={complete}
              colors={[
                ["#fc6b03", 0.25],
                ["#03fc14", 0.25],
                ["#03e3fc", 0.25],
                ["#e8fc03", 0.25],
              ]}
            >
              {({ remainingTime }) => {
                return <h1>{remainingTime}</h1>;
              }}
            </CountdownCircleTimer>
          </div>
        </div>
      )}
    </>
  );
};

export default RandomGraphic;

import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useGet } from "restful-react";
import "./styles.css";
const {REACT_APP_UNSPLASH_KEY} = process.env;

const RandomGraphic = ({ sec, setEffect, showEffect }) => {

  const complete = () => {
    setTimeout(() => {
      setEffect(!showEffect);
    }, 1000);
  };
  //https://api.unsplash.com/photos/random/?client_id=nvBikEUhJ6KijxVtvEE7JClN8Ni4dmTVYxv-6f-pAMo

  const { data: randomImage, loading } = useGet({
    path: `/photos/random/?client_id=${REACT_APP_UNSPLASH_KEY}`,
  });

  return (
    <>
      {loading ? (
        <div>Loading</div>
      ) : (
        <div className="main_graphic-container">
          <img alt="random" src={randomImage.urls.small} className="main_graphic-wrapper"/>
          <div className="random_text-timer">
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

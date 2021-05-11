import React from 'react'
import Data from '../data/data.json'
import { CountdownCircleTimer } from "react-countdown-circle-timer";


const RandomText = ({sec, setEffect, showEffect}) => {
    const randomNumber = 0 + Math.floor((71 - 0) * Math.random());
    const topic = Data.TextData[randomNumber]

    const complete = () => {
        setTimeout(()=> {
            setEffect(!showEffect)
        }, 1000)
    }
    
    return(
        <div className='random_text-wrapper'>
            <h2>{ topic }</h2>
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
                    return(
                        <h1>
                        {remainingTime}
                        </h1>
                    )
                }}
              </CountdownCircleTimer>
              </div>
        </div>
    )
}

export default RandomText;
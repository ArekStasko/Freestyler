import React from 'react'
import Data from '../data/data.json'

const RandomText = () => {
    const randomNumber = 0 + Math.floor((71 - 0) * Math.random());
    const topic = Data.TextData[randomNumber]
    
    return(
        <div className='random_text-wrapper'>
            <h2>{ topic }</h2>
        </div>
    )
}

export default RandomText;
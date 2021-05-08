import React from 'react'
import Data from '../data/data.json'
import './styles.css';


const RandomGraphic = () => {

    const randomGraphicNumber = 0 + Math.floor((12 - 0) * Math.random());
    const graphic = Data.GraphicData[randomGraphicNumber]

    console.log(graphic)

    return(
        <div className='random_image-container'>
        <div className='random_image-wrapper'>
             <div className={graphic}>
    </div>
        </div>
        </div>
    )
}

export default RandomGraphic;
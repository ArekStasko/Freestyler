import React, { useState, } from 'react';
import Countdown from 'react-countdown';
import RandomText from '../random/randomText'
import './styles.css';

const Text = () =>{
    const [value, setValue] = useState()
    const [showEffect, setEffect] = useState() 

    const handleChange = e =>{
        setValue(Number(e.target.value * 60))
    }

    const handleSubmit = (e) =>{
        setEffect(!showEffect)
        e.preventDefault()
    }
    
    const completeFun = () => {
        setEffect(!showEffect)
    };

        return(
            <div className='main-container'>
                <div className='main_text-wrapper'>
                   <h2>Wylosuj temat</h2>
                   
                    <form onSubmit={handleSubmit} className='form-wrapper'>
                       <label for='time'>Wybierz czas rundy</label>

                       <input className='form_time-input' required onChange={handleChange} min="1" max="10" id='time' type='number'/>
                   
                       {
                           showEffect ? (
                            <button className='random_graphic-btn' type='submit'>Przerwij</button>
                           ) : (
                            <button className='random_graphic-btn' type='submit'>Losuj</button>
                           )
                       }
                   </form>
                </div>
            {showEffect ? (
                <div className='main_effect-wrapper'>
                     <Countdown onComplete={completeFun}	className='timer' date={Date.now() + (value/60) * 60000}/>
                    <RandomText/>
                </div>
            ):(
                <div className='result_text-wrapper'>
                <h2>Witam na stronie Freestyler</h2>
                <h3>Freestyler ma za zadanie pomóc ci 
                    zorganizować bitwę freestylową, czy to 
                    w plenerze czy na imprezie 
                </h3>
                <p>
                    Żeby skorzyskać z Freestylera wybierz opcję losowania 
                    przy pomocy powyższego przycisku z ikoną kręcocych się strzałek
                    , dział temat wylosuje ci 
                    jak sama nazwa mówi temat, analogicznie z działem obraz, 
                    następnie dzięki licznikowi możesz wybrać ilość czasu, który
                    liczony jest w minutach, klikając przycisk losuj uruchamiasz 
                    stoper i zaczynasz zabawę, 
                </p>
                <h4>
                    Korzystasz z wersji beta 1.0 z tego względu mogą występować liczne błędy, proszę o wyrozumiałość
                    i informowanie o każdym błędzie i pomysłach na każde zmiany <i class="fas fa-heart"></i>
                </h4>
                <h3>Powodzenia i miłej zabawy !</h3>
            </div>
            )
            }
            </div>
        ) 
}

export default Text;

import React, { useState } from "react";
import RandomText from "../random/randomText";
import RandomGraphic from "../random/randomGraphic";
import { RestfulProvider } from "restful-react"
import "./styles.css";

const Category = ({ show }) => {
  const [showEffect, setEffect] = useState();
  const [sec, setSec] = useState();

  const handleSubmit = () => {
    setEffect(!showEffect);
  };

  return (
    <div className="main-container">
      <div className="main_text-wrapper">
        <h2>Wylosuj {show ? "temat" : "obraz"}</h2>

        <div className="form-wrapper">
          <p>Wybierz czas rundy</p>

          <input
            className="form_time-input"
            onChange={(e) => setSec(parseInt(e.target.value))}
            type="number"
          />

          {showEffect ? (
            <button onClick={handleSubmit} className="random_graphic-btn">
              Przerwij
            </button>
          ) : (
            <button onClick={handleSubmit} className="random_graphic-btn">
              Losuj
            </button>
          )}
        </div>
      </div>
      {showEffect ? (
        <div className="main_effect-wrapper">
          {show ? (
              <RandomText sec={sec} setEffect={setEffect} showEffect={showEffect} />
          ) : (
              <RestfulProvider base="https://api.unsplash.com">
               <RandomGraphic sec={sec} setEffect={setEffect} showEffect={showEffect} />
              </RestfulProvider>
          )}
        </div>
      ) : (
        <div className="result_text-wrapper">
          <h2>Witam na stronie Freestyler</h2>
          <h3>
            Freestyler ma za zadanie pomóc ci zorganizować bitwę freestylową,
            czy to w plenerze czy na imprezie
          </h3>
          <p>
            Żeby skorzyskać z Freestylera wybierz opcję losowania przy pomocy
            powyższego przycisku z ikoną kręcocych się strzałek , dział temat
            wylosuje ci jak sama nazwa mówi temat, analogicznie z działem obraz,
            następnie dzięki licznikowi możesz wybrać ilość czasu, który liczony
            jest w minutach, klikając przycisk losuj uruchamiasz stoper i
            zaczynasz zabawę,
          </p>
          <h4>
            Korzystasz z wersji beta 1.0 z tego względu mogą występować liczne
            błędy, proszę o wyrozumiałość i informowanie o każdym błędzie i
            pomysłach na każde zmiany <i class="fas fa-heart"></i>
          </h4>
          <h3>Powodzenia i miłej zabawy !</h3>
        </div>
      )}
    </div>
  );
};

export default Category;

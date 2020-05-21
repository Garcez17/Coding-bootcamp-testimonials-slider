import React, { useState } from 'react';

import './styles.css';
import patternCurve from '../../assets/pattern-curve.svg';
import patternQuotes from '../../assets/pattern-quotes.svg';
import patternBg from '../../assets/pattern-bg.svg';
import iconNext from '../../assets/icon-next.svg';
import iconPrev from '../../assets/icon-prev.svg';

import { loadTestimony } from '../../services/api'

const testimony = loadTestimony();

export default function Dashboard() {
  const test = testimony.map(function(item) {
    return item.testimonies
  });
  
  const sizeArr = test[0].length;
  
  const testimonyArr = test[0].map(function(item) {
    return item
  });

  const [click, setClick] = useState(0);
  const [name, setName] = useState(testimonyArr[click].name);
  const [occupation, setOccupation] = useState(testimonyArr[click].occupation);
  const [testimonys, setTestimony] = useState(testimonyArr[click].testimony);
  const [image, setImage] = useState(testimonyArr[click].photo);
  
  function showId() {
    setClick(click + 1)
    setName(testimonyArr[click].name);
    setOccupation(testimonyArr[click].occupation);
    setTestimony(testimonyArr[click].testimony);
    setImage(testimonyArr[click].photo);

    if (click == sizeArr - 1) {
      setClick(0)
    }
  }

  return (
    <>
    <div className="dash-container">
      <div className="testimonial-text">
        <img className="quotes" src={patternQuotes} alt="patternQuotesImg"/>
        <p>“ {testimonys} ”</p>
        <p className="dev-name">{name} <span>{occupation}</span></p>
      </div>
      <div className="imgs">     
        <img className="tanya-img" src={image} alt="tanyaImg"/>
        <img className="pattern-bg" src={patternBg} alt="patternImg"/>
        <div className="button">
          <div onClick={showId} className="inner-button-left">
            <img className="iconPrev" src={iconPrev} alt="iconPrev"/>
          </div>
          <div onClick={showId} className="inner-button-right">
            <img className="iconNext" src={iconNext} alt="iconNext"/>
          </div>
        </div>
      </div>
    </div>
    <footer className="footer">
      <img src={patternCurve} alt="patternCurveImg"/>
      <p className="textFooter">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/Garcez17">Gabriel Garcez</a>.</p>
    </footer>
    </>
  );
}
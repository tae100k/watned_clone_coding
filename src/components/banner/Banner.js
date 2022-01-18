import React from 'react';
import "./Banner.css";

import { StyledSlide,ImageContainer,Information } from './size';


function Banner(props) {
  return (
    <StyledSlide slidesize={props.slidesize} onDragStart={(e) => {
      e.stopPropagation();
      e.preventDefault();
    }}>
      <div className="SlideDiv">
        <div className="SlideContainer">
          <ImageContainer focused={props.focused}>
            <a className= "imageWrapper" href={props.href} onDragStart={(e) => e.preventDefault()}>
              <img className = "image" src={props.img} alt={props.alt} onDragStart={(e) => e.preventDefault()} />
            </a>
          </ImageContainer>
          <Information focused={props.focused}>
            <h2>{props.title}</h2>
            <h3>{props.description}</h3>
            <hr className = "infoDivider" />
            <a className = "slickSlideButton informationDirectButton buttonSizeMedium buttonRoot buttonText buttonPrimary" href="/">
              <span className="slickSlidebuttonLabel">
                바로가기
                <svg className="slickSlideMoveIcon" viewBox="0 0 18 18" style={{width: "18px", height:"18px"}}>
                  <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z" />
                </svg>
              </span>
            </a>
          </Information>
        </div>
      </div>
    </StyledSlide>
  );
}



export default Banner;
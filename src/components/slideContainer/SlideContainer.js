import React, {  useRef, useEffect, useCallback, useState } from 'react';
import { throttle } from 'lodash';

import Banner from "../banner/Banner"
import "./SlideContainer.css"
import slideItems from "../constants/slideItems";
const length = slideItems.length;
let slide_width = 1084;
let slideStart = 6336.5;

function SlideContainer() {
  const slideRef = useRef(null); //애니메이션 받는 슬라이드
  const [counter, setCounter] = useState(Math.floor(Math.random() * 10)); 
  const [slidesize, setSlideSize] = useState(1084); 

  const styleAnimation = () => {
    slideRef.current.style.transition = `transform 400ms ease 0s`;
  };

  const styleNoAnimation = () => {
    slideRef.current.style.transition = '';
  };

  const swipeRight = useCallback(() => {
    if (counter >= length) {
      styleNoAnimation();
      setCounter(0);
      return;
    }
    styleAnimation();
    setCounter(counter + 1);
  }, [counter]);

  const swipeLeft = useCallback(() => {
    if (counter < 0) {
      styleNoAnimation();
      setCounter(length - 1);
      return;
    }
    styleAnimation();
    setCounter(counter - 1);
  }, [counter]);

  const styleTranslate = useCallback(
    (index) => {
      slideRef.current.style.transform = `translate3d(-${slideStart + index * slidesize}px, 0px, 0px)`;
    },
    [slidesize],
  );

  
  const handleResize = throttle(() => {
    const windowWidth = window.innerWidth;
    const frontSlideNum = Math.floor(length / 2);

    if (windowWidth > 1200) {
      slideStart = (3 * slide_width - windowWidth) / 2 + 50 + slide_width * frontSlideNum;
      setSlideSize(slide_width);
      return;
    }
    slideStart =
      (3 * (windowWidth - 97) - windowWidth) / 2 + 40 + (windowWidth - 97) * frontSlideNum;
    setSlideSize(windowWidth - 97);
  }, 200);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  useEffect(() => {
    styleTranslate(counter);
    if (counter >= length) {
      slideRef.current.ontransitionend = () => {
        swipeRight();
        slideRef.current.ontransitionend = null;
      };
    } else if (counter < 0) {
      slideRef.current.ontransitionend = () => {
        swipeLeft();
        slideRef.current.ontransitionend = null;
      };
    }

  }, [styleTranslate, swipeRight, swipeLeft, counter]);
  // SlideTrack, Slides에 임시로 windowSize 부여
  return (
    <div className = "Main">
      <div className ="topBanner">
        <div className ="slickListWrapper">
          <div className ="slickList">
            <div className ="slickTrack" ref={slideRef} slidesize={slidesize}>
              <SlideList slides={slideItems} counter={counter} slidesize={slidesize} />
            </div>
          </div>
          <button className="topBannerArrow nextArrowButton" onClick = {swipeRight}>
              <span className="arrowIconWrapper">
                <svg className ="arrowIcon" viewBox="0 0 18 18">
                  <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z" />
                </svg>
              </span>
          </button>
          <button className="topBannerArrow prevArrowButton" onClick = {swipeLeft}>
            <span className="arrowIconWrapper">
              <svg className = "arrowIcon" viewBox="0 0 18 18">
                <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

function SlideList(props) {
  const centerList = Object.keys(props.slides);
  const leftList = centerList.slice(0, length / 2);
  const rightList = centerList.slice(length / 2);

  const slideList = [...leftList, ...centerList, ...rightList];
  const isCurrent = (i) => {
    const curIndex = Number(i) - Math.floor(length / 2) - 1;
    if (props.counter === length && curIndex === 0) {
      return true;
    }
    if (props.counter === -1 && curIndex === length - 1) {
      return true;
    }
    return curIndex === props.counter;
  };

  return slideList.map((v, i) => (
    <Banner
      isCurrent={isCurrent(i)}
      slidesize={props.slidesize}
      alt = {props.slides[v].title}
      img={props.slides[v].image}
      title={props.slides[v].title}
      href={props.slides[v].href}
      description={props.slides[v].description}
    />
  ));
}

export default SlideContainer;

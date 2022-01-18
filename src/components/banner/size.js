import styled from 'styled-components';

// 화면 사이즈에 동적으로 크기 변해야함.
export const StyledSlide = styled.div`
  @media (min-width: 1200px) {
    user-select: none;
    margin: 0;
    border: 0;
    float: left;
    height: 100%;
    min-height: 1px;
    display: block;
    position: relative;
    padding: 0 12px;
    box-sizing: content-box;
    width: 1060px;
  }
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0;
  float: left;
  height: 100%;
  min-height: 1px;
  display: block;
  position: relative;
  width: ${(props) => props.slidesize}px;
`;


export const ImageContainer = styled.div`
  transition: filter 0.4s ease-in-out 0s;
  filter: ${(props) => (props.isCurrent ? 'brightness(100%)' : 'brightness(50%)')};
  @media (min-width: 992px) and (max-width: 1199px) {
    user-select: none;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    height: 183px;
    border-radius: 3px 3px 0 0;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    user-select: none;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    height: 183px;
    border-radius: 3px 3px 0 0;
  }
  @media (max-width: 767px) {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    height: 183px;
    border-radius: 3px 3px 0 0;
  }
`;


export const Information = styled.div`
  @media (min-width: 1200px) {
    position: absolute;
    bottom: 28px;
    width: 330px;
    height: 146px;
    border-radius: 4px;
    background-color: #fff;
    transition: opacity 0.4s ease-in-out;
    opacity: ${(props) => (props.isCurrent ? '1' : '0')};
    text-align: left;
    left: 34px;
  }
  user-select: none;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0;
  text-align: center;
`;
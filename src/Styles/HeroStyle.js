import styled from "styled-components";
import { css } from "styled-components";
import * as IoIcons from "react-icons/io5";
import { Splide, SplideSlide } from "@splidejs/react-splide";

export const HeroSection = styled.div`
  height: 70vh;
  max-height: 600px;
  position: relative;
  overflow: hidden;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    height: 90vh;
    max-height: 800px;
  }
`;

export const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

export const HeroSlide = styled(Splide)`
  z-index: 1;
  width: 100%;
  height: 100%;
`;

export const HeroSlider = styled(SplideSlide)`
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100%;
    bottom: 0;
    left: 0;
    overflow: hidden;
    opacity: 1;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0.6) 50%,
      rgba(0, 0, 0, 1) 100%
    );
  }
`;

export const HeroImage = styled.img`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  bottom: 30px;
  display: flex;
  flex-direction: column;
  width: calc(100% - 100px);
  max-width: 1600px;
  color: #fff;

  h1 {
    font-size: clamp(1rem, 8vw, 2rem);
    font-weight: 400;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    text-align: left;
    margin-bottom: 0.8rem;
  }

  p {
    margin-bottom: 1.2rem;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  }
`;

export const SliderButtons = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 50px;
  display: flex;
  z-index: 10;
`;
export const Arrows = css`
  display: none;

  @media only screen and (min-width: 768px) {
    display: block;
    width: 50px;
    height: 50px;
    color: #fff;
    cursor: pointer;
    background-color: #000d1a;
    border-radius: 50px;
    padding: 10px;
    margin-right: 1rem;
    user-select: none;
    transition: 0.3s;
    position: static;
    top: 0;
    transform: translateY(0);

    /* &:hover {
      background: #cd853f;
      transform: scale(1.05);
    } */
  }
`;

export const PrevArrow = styled(IoIcons.IoArrowBack)`
  ${Arrows}
`;
export const NextArrow = styled(IoIcons.IoArrowForward)`
  ${Arrows}
`;

export const RecentSearch = styled.div`
  position: absolute;
  top: 60%;
  display: none;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-size: 10px;
  z-index: 10;
  margin: auto;

  a {
    color: #fff;
    padding: 5px 20px 10px;
    margin-left: 10px;
    text-decoration: none;
    border-radius: 25px;
    background-color: rgb(205, 133, 63);
  }

  @media only screen and (min-width: 500px) {
    display: flex;
    transform: translateY(-60%);
    font-size: 13px;
  }
`;

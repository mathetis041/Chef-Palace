import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Card = styled.div`
  min-height: 20rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translateX(-50%);
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
  }

  &:hover {
    p {
      color: rgb(238, 193, 149);
    }
  }
`;

export const Gradient = styled.div`
  position: absolute;
  z-index: 3;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

export const List = styled.div`
  position: relative;
  width: 90%;
  margin: 6px auto;
  display: flex;
  justify-content: space-between;
  text-align: center;
  transform: translateY(-60px);
  z-index: 10;

  @media only screen and (min-width: 440px) {
    justify-content: center;
    transform: translateY(-70px);
  }
`;

export const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 70px;
  height: 65px;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
  cursor: pointer;

  h4 {
    color: #fff;
    font-size: calc(0.8rem * 0.8);
  }

  svg {
    color: #fff;
    font-size: calc(1rem * 0.8);
  }

  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
  }

  @media only screen and (min-width: 540px) {
    width: 5rem;
    height: 5rem;
    margin-right: 1rem;
    margin-left: 1rem;

    svg {
      color: #fff;
      font-size: calc(1.5rem * 0.8);
    }
  }
`;

export const ClassicGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;

  @media only screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const ClassyCard = styled.div`
  min-height: 25rem;
  border-radius: 1.5rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 1.5rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  div {
    width: 100%;
    position: absolute;
    bottom: 30px;
    z-index: 11;
  }

  h4 {
    position: relative;
    z-index: 10;
    color: #fff;
    font-size: 1.2rem;
    width: 112.25px;
    background-color: #000;
    padding: 10px;
  }

  p {
    position: relative;
    z-index: 10;
    width: 95%;
    font-weight: 700;
    font-size: 1.2rem;
    text-transform: uppercase;
    padding: 10px;
    background: #fff;
    color: #000;
  }

  &:hover {
    p {
      color: #892074;
    }
  }

  @media only screen and (min-width: 485px) {
    h4 {
      left: 30px;
      font-size: calc(1.275rem + 0.3vw);
    }

    p {
      font-size: 1.6rem;
      left: 30px;
      width: 80%;
    }
  }
`;

// import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  background: rgb(205, 133, 63) !important;
  margin-top: 30px;
  padding-bottom: 20px;
  position: relative;
  color: #fff;

  a {
    color: #fff;
    text-decoration: none;
    padding: 0px 0.6rem 20px 0;
  }

  h1 {
    display: inline-flex;
  }

  .container {
    top: 0;
  }

  @media only screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const GoTop = styled.div`
  position: absolute;
  top: -30px;
  right: 30px;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #0d6efd;
  border-radius: 50%;
  cursor: pointer;
`;

export const FooterShare = styled.div`
  display: flex;

  a {
    padding: 20px 1rem 20px 0;
  }
`;

export const FooterFlex = styled.div`
  display: block;

  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;

    div:last-child {
      h1 {
        padding-top: 20px;
      }

      justify-self: flex-end;
      text-align: end;
    }
  }
`;

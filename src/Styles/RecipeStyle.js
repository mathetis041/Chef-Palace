import styled from "styled-components";

export const RecipeContainer = styled.div`
  display: block;
  margin: auto;

  @media only screen and (min-width: 998px) {
    display: grid;
    grid-template-columns: 4fr 1fr;
    grid-gap: 30px;
    margin: auto;
  }
`;

export const Mains = styled.div`
  width: 100%;

  h3 {
    padding-bottom: 3px;
    border-bottom: 1px solid rgba(153, 153, 153, 0.5);
  }

  svg {
    color: rgb(255, 0, 0);
  }

  button {
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(205, 133, 63);
    text-align: center;
    width: 100%;
    padding: 15px;
    color: #fff;
  }
`;

export const Aside = styled.div`
  width: 100%;
  justify-content: flex-end;
`;

export const Series = styled.div`
  margin: 10px auto;

  @media only screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const Stats = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  align-items: center;

  img {
    width: 100%;
  }

  @media only screen and (min-width: 768px) {
    grid-template-columns: 1fr 3fr;
    grid-gap: 10px;
  }
`;

export const Nutrients = styled.div`
  width: 100%;

  @media only screen and (min-width: 768px) {
    width: 50%;
  }
`;

export const ItemsRules = styled.div`
  width: 100%;

  @media only screen and (min-width: 768px) {
    width: 45%;
  }
`;

export const NutContent = styled.div`
  p {
    display: flex;
    justify-content: space-between;

    span {
      display: flex;
      margin-left: auto;
      justify-self: flex-end;
    }

    span:last-child {
      margin-left: 13px;
    }
  }

  div {
    padding-left: 30px;
  }
`;

export const NutDetail = styled.div`
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(153, 153, 153, 0.5);
`;

export const RecipeShare = styled.div`
  margin-top: 0.4rem;
  display: flex;
  justify-content: flex-start;

  a {
    margin-right: 1rem;
  }
`;

//Side Cards
export const SideCard = styled.div`
  min-width: 250px;
  min-height: 15rem;
  margin: 20px 0 40px;
  border-radius: 10px;
  padding: 5px;
  box-shadow: 2px 4px 10px 2px rgba(0, 0, 0, 0.2);
  position: relative;

  a {
    overflow: hidden;
    position: relative;
    text-decoration: none;

    img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
      object-fit: cover;
    }

    p {
      font-weight: 600;
      font-size: 1rem;
      margin-bottom: 5px;
      padding-bottom: 5px;
      border-bottom: 1px solid rgba(153, 153, 153, 0.5);
    }
  }
`;

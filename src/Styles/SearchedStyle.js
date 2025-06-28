import styled from "styled-components";

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    min-width: 260px;
    max-width: 275px;

    h6 {
      margin: 0;
    }

    select {
      width: 150px;
    }
  }

  @media only screen and (min-width: 520px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const SearchedGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;

  @media only screen and (min-width: 400px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (min-width: 884px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }

  div {
    min-height: 15rem;
    border-radius: 1rem;

    img {
      border-radius: 1rem;
    }
  }
`;

export const FilterBtn = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  background: linear-gradient(35deg, #494949, #313131);
  color: #fff;
  padding: 10px 20px;
  margin: 0 0 15px;
  align-items: center;
  border-radius: 6px;
`;

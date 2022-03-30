import styled from "styled-components";

const Card = styled.div`
  background-color: white;
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  margin: 20px auto;

  overflow: hidden;
  ${(props) => {
    if (props.flex) {
      return `
        display: flex;
        flex-grow: 1;
      `;
    }
    return ``;
  }}
  ${(props) => {
    if (props.relative) {
      return `
        position: relative;
      `;
    }
    return ``;
  }}
  @media (min-width: 769px) {
    display: block;
  }
  .image img {
    width: 100px;
    height: 141px;
    over-flow: hidden;
    @media (min-width: 769px) {
      width: 100%;
      height: auto;
      min-height: 278px;
    }
  }
`;

export default Card;

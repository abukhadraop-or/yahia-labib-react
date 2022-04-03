import styled from "styled-components";

const Card = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 0.125rem 0.5rem rgb(0 0 0 / 10%);
  margin: 1.25rem auto;
  overflow: hidden;
  width: 100%;
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
    height: 141px;
    overflow: hidden;
    width: 6.25rem;
    @media (min-width: 769px) {
      height: auto;
      min-height: 17.375rem;
      width: 100%;
    }
  }
`;

export default Card;

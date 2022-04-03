import styled from "styled-components";

const Button = styled.button`
  align-content: center;
  align-items: center;
  background-color: #2cb4e4;
  border-radius: ${(props) => props.rad || "1.5em"};
  border: none;
  color: #fff;
  display: inline-flex;
  font-size: 1.4em;
  font-weight: 600;
  height: 3.125;
  justify-content: center;
  line-height: 1em;
  padding: 0.875rem 1rem 1rem 1rem;
  width: 100%;
  ${(props) => {
    switch (props.changeColor) {
      case "Blue":
        return `
        background-color: #2cb4e4;
        color: #fff;
        `;
      default:
        return `
        background-color: #eee;
        color: #767676;
        `;
    }
  }}
`;
export default Button;

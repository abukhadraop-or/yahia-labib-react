import styled from "styled-components";

const Button = styled.button`
  background-color: #2cb4e4;
  border-radius: ${(props) => props.rad || "1.5em"};
  border: none
  color: #fff;
  font-size: 1.4em;
  line-height: 1em;
  font-weight: 600;
  width: 100%;
  height: 50px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding: 14px 16px 16px 16px;
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

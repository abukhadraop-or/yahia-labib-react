/* eslint-disable consistent-return */
import styled from "styled-components";

const Button = styled.button`
  background-color: #2cb4e4;
  border-radius: 1.5rem
  border: none
  color: #fff;
  font-size: 1.2em;
  line-height: 1em;
  font-weight: 600;
  width: 100%;
  height: 45px;
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

const Select = styled.select`
  margin: 0;
  padding: 0.375rem 0.75rem;
  width: 100%;
  height: 2.25rem;
  border-radius: 0.4rem;
  background: #eee;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  flex: 0 1 auto;
  overflow: hidden;

  & option {
    width: 100%;
    background: #fff;
    padding: 14px 16px 16px 16px;
  }
`;

const Filter = styled.div`
  width: 100%;
  border-top: 1px solid #eee;
  padding: 14px 16px 16px 16px;
  ${(props) => {
    if (props.disNone) {
      return `
            display: block;
      `;
    }
    return `display: none`;
  }}
  h3 {
    font-size: 1em;
    font-weight: 300;
    margin-bottom: 10px;
    color: #808080;
  }
`;
const Title = styled.h2`
  font-size:18px
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
  height: 50px;
  padding:14px 16px
  margin:0
  ${(props) => {
    if (props.down) {
      return `img{
    transform: rotate(90deg);`;
    }
  }}}
`;

const Bars = styled.div`
  @media (min-width: 769px) {
    width: 260px;
  }
`;
export { Button, Select, Filter, Title, Bars };

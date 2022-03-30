import styled from "styled-components";
import List from "../UI/List";

const Header = styled.header`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: #032541;
  height: 64px;
  width: 100%;
  z-index: 10;
  animation: top-e 0.2s linear;

  @media (min-width: 769px) {
    .mobile {
      display: none;
    }
    .desktop {
      display: flex;
    }
  }
`;
const Screen = styled.div`
  position: fixed;
  z-index: 9;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  background-color: blue;
  opacity: 0.02;
`;

const Container = styled(List)`
  display: none;
  max-width: 1440px;
  ul {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 0;
  }
  li.logo img {
    width: 154px;
    height: 20px;
  }

  ul li {
    color: #fff;
    padding: 0.5rem 0.5rem;
    outline: 0;
    cursor: pointer;
    margin-left: 2px;
    font-weight: 600;
  }
  li.search img {
    width: 30px;
    ${(props) => {
      if (props.close) {
        return `
        filter: invert(100%);
        height:100px
        `;
      }
      return ``;
    }}
  }
  li.en div {
    width: 28px;
    height: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    border: 1px solid #fff;
    border-radius: 3px;
    padding: 3px 5px;
    transition: linear 0.1s;
    color: #fff;
    font-size: 0.9em;
    text-transform: uppercase;
  }
  li.en div:hover {
    color: #000;
    background-color: #fff;
  }
  li.plus img {
    width: 22.4px;
  }
  ul.partTwo {
    width: 50%;
    max-width: 315px;
    justify-content: space-between;
  }
`;

const ListMobile = styled(List)`
  li {
    width:33%
  }
  .menu img{
    width: 22.4px
    filter: invert(100%)

  }
  .logo img {
    width: 55px
    margin-left: calc(50% - 27.5px)
  }
  .search{
    display: flex
    justify-content: flex-end;
  }
  .search img{
    width: 22.4px;
    margin-left: 12px
    ${(props) => {
      if (props.close) {
        return `
        filter: invert(100%);
        height:100px
        `;
      }
      return ``;
    }}
  }
  .search img.icon{
    filter: invert(100%);
  }
`;

const Menu = styled.div`
  display: inline-block;
  position: fixed;
  top: 64px;
  width: 90%;
  height: 100%;
  background: rgba(3, 37, 65, 0.9);
  backdrop-filter: blur(20px);
  z-index: 9999;
  transition: ease 0.3s;
  padding: 20px;
  box-sizing: border-box;
  ul {
    list-style-type: none;
    padding-left: 0;
  }
  li {
    padding-bottom: 10px;
  }
  a {
    text-decoration: none;
    color: #fff;
  }
  h4 {
    font-size: 21px;
    color: #fff;
    font-weight: 600;
    padding: 0;
  }
  ul.hide {
    display: none;
  }
  li > a {
    color: #919faa;
  }
`;

export { Screen, Header, Container, ListMobile, Menu };

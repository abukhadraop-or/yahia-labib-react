import styled from "styled-components";
import List from "../UI/List";

const Footers = styled.footer`
  width: 100%;
  background-color: #03243f;
  @media (min-width: 769px) {
    height: 350px;
    padding-top: 80px;
    padding-bottom: 80px;
  }
`;

const FooterList = styled(List)`
  max-width: 880px;
  align-items: flex-start;
  padding-top: 40px;
  padding-bottom: 40px;
  flex-direction: column;
  ul {
    list-style-type: none;
    padding-left: 0;
  }
  li {
    font-size: 15px;
    padding-bottom: 4px;
    line-height: 1.6em;
    max-width: 260px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #fff;
  }
  h3 {
    margin-top:40px
    font-size: 21px;
    color: #fff;
    font-weight: 600;
    padding: 0;
  }
  .join h2 {
    color: #2cb4e4;
    background-color: #fff;
    border: 1.5px solid #fff;
    border-radius: 5px;
    padding: 8px 10px;
    text-transform: uppercase;
    font-size: 1.2em;
    font-weight: bold;
  }
  .join img {
    display: none;
  }
  @media (min-width: 768px) {{
    padding: 0;
    flex-direction: row;
    h3 {
      margin-top:0;
    }
    .join {
      margin-top:-35px
      margin-right: 30px;
      position: relative;
      width: 224px;
      height: 220px;
    }
    .join h2 {
      position: absolute;
      top: 175px;
      left: 1px;
    }

    .join img {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
    }
  }}
`;
export { FooterList, Footers };

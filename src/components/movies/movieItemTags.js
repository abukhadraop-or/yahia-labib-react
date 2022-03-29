import styled from "styled-components";

const Screen = styled.div`
  position: fixed;
  z-index: 9;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  background-color: blue;
  opacity: 0.05;
`;

const Dots = styled.div`
  background-color: black;
  width: 10px;
  height: 10px;
  border-radius: 10px;
  position: absolute;
  top: 18px;
  right: 18px;
  opacity: 0.5;
  img {
    width: 20px;
    position: absolute;
    top: -5px;
    right: -5px;
  }
  img:hover {
    filter: invert(90%) sepia(70%) saturate(5258%) hue-rotate(245deg)
      brightness(109%) contrast(200%);
  }
  @media (max-width: 769px) {
    display: none;
  }
`;

const Detail = styled.div`
  margin: 2px;
  margin-top: 10px;
  padding: 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  h3 {
    margin-bottom: 1px;
    font-size: 1em;
    font-weight: 700;
  }
  h3:hover {
    color: #18b4e4;
  }
  p {
    padding: 5px;
    margin: 0;
    font-size: 0.9em;
    line-height: 1.2em;
  }
  div.vote {
    position: absolute;
    display: inline-block;
    background-color: green;
    width: 38px;
    height: 38px;
    border-radius:50%
    padding: 2px;
    top:-30px;
    text-align: center;
    @media (max-width: 769px) {
      display: none;
    }
    .voteInter {
      background-color: #081c22;
      border-radius:50%
      width: 95%;
      height: 95%;
      margin: auto auto
      display: flex;
      align-items: center;
      justify-content: center;
    }
    p.vote{
      color: #ffffff;
      padding:0;
      width:70%
    }
    p.percent {
      font-size:8px;
      color: #ffffff;
      padding:0;
      width:20%
      margin-left:-1px
      padding-bottom:3px;
    }
  }
  p.overview {
    margin-top: 10px;
    height: 2.7em;
    overflow: hidden;
    @media (min-width: 769px) {
      display: none;
    }
  }
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(20px);
  width: 100%;
  height: 100%;
  border-radius: 8px;
  z-index: 5;
  transition: linear 0.1s;
  opacity: 1;
`;

const ListMovie = styled.ul`
  list-style-type: none;
  width:100%
  padding:0
  justify-content: space-evenly;
  @media (min-width: 769px){
    display:flex
    align-content: center
    flex-wrap:wrap;
    width:calc(99% - 260px);
  }
`;
const Item = styled.li`
  @media (min-width: 769px) {
    width: calc(85% / var(--numberOfDiscoverColumns));
    margin: 0 1%;
    display: flex;
  }
`;
export { ListMovie, Item, Screen, Backdrop, Detail, Dots };

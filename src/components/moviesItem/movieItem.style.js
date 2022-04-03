import styled from 'styled-components';

export const Screen = styled.div`
  background-color: blue;
  height: 100%;
  opacity: 0.02;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 9;
`;

export const Dots = styled.div`
  display: none;
  @media (min-width: 769px) {
    background-color: black;
    border-radius: 0.625rem;
    display: block;
    height: 0.625rem;
    opacity: 0.5;
    position: absolute;
    right: 1.125rem;
    top: 1.125rem;
    width: 0.625rem;
  }
`;

export const MenuIcon = styled.img`
  position: absolute;
  right: -0.313rem;
  top: -0.313rem;
  width: 1.25rem;
  &:hover {
    filter: invert(90%) sepia(70%) saturate(5258%) hue-rotate(245deg)
      brightness(150%) contrast(200%);
  }
`;
export const MovieTitle = styled.h3`
  font-size: 1em;
  font-weight: 700;
  margin-bottom: 0.07rem;
  &:hover {
    color: #18b4e4;
  }
`;

export const Para = styled.p`
  font-size: 0.9em;
  line-height: 1.2em;
  margin: 0;
  padding: 0.3rem;
  &.vote {
    color: #ffffff;
    font-size: 0.75em;
    padding: 0;
    width: 60%;
  }
  &.percent {
    color: #ffffff;
    font-size: 0.25em;
    margin-left: -0.188rem;
    padding: 0;
    padding-bottom: 0.4rem;
    width: 25%;
  }
`;

export const Vote = styled.div`
  border-radius: 50%;
  display: inline-block;
  height: 2.4rem;
  padding: 0.1rem;
  position: absolute;
  text-align: center;
  top: -1.5rem;
  width: 2.4rem;
  background-image: ${(props) => {
    if (props.vote >= 7) {
      return `conic-gradient(#61d17a 0deg, #61d17a ${
        props.vote * 36
      }deg, #204529 ${props.vote * 36}deg)`;
    }
    return `conic-gradient(#d2d533 0deg, #d2d533 ${
      props.vote * 36
    }deg, #423d0f ${props.vote * 36}deg)`;
  }};
  @media (max-width: 769px) {
    display: none;
  }
`;
export const VoteInter = styled.div`
  align-items: center;
  background-color: #081c22;
  border-radius: 50%;
  display: flex;
  height: 96%;
  justify-content: center;
  margin: auto auto;
  width: 96%;
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 0.625rem;
  margin: 0.125rem;
  padding: 0.875rem;
  position: relative;
`;

export const Overview = styled.p`
  height: 2.7em;
  margin-top: 0.625rem;
  overflow: hidden;
  @media (min-width: 769px) {
    display: none;
  }
`;

export const Backdrop = styled.div`
  backdrop-filter: blur(1.25rem);
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 0.5rem;
  height: 100%;
  left: 0;
  opacity: 1;
  position: absolute;
  top: 0;
  transition: linear 0.1s;
  width: 100%;
  z-index: 5;
`;

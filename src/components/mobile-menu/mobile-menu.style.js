import styled from 'styled-components';

export const Ul = styled.ul`
  list-style-type: none;
  padding-left: 0;
  ul.hide {
    display: none;
  }
`;
export const Menu = styled.div`
  backdrop-filter: blur(1.25rem);
  background: #032541;
  box-sizing: border-box;
  display: inline-block;
  height: 100%;
  opacity: 0.9;
  padding: 1.25rem;
  position: fixed;
  top: 4rem;
  transition: ease 0.3s;
  width: 90%;
  z-index: 99;

  a {
    text-decoration: none;
    color: #fff;
  }
  li > a {
    color: #919faa;
  }
`;

export const Head = styled.h4`
  color: #fff;
  font-size: 1.315rem;
  font-weight: 600;
  padding: 0;
`;
export const Li = styled.li`
  padding-bottom: 0.625rem;
`;

export const Flink = styled.a`
  text-decoration: none;
  ${(props) => {
    switch (props.color) {
      case 'gray':
        return `color: '#919faa';`;
      default:
        return `color: '#fff';`;
    }
  }}
`;

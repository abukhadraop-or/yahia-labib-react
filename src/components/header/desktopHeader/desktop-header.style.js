import styled from 'styled-components';
import List from 'components/styles/List';

export const NavList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  padding-left: 0;
  &.partTwo {
    justify-content: space-between;
    max-width: 21.5rem;
    width: 50%;
  }
`;

export const Logo = styled.img`
  height: auto;
  width: 9.625rem;
`;

export const Search = styled.img`
  width: 1.875rem;
  ${(props) => {
    if (props.close) {
      return `
    filter: invert(100%);
    height:6.25rem
    `;
    }
    return ``;
  }}
`;
export const NavItem = styled.li`
  color: #fff;
  cursor: pointer;
  font-weight: 600;
  margin-left: 0.5rem;
  outline: 0;
  padding: 0.5rem 0.5rem;
`;
export const NavEn = styled.div`
  align-content: center;
  align-items: center;
  border-radius: 0.19rem;
  border: 0.063rem solid #fff;
  color: #fff;
  display: flex;
  font-size: 0.9em;
  height: 1.625rem;
  justify-content: center;
  padding: 0.19rem 0.313rem;
  text-transform: uppercase;
  transition: linear 0.1s;
  width: 1.75rem;
  &:hover {
    background-color: #fff;
    color: #000;
  }
`;
export const Container = styled(List)`
  display: none;
  max-width: 1440px;
`;

export const Plus = styled.img`
  width: 1.4rem;
`;

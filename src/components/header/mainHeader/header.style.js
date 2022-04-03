import styled from 'styled-components';

const Header = styled.header`
  align-items: center;
  animation: top-e 0.2s linear;
  background-color: #032541;
  display: flex;
  height: 4rem;
  justify-content: center;
  position: relative;
  width: 100%;
  z-index: 10;

  @media (min-width: 769px) {
    .mobile {
      display: none;
    }
    .desktop {
      display: flex;
    }
  }
`;

export default Header;

import styled, { keyframes } from 'styled-components';

const translating = keyframes`
  from {
    top:0;
  }

  to {
    display:fixed;
    top:-65px;
  }
`;

const Header = styled.header`
  align-items: center;
  animation: ${translating} 0.3s linear forwards;
  background-color: #032541;
  display: flex;
  height: 4rem;
  justify-content: center;
  position: relative;
  width: 100%;
  z-index: 8;

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

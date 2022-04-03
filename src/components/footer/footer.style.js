import styled from 'styled-components';
import List from '../styles/List';

const Footers = styled.footer`
  background-color: #03243f;
  width: 100%;
  @media (min-width: 769px) {
    height: 21.875rem;
    padding-bottom: 5rem;
    padding-top: 5rem;
  }
`;

const FooterList = styled(List)`
  align-items: flex-start;
  flex-direction: column;
  max-width: 55rem;
  padding-bottom: 2.5rem;
  padding-top: 2.5rem;
  ul {
    list-style-type: none;
    padding-left: 0;
  }
  li {
    color: #fff;
    font-size: 1em;
    line-height: 1.6em;
    max-width: 16.25rem;
    overflow: hidden;
    padding-bottom: 0.25rem;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  h3 {
    color: #fff;
    font-size: 21px;
    font-weight: 600;
    margin-top: 2.5rem;
    padding: 0;
  }
  .join h2 {
    background-color: #fff;
    border-radius: 0.32rem;
    border: 0.1rem solid #fff;
    color: #2cb4e4;
    font-size: 1.1em;
    font-weight: bold;
    padding: 0.5rem 0.5rem;
    text-transform: uppercase;
  }
  .join img {
    display: none;
  }
  @media (min-width: 768px) {
    padding: 0;
    flex-direction: row;
    h3 {
      margin-top: 0;
    }
    .join {
      height: 13.75rem;
      margin-right: 1.875rem;
      margin-top: -2.188rem;
      position: relative;
      width: 14rem;
    }
    .join h2 {
      left: 0.6rem;
      position: absolute;
      top: 10.94rem;
    }

    .join img {
      display: block;
      position: absolute;
      right: 0;
      top: 0;
    }
  }
`;
export { FooterList, Footers };

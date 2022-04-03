/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import Modal from 'components/styles/Modal';

const Modals = styled(Modal)`
  display: fixed;
  margin-left: -1px;
  top: -0.5rem;
  width: fit-content;
  ul {
    display: block;
    height: fit-content;
    list-style: none;
    padding-left: 0.13rem;
    width: 11.5rem;
  }
  ul li {
    color: black !important;
    font-family: 'Source Sans Pro', Arial, sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 22px;
    padding: 0.6rem 1.5rem;
  }
  li:hover {
    background-color: #eee;
  }
`;

export { Modals };

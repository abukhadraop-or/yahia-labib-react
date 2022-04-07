import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ModalStyle = styled.div`
  background-color: #ffffff;
  border-radius: 0.5rem;
  box-shadow: 0 0.125rem 0.5rem rgb(0 0 0 / 10%);
  display: ${(props) => `${props.display}`};
  font-size: 1em;
  line-height: 1.5;
  ${(props) => {
    if (props.header) {
      return `
        top:3.1rem
    `;
    }
    return `
      margin-left: 1.875rem;
      margin-top: 3.75rem;
    `;
  }}
  overflow: hidden;
  position: absolute;
  width: fit-content;
  width: fit-content;
  z-index: 11;
  hr {
    margin: 0;
  }
`;

/**
 * Handling the reuseable Modal.
 *
 * @param {Object} props
 * @param {boolean} props.header if true the modal is for header menu.
 * @param {String} props.display control the type of display.
 * @param {Element} props.children the elements inside the Modal.
 *
 * @return {JSX.element}
 */

function Modal({ children, display, header }) {
  return (
    <ModalStyle header={header} display={display}>
      {children}
    </ModalStyle>
  );
}

Modal.defaultProps = {
  display: 'flex',
  header: false,
};

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  display: PropTypes.string,
  header: PropTypes.bool,
};

export default Modal;

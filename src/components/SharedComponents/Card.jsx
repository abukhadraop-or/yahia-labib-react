import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CardS = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 0.125rem 0.5rem rgb(0 0 0 / 10%);
  margin: 1.25rem auto;
  overflow: hidden;
  width: 100%;
  ${(props) => {
    if (props.flex) {
      return `
        display: flex;
        flex-grow: 1;
      `;
    }
    return ``;
  }}
  ${(props) => {
    if (props.relative) {
      return `
        position: relative;
      `;
    }
    return ``;
  }}
  @media (min-width: 769px) {
    display: block;
  }
`;

/**
 * Handling the reuseable Card.
 *
 * @param {Object} props props.
 * @param {boolean} props.relative if true the Card is relative.
 * @param {boolean} props.flex if true the Card is flex.
 * @param {element} props.children contains the elements inside the card.
 *
 * @return {JSX.element}
 */

export default function Card({ children, relative, flex }) {
  return (
    <CardS relative={relative} flex={flex}>
      {children}
    </CardS>
  );
}

Card.defaultProps = {
  flex: false,
  relative: false,
};

Card.propTypes = {
  children: PropTypes.PropTypes.element.isRequired,
  flex: PropTypes.bool,
  relative: PropTypes.bool,
};

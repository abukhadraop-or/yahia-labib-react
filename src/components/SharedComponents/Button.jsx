import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SearchButton = styled.button`
  align-content: center;
  align-items: center;
  background-color: #2cb4e4;
  border-radius: ${(props) => props.rad || '1.5em'};
  border: none;
  color: #fff;
  display: inline-flex;
  font-size: 1.4em;
  font-weight: 600;
  height: 3.125;
  justify-content: center;
  line-height: 1em;
  padding: 0.875rem 1rem 1rem 1rem;
  width: 100%;
  ${(props) => {
    switch (props.changeColor) {
      case 'Blue':
        return `
        background-color: #2cb4e4;
        color: #fff;
        `;
      default:
        return `
        background-color: #eee;
        color: #767676;
        `;
    }
  }}
`;

/**
 * Handling the reuseable Button.
 *
 * @param {Object} props
 * @param {String} props.changeColor contains the color of the button.
 * @param {String} props.rad contains the border radius of the button.
 * @param {String} props.children contains the texts inside the button.
 * @param {Function} props.onClick contains function when click on the button.
 *
 * @return {JSX.element}
 */
export default function Button({ changeColor, rad, children, onClick }) {
  return (
    <SearchButton rad={rad} changeColor={changeColor} onClick={onClick}>
      {children}
    </SearchButton>
  );
}

Button.defaultProps = {
  changeColor: '',
  onClick: ()=>{},
  rad: '',
};

Button.propTypes = {
  changeColor: PropTypes.string,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  rad: PropTypes.string,
};

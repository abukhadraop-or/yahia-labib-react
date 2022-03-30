import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Modal from "../UI/Modal";

const Models = styled(Modal)`
  display: fixed;
  top: -8px;
  width: fit-content;
  margin-left: -1px;
  ul {
    list-style: none;
    width: 176px;
    height: fit-content;
    display: block;
  }
  ul li {
    color: black !important;
    font-size: 1rem;
    padding: 0.6rem 1.5rem;
    line-height: 22px;
    font-family: "Source Sans Pro", Arial, sans-serif;
    font-weight: 400;
  }
  li:hover {
    background-color: #eee;
  }
`;

function DesktopModal(props) {
  const { data } = props;
  return <Models>{data}</Models>;
}

DesktopModal.propTypes = {
  data: PropTypes.element.isRequired,
};

export default DesktopModal;

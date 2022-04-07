import React from 'react';
import PropTypes from 'prop-types';
import {
  ListUl,
  ListItem,
} from 'components/DesktopHeaderModal/desktop-modal.style';
import Modal from 'components/SharedComponents/Modal';

/**
 * Handling the menu when hover over desktop header items.
 *
 * @param {Object} props Props.
 * @param {Array} props.data Contains the texts needed to render the modal.
 *
 * @return {JSX.element}
 */
function DesktopModal({ data }) {
  /**
   * Handling the data should render.
   *
   * @param {Array} meta Contains the texts of the modal.
   *
   * @return {JSX.element}
   */
  const getList = (meta) => (
    <ListUl>
      {meta.map((item) => (
        <ListItem key={item}>{item}</ListItem>
      ))}
    </ListUl>
  );

  return <Modal header>{getList(data)}</Modal>;
}

DesktopModal.propTypes = {
  data: PropTypes.arrayOf(String).isRequired,
};

export default DesktopModal;

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
 * @param {Object} props
 * @param {Array} props.data contains the texts needed to render the modal.
 *
 * @return {JSX.element}
 */
function DesktopModal({ data }) {
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

import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/extensions
import { Modals } from 'components/desktop-header-modal/desktop-modal.js';

/**
 * Handling the menu when hover over desktop header items.
 *
 * @return {JSX.element}
 */
function DesktopModal(props) {
  const { data } = props;
  return <Modals>{data}</Modals>;
}

DesktopModal.propTypes = {
  data: PropTypes.element.isRequired,
};

export default DesktopModal;

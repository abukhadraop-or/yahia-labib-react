import React from 'react';
import PropTypes from 'prop-types';
import DesktopHeader from 'components/Header/DesktopHeader/DesktopHeader';
import MobileHeader from 'components/Header/MobileHeader/MobileHeader';
import Header from 'components/Header/MainHeader/header.style';

/**
 * Handling the which header appear.
 *
 * @param {Object} props
 * @param {function} props.showMenu The function that control the appearing of mobile left menu.
 *
 * @return {JSX.element}
 */
function MainNavigation({ showMenu }) {

  return (
    <Header>
      <DesktopHeader />
      <MobileHeader showMenu={showMenu} />
    </Header>
  );
}

MainNavigation.defaultProps = {
  showMenu: () => {},
};
MainNavigation.propTypes = {
  showMenu: PropTypes.func,
};

export default MainNavigation;

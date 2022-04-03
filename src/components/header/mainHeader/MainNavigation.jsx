import React from 'react';
import PropTypes from 'prop-types';
import DesktopHeader from 'components/header/desktopHeader/DesktopHeader';
import MobileHeader from 'components/header/mobileHeader/MobileHeader';
import Header from 'components/header/mainHeader/header.style';

/**
 * Handling the which header appear.
 *
 * @param {Object} props
 * @param {function} props.showMenu
 *
 * @return {JSX.element}
 */
function MainNavigation(props) {
  const { showMenu } = props;
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

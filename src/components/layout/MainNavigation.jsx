import React from "react";
import PropTypes from "prop-types";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";
import { Header } from "./headerTags";

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

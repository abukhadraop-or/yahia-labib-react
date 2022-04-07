import React from 'react';
import { ListItem, Image, Hr } from 'components/Menu/menu.style';
import Modal from 'components/SharedComponents/Modal';
import arrow from 'assets/pics/arrow.svg';

/**
 * Handling the menu of each card.
 *
 * @return {JSX.element}
 */
function Menu() {
  return (
    <Modal display="absolute">
      <ListItem>Want to rate or add this item to a list?</ListItem>
      <Hr />
      <ListItem>
        Login  <Image src={arrow} alt=">" />
      </ListItem>
      <Hr />
      <ListItem>Not a member?</ListItem>
      <Hr />
      <ListItem>
        Sign up and join the community
        <Image src={arrow} alt=">" />
      </ListItem>
    </Modal>
  );
}

export default Menu;

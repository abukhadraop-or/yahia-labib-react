import React from 'react';
import { ListItem, Image } from 'components/menu/menu.style';
import Modal from 'components/styles/Modal';
import arrow from 'assets/pics/arrow.svg';

/**
 * Handling the menu for each card.
 *
 * @return {JSX.element}
 */
function Menu() {
  return (
    <Modal>
      <ListItem>Want to rate or add this item to a list?</ListItem>
      <hr />
      <ListItem className="hover">
        Login <Image src={arrow} alt=">" />
      </ListItem>
      <hr />
      <ListItem>Not a member?</ListItem>
      <hr />
      <ListItem className="hover">
        Sign up and join the community
        <Image src={arrow} alt=">" />
      </ListItem>
    </Modal>
  );
}

export default Menu;

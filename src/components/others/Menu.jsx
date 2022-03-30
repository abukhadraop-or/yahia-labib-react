import React from "react";
import styled from "styled-components";
import Modal from "../UI/Modal";
import arrow from "../../assets/pics/arrow.svg";

const ListItem = styled.p`
  padding: 8px 20px;
  margin: 0;
  &.hover {
    color: #666;
    font-weight: bold;
  }
  &.hover:hover {
    background-color: #032541;
    color: #fff;
  }
  &.hover:hover img {
    filter: invert(100%);
  }
`;
function Menu() {
  return (
    <Modal>
      <ListItem>Want to rate or add this item to a list?</ListItem>
      <hr />
      <ListItem className="hover">
        Login <img src={arrow} alt=">" width="20px" />{" "}
      </ListItem>
      <hr />
      <ListItem>Not a member?</ListItem>
      <hr />
      <ListItem className="hover">
        Sign up and join the community <img src={arrow} alt=">" width="20px" />{" "}
      </ListItem>
    </Modal>
  );
}

export default Menu;

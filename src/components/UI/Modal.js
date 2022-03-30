import styled from "styled-components";
import Card from "./Card";

const Modal = styled(Card)`
  position: absolute;
  z-index: 11;
  width: fit-content;
  font-size: 1em;
  margin-top: 60px;
  margin-left: 30px;
  line-height: 1.5;
  hr {
    margin: 0;
  }
`;
export default Modal;

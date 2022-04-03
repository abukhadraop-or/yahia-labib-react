import styled from "styled-components";
import Card from "./Card";

const Modal = styled(Card)`
  font-size: 1em;
  line-height: 1.5;
  margin-left: 1.875rem;
  margin-top: 3.75rem;
  position: absolute;
  width: fit-content;
  z-index: 11;
  hr {
    margin: 0;
  }
`;
export default Modal;

import styled from 'styled-components';

export const Footers = styled.footer`
  background-color: #03243f;
  width: 100%;

  @media (min-width: 769px) {
    height: 21.875rem;
    padding-bottom: 5rem;
    padding-top: 5rem;
  }
`;

export const ListItem = styled.li`
  color: #fff;
  font-size: 1em;
  line-height: 1.6em;
  max-width: 16.25rem;
  overflow: hidden;
  padding-bottom: 0.25rem;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ListHeader = styled.h3`
  color: #fff;
  font-size: 1.32rem;
  font-weight: 600;
  margin-top: 2.5rem;
  padding: 0;

  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

export const JoinItem = styled.li`
  @media (min-width: 768px) {
    height: 13.75rem;
    margin-right: 1.875rem;
    margin-top: -2.188rem;
    position: relative;
    width: 14rem;
  }
`;

export const ListC = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

export const FooterList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  margin: 0 auto;
  padding: 1.25rem;
  width: 100%;
  align-items: flex-start;
  flex-direction: column;
  max-width: 55rem;
  padding-bottom: 2.5rem;
  padding-top: 2.5rem;

  @media (min-width: 768px) {
    padding: 0;
    flex-direction: row;
  }
`;

export const JoinHeader = styled.h2`
  background-color: #fff;
  border-radius: 0.32rem;
  border: 0.1rem solid #fff;
  color: #2cb4e4;
  font-size: 1em;
  font-weight: bold;
  padding: 0.5rem 0.5rem;
  text-transform: uppercase;

  @media (min-width: 768px) {
    left: 0.6rem;
    position: absolute;
    top: 10.94rem;
  }
`;

export const JoinImg = styled.img`
  display: none;

  @media (min-width: 768px) {
    display: block;
    position: absolute;
    right: 0;
    top: 0;
  }
`;

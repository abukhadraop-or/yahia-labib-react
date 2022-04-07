import React from 'react';
import logo from 'assets/pics/logo.svg';
import {
  Footers,
  FooterList,
  ListItem,
  ListHeader,
  ListC,
  JoinItem,
  JoinImg,
  JoinHeader,
} from 'components/Footer/footer.style';
import { footerData } from 'assets/data/data';

/**
 * Handling the website's footer.
 *
 * @return {JSX.element}
 */
function Footer() {

  /**
   * Handling the data should render.
   *
   * @param {Array} data Contains the texts of the footer list.
   *
   * @return {JSX.element}
   */
  const getList = (data) => (
    <ListC>
      {data.map((item) => (
        <ListItem key={item}>{item}</ListItem>
      ))}
    </ListC>
  );
  return (
    <Footers>
      <FooterList>
        <JoinItem>
          <JoinImg
            src={logo}
            alt="The Movie Database (TMDB)"
            width="130"
            height="94"
          />
          <JoinHeader>Join the Community</JoinHeader>
        </JoinItem>

        <ListItem>
          <ListHeader>The Basics</ListHeader>
          {getList(footerData[0])}
        </ListItem>

        <ListItem>
          <ListHeader>Get Involved</ListHeader>
          {getList(footerData[1])}
        </ListItem>

        <ListItem>
          <ListHeader>Community</ListHeader>
          {getList(footerData[2])}
        </ListItem>

        <ListItem>
          <ListHeader>Legal</ListHeader>
          {getList(footerData[3])}
        </ListItem>
      </FooterList>
    </Footers>
  );
}

export default Footer;

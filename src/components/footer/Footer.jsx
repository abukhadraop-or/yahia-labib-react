import React from 'react';
import logo from 'assets/pics/logo.svg';
import { Footers, FooterList } from 'components/footer/footer.style';

/**
 * Handling the website's footer.
 *
 * @return {JSX.element}
 */
function Footer() {
  return (
    <Footers>
      <FooterList>
        <li className="join">
          <img
            src={logo}
            alt="The Movie Database (TMDB)"
            width="130"
            height="94"
          />

          <h2>Join the Community</h2>
        </li>
        <li>
          <h3>The Basics</h3>
          <ul>
            <li>About TMDB</li>
            <li>Contact Us</li>
            <li>Support Forums</li>
            <li>API</li>
            <li>System Status</li>
          </ul>
        </li>
        <li>
          <h3>Get Involved</h3>
          <ul>
            <li>Contribution Bible</li>
            <li>Add New Movies</li>
            <li>Add New TV Show</li>
          </ul>
        </li>
        <li>
          <h3>Community</h3>
          <ul>
            <li>Guidelines</li>
            <li>Discussions</li>
            <li>Leaderboard</li>
            <li>Twitter</li>
          </ul>
        </li>
        <li>
          <h3>Legal</h3>
          <ul>
            <li>Terms of Use</li>
            <li>API Terms of Use</li>
            <li>Privacy Policy</li>
          </ul>
        </li>
      </FooterList>
    </Footers>
  );
}

export default Footer;

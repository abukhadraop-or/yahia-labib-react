import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  }
  html {
  --numberOfDiscoverColumns: 1;
  --discoverColumnPadding: 30px;
  }
@media only screen and (min-width: 700px) {
  html {
    --numberOfDiscoverColumns: 2;
  }
}
@media only screen and (min-width: 900px) {
  html {
    --numberOfDiscoverColumns: 3;
  }
}
@media only screen and (min-width: 1040px) {
  html {
    --numberOfDiscoverColumns: 4;
  }
}
@media only screen and (min-width: 1240px) {
  html {
    --numberOfDiscoverColumns: 5;
  }
}
`;

export default GlobalStyle;

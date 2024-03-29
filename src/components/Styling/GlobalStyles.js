import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'Calibri';
  font-style: italic;
  font-weight: 400;
  src: url("https://fonts.gstatic.com/l/font?kit=J7adnpV-BGlaFfdAhLQo6btP&skey=36a3d5758e0e2f58&v=v10") format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Calibri';
  font-style: italic;
  font-weight: 700;
  src: url("https://fonts.gstatic.com/l/font?kit=J7aYnpV-BGlaFfdAhLQgUp5aHRge&skey=8b00183e5f6700b6&v=v10") format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Calibri';
  font-style: normal;
  font-weight: 400;
  src: url("https://fonts.gstatic.com/l/font?kit=J7afnpV-BGlaFfdAhLEY6w&skey=a1029226f80653a8&v=v10") format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Calibri';
  font-style: normal;
  font-weight: 700;
  src: url("https://fonts.gstatic.com/l/font?kit=J7aanpV-BGlaFfdAjAo9_pxqHw&skey=cd2dd6afe6bf0eb2&v=v10") format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
  body {
      
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Calibri', sans-serif;

    scroll-behavior:smooth;
    background-color: white;
    a{
      text-decoration:none;
    }
    a:focus, a:hover, a:visited, a:link, a:active {
    text-decoration: none;
    cursor:pointer;
}
  }
  .ReactCollapse--collapse {
  transition: height 500ms;
}
  
  `;

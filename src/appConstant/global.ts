import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { MAIN_BG_COLOR } from './constants';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
 
  *,
*::before,
*::after {
  padding: 0;
  margin: 0;
  border: 0;
  box-sizing: border-box;
  font-family: Inter;
}
ol li,
ul li {
  list-style: none;
}
a,
a:visited {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}
img {
  vertical-align: top;
}
html,
body {
  font-size: 14px;
  line-height: 1;
  height: 100%;
  background-color: ${MAIN_BG_COLOR};
}
input[type="text"],
input[type="search"], input[type="email"],
input[type="tel"],
textarea {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
}
input::-webkit-search-decoration,
input::-webkit-search-cancel-button,
input::-webkit-search-results-button,
input::-webkit-search-results-decoration { 
  display: none; 
}
input,
button,
textarea {
  font-family: inherit;
}`;

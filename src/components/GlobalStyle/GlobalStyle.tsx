import { NamedExoticComponent } from 'react';
import { createGlobalStyle } from 'styled-components';

// fonts
import HarmanSansTtf from '@app/fonts/Harman-Sans/Harman-Sans.ttf';
import HarmanSansWoff from '@app/fonts/Harman-Sans/Harman-Sans.woff';
import HarmanSansWoff2 from '@app/fonts/Harman-Sans/Harman-Sans.woff2';

const GlobalStyle: NamedExoticComponent = createGlobalStyle`
  @font-face {
    font-family: ${(props) => props.theme.typography.baseFontFamily};
    font-style: normal;
    font-weight: 400;
    src: url("${HarmanSansTtf}") format("truetype"),
    url("${HarmanSansWoff}") format("woff"),
    url("${HarmanSansWoff2}") format("woff2");
  }

  body,
  #root {
    background-color: ${(props) => props.theme.palette.primary500};
    font-family: ${(props) => props.theme.typography.baseFontFamily}, sans-serif;
    color: ${(props) => props.theme.typography.baseFontColor};
    font-weight: ${(props) => props.theme.typography.baseFontWeight};
    min-height: 100vh;
    padding: 0;
    margin: 0;
  }

  a {
    cursor: pointer;
    transition: all 300ms ease-in-out;
  }
`;

export default GlobalStyle;

import React from "react";
import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`@font-face {
          font-family: "Proxima Nova";
           font-style: normal;
           font-display: swap;
          src: url("/src/assets/fonts/proximanova-light.woff2");
          font-weight: 100;
           unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }

      @font-face {
          font-family: "Proxima Nova";
           font-style: normal;
           font-display: swap;
          src: url("/src/assets/fonts/proximanova-regular.woff2");
          font-weight: normal;
           unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          
      }

      @font-face {
          font-family: "Proxima Nova";
           font-style: normal;
           font-display: swap;
          src: url("/src/assets/fonts/proximanova-semibold.woff2");
          font-weight: 500;
           unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }`}
  />
);

export default Fonts;

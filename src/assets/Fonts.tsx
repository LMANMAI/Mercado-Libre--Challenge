import React from "react";
import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`@font-face{
          font-family: "Proxima Nova";
           font-style: normal;          
         src: local("Proxima Nova"), url("/src/assets/fonts/proximanova-light.woff2") format('woff2');
          font-weight: 100;
         }

      @font-face {
          font-family: "Proxima Nova";
           font-style: normal;          
             src: local("Proxima Nova"), url("/src/assets/fonts/proximanova-regular.woff2") format('woff2');
          font-weight: normal;          
      }

      @font-face {
          font-family: "Proxima Nova";
           font-style: normal;          
             src: local("Proxima Nova"), url("/src/assets/fonts/proximanova-semibold.woff2") format('woff2');
          font-weight: 500;           
      }
      `}
  />
);

export default Fonts;

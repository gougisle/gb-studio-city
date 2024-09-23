import "./src/styles/global.scss";

import ReactPixel from "react-facebook-pixel";

export const onClientEntry = () => {
  // Initialize Facebook Pixel
  const advancedMatching = {}; // Optional advanced matching parameters
  const options = {
    autoConfig: true, // set pixel's autoConfig
    debug: false, // enable logs
  };
  ReactPixel.init("1588972778351848", advancedMatching, options);

  // Track page view
  ReactPixel.pageView();
};

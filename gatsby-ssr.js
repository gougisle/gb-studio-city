import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <noscript key="facebook-pixel-noscript">
      <img
        height="1"
        width="1"
        style={{ display: "none" }}
        src="https://www.facebook.com/tr?id=1588972778351848&ev=PageView&noscript=1"
        alt=""
      />
    </noscript>,
  ]);
};

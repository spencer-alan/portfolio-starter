import React from "react";

// Exporting the Wrapper and ContentWrap

// This Container component allows us to use a bootstrap container without worrying about class names
export const Wrapper = ({ children }) => {
  return <div id="wrapper" style={{ position: "relative", minHeight: "100%" }}>{children}</div>;
};

// This Row component lets us use a bootstrap row without having to think about class names
export const ContentWrap = ({ children }) => {
  return <div id="contentWrap" style={{ paddingBottom: "2.5rem" }}>{children}</div>;
};
import React from "react";

// Exporting the Wrapper and ContentWrap

// This Container component allows us to use a bootstrap container without worrying about class names
function Wrapper({ children }) {
  return <div id="wrapper" style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>{children}</div>;
};

export default Wrapper;
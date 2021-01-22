import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";

function mainTheme() {
  return createMuiTheme({
    palette: {
      type: "dark", // Switching the dark mode on is a single property value change.
    },
  });
}

export default mainTheme;

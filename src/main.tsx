import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import { mainTheme } from "@ssa-ui-kit/core";

import { GlobalStyles } from "./globalStyles.tsx";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={mainTheme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </StrictMode>
);

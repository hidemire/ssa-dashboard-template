import { Global, useTheme, css } from "@emotion/react";
import type { Theme as T } from "@ssa-ui-kit/core";

declare module "@emotion/react" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface Theme extends T {}
}

export const GlobalStyles = () => {
  const theme = useTheme();
  return (
    <Global
      styles={css`
        @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap");

        * {
          outline: none;

          box-sizing: border-box;
          font-family: Manrope, sans-serif;

          &::after,
          &::before {
            box-sizing: border-box;
          }
        }

        #root {
          height: 100vh;
        }

        html {
          font-size: 1rem;
          font-weight: 400;
        }

        body {
          margin: 0;
          padding: 0;
          color: ${theme.colors.greyDarker};
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p {
          margin: 0;
          padding: 0;
        }
      `}
    />
  );
};

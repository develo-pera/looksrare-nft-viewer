import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const styles = {
    global: {
      "html, body": {
        background: "var(--bg-color)",
        color: "var(--text-color)",
      },
      a: {
        color: "var(--primary-green)",
      }
    },
  }

const theme = extendTheme({ config, styles });

export default theme;
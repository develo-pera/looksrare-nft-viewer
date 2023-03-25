import { ChakraProvider } from "@chakra-ui/react";

import "@/styles/main.scss";
import theme from "@/lib/theme";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

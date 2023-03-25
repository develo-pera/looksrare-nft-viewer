import { ChakraProvider } from "@chakra-ui/react";

import "@/styles/main.scss";
import theme from "@/lib/theme";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ChakraProvider theme={theme}>
      {
        getLayout(<Component {...pageProps} />)
      }
    </ChakraProvider>
  )
}

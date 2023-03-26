import { ChakraProvider } from "@chakra-ui/react";
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { mainnet } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { QueryClient, QueryClientProvider } from "react-query";

import "@rainbow-me/rainbowkit/styles.css";
import "@/styles/main.scss";
import theme from "@/lib/theme";

const { chains, provider } = configureChains(
  [mainnet],
  [
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: "LooksRare NFT viewer",
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
});

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ChakraProvider theme={theme}>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider theme={darkTheme()} chains={chains}>
          <QueryClientProvider client={queryClient}>
            {
              getLayout(<Component {...pageProps} />)
            }
          </QueryClientProvider>
        </RainbowKitProvider>
      </WagmiConfig>
    </ChakraProvider>
  )
}

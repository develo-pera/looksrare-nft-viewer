import Head from "next/head";
import { Text } from "@chakra-ui/react";
import Navigation from "@/components/common/navigation/navigation";

export default function Home() {
  return (
    <>
      <Head>
        <title>LooksRare NFT Viewer</title>
        <meta name="description" content="LooksRare interview task" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navigation />
        <Text>LooksRare NFT Viewer</Text>
      </main>
    </>
  )
}

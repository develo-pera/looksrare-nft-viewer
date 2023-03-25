import Head from "next/head";
import { Text } from "@chakra-ui/react";
import mainLayout from "@/components/layouts/mainLayout";
import ContentWrapper from "@/components/common/content-wrapper/contentWrapper";

export default function Home() {
  return (
    <>
      <Head>
        <title>LooksRare NFT Viewer</title>
        <meta name="description" content="LooksRare Frontend interview task" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ContentWrapper>
          <Text>LooksRare NFT Viewer</Text>
        </ContentWrapper>
      </main>
    </>
  )
}

Home.getLayout = mainLayout;

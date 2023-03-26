import Head from "next/head";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
import { Box, Button, Container, Text } from "@chakra-ui/react";
import mainLayout from "@/components/layouts/mainLayout";
import ContentWrapper from "@/components/common/content-wrapper/contentWrapper";
import Form from "@/components/home/form/form";

export default function Home() {
  const BAYC1Link = "/collections/0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D/1";

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
          <Container py={50} maxW="md">
            <Text mb={3}>Search for NFT:</Text>
            <Form />
            <Text my={10} align="center">or</Text>
            <Link as={NextLink} href={BAYC1Link}>
              <Button
                size="lg"
                width="100%"
                bg="var(--primary-green)"
                color="white"
              >
                View BAYC #1
              </Button>
            </Link>
          </Container>
        </ContentWrapper>
      </main>
    </>
  )
}

Home.getLayout = mainLayout;

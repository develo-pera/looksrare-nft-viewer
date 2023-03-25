import { Box, Text } from "@chakra-ui/react";
import ContentWrapper from "@/components/common/content-wrapper/contentWrapper";

const Footer = () => (
  <Box
    mt="auto"
  >
    <ContentWrapper>
      <Text
        align="center"
        fontSize="xs"
      >
        &copy; LooksRare NFT Viewer App | Made by
        {" "}
        <a
          href="https://twitter.com/0xdevelopera"
          target="_blank"
          rel="noopener noreferrer"
        >
          @developera
        </a>
        <br />
        Project for LooksRare Frontend Interview
      </Text>
    </ContentWrapper>
  </Box>
);

export default Footer;
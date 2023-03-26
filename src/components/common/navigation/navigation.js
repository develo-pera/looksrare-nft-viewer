import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
import { Flex, Image } from "@chakra-ui/react";
import ContentWrapper from "@/components/common/content-wrapper/contentWrapper";
import CustomConnectButton from "@/components/common/connect-button/connect-button";

const Navigation = () => {
  return (
    <ContentWrapper>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        gap={10}
      >
        <Link as={NextLink} href="/">
          <Image
            width="120px"
            minWidth="120px"
            src="/logo.svg"
            alt="LooksRare NFT viewer logo"
          />
        </Link>
        <CustomConnectButton />
      </Flex>
    </ContentWrapper>
  );
}

export default Navigation;
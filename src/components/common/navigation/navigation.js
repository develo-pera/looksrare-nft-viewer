import { Button, Flex, Image } from "@chakra-ui/react";
import WalletIcon from "@/components/common/icons/wallet";

const Navigation = () => (
  <Flex
    px="8"
    py="4"
    justifyContent="space-between"
    alignItems="center"
  >
    <Image
      width="120px"
      src="/logo.svg"
      alt="LooksRare NFT viewer logo"
    />
    <Button
      width={12}
      height={12}
    >
      <WalletIcon width="20px" height="20px" />
    </Button>
  </Flex>
);

export default Navigation;
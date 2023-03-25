import { Box, Flex } from "@chakra-ui/react";
import Navigation from "@/components/common/navigation/navigation";
import Footer from "@/components/common/footer/footer";

export default function mainLayout(page) {
  return (
    <Flex
      minHeight="100vh"
      flexDirection="column"
    >
      <Navigation />
      {page}
      <Footer />
    </Flex>
  );
}
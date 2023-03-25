import { Box } from "@chakra-ui/react";

const ContentWrapper = ({children}) => (
  <Box
    px="8"
    py="4"
  >
    {children}
  </Box>
);

export default ContentWrapper;
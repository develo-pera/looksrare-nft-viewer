import { Box, Button, FormControl, Input } from "@chakra-ui/react";

const Form = () => (
  <Box>
    <FormControl mb={2}>
      <Input placeholder="Collection Address" isRequired />
    </FormControl>
    <FormControl mb={2}>
      <Input placeholder="Token id" isRequired />
    </FormControl>
    <Button
      size="lg"
      width="100%"

    >
      View NFT
    </Button>
  </Box>
);

export default Form;
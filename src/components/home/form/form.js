import { useState } from "react";
import { useRouter } from "next/router";
import { Box, Button, FormControl, Input } from "@chakra-ui/react";
import tokenId from "@/pages/token/[address]/[tokenId]";

const Form = () => {
  const router = useRouter()
  const [addressInput, setAddressInput] = useState();
  const [idInput, setIdInput] = useState();

  const handleAddressInputChange = (e) => setAddressInput(e.target.value.trim());
  const handleIdInputChange = (e) => setIdInput(e.target.value.trim());

  const isAddressInputError = addressInput === "";
  const isIdInputError = idInput === "";

  const handleViewNFTClick = async () => {
    if (
      isAddressInputError ||
      isAddressInputError ||
      !addressInput ||
      !idInput
    ) {
      return;
    }

    await router.push(`/token/${addressInput}/${idInput}`);
  }

  return (
    <Box>
      <FormControl mb={2}>
        <Input
          placeholder="Collection Address"
          isRequired
          value={addressInput}
          onChange={handleAddressInputChange}
          isInvalid={isAddressInputError}
        />
      </FormControl>
      <FormControl mb={2}>
        <Input
          placeholder="Token id"
          isRequired
          value={idInput}
          onChange={handleIdInputChange}
          isInvalid={isIdInputError}
        />
      </FormControl>
      <Button
        size="lg"
        width="100%"
        onClick={handleViewNFTClick}
      >
        View NFT
      </Button>
    </Box>
  );
}

export default Form;
import { Badge, Link, Text } from "@chakra-ui/react";
import { getAccount } from "@wagmi/core";
import { ethers } from "ethers";

const NFTData = ({
  name,
  description,
  tokenId,
  owner,
  rarityUrl,
  rarityRank,
  totalSupply,
  collectionName
}) => {
  const account = getAccount();
  // Address checksum just in case
  const isOwner = ethers.utils.getAddress(owner) === ethers.utils.getAddress(account.address || ethers.constants.AddressZero);
  return (
    <>
      <Text
        fontSize="xl"
        fontWeight="bold"
        color="white"
        mb={5}
      >
        {name}
      </Text>
      <Text mb={3}>{description}</Text>
      <Text fontSize="sm">Token id: {tokenId}</Text>
      <Text fontSize="sm" noOfLines={2}>Owner: {owner}</Text>
      <Text fontSize="sm">
        Rarity:
        {" "}
        <Link
          href={rarityUrl}
          isExternal
          color="white"
          textDecoration="underline"
        >
          {rarityRank}
        </Link>
        {" / "}
        {totalSupply}
      </Text>
      <Text fontSize="sm">Collection Name: {collectionName}</Text>
      {
        isOwner &&
        <Badge
          mt={5}
          colorScheme="green"
        >
          You&apos;re the owner of this token
        </Badge>
      }
    </>
  )
}

export default NFTData;
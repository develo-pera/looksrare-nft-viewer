import { useQuery } from "react-query";
import { gql, request } from "graphql-request";
import ContentWrapper from "@/components/common/content-wrapper/contentWrapper";
import { Container, Image, Spinner, Text } from "@chakra-ui/react";
import NFTData from "@/components/token/nft-data/nftData";

const graphqlEndpoint = "https://graphql.looksrare.org/graphql";

const SingleNFT = ({collection, tokenId}) => {
  const { isLoading, error, data } = useQuery(["token"], async () => {
      const data = await request(
        graphqlEndpoint,
        gql`
            query {
                token(collection: "${collection}", tokenId: "${tokenId}") {
                    tokenId
                    name
                    description
                    image {
                        src
                    }
                    rarity {
                        provider
                        rank
                        url
                    }
                    collection {
                        name
                        totalSupply
                    }
                    owners {
                        owner {
                            ...ExtendedOwnerFragment
                        }
                    }
                }
            }

            fragment ExtendedOwnerFragment on User {
                address
            }
        `
      );

      return data;
    }
  )

  if (isLoading) {
    return (
      <ContentWrapper>
        <Container textAlign="center" py={50} maxW="md">
          <Spinner />
        </Container>
      </ContentWrapper>
    )
  }

  if (error) {
    return (
      <ContentWrapper>
        <Container textAlign="center" py={50} maxW="md">
          <Text>An error has occurred.</Text>
        </Container>
      </ContentWrapper>
    )
  }

  if (data && !data.token) {
    return (
      <ContentWrapper>
        <Container textAlign="center" py={50} maxW="md">
          <Text>Token not found.</Text>
        </Container>
      </ContentWrapper>
    )
  }

  console.log(data);

  return (
    <ContentWrapper>
      <Container py={50} maxW="md">
        <Image
          src={data.token?.image?.src}
          mb={10}
        />
        <NFTData
          name={data.token?.name}
          description={data.token?.description}
          tokenId={data.token?.tokenId}
          owner={data.token?.owners[0].owner?.address}
          rarityUrl={data.token?.rarity[0]?.url}
          rarityRank={data.token?.rarity[0]?.rank}
          totalSupply={data.token?.collection?.totalSupply}
          collectionName={data.token?.collection?.name}
        />
      </Container>
    </ContentWrapper>
  )
}

export default SingleNFT;
import { useRouter } from "next/router";
import mainLayout from "@/components/layouts/mainLayout";
import SingleNFT from "@/components/token/single-nft/singleNFT";
const NFTPage = () => {
  const router = useRouter()
  const { address, tokenId } = router.query;

  if (address && tokenId) {
   return <SingleNFT collection={address} tokenId={tokenId} />
  }

  return <></>
}

export default NFTPage;

NFTPage.getLayout = mainLayout;
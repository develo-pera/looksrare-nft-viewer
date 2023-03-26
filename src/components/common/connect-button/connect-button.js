import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Button } from "@chakra-ui/react";
import WalletIcon from "@/components/common/icons/wallet";

const renderButton = ({
  account,
  chain,
  openAccountModal,
  openChainModal,
  openConnectModal,
  authenticationStatus,
  mounted
}) => {
  const connected =
    account &&
    chain &&
    (!authenticationStatus ||
      authenticationStatus === "authenticated");

  if (!mounted) return;

  if (!connected) {
    return (
      <Button
        size="lg"
        onClick={openConnectModal}
      >
        <WalletIcon width="20px" height="20px"/>
      </Button>
    );
  }

  if (chain.unsupported) {
    return (
      <Button
        size="lg"
        onClick={openChainModal}
      >
        Wrong network
      </Button>
    );
  }

  return (
    <Button
      size="lg"
      onClick={openAccountModal}

    >
      {account.displayName}
    </Button>
  );
}

const CustomConnectButton = () => {
  return (
    <ConnectButton.Custom>
      {(props) => renderButton(props)}
    </ConnectButton.Custom>
  );
};

export default CustomConnectButton;
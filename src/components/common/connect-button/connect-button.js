import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Button } from "@chakra-ui/react";
import WalletIcon from "@/components/common/icons/wallet";

const CustomConnectButton = () => {
  return (
    <ConnectButton.Custom>
      {({
          account,
          chain,
          openAccountModal,
          openChainModal,
          openConnectModal,
          authenticationStatus,
        }) => {
        const connected =
          account &&
          chain &&
          (!authenticationStatus ||
            authenticationStatus === "authenticated");

        return (
          <div>
            {(() => {
              if (!connected) {
                return (
                  <Button
                    height={12}
                    p={4}
                    onClick={openConnectModal}
                  >
                    <WalletIcon width="20px" height="20px" />
                  </Button>
                );
              }
              if (chain.unsupported) {
                return (
                  <Button
                    height={12}
                    p={4}
                    onClick={openChainModal}
                  >
                    Wrong network
                  </Button>
                );
              }
              return (
                <Button
                  height={12}
                  p={4}
                  onClick={openAccountModal}
                >
                  {account.displayName}
                </Button>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

export default CustomConnectButton;
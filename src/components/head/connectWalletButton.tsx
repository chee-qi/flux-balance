"use client";
import { ConnectButton } from "@mysten/dapp-kit";

export function ConnectWalletButton() {
  return (
    <ConnectButton
      style={{
        backgroundColor: "#6E3CBC",
        color: "#FFFFFF",
        borderRadius: "8px",
        padding: "10px 16px",
        fontWeight: "bold",
      }}
    />
  );
}

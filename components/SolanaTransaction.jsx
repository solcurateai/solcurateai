"use client";
import React, { useState, useEffect, useCallback } from "react";
import {
  Connection,
  Keypair,
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import WalletAlert from "./WalletAlert";
import { HOST } from "@/constants";
import { useSelector } from "react-redux";
import ProUpgradeAlert from "./ProUpgradeAlert";
import { useRouter } from "next/navigation";

// Replace with your QuickNode endpoint URL
const QUICKNODE_URL =
  "https://alien-icy-shape.solana-devnet.quiknode.pro/1f27f94b8b39c9b4afec7e6eac7eabbd3474a373";

const SolanaTransaction = () => {
  const router = useRouter();
  const { accessToken } = useSelector((state) => state.user);
  const [sendingTransac, setSendingTransac] = useState(false);
  const [theText, setTheText] = useState(""); // Assuming `thesummary.payment` is available elsewhere
  const [transactionSignature, setTransactionSignature] = useState(null);
  const [connection, setConnection] = useState(
    new Connection(QUICKNODE_URL, "confirmed")
  );
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [isProAlertOpen, setIsProAlertOpen] = useState(false);

  const { publicKey, sendTransaction } = useWallet(); // Solana wallet adapter hooks

  // Update connection when component mounts
  useEffect(() => {
    setConnection(new Connection(QUICKNODE_URL, "confirmed"));
  }, []);

  // Transaction function with useCallback for optimization
  const sendSolTransaction = useCallback(async () => {
    if (!publicKey) {
      console.log("Wallet not connected!");
      setIsAlertOpen(true);
      throw new WalletNotConnectedError();
    }

    try {
      setSendingTransac(true);
      setTheText("Sending Payment...");

      // Log the user's current balance
      const balance = await connection.getBalance(publicKey);
      console.log("Current balance:", balance / LAMPORTS_PER_SOL);

      // Define the lamports to send (convert SOL to lamports)
      const lamportsToSend = LAMPORTS_PER_SOL * 0.01; // Example: Sending 0.01 SOL

      // Create a new transaction to send SOL
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey, // Sender's wallet (connected wallet)
          toPubkey: new PublicKey(
            "Eij13YPVMnBWjPaTXxyhh7pQnu4QxW5ZoMtKD7yE92KC"
          ), // Replace with recipient's address
          lamports: lamportsToSend, // Amount in lamports
        })
      );

      // Send the transaction
      const signature = await sendTransaction(transaction, connection);
      setTransactionSignature(signature);
      console.log(`Transaction sent with signature: ${signature}`);

      // Confirm the transaction
      await connection.confirmTransaction(signature, "confirmed");
      console.log("Transaction confirmed!");
      await upgradeToPro();
      setSendingTransac(false);
    } catch (error) {
      console.error("Transaction failed:", error);
      setSendingTransac(false);
      // Handle error notification (e.g., show toast message)
      // toast.warning("Something went wrong, try again!", { autoClose: 2000, theme: "colored" });
    }
  }, [publicKey, sendTransaction, connection]);

  const upgradeToPro = async () => {
    const currentDate = new Date().toJSON().slice(0, 10);
    try {
      const response = await fetch(`${HOST}/User/Subscribe/CreateSub`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          subscriptionType: "premium",
          subscriptionDate: currentDate,
        }),
      });

      const data = await response.json();
      if (data.success === true) {
        localStorage.setItem("version", "premium");
      } else {
        localStorage.setItem("version", "premium");
      }

      setIsProAlertOpen(true);
    } catch (error) {
      console.log("Error upgrading to pro", error);
    }
  };

  const handleCloseProAlert = () => {
    setIsProAlertOpen(false);
    router.push("/app");
    window.location.reload();
  };

  return (
    <>
      <div className="text-white">
        {sendingTransac ? (
          <div className="flex justify-center">
            <button className="bg-[#FF7D20] flex gap-2 text-white font-semibold px-8 py-3 rounded-full hover:bg-[#e66f1a] transition-all duration-300">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              <span> Processing...</span>
            </button>
          </div>
        ) : (
          <button
            onClick={sendSolTransaction}
            className="bg-[#FF7D20] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#e66f1a] transition-all duration-300"
          >
            Subscribe Now
          </button>
        )}

        {transactionSignature && (
          <div>
            <p>Transaction Signature:</p>
            <a
              href={`https://explorer.solana.com/tx/${transactionSignature}?cluster=devnet`} // Replace with appropriate cluster
              target="_blank"
              rel="noreferrer"
            >
              {transactionSignature}
            </a>
          </div>
        )}
      </div>
      <WalletAlert isOpen={isAlertOpen} onClose={() => setIsAlertOpen(false)} />
      <ProUpgradeAlert isOpen={isProAlertOpen} onClose={handleCloseProAlert} />
    </>
  );
};

export default SolanaTransaction;

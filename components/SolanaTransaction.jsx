"use client";
import React, { useState, useEffect, useCallback } from "react";
import { Connection, Keypair, LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import { Button } from "./ui/button"; // Assuming you have a custom Button component
import { revalidatePath } from "next/cache";



// Replace with your QuickNode endpoint URL
const QUICKNODE_URL = "https://alien-icy-shape.solana-devnet.quiknode.pro/1f27f94b8b39c9b4afec7e6eac7eabbd3474a373";

const SolanaTransaction = () => {
    const [sendingTransac, setSendingTransac] = useState(false);
    const [theText, setTheText] = useState(""); // Assuming `thesummary.payment` is available elsewhere
    const [transactionSignature, setTransactionSignature] = useState(null);
    const [connection, setConnection] = useState(new Connection(QUICKNODE_URL, "confirmed"));
    
    const { publicKey, sendTransaction } = useWallet(); // Solana wallet adapter hooks
    
    // Update connection when component mounts
    useEffect(() => {
      setConnection(new Connection(QUICKNODE_URL, "confirmed"));
    }, []);
  
    // Transaction function with useCallback for optimization
    const sendSolTransaction = useCallback(async () => {
      if (!publicKey) {
        console.log("Wallet not connected!");
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
            toPubkey: new PublicKey("9Y8TbTVfNcPPhfRerDhLQdGm2JHXaKKSLBYwLKvEqKvP"), // Replace with recipient's address
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
        setSendingTransaction(false); 
         revalidatePath("/app");
  
      } catch (error) {
        console.error("Transaction failed:", error);
        setSendingTransac(false);
        // Handle error notification (e.g., show toast message)
        // toast.warning("Something went wrong, try again!", { autoClose: 2000, theme: "colored" });
      }
    }, [publicKey, sendTransaction, connection]);

    
    return (
      <div className="text-white">
        <Button onClick={sendSolTransaction} className="bg-blue-500 text-white p-2">
          {sendingTransac ? "Sending..." : "Send 0.01 SOL"}
        </Button>
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
    );
  };
  
  export default SolanaTransaction;
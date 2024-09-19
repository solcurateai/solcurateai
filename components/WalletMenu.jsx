"use client"

import React, { useState, useEffect } from 'react';
import { ChevronDown, LogOut, PlusCircle } from 'lucide-react';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from 'next/image';
import Link from 'next/link';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const WalletMenu = () => {
  const { connection } = useConnection();
  const { publicKey, disconnect } = useWallet();
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    if (publicKey) {
      connection.getBalance(publicKey).then((balance) => {
        setBalance((balance / 1e9).toFixed(2)); // Convert lamports to SOL, and limit to 2 decimal places
      });
    }
  }, [publicKey, connection]);

  return (
    
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {publicKey ? (
          <div className="flex items-center bg-black-3 p-4 rounded-xl gap-2 lg:gap-4">
            <Image src="/icons/avatar1.svg" alt="Avatar" width={28} height={28} />
            <span className="text-lg max-lg:hidden font-medium text-white font-quicksand truncate">
              {publicKey.toBase58().slice(0, 4)}...{publicKey.toBase58().slice(-4)}
            </span>
            <ChevronDown />
          </div>
        ) : (
          <WalletMultiButton style={{}} />
        )}
      </DropdownMenuTrigger>
      {publicKey && (
        <DropdownMenuContent align="end" className="bg-black-5 flex flex-col gap-3 p-2">
          
            <div className="flex items-center bg-black-3 p-4 rounded-xl gap-4">
              <Image src="/icons/avatar1.svg" alt="Avatar" width={28} height={28} />
              <div className="flex flex-col">
                <span className="text-lg font-medium text-white font-quicksand truncate">
                  {publicKey.toBase58().slice(0, 4)}...{publicKey.toBase58().slice(-4)}
                </span>
                {balance !== null && (
                  <span className="text-sm text-gray-400 font-quicksand">{balance} SOL</span>
                )}
              </div>
            </div>
            {/* <Link href="/create-org" className="flex justify-start items-center p-4 rounded-xl gap-4">
              <PlusCircle />
              <span className="text-lg font-medium text-gray-200 font-quicksand">Add new wallet</span>
            </Link>
            <Button
              type="button"
              onClick={disconnect} // Handle wallet disconnect
              className="flex justify-start items-center text-red-600 p-4 rounded-xl gap-4"
            >
              <LogOut />
              <span className="text-lg font-medium font-quicksand">Sign Out</span>
            </Button> */}
        </DropdownMenuContent>
      )}
    </DropdownMenu>
  );
};

export default WalletMenu;

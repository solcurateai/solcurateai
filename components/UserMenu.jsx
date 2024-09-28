"use client"
import React from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '@/redux/slices/userSlices';
import { useRouter } from 'next/navigation';

const UserMenu = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.user); // Access userData from Redux store

  const handleLogout = () => {
    dispatch(logout());
    router.replace('/login'); // Redirect to login after logging out
  };

  return (
    <DropdownMenu className="border-none">
      <DropdownMenuTrigger asChild>
        <div className="flex items-center bg-black-3 p-4 rounded-xl gap-2 lg:gap-4">
          <Image src="/icons/online.svg" alt="Coin" width={28} height={28} />
          <span className="text-lg max-lg:hidden font-medium text-white truncate font-quicksand">
            {userData?.username || 'Guest'} {/* Show 'Guest' if no userData */}
          </span>
          <ChevronDown />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-black-5 flex flex-col p-2">
          <div className="flex items-center bg-black-3 p-4 mb-4 rounded-xl gap-4">
            <Image src="/icons/online.svg" alt="Coin" width={28} height={28} />
            <span className="text-lg font-medium text-white font-quicksand">
              {userData?.username || 'Guest'} {/* Show 'Guest' if no userData */}
            </span>
          </div>

          <Button
            type="button"
            onClick={handleLogout}
            className="flex bg-transparent hover:bg-black-3 justify-start items-center text-red-600 h-14 rounded-xl gap-4"
          >
            <LogOut />
            <span className="text-lg font-medium font-quicksand">Sign out</span>
          </Button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;

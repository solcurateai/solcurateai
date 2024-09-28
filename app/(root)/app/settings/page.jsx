"use client"
import React, { useState } from 'react'
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { settingLinks, shortenAddress } from '@/constants';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { BsTwitter } from 'react-icons/bs'
import { IoWalletOutline } from 'react-icons/io5'



const Settings = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.user); // Access userData from Redux store
  const [joinDate] = useState('2024-09-24');
  const [isProUser, setIsProUser] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');

  return (
    <div className="flex flex-col w-full bg-[#0A1117] rounded-lg p-5">
      <h1 className="text-3xl font-bold font-quicksand">User Profile</h1>
      <div className="mt-10 space-y-4 w-full">

        <div className="flex lg:flex-row flex-col sm:w-full justify-center lg:justify-start gap-2 items-center">
          <Image src="/icons/online.svg" alt="Profile" className="rounded-full" width={50} height={50} />
          <p className='text-xl font-bold'>{userData?.username || 'Guest'}</p>
        </div>
        <button
          className="mt-2 bg-[#ff7d20] text-white py-2 px-4 rounded hover:bg-[#ff9d4d] transition-colors duration-300"
        >
          Update Username
        </button>

        {/* User Status (Pro/Free) */}
        <div className="mb-6">
          <p className="text-lg font-semibold">
            Status: <span className={`font-bold ${isProUser ? 'text-green-400' : 'text-red-500'}`}>{isProUser ? 'Pro User' : 'Free User'}</span>
          </p>
        </div>

        {/* Join Date */}
        <div className="mb-6">
          <p className="text-lg font-semibold">Joined on: {new Date(joinDate).toLocaleDateString()}</p>
        </div>

        {/* Wallet Connection Section */}
        <div className='profSection mt-4'>
          <h1 className='fontBold text-lg'>Accounts</h1>

          <div className='mt-4'>
            <div className='flex items-center space-x-2 w-full'>
              <div className='bg-[#2b3656] flex flex-1 items-center space-x-2 p-3 rounded-md'>
                <BsTwitter size={30} className='pr-2 border-r-2 border-[#fa610289]' />
                <p>Connect your twitter</p>
              </div>
              {/* {userInfo && userInfo.twitterId ? (
                <button className='button unlink' >Remove</button>
              ) : ( */}
              <button className='main-gradient text-slate-50 font-semibold px-5 py-3 rounded-md'>Connect</button>
              {/* )} */}

            </div>


            <div className='flex items-center mt-5 space-x-2 w-full'>
              <div className='bg-[#2b3656] flex flex-1 items-center space-x-2 p-3 rounded-md'>
                <IoWalletOutline size={30} className='pr-2 border-r-2 border-[#fa610289]' />
                <p>{shortenAddress("Eij13YPVMnBWjPaTXxyhh7pQnu4QxW5ZoMtKD7yE92KC")}</p>
              </div>
              <button className='main-gradient text-slate-50 font-semibold px-5 py-3 rounded-md'>Copy</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Settings
import FormField from '@/components/FormField';
import SettingSidebar from '@/components/SettingSidebar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { settingLinks } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Settings = () => {
  return (
    <div className="flex flex-col w-full">
        <h1 className="text-3xl font-bold font-quicksand">Edit Profile</h1>
        <div className="mt-10 space-y-4 w-full">
          <div>
            <label className="block text-base font-semibold text-gray-100">Avatar</label>
            <div className="sm:flex sm:w-full justify-start gap-5 items-center">
              <Image src="/icons/online.svg" alt="Profile" className="rounded-full" width={120} height={120} />
              <div className="gap-4 flex flex-col">
                <Button className="w-fit">Upload new image</Button>
                <p className="w-60 text-muted-foreground text-sm">At least 800x800 px recommended.
                JPG or PNG and GIF is allowed</p>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-base font-semibold text-gray-100">Name</label>
            <Input
              type="text"
              placeholder="Username or email"
              value="aliyukamilu@gmail.com"
              required 
              className="bg-black-2 block w-full h-[52px] text-sm p-2 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
            />
          </div>
          <div>
            <label className="block text-base font-semibold text-gray-100">Location</label>
            <Input
              type="text"
              placeholder="Username or email"
              value="aliyukamilu@gmail.com"
              required 
              className="bg-black-2 block w-full h-[52px] text-sm p-2 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
            />
          </div>
          <div>
            <label className="block text-base font-semibold text-gray-100">Bio</label>
            <Textarea
              type="text"
              placeholder="Username or email"
              value="aliyukamilu@gmail.com"
              required 
              className="bg-black-2 block w-full text-sm p-2 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
            />
          </div>
        </div>
    </div>
  )
}

export default Settings
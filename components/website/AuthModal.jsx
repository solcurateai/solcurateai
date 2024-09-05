import { Dialog, DialogContent } from "../ui/dialog"
import Image from 'next/image'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import Link from "next/link"
import { Input } from "../ui/input"
  
  const formSchema = z.object({
    email: z.string().nonempty("Email is required").email("Invalid email address"),
    password: z.string().nonempty("Password is required"),
  });
  

const AuthModal = ({ isOpen, onClose, title, className, children, handleClick, buttonText, image, buttonIcon }) => {
    const [data, setData] = useState({
        email: "",
        password: "",
      });
      // 1. Define your form.
      const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "",
          password: "",
        },
      })
     
      function onSubmit(values) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values);
      }
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="flex w-full max-w-[520px] bg-slate-900 flex-col gap-6 border-none px-6 py-9 text-white">
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <h1 className="text-2xl font-semibold">Login</h1>
                <h2 className="font-clash font-medium">Welcome Back 👋</h2>
                <p className="text-balance text-white font-quicksand">
                Login to your account and start creating your content.
                </p>
              </div>

              <div className="border-y border-white">
                <Input className="bg-[#252C33] h-[52px] text-lg mt-5" type="email" placeholder="Username or email" />
                <Input className="bg-[#252C33] h-[52px] text-lg mt-5 mb-3" type="password" placeholder="Password" />
                <Link href="/forgot-password" className="underline text-[#FF7320] font-clash font-medium my-5">
                    Forgot password
                  </Link>
                  <div>
                  <Button class="main-gradient inline-block rounded-lg w-full my-5 px-8 py-3 text-center font-semibold tracking-tight !text-white transition duration-200 hover:font-bold bg-gradient-to-tr from-yellow-400 to-orange-600"
                >Login</Button>
                </div>
              </div>
              
              
              
              <div className="mt-4 text-lg">
                Not yet on the platform?{" "}
                <Link href="/sign-up" className="underline font-clash font-medium text-[#FF7320]">
                  Register now
                </Link>
              </div>
            </div>

        </DialogContent>
    </Dialog>
  )
}

export default AuthModal
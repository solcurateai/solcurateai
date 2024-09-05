import { Copy } from 'lucide-react'
import React from 'react'

const GenerateContentCard = () => {
  return (
        
        <div className="w-full h-full bg-black-5 rounded-md overflow-hidden transition duration-30">
            <div className="p-4 space-y-2">
                <div className="bg-gray-700 opacity-3 rounded-md h-10 w-60"></div>
                <div className="bg-gray-700 opacity-3 rounded-md h-6 w-40"></div>
            </div>
            <div className="p-4">
                <div className="flex items-center justify-between mb-5">
                    <h1 className="text-white font-quicksand text-2xl font-semibold">LinkedIn Post</h1>
                    <Copy />
                </div>
                
                <p className="text-slate-100 text-xl">Ever wondered what happens when creativity meets functionality? Meet Muhammad Bashir Hassan, your go-to Product Designer! 🚀 With a knack for turning ideas into reality, Muhammad has been crafting user-centric designs that not only look good but also solve real problems. Whether you’re a startup or a well-established company, his designs will elevate your product to the next level. Ready to innovate? Let’s connect and create something amazing together! 🌟  #ProductDesign #Innovation #UserExperience #ClientSuccess #DesignThinking</p>
            </div>
        </div>
  )
}

export default GenerateContentCard
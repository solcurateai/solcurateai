import { Copy } from 'lucide-react'
import React from 'react'

const GenerateContentCard = ({ type, responseText }) => {

  return (

    <div className="w-full h-full bg-black-5 rounded-md overflow-hidden transition duration-30">
      <div className="p-4">
        <div className="flex items-center justify-between mb-5">
          <h1 className="text-white font-quicksand text-2xl font-semibold">{type}</h1>
          <Copy />
        </div>

        <p className="text-slate-100 text-xl">{responseText}</p>
      </div>
    </div>
  )
}

export default GenerateContentCard
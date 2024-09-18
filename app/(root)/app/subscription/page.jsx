import React from 'react'
import SolanaTransaction from '@/components/SolanaTransaction'

const Subscription = () => {
  return (
    <div className="min-h-screen bg-[#0A1117] rounded-lg flex flex-col items-center justify-center p-8">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4 flex items-center gap-2">
          <span>Unlock the Power of SolcurateAI</span>
          <span className='main-gradient text-slate-50 px-2 py-1 rounded-full text-sm'>Pro</span>
        </h1>
        <p className="text-lg text-gray-300">
          Empower your creativity with unlimited content generation and earn future tokenized rewards.
        </p>
      </header>

      {/* Main Content Section */}
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-xl text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">What You Get with SolcurateAI Pro:</h2>
        <ul className="text-left text-gray-600 mb-6 space-y-3">
          <li>💡 <span className="font-medium">Unlimited AI-generated content</span> to supercharge your projects.</li>
          <li>🔗 <span className="font-medium">Earn points</span> with every use — future-proofed for tokenization in the Solana ecosystem.</li>
        </ul>
        <div className="text-center">
          <p className="text-xl font-semibold text-gray-800 mb-6">Subscription Price: <span className="text-amber-500">0.1 SOL</span></p>

          <SolanaTransaction />
        </div>
      </div>


    </div>
  )
}

export default Subscription
import React from 'react'

const EarnPoints = () => {
  const userPoints = 1250; // Example points

  const futureBenefits = [
    "Points will be tokenized into a future token",
    "Airdrop of the token based on your points",
    "Exclusive access to tokenized content",
    "Higher earning potential through staking",
    "Access to special community events and drops",
  ];

  return (
    <div>
      <div className="flex flex-col gap-1 items-center justify-center  mb-10">
        <h1 className="font-clash text-white text-2xl lg:text-[40px] font-semibold">Earn Points</h1>
        <p className="font-semibold text-lg text-center lg:text-2xl text-black-4 font-quicksand">Earn points every time you create and share content, contributing to the growing Solana ecosystem.</p>
      </div>

  

    </div>
  )
}

export default EarnPoints
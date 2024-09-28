import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { TfiWorld } from "react-icons/tfi";

const communities = [
  {
    name: 'Mad Lads',
    image: 'https://pbs.twimg.com/profile_images/1633983512981172231/nLwFmdPN_400x400.jpg',
    description: 'The Mad Lads by @Backpack',
    twitter: 'https://x.com/MadLads',
    website: 'https://madlads.com/'
  },
  {
    name: 'Superteam',
    image: 'https://pbs.twimg.com/profile_images/1679100194028392448/4_3L1nRh_400x400.jpg',
    description: 'A community of founders, devs & grantees working on promising @solana projects || no token, no treasury, just an online community',
    twitter: 'https://x.com/superteam',
    website: 'https://superteam.fun/'
  },
  // Add more communities as needed
];

const SolanaCommunity = () => {
  return (
    <div>
      <div className="flex flex-col gap-1 items-center justify-center  mb-10">
        <h1 className="font-clash text-white text-2xl lg:text-[40px] font-semibold">Solana Communities</h1>
        <p className="font-semibold text-lg text-center lg:text-2xl text-black-4 font-quicksand">Join the most innovative Solana communities - where AI and blockchain meet to redefine the future.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {communities.map((community, index) => (
          <CommunityCard
            key={index}
            name={community.name}
            image={community.image}
            twitter={community.twitter}
            description={community.description}
            website={community.website}
          />
        ))}
      </div>
    </div>
  )
}

const CommunityCard = ({ name, image, twitter, description, website }) => {
  return (
    <div className="bg-[#151a2e] rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
      {/* Image header */}
      <div className="w-full h-40 overflow-hidden rounded-t-xl">
        <img src={image} alt={`${name} banner`} className="object-cover w-full h-full" />
      </div>

      {/* Community Info */}
      <div className="p-4 flex justify-between items-center">
        <h2 className="text-white text-lg font-bold">{name}</h2>

        <div className='flex items-center gap-3'>
          <a href={twitter} target="_blank" rel="noopener noreferrer">
            <FaXTwitter className="text-[#FF7720] text-xl hover:text-[#0f8ff7] transition-colors duration-300" />
          </a>
          <a href={website} target="_blank" rel="noopener noreferrer">
            <TfiWorld className="text-[#FF7720] text-xl hover:text-[#0f8ff7] transition-colors duration-300" />
          </a>
        </div>

      </div>
      <p className='px-3 mb-3 text-sm  text-[#f4f4f4]'>{description}</p>
    </div>
  );
};

export default SolanaCommunity
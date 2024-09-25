import React from 'react'
import { FaTwitter } from 'react-icons/fa';

const communities = [
  {
    name: 'Solana Community 1',
    image: 'https://pbs.twimg.com/profile_images/1575078518966390785/ThjVOC0L_400x400.jpg',
    twitter: 'https://twitter.com/community1',
  },
  {
    name: 'Solana Community 2',
    image: 'https://pbs.twimg.com/profile_images/1825516250526523392/3a7R-b8b_400x400.jpg',
    twitter: 'https://twitter.com/community2',
  },
  // Add more communities as needed
];

const SolanaCommunity = () => {
  return (
    <div>
      <h1 className="text-3xl text-center font-bold text-[#ff7d20] mb-8">Solana Communities</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {communities.map((community, index) => (
          <CommunityCard
            key={index}
            name={community.name}
            image={community.image}
            twitter={community.twitter}
          />
        ))}
      </div>
    </div>
  )
}

const CommunityCard = ({ name, image, twitter }) => {
  return (
    <div className="bg-[#151a2e] rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
      {/* Image header */}
      <div className="w-full h-40 overflow-hidden rounded-t-xl">
        <img src={image} alt={`${name} banner`} className="object-cover w-full h-full" />
      </div>

      {/* Community Info */}
      <div className="p-4 flex justify-between items-center">zF
        <h2 className="text-white text-lg font-bold">{name}</h2>
        <a href={twitter} target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-[#1da1f2] text-xl hover:text-[#0f8ff7] transition-colors duration-300" />
        </a>
      </div>
    </div>
  );
};

export default SolanaCommunity
import AppCard from '@/components/AppCard'
import React from 'react'

const cardList = [
  // {
  //   title: "Create a Social Media Post",
  //   subtitle: "Effortlessly create engaging content tailored for each platform, ensuring your brand stands out and connects with your audience.",
  //   imageUrl: "/icons/social.svg",
  //   route: "/social"
  // },
  {
    title: "Twitter (X) Post Generation",
    subtitle: "Compose impactful Twitter posts that cut through the noise and drive meaningful interactions.",
    imageUrl: "/icons/3dtwitter.svg",
    route: "/twitter"
  },
  {
    title: "Instagram Caption Generation",
    subtitle: "Create captivating Instagram captions that resonate with your audience and boost engagement.",
    imageUrl: "/icons/3dinstagram.svg",
    route: "/instagram"
  },
  {
    title: "Facebook Content Generation",
    subtitle: "Generate compelling Facebook posts that spark conversations and drive community engagement.",
    imageUrl: "/icons/3dfacebook.svg",
    route: "/facebook"
  },
  {
    title: "LinkedIn Post Generation",
    subtitle: "Develop professional LinkedIn posts that establish authority and connect with industry leaders.",
    imageUrl: "/icons/linkedin.svg",
    route: "/linkedin"
  },
  {
    title: "TikTok Scripting Generation",
    subtitle: "Craft viral TikTok scripts that capture attention and keep viewers hooked from start to finish",
    imageUrl: "/icons/3dtiktok.svg",
    route: "/tiktok"
  },
  {
    title: "YouTube Scripting Generation",
    subtitle: "Write engaging YouTube scripts that keep viewers watching and coming back for more.h",
    imageUrl: "/icons/youtube.svg",
    route: "/youtube"
  },
]
const Dashboard = () => {
  return (
    <section className="">
      <div className="flex flex-col gap-1 items-center justify-center">
        <h1 className="font-clash text-white text-2xl lg:text-[40px] font-semibold">Dashboard</h1>
        <p className="font-semibold text-lg text-center lg:text-2xl text-black-4 font-quicksand">Chat with the smartest AI - Experience the power of AI with us</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
        {cardList.map((card) => {
          return (
            <AppCard key={card.title} card={card} />
          )
        })}

      </div>
    </section>
  )
}

export default Dashboard
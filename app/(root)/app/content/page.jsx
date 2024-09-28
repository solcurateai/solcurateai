import AppCard from '@/components/AppCard'
import React from 'react'
import { cardList } from '@/constants'

const ContentPage = () => {
  return (
    <section className="">
      <div className="flex flex-col gap-1 items-center justify-center">
        <h1 className="font-clash text-white text-2xl lg:text-[40px] font-semibold">Create Content</h1>
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

export default ContentPage
import Image from 'next/image'

const EarningBox = ({ count }) => {
  return (
    <div className="flex items-center bg-black-3 p-4 rounded-xl gap-2 lg:gap-4">
        <Image src="/icons/coin.svg" alt="Coin" className="w-6 h-6" width={28} height={28} />
        <span className="text-lg font-medium text-white max-lg:hidden font-quicksand">Earning</span>
        <span className="text-lg font-medium text-white max-lg:block hidden font-quicksand">{count}</span>
        <div className="main-gradient w-7 h-7 max-lg:hidden rounded-full font-semibold items-center flex justify-center text-white">
        <p>{count}</p>
        </div>
    </div>
  )
}

export default EarningBox
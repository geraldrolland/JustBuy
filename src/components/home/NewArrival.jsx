import React from 'react'
import Title from './Title'
import playstation from "../../assets/playstation.png"
import attractive from "../../assets/attractive.png"
import speaker from "../../assets/speaker.png"
import perfume from "../../assets/perfume.png"
const NewArrival = () => {
  return (
    <>
      <Title title="Featured" />
      <div className='w-[100%] h-[40px]  lg:ml-8 flex justify-start items-center md:text-3xl font-bold tracking-wide md:ml-0 text-xl'>New Arrival</div>
      <div className='lg:w-[95%] w-[100%] h-[800px] lg:h-[700px]  md:h-[500px]  mx-auto flex md:flex-nowrap flex-wrap  place-content-center items-center md:gap-y-0 gap-y-2  md:gap-x-4'>
        <div className='md:w-[50%] w-[100%] h-[50%] md:h-[100%]  bg-black relative'>
        <img className='absolute w-[100%] h-[85%]  bottom-0' src={playstation} alt="" />
          <div className='md:w-[60%] w-[80%] md:h-[30%] h-[30%] lg:h-[25%] absolute bottom-0 lg:left-10'>
            <div className='md:text-[30px] text-[20px] text-white tracking-wider capitalize'>
              playStation 5
            </div>
            <div className='w-[80%] text-gray-200 text-[14px] md:text-md mt-1 md:mt-2 tracking-wider'>Black and White version of the PS5 coming out on sale</div>
            <div className='text-white capitalize underline underline-offset-4 text-[18px] hover:text-gray-200 transition-all duration-200 cursor-pointer tracking-wide md:mt-4 mt-2'>shop now</div>
          </div>
        </div>
        <div className='md:w-[50%] w-[100%] h-[50%] md:h-[100%]  grid grid-rows-2 gap-y-2 md:gap-y-4'>
          <div className='border-1px bg-black relative'>
            <img className='absolute right-0 bottom-0 h-[100%] w-[100%] object-cover' src={attractive} alt="" />
            <div className='lg:w-[60%] w-[80%] md:w-[75%] lg:h-[50%]  absolute bottom-0 lg:left-10'>
              <div className='text-white md:text-[30px] tracking-wider capitalize text-[20px]'>women's collections</div>
              <div className='w-[70%] tracking-wider md:text-md md:mt-2 mt-1 text-gray-200 text-[14px]'>Featured woman collections that give you another vibe</div>
              <div className='text-white capitalize underline underline-offset-4 text-[18px] hover:text-gray-200 transition-all duration-200 cursor-pointer tracking-wide mt-2 md:mt-4 mb-2'>shop now</div>
            </div>
          </div>
          <div className=' grid grid-cols-2 gap-x-2 md:gap-x-4 '>
            <div className=' bg-black relative flex justify-center items-center'>
              <img className='w-[75%] object-cover h-[80%] ' src={speaker} alt="" />
              <div className='w-[80%] md:h-[65%] lg:h-[45%] h-[70%] absolute bottom-0 left-0 lg:left-10'>
                <div className='text-white md:text-[30px] tracking-wider text-[20px] capitalize'>speakers</div>
                <div className='w-[100%] text-[14px] md:text-md text-gray-200 tracking-wider mt-1 md:mt-2'>Amazon wireless speakers</div>
                <div className='text-white capitalize underline underline-offset-4 text-[18px] hover:text-gray-200 transition-all duration-200 cursor-pointer tracking-wide mt-2 md:mt-4 mb-2'>shop now</div>
              </div>
            </div>
            <div className='border-1px bg-black relative flex justify-center items-center'>
            <img className='w-[85%] object-cover h-[80%]' src={perfume} alt="" />
            <div className='w-[80%] md:h-[65%] lg:h-[45%] h-[70%]  absolute bottom-0 left-0 lg:left-10'>
                <div className='text-white md:text-[30px] tracking-wider text-[20px] capitalize'>perfume</div>
                <div className='w-[100%] text-[14px] md:text-md text-gray-200 tracking-wider mt-1 md:mt-2 uppercase'>gucci intense oud</div>
                <div className='text-white capitalize underline underline-offset-4 text-[18px] hover:text-gray-200 transition-all duration-200 cursor-pointer tracking-wide mt-2 md:mt-4 mb-2'>shop now</div>
              </div>             
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
const MemoizedNewArrival = React.memo(NewArrival)
export default MemoizedNewArrival

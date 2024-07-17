import React from 'react'
import Title from './Title'
const NewArrival = () => {
  return (
    <>
      <Title title="Featured" />
      <div className='w-[100%] h-[40px] border-1px lg:ml-8 flex justify-start items-center text-3xl font-bold tracking-wide md:ml-0'>New Arrival</div>
      <div className='lg:w-[95.3%] w-[100%] grid md:gap-x-2 lg:gap-x-6 grid-rows-2 md:grid-cols-2 mt-10 mx-auto gap-y-1 h-[700px] lg:h-[1200px] md:h-[1000px] border-1px'>
        <div className='border-1px bg-black relative'>
            <div className='lg:w-[60%] w-[70%] md:left-4 md:h-[30%] border-1px absolute bottom-0'>
              <div className='text-white tracking-wide lg:tracking-wider text-[20px] md:text-[25px] lg:text-[30px]'>PlayStation 5</div>
              <div className='lg:w-[85%] w-[100%] tracking-widest text-white flex flex-wrap mt-2 text-[14px] md:text-[16px] lg:text-[16px] '>
                Black and white version of the PS5
                coming out on sale. 
              </div>
              <div className='text-white underline underline-offset-4 mt-1 md:mt-3 tracking-wide text-[18px] font-medium'>Shop Now</div>
            </div>
        </div>
        <div className='border-1px grid  md:grid-rows-2 lg:gap-y-6 md:gap-y-2  gap-y-1'>
            <div className='border-1px bg-black relative'>
                <div className='lg:w-[50%] w-[70%]  md:w-[65%] md:h-[60%] border-1px absolute bottom-0 h-[75%] box-border md:left-4'>
                  <div className='text-white text-[20px] md:text-[25px] lg:text-[30px] tracking-wider'>Women's Collections</div>
                  <div className='text-white text-[14px] md:text-[16px] w-[88%]  flex flex-wrap tracking-wide mt-2'>Featured woman collections that give you another vibe</div>
                  <div className='text-white mt-1 md:mt-3 underline underline-offset-4 text-[18px] tracking-wide font-medium'>Shop Now</div>
                </div>
            </div>
            <div className='border-1px grid grid-cols-2 lg:gap-x-6 md:gap-x-2 gap-x-1'>
                <div className='border-1px bg-black relative'>
                    <div className='w-[75%]  md:h-[60%] lg:h-[50%] border-1px absolute bottom-0 md:left-4'>
                      <div className='text-white tracking-wider lg:text-[30px] text-[20px] md:text-[25px]'>Speakers</div>
                      <div className='mt-2 w-[100%] text-white md:text-[16px] text-[14px] tracking-wide'>Amazon wireless speakers</div>
                      <div className='text-white md:mt-3 underline underline-offset-4 mt-1 text-[18px] font-medium tracking-wide'>Shop Now</div>
                    </div>
                </div>
                <div className='border-1px bg-black relative'>
                <div className='w-[75%] md:h-[60%] lg:h-[50%] border-1px absolute bottom-0 md:left-4'>
                  <div className='text-white text-[20px] md:text-[25px] tracking-wider lg:text-[30px]'>Perfume</div>
                  <div className='md:text-[16px] text-[14px] mt-2 uppercase tracking-wide text-white'>gucci intense oud edp</div>
                  <div className='md:mt-3 mt-1 text-white tracking-wide font-medium text-[18px] underline underline-offset-4'>Shop Now</div>
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



const Clock = () => {
  return (
    <div className='w-[55%] h-full  inline-flex place-content-between place-items-center'>
      <div className='w-[18%] h-full box-border  flex justify-center items-center flex-col'>
        <small className='md:text-[10px] text-[7px] text-gray-700 font-semibold'>Days</small>
        <div className="proportional-nums font-semibold tracking-wide text-xl  text-black">03</div>
      </div><div className="text-xl font-semibold self-end text-red-400">:</div>
      <div className='w-[18%] h-full box-border  flex justify-center items-center flex-col'>
        <small className='md:text-[10px] text-[7px] text-gray-700 font-semibold'>Hours</small>
        <div className="proportional-nums font-semibold tracking-wide text-xl  text-black">23</div>
      </div><div className="text-xl font-semibold self-end text-red-400">:</div>
      <div className='w-[18%] h-full box-border flex justify-center items-center flex-col'>
        <small className='md:text-[10px] text-[7px] text-gray-700 font-semibold'>Minutes</small>
        <div className="proportional-nums font-semibold tracking-wide text-xl  text-black">19</div>
      </div><div className="text-xl font-semibold self-end text-red-400">:</div>
      <div className='w-[18%] h-full box-border  flex justify-center items-center flex-col'>
        <small className='md:text-[10px] text-[7px] text-black font-semibold'>Seconds</small>
        <div className="proportional-nums font-semibold tracking-wide text-xl  text-gray-950">56</div>
      </div>
    </div>
  )
}

export default Clock

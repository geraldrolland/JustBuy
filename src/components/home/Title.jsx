import React from 'react'

const Title = ({title}) => {
  return (
    <div className='md:w-[180px]  md:h-[40px] w-[100%] h-[30px] inline-flex lg:ml-8 justify-start items-center mt-14'>
      <div className='w-[4%] md:w-[10%] lg:w-[12%] h-[100%] bg-red-500 '></div>
      <div className='lg:ml-6 ml-2 md:text-[18px] text-red-500 font-semibold tracking-wide'>{title}</div>
    </div>
  )
}

export default Title

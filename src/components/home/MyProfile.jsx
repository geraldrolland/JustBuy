import React from 'react'
import Footer from './Footer'
export const MyProfile = () => {
  return (
    <>
    <div className='md:w-[90%]  md:mb-0  md:h-[90%] w-[100%] h-[100%] mt-5 md:mt-10 mx-auto'>
        <h1 className='text-red-500 capitalize text-[20px] tracking-wide'>edit your profile</h1>
        <div className='md:inline-flex flex md:flex-nowrap flex-wrap mt-4 justify-between items-center w-[100%] h-[70px]'>
            <div className='md:w-[48%] w-[100%] h-[100%] flex flex-col justify-between'>
                <h1 className='capitalize'>first name</h1>
                <input type="text" className='w-[100%] focus:outline-none text-md pl-4 rounded-sm bg-slate-200 capitalize h-[50px] ' />
            </div>
            <div className='md:w-[48%] w-[100%] md:mt-0 mt-4 h-[100%] flex flex-col justify-between'>
                <h1 className='capitalize'>last name</h1>
                <input type="text" className='w-[100%] focus:outline-none text-md pl-4 rounded-sm bg-slate-200 capitalize h-[50px] ' />
            </div>
        </div>
        <div className='md:inline-flex  flex md:flex-nowrap flex-wrap mt-24 md:mt-8 justify-between items-center w-[100%] h-[70px]'>
            <div className='md:w-[48%] mt-2 w-[100%] h-[100%] flex flex-col justify-between md:mt-0'>
                <h1 className='capitalize'>Email</h1>
                <input type="text" className='w-[100%] focus:outline-none text-md pl-4 rounded-sm bg-slate-200 capitalize h-[50px] ' />
            </div>
            <div className='md:w-[48%] mt-4 w-[100%] md:mt-0  h-[100%] flex flex-col justify-between'>
                <h1 className='capitalize'>address</h1>
                <input type="text" className='w-[100%] focus:outline-none text-md pl-4 rounded-sm bg-slate-200 capitalize h-[50px] ' />
            </div>
        </div>
        <div className='w-[100%] flex flex-col justify-between h-[220px]  mt-28 md:mt-8'>
        <h1 className='capitalize'>password changes</h1>
        <input type="text" className='w-[100%] rounded-sm focus:outline-none pl-4 text-md h-[50px] bg-slate-200' placeholder='Current Password' />
        <input type="text" className='w-[100%] rounded-sm focus:outline-none pl-4 text-md h-[50px] bg-slate-200' placeholder='New Password' />
        <input type="text" className='w-[100%] rounded-sm focus:outline-none pl-4 text-md h-[50px] bg-slate-200' placeholder='Confirm New Password' />
        </div>
        <div className='w-[100%] mt-6 md:mt-2 h-[50px] flex justify-between  md:justify-end items-center'>
        <button className='w-[100px] h-[100%] shadow-md transition-all duration-300 md:active:shadow-none  mr-4 rounded-md bg-gray-100 capitalize'>cancle</button>
            <button className='md:w-[180px] w-[140px] tracking-tight shadow-md rounded-md h-[100%] bg-red-600 text-white capitalize'>save changes</button>

        </div>
    </div>

    </>
  )
}

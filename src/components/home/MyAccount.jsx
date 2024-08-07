import React, { useEffect } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
export const MyAccount = () => {
    const navigateToProfile = useNavigate()
    const activeNav = ({isActive}) => {
        return {
            color: isActive ? "red" : ""
        }
    }

    useEffect(() => {
        navigateToProfile("my-profile")
    }, [])
  return (
    <>
    <div className='h-[40px] md:w-[90%] mx-auto  mt-6 md:mt-[60px] flex justify-between items-center'>
    <div className='w-[160px] h-[30px]    justify-between items-center flex'>
        <h1 className='text-gray-500 tracking-wide capitalize'>home</h1>
        <h1 className='text-gray-400 '>/</h1>
        <h1 className='text-gray-900 tracking-wide capitalize'>my account</h1>
    </div>
    <div className='w-[160px] h-[30px]    justify-end items-center flex'>
        <h1 className=' tracking-wide capitalize text-gray-950'>Welcome <span className='text-red-700'>Gerald</span></h1>

    </div>
    </div>

    <div className='lg:w-[90%] mx-auto flex mb-2 md:mb-14  justify-center items-center h-[720px] md:h-[580px] mt-8 md:mt-24'>
        <div className='w-[30%]  h-[100%] hidden md:block '>
            <div className='w-[100%]  h-[30%] '>
                <h1 className='text-gray-950 capitalize tracking-wide text-[20px]'>manage my account</h1>
                <NavLink style={activeNav} to={"my-profile"} className={"block capitalize text-gray-500 ml-14 tracking-wide mt-4"}>my profile</NavLink>
                <NavLink style={activeNav} to={"my-address-book"} className={"block capitalize ml-14 tracking-wide mt-4 text-gray-500"}>my address book</NavLink>
                <NavLink style={activeNav} to={"my-payment-options"} className={"block capitalize ml-14 text-gray-500 tracking-wide mt-4"}>my payment options</NavLink>
            </div>
            <div className='w-[100%] h-[25%]  mt-4'>
                <h1 className='text-gray-950 capitalize tracking-wide text-[20px]'>my orders</h1>
                <NavLink style={activeNav} to={"my-returns"} className={"block capitalize text-gray-500 ml-14 tracking-wide mt-4"}>my returns</NavLink>
                <NavLink style={activeNav} to={"my-concellations"} className={"block capitalize ml-14 tracking-wide mt-4 text-gray-500"}>my concellations</NavLink>

            </div>
            <h1 className='text-gray-950 text-[20px] tracking-wide capitalize'>my wishlist</h1>
        </div>
        <div className='md:w-[70%] w-[100%] h-[100%]  lg:shadow-lg rounded-lg'>
            <Outlet/>
        </div>

    </div>
    <Footer/>
    </>
  )
}

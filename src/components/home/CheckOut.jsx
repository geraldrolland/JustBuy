import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IoCheckmarkOutline } from "react-icons/io5";
import Footer from './Footer';
import visa from "../../assets/visa.png"
import paypal from "../../assets/paypal.png"
import mastercard from "../../assets/mastercard.png"
import stripe from "../../assets/stripe.png"
import { motion } from 'framer-motion';
import { useRef } from 'react';
import "../../styles/style.css"
export const CheckOut = () => {
    const [orders, setOrders] = useState([])
    const [amount, setAmount] = useState(0)
    const containerRef = useRef(null)

    useEffect(() => {
        setOrders(JSON.parse(localStorage.getItem("cart")))
        const size = JSON.parse(localStorage.getItem("cart"))
        
        if (size && size.length > 5) {
            if (containerRef.current) {
                console.log("executed")
                containerRef.current.classList.add("h-[320px]")
            }
        }

    }, [])

  return (
    <>
    <div className='w-[550px]  h-[30px] mt-[120px] ml-[5%]    justify-between items-center flex'>
        <NavLink className='text-gray-500 tracking-wide capitalize'>Account</NavLink>
        <h1 className='text-gray-400 '>/</h1>
        <NavLink to={"/my-account/"} className='text-gray-500 tracking-wide capitalize'>My Account</NavLink>
        <h1 className='text-gray-400 '>/</h1>
        <NavLink to={"/"} className='text-gray-500 tracking-wide capitalize'>Products</NavLink>
        <h1 className='text-gray-400 '>/</h1>
        <NavLink to={"/cart/"} className='text-gray-500 tracking-wide capitalize'>View Cart</NavLink>
        <h1 className='text-gray-400 '>/</h1>
        <NavLink to={""} className='text-gray-900 tracking-wide capitalize'>CheckOut</NavLink>
    </div>
    <h1 className='capitalize ml-[5%] mt-[40px] text-[35px] tracking-wide'>billing  details</h1>
    <div className='w-[90%] h-[750px] mb-[200px]  mx-auto mt-[10px] flex justify-between items-center'>

        <div className='w-[37%] flex flex-col justify-between ite h-[100%]'>

            <div className='w-[100%] h-[75px]  flex flex-col justify-between items-start'>
                <label className='capitalize text-gray-400' for='firstname'>first name <sup className='text-red-800'>*</sup></label>
                <input id='firstname' className='w-[100%] rounded-[2px] focus:outline-none pl-4 h-[45px] bg-gray-200' type="text" />
            </div>
            <div className='w-[100%] h-[75px] flex flex-col justify-between items-start'>
                <label for="companyname" className='capitalize text-gray-400'>company name <sup className='text-red-800'>*</sup></label>
                <input id='companyname' className='w-[100%] rounded-[2px] focus:outline-none pl-4 h-[45px] bg-gray-200' type="text" />
            </div>
            <div className='w-[100%] h-[75px] flex flex-col justify-between items-start'>
                <label for="streetaddress" className='capitalize text-gray-400'>street address <sup className='text-red-800'>*</sup></label>
                <input id="streetaddress" className='w-[100%] focus:outline-none pl-4 h-[45px] bg-gray-200' type="text" />
            </div>
            <div className='w-[100%] h-[75px] flex flex-col justify-between items-start'>
                <label for="apartment" className=' text-gray-400'>Apartment, floor, etc. (optional)</label>
                <input id='apartment' className='w-[100%] focus:outline-none pl-4 h-[45px] bg-gray-200' type="text" />
            </div>
            <div className='w-[100%] h-[75px]  flex flex-col justify-between items-start'>
                <label className='capitalize text-gray-400'>town / city <sup className='text-red-800'>*</sup></label>
                <input className='w-[100%] focus:outline-none pl-4 h-[45px] bg-gray-200' type="text" />
            </div>
            <div className='w-[100%] h-[75px] flex flex-col justify-between items-start'>
                <label for="phone" className='capitalize text-gray-400'>phone number <sup className='text-red-800'>*</sup></label>
                <input id="phone" className='w-[100%] focus:outline-none pl-4 h-[45px] bg-gray-200' type="text" />
            </div>
            <div className='w-[100%] h-[75px]  flex flex-col justify-between items-start'>
                <label for="email" className='capitalize text-gray-400'>email address <sup className='text-red-800'>*</sup></label>
                <input id='email' className='w-[100%] focus:outline-none pl-4 h-[45px] bg-gray-200' type="text" />
            </div>
            <div className='w-[100%] space-x-5 flex justify-start items-center h-[25px]'>
                <div className='w-[25px] h-[100%]  cursor-pointer rounded-[4px] bg-red-600 flex justify-center items-center'>
                    <IoCheckmarkOutline className='text-white text-[20px]' />
                </div>
                <h1 className='font-semibold text-gray-900 tracking-tight'>Save this information for faster check-out next time </h1>
            </div>
        </div>
        <div  className='w-[45%]   h-[100%]   '>
            <div   className=' w-[75%]  flex justify-center  items-center'>
                <div ref={containerRef}  className='w-[100%] flex flex-wrap tab-container overflow-y-scroll'>
                {
                    orders?.map(order => 
                        <div
                        className='w-[100%] mb-[20px] flex justify-between items-center h-[45px]'
                         key={order.id}>
                            <div className='w-[170px] h-[100%] flex space-x-2 justify-start items-center'>
                                <img className='w-[50px] object-cover h-[100%]' src={order.image} alt={order.title} />
                                <h1 className='truncate text-[16px]'>{order.title}</h1>
                                
                            </div>
                            <h1 className='proportional-nums text-gray-800'>${order.price}</h1>
                         </div>
                    )
                }
                </div>
            </div>
            <div className='w-[75%] h-[45px] border-b-1px flex justify-between items-center border-gray-500'>
                <h1 className='capitalize text-gray-800 text-[18px]'>subtotal</h1>
                <h1 className='text-gray-800 proportional-nums'>$1750</h1>
            </div>
            <div className='w-[75%] h-[45px] border-b-1px flex justify-between items-center border-gray-500'>
                <h1 className='capitalize text-gray-800 text-[18px]'>shipping</h1>
                <h1 className='text-gray-800 capitalize'>free</h1>
            </div>
            <div className='w-[75%] h-[45px]  flex justify-between items-center '>
                <h1 className='capitalize text-gray-800 text-[18px]'>total</h1>
                <h1 className='text-gray-800 proportional-nums'>$1750</h1>
            </div>
            <div className='w-[75%] h-[40px] mt-[20px]   flex justify-between items-center'>
                <div className='w-[85px] h-[100%] flex justify-start space-x-4 items-center'>
                    <div className='w-[28px] flex justify-center items-center h-[28px] border-1px border-gray-900 rounded-full'>
                        <div className='w-[16px] h-[16px]  rounded-full bg-gray-950'></div>
                    </div>
                    <h1 className='text-gray-900'>Bank</h1>
                </div>
                <div className='w-[260px] relative flex justify-between items-center h-[100%]'>
                    <motion.div  className='w-[24%] h-[100%]  rounded-md absolute border-2px z-10 shadow-lg bg-gray-200 backdrop-filter backdrop-blur-md border-green-500'
                    animate={{
                        translate: amount + "%",
                    }}
                    transition={{
                        duration: 0.3,
                        ease: "easeIn"
                    }}
                    ></motion.div>
                    <img onClick={() => setAmount(0)} className='w-[23%] filter drop-shadow-2xl cursor-pointer relative z-20' src={paypal} alt="paypal" />
                    <img onClick={() => setAmount(106)} className='w-[23%] filter drop-shadow-2xl  cursor-pointer relative z-20 ' src={mastercard} alt="mastercard" />
                    <img onClick={() => setAmount(218)} className='w-[23%] cursor-pointer relative z-20 filter drop-shadow-2xl' src={visa} alt="visa" />
                    <img onClick={() => setAmount(318)} className='w-[23%] filter drop-shadow-2xl cursor-pointer relative z-20' src={stripe} alt="stripe" />
                </div>
            </div>
            <div className='w-[180px] mt-[15px] h-[40px]  flex justify-start space-x-4 items-center'>
            <div className='w-[28px] flex justify-center items-center h-[28px] border-1px border-gray-900 rounded-full'>
             <div className='w-[16px] h-[16px]  rounded-full bg-gray-950'></div>
            </div>
            <h1 className='text-gray-950 '>Cash on Delivery</h1>
            </div>
            <div className='w-[100%] h-[45px]  flex justify-between items-center mt-[25px]'>
                <input className='w-[300px] h-[100%] border-1px border-gray-800 focus:outline-none pl-4 rounded-[2px]' type="text" placeholder='Coupon Code' />
                <button className='w-[210px] h-[100%]  shadow-md bg-red-600 rounded-[4px] text-gray-100 capitalize'>apply coupon</button>
            </div>
            <button className='mt-[45px] capitalize  w-[170px] text-gray-100  shadow-md bg-red-600 h-[45px] rounded-[4px]'>place order</button>
        </div>
    </div>
   
    <Footer/>
    </>
  )
}

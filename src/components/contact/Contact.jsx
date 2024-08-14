import React from 'react'
import MyHeader from '../MyHeader'
import { FiPhone } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import Footer from '../home/Footer';
const Contact = () => {
  return (
    <>
    <div className='w-[120px]  h-[30px] mt-[120px] ml-[5%]    justify-between items-center flex'>
        <h1 className='text-gray-500 tracking-wide capitalize'>home</h1>
        <h1 className='text-gray-400 '>/</h1>
        <h1 className='text-gray-900 tracking-wide capitalize'>contact</h1>
    </div>
    <div className='w-[90%] mb-[150px] h-[500px]  mx-auto  mt-[45px]  flex justify-between items-center'>
      <div className='w-[30%] shadow-lg h-[100%]  flex justify-center items-center'>
        <div className='w-[80%]  h-[85%]  flex flex-col justify-between items-center'>
          <div className='w-[100%] h-[40%] border-b-1px border-gray-700'>
            <div className='w-[50%] flex justify-between items-center h-[50px] '>
              <div className='w-[50px] bg-red-600 h-[100%]  rounded-full flex justify-center items-center'>
                <BsTelephone className='text-[25px] text-gray-200' />
              </div>
              <h1 className='capitalize text-gray-950 font-semibold'>call to us</h1>
            </div>
            <h1 className='mt-[15px]'>We are available 24/7, 7 days a week.</h1>
            <h1 className='mt-[15px]'>Phone: +8801611112222</h1>
          </div>
          <div className='w-[100%] h-[70%] '>
          <div className='w-[52%] mt-[25px] flex justify-between items-center h-[50px] '>
              <div className='w-[50px] bg-red-600 h-[100%] rounded-full flex justify-center items-center'>
                <CiMail className='text-[25px] text-gray-200' />
              </div>
              <h1 className='capitalize text-gray-950 font-semibold'>write to us</h1>
            </div>
            <h1 className='flex flex-wrap mt-[20px]'>Fill out our form and we will contact you within 24 hours.</h1>
            <h1 className='flex flex-wrap mt-[20px]'>Emails: customer@justBuy.com</h1>
            <h1 className='flex flex-wrap mt-[20px]'>Email: support@justBuy.com</h1>
          </div>
        </div>
      </div>
      <div className='w-[68%] shadow-lg flex justify-center items-center h-[100%]'>
        <div className='w-[94%] h-[85%]  flex flex-col justify-between items-center'>
          <div className='h-[45px] w-[100%] inline-flex justify-between items-center  '>
            <input className='w-[32%] h-[100%]  bg-stone-300 rounded-sm focus:outline-none pl-4' placeholder='Your Name' type="text" />
            <input className='w-[32%] h-[100%]  bg-stone-300 rounded-sm focus:outline-none pl-4' placeholder='Your Email' type="text" />
            <input className='w-[32%] h-[100%]  bg-stone-300 rounded-sm focus:outline-none pl-4' placeholder='Your Phone' type="text" />
          </div>
          <textarea className='w-[100%] h-[250px] rounded-md focus:outline-none bg-stone-300 resize-none pl-4 pt-4' placeholder='Your Message' name="" id=""></textarea>
          <button className='w-[150px] h-[45px]  self-end bg-red-500 rounded-[4px] capitalize text-gray-100 shadow-md'>send message</button>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Contact

import React from 'react'
import MyHeader from '../MyHeader'
import africans from "../../assets/africans.png"
import Footer from '../home/Footer'
import group from "../../assets/Group.png"
import shopping from "../../assets/shoppinbag.png"
import money from "../../assets/money.png"
import tom from "../../assets/tom.png"
import emma from "../../assets/emma.png"
import will from "../../assets/will.png"
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { RiLinkedinLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { SlEarphonesAlt } from "react-icons/sl";
import { GoShieldCheck } from "react-icons/go";
import { motion } from 'framer-motion'
const About = () => {
  return (
    <>
    <div className='w-[120px]  h-[30px] mt-[120px] ml-[5%]    justify-between items-center flex'>
        <h1 className='text-gray-500 tracking-wide capitalize'>home</h1>
        <h1 className='text-gray-400 '>/</h1>
        <h1 className='text-gray-900 tracking-wide capitalize'>about</h1>
    </div>
    <div className='lg:w-[95%] w-[100%] lg:ml-[5%] mt-[20px] h-[480px] justify-center items-center flex'>
      <div className='w-[50%] flex items-center h-[100%]'>
        <div className=' relative w-[97%] lg:w-[90%]  lg:h-[58%] md:h-[70%]'>
        <h1 className='text-[45px] text-gray-950 tracking-wider capitalize font-semibold'>our story</h1>
        <h1 className='w-[100%]  flex flex-wrap tracking-tight text-gray-900 mt-[25px]'>Launched in 2015, justBuy is South Asia's premier online shopping marketplace with an active presence in Bangladesh, supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sailers and 300 brands and sercves 3  millions customers across the region.</h1>
        <h1 className='w-[100%] flex flex-wrap tracking-tight text-gray-900 mt-[20px] absolute bottom-0'>
          justBuy has more than 1 Million products to offer, growing at a very fast. justBuy offers a diverse assotment in categories ranging from consumer
        </h1>
        </div>
      </div>
      <div className='w-[50%] h-[100%] overflow-hidden'>
        <motion.img
        animate={{
            scale: [1.1, 1.1, 1.0]
          }}
        transition={{
            duration: 0.8,
            ease: "easeIn",
            }}
         className='w-[100%] h-[100%] object-cover' src={africans} alt="african ladies" />
      </div>
    </div>
    <div className='lg:w-[90%] w-[100%] mt-[80px] h-[200px] mx-auto flex justify-evenly items-center'>
      <div className='lg:w-[250px] md:w-[200px] h-[200px] lg:h-[100%] border-1px border-gray-400 shadow-sm flex justify-evenly items-center rounded-[4px] flex-col'>
        <div className='w-[50px] h-[50px] border-1px rounded-full flex justify-center items-center bg-black ring-8 ring-gray-300'>
          <img className='object-cover w-[30px] ' src={group} alt="group-icon" />
        </div>
        <div className='w-[80%] h-[55px] flex flex-col  justify-between items-center '>
          <h1 className='text-[30px] font-semibold tracking-wide'>10.5k</h1>
          <h1 className='text-gray-800 lg:text-[18px] md:tracking-tight'>Sailers active our site</h1>
        </div>
      </div>
      <div className='lg:w-[250px] md:w-[200px] md:h-[200px]  lg:h-[100%] border-1px border-gray-400 shadow-sm flex justify-evenly items-center rounded-[4px] flex-col'>
        <div className='w-[50px] h-[50px] border-1px rounded-full flex justify-center items-center bg-black ring-8 ring-gray-300'>
          <div className='text-white w-[30px] h-[30px] border-2px rounded-full flex justify-center items-center text-[22px]'>$</div>
        </div>
        <div className='w-[80%] h-[55px] flex flex-col  justify-between items-center'>
          <h1 className='text-[30px] font-semibold tracking-wide'>33k</h1>
          <h1 className='text-gray-800 tracking-tight lg:text-[18px]'>Monthly product sale</h1>
        </div>
      </div>
      <div className='lg:w-[250px] w-[200px] h-[200px] md:h-[100%] border-1px border-gray-400 shadow-sm flex justify-evenly items-center rounded-[4px] flex-col'>
        <div className='w-[50px] h-[50px] border-1px rounded-full flex justify-center items-center overflow-hidden bg-black ring-8 ring-gray-300'>
          <img
          className='object-cover w-[30px] ' src={shopping} alt="group-icon" />
        </div>
        <div className='w-[100%] h-[55px] flex flex-col  justify-between items-center'>
          <h1 className='text-[30px] font-semibold tracking-wide'>45.5k</h1>
          <h1 className='text-gray-800 tracking-tight lg:text-[18px]'>Customer active in our site</h1>
        </div>
      </div>
      <div className='lg:w-[250px] w-[200px] h-[200px] lg:h-[100%] border-1px border-gray-400 shadow-sm flex justify-evenly items-center rounded-[4px] flex-col'>
        <div className='w-[50px] h-[50px] border-1px rounded-full flex justify-center items-center bg-black ring-8 ring-gray-300'>
          <div className='w-[30px] h-[30px]  flex justify-center items-center relative'>
            <small className='absolute text-white top-[10px] '>$</small>
          <img className='object-cover w-[30px] ' src={money} alt="group-icon" />
          </div>
        </div>
        <div className='w-[100%] h-[55px] flex flex-col  justify-between items-center '>
          <h1 className='text-[30px] font-semibold tracking-wide'>25k</h1>
          <h1 className='text-gray-800 tracking-tight lg:text-[18px]'>Anual gross sale in our site</h1>
        </div>
      </div>
    </div>
    <div className='lg:w-[90%] w-[97%] md:h-[440px]  lg:h-[500px] mx-auto mt-[60px] flex justify-between items-center'>
      <div className='w-[30%] h-[100%]'>
        <div className='w-[100%] h-[80%] flex justify-center items-end border-1px bg-gray-100'>
        <img className='h-[95%]' src={tom} alt="" />
        </div>
        <h1 className='capitalize text-gray-900 text-[25px] mt-[10px] tracking-wide font-medium'>tom cruise </h1>
        <h1 className='capitalize text-gray-800 -mt-1'>founder & chairman</h1>
        <div className='w-[75%] h-[32px] flex justify-start items-center space-x-4 '>
          <CiTwitter className='text-[23px]' />
          <CiInstagram className='text-[23px]'/>
          <RiLinkedinLine className='text-[23px]' />
        </div>
      </div>
      <div className='w-[30%] h-[100%]'>
        <div className='w-[100%] h-[80%] flex justify-center items-end border-1px bg-gray-100'>
        <img className='h-[95%]' src={emma} alt="" />
        </div>
        <h1 className='capitalize text-gray-900 text-[25px] mt-[10px] tracking-wide font-medium'>Emma watson </h1>
        <h1 className='capitalize text-gray-800 -mt-1'>managing director</h1>
        <div className='w-[75%] h-[32px] flex justify-start items-center space-x-4 '>
          <CiTwitter className='text-[23px]' />
          <CiInstagram className='text-[23px]'/>
          <RiLinkedinLine className='text-[23px]' />
        </div>
      </div>
      <div className='w-[30%] h-[100%]'>
        <div className='w-[100%] h-[80%] flex justify-center items-end border-1px bg-gray-100'>
        <img className='h-[95%]' src={will} alt="" />
        </div>
        <h1 className='capitalize text-gray-900 text-[25px] mt-[10px] tracking-wide font-medium'>will smith </h1>
        <h1 className='capitalize text-gray-800 -mt-1'>product designer</h1>
        <div className='w-[75%] h-[32px] flex justify-start items-center space-x-4 '>
          <CiTwitter className='text-[23px]' />
          <CiInstagram className='text-[23px]'/>
          <RiLinkedinLine className='text-[23px]' />
        </div>
      </div>
    </div>
    <div className='w-[200px] flex justify-between items-center h-[20px]  mx-auto mt-[60px]'>
      <div className='w-[20px] h-[100%] rounded-full  bg-gray-400'></div>
      <div className='w-[20px] h-[100%] rounded-full  bg-gray-400'></div>
      <div className='w-[15px] ring-2 ring-offset-2 ring-gray-400 h-[15px] rounded-full  bg-red-600'></div>
      <div className='w-[20px] h-[100%] rounded-full  bg-gray-400'></div>
      <div className='w-[20px] h-[100%] rounded-full  bg-gray-400'></div>
    </div>
    <div className="lg:w-[95%] div md:h-[300px] border-red-500 mx-auto flex lg:place-content-evenly  place-content-between place-items-center  w-[100%]  flex-wrap h-[700px]">
        <div id="truck" className="lg:w-[23%] lg:mt-0 md:mt-14 mt-14 md:w-[30%] w-[90%]  overflow-y-hidden  md:h-[60%] lg:h-[45%] h-[25%]  flex flex-col  md:mx-0 mx-auto justify-start self-center items-center">
            <div className="w-[100%]   h-[60%]  flex justify-center items-center">
            <div

            className="w-[40px] h-[40px] flex justify-center items-center  rounded-full outline outline-[10px] outline-slate-300 bg-black">
            <TbTruckDelivery className="text-white w-[60px] h-[24px]" />
            </div>
            </div>
            <div

             className="w-[100%] mx-auto lg:font-semibold text-center md:font-bold font-semibold">FREE AND FAST DELIVERY</div>
            <div

             className="w-[100%] lg:text-[12px] md:text-[14px] text-[12px] lg:font-semibold text-center md:font-bold font-semibold ">Free delivery for all orders over $140</div>
        </div>
        <div id="truck" className="lg:w-[23%] md:w-[30%]  w-[90%] 
        h-[25%]  overflow-y-hidden  md:h-[60%] md:mt-14 lg:mt-0  lg:h-[45%]  flex flex-col justify-start items-center mx-auto md:mx-0">
            <div className="w-[100%]  h-[60%]  flex justify-center items-center">
            <div

            className="w-[40px] h-[40px] flex justify-center items-center  rounded-full outline outline-[10px] outline-slate-300 bg-black">
            <SlEarphonesAlt className="text-white w-[24px] h-[60px]" />
            </div>
            </div>
            <div

             className="w-[100%] mx-auto  lg:font-semibold text-center uppercase md:font-bold font-semibold">24/7 Customer service</div>
            <div

             className="w-[100%] text-[12px] md:text-[14px] lg:text-[12px] lg:font-semibold text-center md:font-bold font-semibold ">friendly 24/7 customer support</div>
        </div>
        <div id="truck" className="lg:w-[23%] md:w-[30%] w-[90%]  overflow-y-hidden  h-[25%] md:mt-14 md:h-[60%] lg:h-[45%] mx-auto md:mx-0 flex flex-col justify-start items-center lg:mt-0">
            <div className="w-[100%]  h-[60%]  flex justify-center items-center">
            <div

            className="w-[40px] h-[40px] flex justify-center items-center  rounded-full outline outline-[10px] outline-slate-300 bg-black">
            <GoShieldCheck className="text-white w-[24px] h-[60px]" />
            </div>
            </div>
            <div

             className="w-[100%] mx-auto md:font-bold font-semibold lg:font-semibold text-center uppercase">money back guarantee</div>
            <div

             className="w-[100%] text-[14px] lg:text-[12px] lg:font-semibold md:font-bold text-center ">we return money within 30 days</div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default About

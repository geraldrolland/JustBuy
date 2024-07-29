import React from 'react'
import vector from "../../assets/Vector.png"
import code from "../../assets/code.png"
import apple from "../../assets/apple.png"
import play from  "../../assets/play.png"
import { BiLogoFacebook } from "react-icons/bi";
import { RiFacebookLine } from "react-icons/ri";
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { RiLinkedinLine } from "react-icons/ri";
const Footer = () => {
  return (
    <>
    <div className='w-[100%] md:h-[400px]  lg:h-[350px] h-[1200px]  bg-black md:flex'>
        <div className='md:w-[23%] w-[100%] h-[15%] border-b-1px pb-4 border-gray-600 md:pb-0 md:border-0 '>
            <div className='capitalize lg:ml-14 text-white text-2xl   mx-auto tracking-wider pt-4 mt-14'>exclusive</div>
            <div className='capitalize lg:ml-14 text-gray-300 md:text-lg mx-auto tracking-wider mt-3'>subscribe</div>
            <div className='  text-md lg:ml-14 tracking-wide mt-4 text-gray-300 md:tracking-tight'>Get 10% off your first order</div>
            <div className='lg:w-[70%] md:w-[90%] h-[40px] border-1px lg:ml-14 mt-2 rounded-[4px] relative w-[75%]'>
                <img className='absolute right-2 top-2' src={vector} alt="" />
                <input className='w-[100%] h-[100%] bg-transparent pl-2 text-gray-500 placeholder:text-gray-500' maxLength={20} type="text" placeholder='Enter your email' />
            </div>
        </div>
        <div className='md:h-[100%] h-[15%] md:w-[20%] lg:w-[25%] border-b-1px border-gray-600 pb-4 md:pb-0 md:border-0'>
            <div className='text-white text-2xl lg:ml-14 mt-14 capitalize tracking-wider'>support</div>
            <div className='text-md text-gray-300 w-[55%] tracking-wide flex-wrap flex capitalize lg:ml-14 mt-4'>111 Bjay sarani, Dhaka, DH 1515, Bangladesh.</div>
            <div className='text-md lg:ml-14 mt-3 text-gray-300 tracking-wide'>justBuy@gmail.com</div>
            <div className='text-gray-300 text-md tracking-wider proportional-nums lg:ml-14 mt-3 '>+88015-88888-9999</div>
        </div>
        <div className='lg:w-[25%] md:w-[24%] w-[100%] md:h-[100%] h-[25%] border-1px  flex justify-center items-center border-b-1px md:border-0 border-gray-600 pb-4 md:pb-0'>
            <div className='w-[50%] h-[100%] '>
                <div className='text-md text-white text-2xl mt-14 tracking-wider'>Account</div>
                <div className='mt-4 text-gray-300 text-md capitalize tracking-wide'>my account</div>
                <div className='text-gray-300 text-md  mt-4 tracking-wider capitalize'>login / register</div>
                <div className='text-md text-gray-300 capitalize tracking-wider mt-4'>cart</div>
                <div className='text-md text-gray-300 tracking-wider capitalize mt-4'>wishlist</div>
                <div className='text-gray-300 text-md  mt-4 capitalize tracking-wider'>shop</div>
            </div>
            <div className='w-[50%] h-[100%] '>
                <div className='text-2xl text-white mt-14 tracking-wider capitalize'>quick link</div>
                <div className='text-md mt-4 tracking-wider text-gray-200 capitalize'>privacy policy</div>
                <div className='text-gray-300 mt-4 capitalize text-md tracking-wider'>terms of use</div>
                <div className='text-gray-300 text-md capitalize tracking-widest mt-4 '>FAQ</div>
                <div className='text-md text-gray-300 capitalize tracking-widest mt-4'>contact</div>
            </div>
        </div>
        <div className='md:w-[27%] w-[100%] h-[25%] md:h-[100%] md:pb-0 pb-2'>
            <div className='text-white text-2xl mt-14 capitalize tracking-wider'>download app</div>
            <div className='text-md text-gray-400 tracking-wide mt-4 capitalize'>save $3 with app new user only</div>
            <div className='lg:w-[330px] md:w-[300px] w-[100%] h-[130px]  mt-4 inline-flex justify-start gap-x-2 items-center '>
                <div className='w-[130px] h-[100%] '>
                    <img className='w-full h-full object-cover' src={code} alt="" />
                </div>
                <div className='lg:w-[180px] md:w-[145px] w-[170px]  flex flex-col justify-evenly items-center h-[100%]'>
                    <div className='w-[100%] h-[40%] border-1px rounded-md relative'>
                        <div className='w-[75%] h-[100%]  absolute right-0 flex flex-col justify-evenly items-start'>
                            <div className='text-gray-200 text-[13px] uppercase mt-1'>get it on</div>
                            <div className='text-white text-lg capitalize -mt-1'>google play</div>
                        </div>
                        <img className='absolute w-[32px] left-1 top-2 ' src={play} alt="playstore" />
                    </div>
                    <div className='w-[100%] rounded-md h-[40%] border-1px relative'>
                        <div className='w-[75%] h-[100%] absolute right-0 flex flex-col justify-evenly items-start'>
                            <div className='text-[13px] text-gray-200 tracking-wide mt-1'>Dowload on the </div>
                            <div className='text-lg text-white capitalize tracking-wide -mt-1'>
                                app store
                            </div>
                        </div>
                        <img className='w-[32px] absolute top-2' src={apple} alt="apple" />
                    </div>
                </div>
            </div>
            <div className='md:w-[80%] h-[40px]   flex place-content-between place-items-center mt-14 md:mt-4 mx-auto md:mx-0  w-[55%]'>
                <div className='w-[20%] cursor-pointer  h-[100%]  flex justify-center items-center relative overflow-y-hidden'>
                <RiFacebookLine className='text-white w-[24px] h-[32px] transition-all duration-150 hover:text-blue-800 ' />
                </div>
                <div className='w-[20%] h-[100%]  flex cursor-pointer justify-center items-center'>
                <CiTwitter className='text-white transition-all duration-150 ease-in-out hover:text-blue-400 w-[24px] h-[32px]' />
                </div>
                <div className='w-[20%] cursor-pointer h-[100%]  flex justify-center items-center'>
                <CiInstagram className='text-white transition-all duration-150 ease-in-out hover:text-amber-700 w-[24px] h-[32px]' />
                </div>
                <div className='w-[20%] cursor-pointer h-[100%]  flex justify-center items-center'>
                <RiLinkedinLine className='text-white w-[24px] h-[32px] transition-all duration-150 hover:text-blue-600' />
                </div>
            </div>
        </div>
    </div>
    <div className='w-[100%] lg:h-[70px] md:h-[40px] h-[50px]  bg-black flex justify-center items-center border-t-1px border-gray-600 text-gray-700 md:tracking-widest'><span className='text-[25px] inline-block mr-2'>&#169;</span> Copyright Rimel 2022. All right reserved</div>
    </>
  )
}

export default Footer

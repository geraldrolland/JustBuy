import Title from "./Title"
import { IoPhonePortraitOutline } from "react-icons/io5";
import { RiComputerLine } from "react-icons/ri";
import { CiCamera } from "react-icons/ci";
import { CiHeadphones } from "react-icons/ci";
import { CiSpeaker } from "react-icons/ci";
import { PiTelevisionSimpleThin } from "react-icons/pi";
import { PiArmchairLight } from "react-icons/pi";
import { PiTShirt } from "react-icons/pi";
import { BsPhone } from "react-icons/bs";
import { IoWatchOutline } from "react-icons/io5";
import { PiGameControllerThin } from "react-icons/pi";
import { PiHandbagThin } from "react-icons/pi";
import "../../styles/style.css"
import { useRef, useCallback } from "react";
import React from "react";

const BrowseByCategory = () => {
  
  const scrollRef = useRef(null)
  const buttonRigthRef = useRef(null)
  const buttonLeftRef = useRef(null)

  const handleScroll = useCallback((event) => {

    if (event.target.scrollLeft > 0) {
      buttonLeftRef.current.style.visibility = "visible"
    }

    if(event.target.scrollLeft === 0) {
      buttonLeftRef.current.style.visibility = "hidden"
    }

    if (event.target.scrollLeft + event.target.clientWidth === event.target.scrollWidth) {
      buttonRigthRef.current.style.visibility = "hidden"
      return
    }

    if (event.target.scrollLeft < event.target.scrollWidth) {
      buttonRigthRef.current.style.visibility = "visible"
    }
  }, [])

  const moveRight = useCallback(() => {
    if (scrollRef.current.scrollLeft + 130 < scrollRef.current.scrollWidth) {
      scrollRef.current.scrollLeft += 130
      buttonRigthRef.current.style.visibility = "visible"
    } else {
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth
      buttonLeftRef.current.style.visibility = "hidden"
    }
    
  }, [])

  const moveLeft = useCallback(() => {
    if (scrollRef.current.scrollLeft - 130 > 0) {
      scrollRef.current.scrollLeft -= 130
      buttonLeftRef.current.style.visibility = "visible"
    } else {
      scrollRef.current.scrollLeft = 0
      buttonLeftRef.current.style.visibility = "hidden"
    }
  }, [])


  return (
    <>
    <Title title="Categories" />
    <div className="w-[100%] mt-2 inline-flex justify-between items-center h-[40px] ">
      <div className="lg:text-3xl font-semibold lg:ml-8 text-xl tracking-wide self-end">Browse By Category</div>
      <div className="w-[100px] hidden lg:flex h-full justify-evenly items-center mr-8">
          <button ref={buttonLeftRef} onClick={() => moveLeft()} className="w-[30px] bg-gray-200 h-[30px] rounded-full flex justify-center items-center">
          <svg className="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
         <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
          </button>
          <button ref={buttonRigthRef} onClick={() => {moveRight()}} className="w-[30px] bg-gray-200 h-[30px]  rounded-full flex justify-center items-center">
          <svg className="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
         </svg>
          </button>
        </div>
    </div>
    <div ref={scrollRef} onScroll={() => handleScroll(event)} className="w-[100%] border-1px inline-flex scroll-smooth h-[130px]  md:h-[175px] tab-container overflow-x-scroll  ">
      <div className=" h-[full] inline-flex lg:place-content-evenl place-content-start place-items-center space-x-2 lg:space-x-6">
        <div className="md:w-[130px] w-[100px] h-[100px] cursor-pointer shadow-sm rounded-md border-2px  hover:border-red-400 transition-all duration-150  md:h-[130px]  lg:first:ml-8 flex place-content-evenly place-items-center  flex-col">
          <BsPhone className="text-[40px]" />
          <div className="text-md">Phones</div>
        </div>
        <div className="md:w-[130px] w-[100px] shadow-sm rounded-md border-2px  hover:border-red-400 transition-all duration-150 h-[100px] md:h-[130px] cursor-pointer lg:first:ml-8 flex justify-evenly items-center  flex-col">
          <RiComputerLine className="text-[40px]" />
          <div className="text-md">Phones</div>
        </div>
        <div className="md:w-[130px] w-[100px] shadow-sm rounded-md border-2px  hover:border-red-400 transition-all duration-150 h-[100px] md:h-[130px]  first:ml-8 cursor-pointer flex justify-evenly items-center  flex-col">
          <IoWatchOutline className="text-[40px]" />
          <div className="text-md">Phones</div>
        </div>
        <div className="md:w-[130px] w-[100px] shadow-sm rounded-md border-2px  hover:border-red-400 transition-all duration-150  md:h-[130px] h-[100px]  first:ml-8 cursor-pointer flex justify-evenly items-center  flex-col">
          <CiCamera className="text-[40px]" />
          <div className="text-md">Phones</div>
        </div>
        <div className="md:w-[130px] w-[100px] shadow-sm rounded-md border-2px  hover:border-red-400 transition-all duration-150  md:h-[130px] h-[100px] first:ml-8 flex cursor-pointer justify-evenly items-center  flex-col">
          <CiHeadphones className="text-[40px]" />
          <div className="text-md">Phones</div>
        </div>
        <div className="md:w-[130px] w-[100px] shadow-sm rounded-md border-2px  hover:border-red-400 cursor-pointer transition-all duration-150 h-[100px] md:h-[130px]  first:ml-8 flex justify-evenly items-center  flex-col">
          <PiGameControllerThin className="text-[40px]" />
          <div className="text-md">Phones</div>
        </div>
        <div className="md:w-[130px] w-[100px] shadow-sm rounded-md border-2px  hover:border-red-400 cursor-pointer transition-all duration-150 h-[100px] md:h-[130px]  first:ml-8 flex justify-evenly items-center  flex-col">
          <PiHandbagThin className="text-[40px]" />
          <div className="text-md">Phones</div>
        </div>
        <div className="md:w-[130px] w-[100px] shadow-sm rounded-md border-2px  hover:border-red-400 cursor-pointer transition-all duration-150 h-[100px] md:h-[130px]  first:ml-8 flex justify-evenly items-center  flex-col">
          <CiSpeaker className="text-[40px]" />
          <div className="text-md">Phones</div>
        </div>
        <div className="md:w-[130px] w-[100px] shadow-sm rounded-md border-2px  hover:border-red-400 cursor-pointer transition-all duration-150 h-[100px]  md:h-[130px]  first:ml-8 flex justify-evenly items-center  flex-col">
          <PiTelevisionSimpleThin className="text-[40px]" />
          <div className="text-md">Phones</div>
        </div>
        <div className="md:w-[130px] w-[100px] shadow-sm rounded-md border-2px  hover:border-red-400 cursor-pointer transition-all duration-150 h-[100px]  md:h-[130px]  first:ml-8 flex justify-evenly items-center  flex-col">
          <PiArmchairLight className="text-[40px]" />
          <div className="text-md">Phones</div>
        </div>
        <div className="w-[100px] md:w-[130px] shadow-sm rounded-md border-2px  hover:border-red-400 cursor-pointer transition-all duration-150 h-[100px] md:h-[130px]  first:ml-8 flex justify-evenly items-center  flex-col">
          <IoPhonePortraitOutline className="text-[40px]" />
          <div className="text-md">Phones</div>
        </div>
        <div className="md:w-[130px] w-[100px] shadow-sm rounded-md border-2px  hover:border-red-400 cursor-pointer transition-all duration-150 h-[100px] md:h-[130px]  first:ml-8 flex justify-evenly items-center  flex-col">
          <PiTShirt className="text-[40px]" />
          <div className="text-md">Phones</div>
        </div>
      </div>
    </div>
    </>
  )
}
const MemoizedBrowseByCategory = React.memo(BrowseByCategory)
export default MemoizedBrowseByCategory

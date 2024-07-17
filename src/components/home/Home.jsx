import { transform } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { NavLink } from "react-router-dom"
import { motion } from "framer-motion"
import "../../styles/style.css"
import MemoizedDisplayProductFrame from "./DisplayProductFrame"
import MemoizedBrowseByCategory from "./BrowseByCategory"
import MemoizedBestSellingProduct from "./BestSellingProduct"
import FlashSale from "./FlashSale"
import MemoizedExploreOurProduct from "./ExploreOurProduct"
import MemoizedNewArrival from "./NewArrival"
const Home = () => {
    const [isRotate1, setIsRotate1] = useState(null)
    const [isRotate2, setIsRotate2] = useState(null)
    const [click, setClick] = useState(0)

    const variantRotate = {
        rotateBottom: {
            rotate: "90deg"
        }
    }

    const variant = {
        turnRed: {
            backgroundColor: "red",
            width: "28px",
            height: "28px"
        },

        turn0: {
            backgroundColor: "transparent",
            width: "18px",
            height: "18px"
        }
    }

    const dropdown1 = {
        grow: {

        },

        shrink: {
            display: "none",
            zIndex: "-1",
        }

    }



    useEffect(() => {
        setIsRotate1(false)
        setIsRotate2(false)
        
    }, [])
   return (
    <>
    <div className="w-[100%]">
    <div className="w-full h-[300px] md:h-[450px]   flex">
        <div className="w-[20%] md:w-[35%] md:block hidden h-[100%] overflow-y-scroll lg:border-r-1px  tab-container">
            <div className="w-full">
            <div onClick={() => setIsRotate1(!isRotate1)} className="w-full h-[40px]  tracking-wide text-lg cursor-pointer flex justify-start pl-8 items-center mt-8 md:text-[16px]">
              Women's Fashion 
              <motion.svg
              variants={variantRotate}
              animate={isRotate1 ? "rotateBottom" : "rotateRight"}
                className="w-[20px] ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
             </motion.svg>
            </div>
            <motion.div
            variants={dropdown1}
            animate={isRotate1 ? "grow" : "shrink"}
            transition={{
                duration: "0.1",
                ease: "easeInOut"
            }}
             className="w-full h-[200px] ">
                <NavLink className="w-full h-[40px]  flex justify-start items-center pl-14">Women's Hair
                </NavLink>
                <NavLink className="w-full h-[40px]  flex justify-start items-center pl-14">Women's shoe
                </NavLink>
                <NavLink className="w-full h-[40px]  flex justify-start items-center pl-14">Women's clothes
                </NavLink>
                <NavLink className="w-full h-[40px]  flex justify-start items-center pl-14">Women's jewelry
                </NavLink>
                <NavLink className="w-full h-[40px]  flex justify-start items-center pl-14">Women's perfume
                </NavLink>
            </motion.div>
            <div onClick={() => setIsRotate2(!isRotate2)} className="w-full h-[40px]  tracking-wide cursor-pointer md:text-[16px] flex justify-start pl-8 items-center">
              Men's Fashion 
              <motion.svg
              variants={variantRotate}
              animate={isRotate2 ? "rotateBottom": "rotateRight"}
              transition={{
                duration: "0.1",
                ease: "easeInOut"
              }}
               className="w-[20px] ml-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
             </motion.svg>
            </div>
            <motion.div
            variants={dropdown1}
            animate={isRotate2 ? "grow": "shrink"}
             className="w-full h-[200px] ">
                <NavLink className="w-full h-[40px]  flex justify-start items-center pl-14">Men's shoe
                </NavLink>
                <NavLink className="w-full h-[40px]  flex justify-start items-center pl-14">Men's wristwatch
                </NavLink>
                <NavLink className="w-full h-[40px]  flex justify-start items-center pl-14">Men's clothes
                </NavLink>
                <NavLink className="w-full h-[40px]  flex justify-start items-center pl-14">Men's necklace
                </NavLink>
                <NavLink className="w-full h-[40px] flex justify-start items-center pl-14"> Men's perfume
                </NavLink>
            </motion.div>

            <NavLink className="w-full h-[40px]   flex justify-start items-center pl-8 text-lg md:text-[16px] tracking-wide">
                Electronics
            </NavLink>
            <NavLink className="w-full h-[40px]  md:text-[16px] flex justify-start items-center pl-8 text-lg tracking-wide">
                Home & Lifestyle
            </NavLink>
            <NavLink className="w-full h-[40px]  md:text-[16px] flex justify-start items-center pl-8 text-lg tracking-wide">
                Medicine
            </NavLink>
            <NavLink className="w-full h-[40px]  md:text-[16px] flex justify-start items-center pl-8 text-lg tracking-wide">
                sports & Outdoor
            </NavLink>
            <NavLink className="w-full h-[40px]  md:text-[16px] flex justify-start items-center pl-8 text-lg tracking-wide">
                Baby's & Toys
            </NavLink>
            <NavLink className="w-full h-[40px]  md:text-[16px] flex justify-start items-center pl-8 text-lg tracking-wide">
                Groceries & Pets
            </NavLink>
            <NavLink className="w-full h-[40px]  md:text-[16px] flex justify-start items-center pl-8 text-lg tracking-wide">
                Health & Beauty
            </NavLink>
            </div>
        </div>
       <MemoizedDisplayProductFrame/>
    </div>
    <FlashSale/>
    <div className="h-[1px] mx-auto w-[98%] border-1px mt-10 border-gray-200 mb-10"></div>
    <MemoizedBrowseByCategory/>
    <div className="h-[1px] mx-auto w-[98%] border-1px mt-10 border-gray-200 mb-10"></div>
    <MemoizedBestSellingProduct/>
    <div className="w-[100%] bg-black mt-20 h-[400px] md:h-[500px] border-1px">
        <div className="md:w-[50%] w-[70%] md:ml-[5%] border-1px h-[100%]">
            <div className="text-green-500 mt-8 md:mt-14 tracking-wide md:text-xl md:font-semibold">Categories</div>
            <div className="text-white md:text-4xl lg:text-6xl leading-loose w-[80%] flex flex-wrap mt-8 tracking-wide text-2xl">Enhance Your Music Experience</div>
            <div className="lg:w-[55%] md:w-[65%] w-[85%] border-1px inline-flex place-content-between place-items-center md:mt-10 mt-2 h-[65px] ">
                <div className="lg:w-[65px] w-[40px] h-[40px] md:w-[50px] md:h-[50px] lg:h-[65px]  rounded-full bg-white flex flex-col justify-center items-center">
                    <div className="text-black font-semibold lg:text-lg md:text-md">23</div>
                    <div className="lg:text-[13px] text-[10px] md:text-[10px] font-semibold text-black -mt-2">Hours</div>
                </div>
                <div className="lg:w-[65px] w-[40px] h-[40px] lg:h-[65px] md:w-[50px] md:h-[50px]  rounded-full bg-white flex flex-col justify-center items-center">
                    <div className="text-black font-semibold lg:text-lg text-md">05</div>
                    <div className="lg:text-[13px] text-[10px] md:text-[10px] font-semibold text-black -mt-2">Days</div>
                </div>
                <div className="lg:w-[65px] w-[40px] h-[40px] md:w-[50px] md:h-[50px] lg:h-[65px]  rounded-full bg-white flex flex-col justify-center items-center">
                    <div className="text-black font-semibold lg:text-lg text md:text-md">59</div>
                    <div className="lg:text-[13px] md:text-[10px] font-semibold text-black -mt-2">Minutes</div>
                </div>
                <div className="lg:w-[65px] md:h-[50px] md:w-[50px] lg:h-[65px]  rounded-full bg-white flex flex-col justify-center items-center">
                    <div className="text-black font-semibold lg:text-lg md:text-md">35</div>
                    <div className="lg:text-[13px] md:text-[10px] font-semibold text-black -mt-2">Seconds</div>
                </div>
            </div>
            <div className="w-[150px] h-[50px] md:mt-12  lg:mt-10 bg-green-600 text-white tracking-wide rounded-[4px] flex justify-center items-center">Buy Now!</div>
        </div>
    </div>
    <MemoizedExploreOurProduct/>
    <MemoizedNewArrival/>
    </div>
    </>
   )
}

export default Home

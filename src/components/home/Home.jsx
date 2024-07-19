import { transform } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { NavLink } from "react-router-dom"
import { motion, useAnimate } from "framer-motion"
import "../../styles/style.css"
import MemoizedDisplayProductFrame from "./DisplayProductFrame"
import MemoizedBrowseByCategory from "./BrowseByCategory"
import MemoizedBestSellingProduct from "./BestSellingProduct"
import FlashSale from "./FlashSale"
import MemoizedExploreOurProduct from "./ExploreOurProduct"
import MemoizedNewArrival from "./NewArrival"
import boombox from "../../assets/boombox.png"
import delivery from "../../assets/delivery.png"
import service from "../../assets/Icon-Customer service.png"
import { TbTruckDelivery } from "react-icons/tb";
import { SlEarphonesAlt } from "react-icons/sl";
import { GoShieldCheck } from "react-icons/go";
import Footer from "./Footer"
const Home = () => {
    const [isRotate1, setIsRotate1] = useState(null)
    const [isRotate2, setIsRotate2] = useState(null)
    const [click, setClick] = useState(0)
    const [isAnimate, setIsAnimate] = useState(false)

    const animatePulse = {
        noPulse: {
            outlineWidth: "12px",
        },

        pulse: {
            outlineWidth: [ "4px", "6px", "8px", "10px", "12px",  "10px", "8px", "6px", "4px"]
        }
    }
    const animateDiv = {
        noTranslate: {
            translateY: "70px"
        },

        translate: {
            translateY: "0px",
            opacity: ["20%", "40%", "60%", "80%", "100%"]
        }
    }

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
        const observer = new IntersectionObserver(enteries => {
            enteries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsAnimate(true)
                    observer.unobserve(entry)
                } else {
                    setIsAnimate(false)
                }
            })
        }, {
            rootMargin: "50px"
        })
        const div = document.querySelector(".div")
        observer.observe(div)
 
    }, [])

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
    <div className="w-[100%] bg-black mt-20 h-[400px] relative md:h-[500px] border-1px">
        <div className="absolute bg-gradient-to-ellipse from-gray-100 to-gray-100 md:right-10 right-0 md:top-0 w-[85%]  md:w-[50%] bottom-0 h-[30%] md:h-[100%] flex justify-center items-center ">
        <img className="" src={boombox} alt="boombox" />
        </div>
        <div className="md:w-[50%]   w-[70%] md:ml-[5%] absolute top-0  md:h-[100%] h-[100%]">
            <div className="text-green-500 mt-1 md:mt-14 tracking-wide md:text-xl md:font-semibold">Categories</div>
            <div className="text-white md:text-4xl lg:text-6xl leading-loose w-[80%] flex flex-wrap mt-2 tracking-wide text-2xl">Enhance Your Music Experience</div>
            <div className="lg:w-[55%] md:w-[65%] w-[85%]  inline-flex place-content-between place-items-center md:mt-10 mt-2 h-[65px] ">
                <div className="lg:w-[65px] w-[40px] h-[40px] md:w-[50px] md:h-[50px] lg:h-[65px]  rounded-full bg-white flex flex-col justify-center items-center">
                    <div className="text-black font-semibold lg:text-lg md:text-md">23</div>
                    <div className="lg:text-[13px] text-[10px] md:text-[10px] font-semibold text-black -mt-2 sm:tracking-tight">Hours</div>
                </div>
                <div className="lg:w-[65px] w-[45px] h-[45px] lg:h-[65px] md:w-[50px] md:h-[50px]  rounded-full bg-white flex flex-col justify-center items-center">
                    <div className="text-black font-semibold lg:text-lg text-md">05</div>
                    <div className="lg:text-[13px] text-[10px] md:text-[10px] font-semibold text-black sm:tracking-tight -mt-2">Days</div>
                </div>
                <div className="lg:w-[65px] w-[45px] h-[45px] md:w-[50px] md:h-[50px] lg:h-[65px]  rounded-full bg-white flex flex-col justify-center items-center">
                    <div className="text-black font-semibold lg:text-lg text md:text-md">59</div>
                    <div className="lg:text-[13px] md:text-[10px] font-semibold tracking-tight text-black -mt-2 text-[10px]">Minutes</div>
                </div>
                <div className="lg:w-[65px] h-[45px] w-[45px] md:h-[50px] md:w-[50px] lg:h-[65px]  rounded-full bg-white flex flex-col justify-center items-center">
                    <div className="text-black font-semibold lg:text-lg md:text-md">35</div>
                    <div className="lg:text-[13px] md:text-[10px] font-semibold text-black -mt-2 text-[10px] sm:tracking-tight">Seconds</div>
                </div>
            </div>
            <div className="md:w-[150px]  w-[100px] mt-3 h-[50px] md:mt-12  lg:mt-10 bg-green-600 text-white tracking-wide rounded-[4px] flex justify-center items-center cursor-pointer transition-all duration-300 hover:bg-green-800 lg:shadow-lg">Buy Now!</div>
        </div>
    </div>
    <MemoizedExploreOurProduct/>
    <MemoizedNewArrival/>
    </div>
    <div className="lg:w-[95%] div md:h-[300px] border-red-500 mx-auto flex lg:place-content-evenly  place-content-between place-items-center  w-[100%]  flex-wrap h-[700px]">
        <div id="truck" className="lg:w-[23%] lg:mt-0 md:mt-14 mt-14 md:w-[30%] w-[90%]  overflow-y-hidden  md:h-[60%] lg:h-[45%] h-[25%]  flex flex-col  md:mx-0 mx-auto justify-start self-center items-center">
            <div className="w-[100%]   h-[60%]  flex justify-center items-center">
            <motion.div
            variants={animatePulse}
            animate={isAnimate ? "pulse" : "noPulse"}
            transition={isAnimate ? {
                duration: 3,
                ease: "easeInOut",
                repeat: 18000
            } : null} 
            className="w-[40px] h-[40px] flex justify-center items-center  rounded-full outline outline-[10px] outline-slate-300 bg-black">
            <TbTruckDelivery className="text-white w-[60px] h-[24px]" />
            </motion.div>
            </div>
            <motion.div
            variants={animateDiv}
            animate={isAnimate ? "translate" : "noTranslate"}
            transition={isAnimate ? {
                duration: 1,
                ease: "easeInOut",

            } : null}
             className="w-[100%] mx-auto lg:font-semibold text-center md:font-bold font-semibold">FREE AND FAST DELIVERY</motion.div>
            <motion.div
            variants={animateDiv}
            animate = {isAnimate ? "translate" : "noTranslate"}
            transition={isAnimate ? {
                duration: 1,
                delay: 0.2,
                ease: "easeInOut"
            } : null}
             className="w-[100%] lg:text-[12px] md:text-[14px] text-[12px] lg:font-semibold text-center md:font-bold font-semibold ">Free delivery for all orders over $140</motion.div>
        </div>
        <div id="truck" className="lg:w-[23%] md:w-[30%]  w-[90%] 
        h-[25%]  overflow-y-hidden  md:h-[60%] md:mt-14 lg:mt-0  lg:h-[45%]  flex flex-col justify-start items-center mx-auto md:mx-0">
            <div className="w-[100%]  h-[60%]  flex justify-center items-center">
            <motion.div
            variants={animatePulse}
            animate={isAnimate ? "pulse" : "noPulse"}
            transition={isAnimate ? {
                duration: 3,
                ease: "easeInOut",
                repeat: 18000
            } : null} 
            className="w-[40px] h-[40px] flex justify-center items-center  rounded-full outline outline-[10px] outline-slate-300 bg-black">
            <SlEarphonesAlt className="text-white w-[24px] h-[60px]" />
            </motion.div>
            </div>
            <motion.div
            variants={animateDiv}
            animate={isAnimate ? "translate" : "noTranslate"}
            transition={isAnimate ? {
                duration: 1,
                ease: "easeInOut",

            } : null}
             className="w-[100%] mx-auto  lg:font-semibold text-center uppercase md:font-bold font-semibold">24/7 Customer service</motion.div>
            <motion.div
            variants={animateDiv}
            animate = {isAnimate ? "translate" : "noTranslate"}
            transition={isAnimate ? {
                duration: 1,
                delay: 0.2,
                ease: "easeInOut"
            } : null}
             className="w-[100%] text-[12px] md:text-[14px] lg:text-[12px] lg:font-semibold text-center md:font-bold font-semibold ">friendly 24/7 customer support</motion.div>
        </div>
        <div id="truck" className="lg:w-[23%] md:w-[30%] w-[90%]  overflow-y-hidden  h-[25%] md:mt-14 md:h-[60%] lg:h-[45%] mx-auto md:mx-0 flex flex-col justify-start items-center lg:mt-0">
            <div className="w-[100%]  h-[60%]  flex justify-center items-center">
            <motion.div
            variants={animatePulse}
            animate={isAnimate ? "pulse" : "noPulse"}
            transition={isAnimate ? {
                duration: 3,
                ease: "easeInOut",
                repeat: 18000
            } : null} 
            className="w-[40px] h-[40px] flex justify-center items-center  rounded-full outline outline-[10px] outline-slate-300 bg-black">
            <GoShieldCheck className="text-white w-[24px] h-[60px]" />
            </motion.div>
            </div>
            <motion.div
            variants={animateDiv}
            animate={isAnimate ? "translate" : "noTranslate"}
            transition={isAnimate ? {
                duration: 1,
                ease: "easeInOut",

            } : null}
             className="w-[100%] mx-auto md:font-bold font-semibold lg:font-semibold text-center uppercase">money back guarantee</motion.div>
            <motion.div
            variants={animateDiv}
            animate = {isAnimate ? "translate" : "noTranslate"}
            transition={isAnimate ? {
                duration: 1,
                delay: 0.2,
                ease: "easeInOut"
            } : null}
             className="w-[100%] text-[14px] lg:text-[12px] lg:font-semibold md:font-bold text-center ">we return money within 30 days</motion.div>
        </div>
    </div>
    <Footer/>
    </>
   )
}

export default Home

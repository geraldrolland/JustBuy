import { motion, useAnimate, useInView } from "framer-motion"
import iphone from "../../assets/iphone.png"
import sony from "../../assets/sony.png"
import lenovo from "../../assets/lenovo.png"
import hp from "../../assets/hp.png"
import sam from "../../assets/samsung.png"
import React, {useRef, useEffect, useState, useCallback} from "react"

const DisplayProductFrame = () => {
  const [img1, animate1] = useAnimate()
  const [img2, animate2] = useAnimate()
  const [img3, animate3] = useAnimate()
  const [img4, animate4] = useAnimate()
  const [img5, animate5] = useAnimate()

  const [display, setDisplay] = useState(false)
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const ref4 = useRef(null)
  const ref5 = useRef(null)
  const [titleRef, animateTitle] = useAnimate()
  const frame1 = useRef(null)
  const frame2 = useRef(null)
  const frame3 = useRef(null)
  const frame4 = useRef(null)
  const frame5 = useRef(null)
  const displayDiscRef = useRef(null)



  const changeStyle = useCallback( (ref, refFrame) => {
    const arrRef = [ref1, ref2, ref3, ref4, ref5]
    const arrFrame = [frame1, frame2, frame3, frame4, frame5]
    arrFrame.forEach((frame) => {
      if (frame.current.style.zIndex === "10") {
        frame.current.style.zIndex = "0"
      }
    })
    arrRef.forEach(element => {
        if (element.current.style.backgroundColor === "red") {
            element.current.style.width = "18px"
            element.current.style.backgroundColor ="gray"
            element.current.style.border="none"
            element.current.style.height = "18px"
        }
        
    });
    ref.current.style.width = "27px"
    ref.current.style.backgroundColor ="red"
    ref.current.style.height = "27px"
    ref.current.style.border = "2px solid white"
    refFrame.current.style.zIndex = "10"
    return
  }, [])

  const animateElement1 = useCallback( () => {
    animate1(img1.current, {
      scale: [1.2, 1.2, 1],
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      }
    })
    return
  }, [])

  const animateElement2 = useCallback( () => {
    animate2(img2.current, {
      scale: [1.2, 1.2, 1],
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      }
    })
    return
  }, [])

  const animateElement3 = useCallback( () => {
    animate3(img3.current, {
      scale: [1.2, 1.2, 1],
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      }
    })
    return
  }, [])

  const animateElement4 = useCallback(() => {
    animate4(img4.current, {
      scale: [1.2, 1.2, 1],
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      }
    })
    return
  }, [])

  const animateElement5 = useCallback(() => {
    animate5(img5.current, {
      scale: [1.2, 1.2, 1],
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      }
    })
    return
  }, [])

  
  useEffect(() => {
  const arrRef = [ref1, ref2, ref3, ref4, ref5]
  arrRef.forEach(elem => {
    elem.current.style.backgroundColor = "gray"
  })
  animateElement1()
  frame1.current.style.zIndex = "10"
  ref1.current.style.width = "27px"
  ref1.current.style.backgroundColor ="red"
  ref1.current.style.height = "27px"
  ref1.current.style.border = "2px solid white"     
  }, [])

  return (
    <div className="w-full   lg:mt-[45px] h-full lg:w-[90%] lg:h-[85%]  lg:mx-auto overflow-x-scroll overflow-y-hidden tab-container ">
       <div className="lg:w-[80%] lg:ml-10  w-[100%] tab-container  h-[100%]  overflow-x-scroll relative">
        <div className="lg:w-[20%]  w-[40%] h-[30px]   md:h-[50px]  absolute bottom-0 lg:ml-[40%] ml-[30%] z-30 inline-flex place-content-evenly  place-items-center ">
            <div className="w-full   h-full flex md:w-[75%] justify-evenly items-center  ">
                <div
                ref={ref1}
                onClick={() => {
                  changeStyle(ref1, frame1, displayDiscRef)
                  animateElement1()
                }}
                className="w-[18px] cursor-pointer transition-all duration-300 ease h-[18px] rounded-full"></div>
                <div
                onClick={() => {
                  changeStyle(ref2, frame2)
                  animateElement2()
                }}
                ref={ref2}
                 className="w-[18px]  cursor-pointer transition-all duration-300 ease h-[18px]  rounded-full"></div>
                <div
                onClick={() => {
                  changeStyle(ref3, frame3)
                  animateElement3()
                }}
                ref={ref3} 
                 className="w-[18px] h-[18px] cursor-pointer transition-all duration-300 ease rounded-full"></div>
                <div
                onClick={() => {
                  changeStyle(ref4, frame4)
                  animateElement4()

                }}
                
                ref={ref4}
                  className="w-[18px] h-[18px] cursor-pointer transition-all duration-300 ease rounded-full"></div>
                <div
                onClick={() => {
                  changeStyle(ref5, frame5)
                  animateElement5()
                }}
                animate
                ref={ref5}
                  className="w-[18px] trasition-all cursor-pointer duration-300 ease h-[18px]  rounded-full "></div>
            </div>
        </div>
        <div className="h-full w-[100%] flex justify-start items-center relative ">
        <div
         ref={frame1} className="w-[100%] h-[100%] absolute backdrop-filter backdrop-blur-lg ">
            <div ref={displayDiscRef}
             className="md:w-[35%] w-[60%] h-full overflow-hidden  absolute ">
                <div
                ref={titleRef}
                className="lg:w-[60%] w-[60%] md:w-[100%]  h-[15%]  md:ml-10 ml-2 mt-10 flex  justify-between items-center">
                <img
                className="md:w-[60px] w-[50px] md:mr-5" src={iphone} alt="" />
                <div className="md:text-2xl lg:text-xl">iphone 14 Series</div>
                </div>
                <div className="md:text-4xl mt-5 md:ml-10 ml-5 font-semibold text-xl">Up to 10%</div>
                <div className="md:text-4xl font-semibold mt-5  md:ml-10 ml-5 text-xl">off Voucher</div>
                <div className=" ml-5 md:ml-10 flex w-[80%] lg:w-[50%] h-[20%]  mt-14  underline underline-offset-4 justify-start items-start">Shop Now
                <svg className=" w-5 md:w-[20px] mt-1 lg:-mt-[3px]    ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
              </svg>
            </div>
            </div>
            <img ref={img1}
             className="w-full h-full object-cover" src={"https://images.unsplash.com/photo-1690705229380-a32a8eb5017d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="iphone" />
        </div>
        <motion.div       
         ref={frame2} className="w-[100%] h-[100%] absolute backdrop-filter backdrop-blur-lg ">
            <div className="md:w-[35%] w-[60%] h-full absolute">
                <div className="lg:w-[70%] w-[70%] md:w-[100%] h-[15%]  md:ml-10 ml-2 mt-10 flex justify-between items-center">
                <img className="md:w-[110px] w-[70px]" src={sony} alt="" />
                <div className="text-3xl md:text-3xl font-semibold">ZV-1</div>
                </div>
                <div className="md:text-4xl mt-5 md:ml-10 ml-5 font-semibold text-xl">Up to 10%</div>
                <div className="md:text-4xl font-semibold mt-5  md:ml-10 ml-5 text-xl">off Voucher</div>
                <div className=" ml-5 md:ml-10 flex w-[80%] lg:w-[50%] h-[20%]  mt-14  underline underline-offset-4 justify-start items-start">Shop Now
                <svg className="w-5 mt-1 lg:-mt-[3px]  md:w-[20px]  ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
              </svg>
            </div>
            </div>
            <img ref={img2} className="w-full h-full object-cover" src={"https://images.pexels.com/photos/22610328/pexels-photo-22610328/free-photo-of-sony-camera-with-lens.jpeg"} alt="iphone" />
        </motion.div>
        <div ref={frame3} className="w-[100%] h-[100%] backdrop-filter backdrop-blur-lg absolute ">
            <div className="md:w-[35%] w-[80%] h-full absolute">
                <div className="lg:w-[80%] w-[80%] md:w-[100%] h-[15%] md:ml-10 ml-2 mt-10 flex justify-between items-center">
                <img className="md:w-[120px] w-[100px] mr-2 md:mr-5" src={lenovo} alt="" />
                <div className="text-2xl font-semibold md:text-2xl">Smart TV K81</div>
                </div>
                <div className="md:text-4xl mt-5 md:ml-10 ml-5 font-semibold text-xl">Up to 5%</div>
                <div className="md:text-4xl font-semibold mt-5  md:ml-10 ml-5 text-xl">off Voucher</div>
                <div className=" ml-5 md:ml-10 flex w-[80%] lg:w-[50%] h-[20%]  mt-14  underline underline-offset-4 justify-start items-start">Shop Now
                <svg className="md:w-[20px] w-5 mt-1   ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
              </svg>
            </div>
            </div>
            <img ref={img3} className="w-full h-full object-cover" src={"https://img.freepik.com/free-psd/curved-tv-mockup_1310-608.jpg?w=740&t=st=1720639087~exp=1720639687~hmac=0332a2ab2bcd1564f9b03a2d3af3b256303e504452eac7cd346ef83b87d75955"} alt="iphone" />
        </div>
        <div ref={frame4} className="w-[100%] h-[100%] absolute backdrop-filter backdrop-blur-lg">
            <div className="md:w-[35%] w-[60%] h-full absolute">
                <div className="lg:w-[80%]  w-[90%] md:w-[95%] h-[15%]  md:ml-10 ml-2 mt-10 flex justify-between items-center ">
                <img className="md:w-[110px] w-[80px] " src={hp} alt="" />
                <div className="text-2xl md:text-3xl font-semibold">Pavilion x360</div>
                </div>
                <div className="md:text-4xl mt-5 md:ml-10 ml-5 font-semibold text-xl">Up to 5%</div>
                <div className="md:text-4xl font-semibold mt-5  md:ml-10 ml-5 text-xl">off Voucher</div>
                <div className=" ml-5 md:ml-8 flex w-[80%] lg:w-[50%] h-[20%] mt-14  underline underline-offset-4 justify-start items-start">Shop Now
                <svg className=" md:w-[25px] w-5 text-stroke text-black mt-1 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
              </svg>
            </div>
            </div>
            <img ref={img4} className="w-full h-full object-cover" src={"https://img.freepik.com/free-photo/laptop-device-with-minimalist-monochrome-background_23-2150763335.jpg?t=st=1720639653~exp=1720643253~hmac=f1cbd8a4e86b7df97eb11ece002ebe9da6308759166754e8715d50369a9a6d00&w=740"} alt="iphone" />
        </div>
        <div ref={frame5} className="w-[100%] h-[100%] absolute backdrop-filter backdrop-blur-lg">
            <div className="md:w-[35%] w-[60%] h-full absolute ">
                <div className="lg:w-[80%] w-[90%] md:w-[100%]  h-[15%] md:ml-10 ml-2 mt-10 flex justify-between items-center">
                <img className="md:w-[130px] w-[80px] mr-2 md:mr-5" src={sam} alt="" />
                <div className="text-xl md:text-xl font-semibold">Galaxy Buds Pro</div>
                </div>
                <div className="md:text-4xl mt-5 md:ml-10 ml-5 font-semibold text-xl">Up to 5%</div>
                <div className="md:text-4xl font-semibold mt-5  md:ml-10 ml-5 text-xl">off Voucher</div>
                <div className=" ml-5 md:ml-10 flex w-[80%] lg:w-[50%] h-[20%] mt-14  underline underline-offset-4 justify-start items-start">Shop Now
                <svg className="md:w-8 w-5 mt-1 lg:-mt-[3px] md:-mt-[1px]   ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
              </svg>
            </div>
            </div>
            <img ref={img5} className="w-full h-full object-cover" src={"https://img.freepik.com/free-photo/still-life-tech-device_23-2150722606.jpg?t=st=1720642379~exp=1720645979~hmac=1fdc6e38216a4bcd4d157240a9a6d7e0f9e540789fb177bc8b6de84a8d0dbd13&w=740"} alt="iphone" />
        </div>
    </div>
        </div>

</div>
  )
}
const MemoizedDisplayProductFrame = React.memo(DisplayProductFrame) 
export default MemoizedDisplayProductFrame

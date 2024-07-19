import Title from "./Title"
import Clock from "./Clock"
import Product from "../product/Product"
import "../../styles/style.css"
import { motion, useForceUpdate } from "framer-motion"
import { useEffect, useState } from "react"
import { useRef } from "react"
import axios from "axios"
import {useQuery} from "@tanstack/react-query"
import { produce } from "immer"
import { render } from "react-dom"



const FlashSale = () => {
  const scrollRef = useRef(null)

  const [amount, setAmount] = useState(0)
  const ButtonleftRef = useRef(null)
  const ButtonRightRef = useRef(null)
  const [value, setValue] = useState("")
  const [click, setClick] = useState(false)
  const [xPosition, setXPosition] = useState(0)
  const [data, setData] = useState({})
  const [show, setShow] = useState(null)
  const [renderView, setRenderViewState] = useState(false)
  const scrollContainerRef = useRef(null)

  const displayAllProduct = {
    hideProduct: {
      height: "420px",
      overflowY: "hidden"
    },
    viewProduct: {
      overflowY: "none",

    }
  }


  const handleScroll = (event) => {

    if (event.target.scrollLeft > 0) {
      ButtonleftRef.current.style.visibility = "visible"
      
    }

    if (event.target.scrollLeft === 0) {
      ButtonleftRef.current.style.visibility = "hidden"
      
    }

    if (scrollRef.current.scrollHeight > 400) {
    if (event.target.scrollLeft + event.target.clientWidth === event.target.scrollWidth) {
      console.log("error")
      ButtonRightRef.current.style.visibility = "hidden"
      return
    }
  }

    if (event.target.scrollLeft  < event.target.scrollWidth) {
      ButtonRightRef.current.style.visibility = "visible"
      scrollRef.current.style.overflowX = "scroll"
      return
    }
    console.log("sum", event.target.scrollLeft + event.target.clientWidth)
  }

  const moveLeft = () => {
    if (scrollRef.current.scrollLeft > 100) {
    scrollRef.current.scrollLeft -= 325
    ButtonRightRef.current.style.visibility = "visible"
    } else {
      scrollRef.current.scrollLeft = 0
      ButtonleftRef.current.style.visibility = "hidden"
    }
  } 

  const moveRight = () => {
    if (scrollRef.current.scrollLeft < 700) {
    scrollRef.current.scrollLeft += 325
    console.log(scrollRef.current.scrollLeft)
    ButtonleftRef.current.style.visibility = "visible"
    } else {
      scrollRef.current.scrollLeft = 888
      ButtonRightRef.current.style.visibility = "hidden"
    }
  }

  useEffect(() => {
    if (scrollRef.current.scrollHeight > 400) {
      setRenderViewState(true)
      setShow(true)
      console.log("error1")


    } else {
      setRenderViewState(false)
      console.log(renderView)

    }
  }, [data])

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products?limit=18")
    .then((response) => {
      setData(response.data)
      console.log(data)

    })
    .catch((error) => {

    })
  }, [])


    return  (
    <>
    <Title title="Today's"/>
        <div className="md:w-[95%] mt-2 w-[100%]  h-[40px] inline-flex justify-between items-center  lg:ml-8">
          <div className="lg:w-[35%] md:w-[45%] h-full w-[100%]  flex justify-between">
            <div className="lg:text-3xl md:text-xl  tracking-wide font-semibold text-black text-[22px] self-end">Flash Sales</div>
            <Clock/>
        </div>
        <div className="w-[100px] hidden lg:flex h-full justify-evenly items-center">
          <button ref={ButtonleftRef} onClick={() => moveLeft()} className="w-[30px] bg-gray-200 h-[30px] rounded-full flex justify-center items-center">
          <svg className="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
         <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
          </button>
          <button ref={ButtonRightRef} onClick={() => moveRight()} className="w-[30px] bg-gray-200 h-[30px]  rounded-full flex justify-center items-center">
          <svg className="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
         </svg>
          </button>
        </div>
        </div>
        <motion.div 
        variants={displayAllProduct}
        animate={show ? "hideProduct" : "viewProduct"} 
         ref={scrollRef}  onScroll={() => handleScroll(event)}  className="lg:w-[100%]   w-[100%] mt-4 tab-container overflow-x-scroll overflow-y-hidden scroll-smooth">
          <div ref={scrollContainerRef} className="lg:w-[150%]   md:w-[100%] w-[100%] md:space-y-14 md:place-content-evenly place-content-between flex flex-wrap border-1px  lg:space-y-10
          place-items-center lg:place-content-start ">
           {
               data?.map(product => (<Product buttonLeft={ButtonleftRef} buttonRight={ButtonRightRef} scroll={scrollRef} showView={renderView} key={product.id}  prod={product}/>))
           }
          </div>
        </motion.div>
        {renderView ? <button
        onClick={() => setShow(!show)}
        className="w-[150px] h-[40px] text-white block  bg-red-500 mx-auto mt-10">{show ? "View All Products" : "Hide All Products"}</button> : null}
    </>
  )
}



export default FlashSale

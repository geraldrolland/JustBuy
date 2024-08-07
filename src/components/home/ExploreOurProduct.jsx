import React from 'react'
import Title from './Title'
import "../../styles/style.css"
import { useState, useRef, useEffect, useCallback } from 'react'
import axios from 'axios'
import Product from '../product/Product'
import { motion } from 'framer-motion'
import { useQuery } from '@tanstack/react-query'

const fetchExploreOurProduct = async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products")
    return response.data
  }
  catch(error) {
    return error
  }
}

const ExploreOurProduct = () => {


    const ButtonleftRef = useRef(null)
    const ButtonRightRef = useRef(null)
    const scrollRef = useRef(null)
    const [show, setShow] = useState(null)
    const [renderView, setRenderViewState] = useState(false)
    const {isPending, isError, isFetching, error, data} = useQuery({
      queryKey: ["exploreourproduct"],
      queryFn: fetchExploreOurProduct
    })
    const displayAllProduct = {
        hideProduct: {
          height: "400px",
          overflowY: "hidden"
        },
        viewProduct: {
          overflowY: "none",
    
        }
      }


    const handleScroll = useCallback( (event) => {

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
      }, [])
    
      const moveLeft = useCallback( () => {
        if (scrollRef.current.scrollLeft > 100) {
        scrollRef.current.scrollLeft -= 325
        ButtonRightRef.current.style.visibility = "visible"
        } else {
          scrollRef.current.scrollLeft = 0
          ButtonleftRef.current.style.visibility = "hidden"
        }
      }, [])
    
      const moveRight = useCallback( () => {
        if (scrollRef.current.scrollLeft < 700) {
        scrollRef.current.scrollLeft += 325
        console.log(scrollRef.current.scrollLeft)
        ButtonleftRef.current.style.visibility = "visible"
        } else {
          scrollRef.current.scrollLeft = 888
          ButtonRightRef.current.style.visibility = "hidden"
        }
      }, [])

      const updateShow = () => {
        setShow(!show)
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
    

  return (
    <>
      <Title title={"Our Product"} />
      <div className='w-[100%] h-[40px] mt-2  inline-flex place-content-between place-items-center'>
        <div className='md:text-3xl font-bold lg:ml-8 tracking-wide text-xl'>Explore Our Products</div>
        <div className="w-[100px] hidden lg:flex h-full justify-evenly items-center mr-8">
          <button ref={ButtonleftRef} onClick={() => {moveLeft()}}  className="w-[30px] bg-gray-200 h-[30px] rounded-full flex justify-center items-center">
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
       ref={scrollRef} onScroll={() => handleScroll(event)} className='w-[100%] overflow-x-scroll scroll-smooth tab-container'>
        <div className='lg:w-[150%] w-[100%] flex flex-wrap place-content-start md:space-x-5 place-items-center'>
            {
                data?.map(product => <Product key={product.id} prod={product} />)
            }
        </div>
      </motion.div>
      { renderView ? 
      <motion.div

      onClick={() => updateShow()}
       className='w-[200px] cursor-pointer bg-red-500 mt-6 h-[40px] border-1px mx-auto flex justify-center items-center text-white'>{show ? "View All Products" : "Hide All Products"}</motion.div> : null
      }
    </>
  )
}
const MemoizedExploreOurProduct = React.memo(ExploreOurProduct) 
export default MemoizedExploreOurProduct

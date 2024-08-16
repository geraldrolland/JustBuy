import React, { useState } from 'react'
import Title from './Title'
import Product from '../product/Product'
import { useEffect } from 'react'
import { useRef } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'
import { useQuery } from '@tanstack/react-query'
import FlashSaleLoader from '../loaders/FlashSaleLoader'
const fetchBestSellingProduct = async () => {
  console.log("is fetching")
  try {
    const response = await axios.get("https://fakestoreapi.com/products?limit=18")
    return response.data
  }
  catch(error) {
    return error
  }

}
const BestSellingProduct = () => {
    const scrollRef = useRef(null)
    const [show, setShow] = useState(null)
    const [renderView, setRenderViewState] = useState(false)
    const [size, setSize] = useState(400)
    const {isPending, isFetching, data, isError} = useQuery({
      queryKey: ["bestsellingproduct"],
      queryFn: fetchBestSellingProduct
    })
    const displayAllProduct = {
        hideProduct: {
          height: size + "px",
          overflowY: "hidden"
        },
        viewProduct: {
          overflowY: "none",
    
        }
      }
    
    useEffect(() => {
      if (matchMedia("(max-width: 768px)").matches === true) {
        setSize(300)
      }
        if (scrollRef.current &&scrollRef.current.scrollHeight > 400) {
          setRenderViewState(true)
          setShow(true)
          console.log("error1")
          console.log("this is scrollBottom", scrollRef.current.scrollBottom)
          console.log("this is scrollTop", scrollRef.current.scrollTop)
    
        } else {
          setRenderViewState(false)
          console.log(renderView)
    
        }
      }, [data])

  return (
    isPending && isFetching ? <FlashSaleLoader/> :
    <>
        
      <Title title={"This Month"} />
      <div className='w-[100%] h-[40px]   mt-2 flex place-content-between items-center '>
        <div className='md:text-3xl tracking-wide font-bold lg:ml-8 text-xl'>Best Selling Products</div>
        { renderView ? 
            <button onClick={() => {
                setShow(!show)
            }
            } className='block text-white md:mr-8 w-[100px] md:w-[130px] bg-red-500 md:h-[100%] h-[35px] '>{show ? "View all" :  "Hide all"}</button>
            : null
        }
      </div>
      <motion.div
      variants={displayAllProduct}
      animate={show ? "hideProduct" : "viewProduct"} 
      ref={scrollRef} className='w-[100%] flex flex-wrap place-content-between lg:place-content-start md:space-x-9 place-items-center mt-8'>
        {isFetching && isPending ? "loading..." :
            data?.map(product => <Product key={product.id} prod={product} />)
        }
      </motion.div>
    </>
  )
}
const MemoizedBestSellingProduct = React.memo(BestSellingProduct)
export default MemoizedBestSellingProduct
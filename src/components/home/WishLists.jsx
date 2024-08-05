import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import Product from '../product/Product'
import Title from './Title'
import Footer from './Footer'
import { IoCartOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { userStatus } from '../../App'

export const WishLists = () => {

    const prodRef = useRef(null)
    const prodListRef = useRef(null)
    const fetchWishList = async () => {
        console.log("is called")
        try {
            const response = await axios.get("https://fakestoreapi.com/products?limit=4")
            if (response.status === 200) {
                console.log(response.data)
                return response.data
            }

            
        }
        catch(error) {
            
            console.log("error", error)
            return error
        }
    
        
    }
    const {data, isError, isPending, isFetching} = useQuery({
        queryKey: ["wishlist"],
        queryFn: fetchWishList
    })

    const deleteProduct = (prodId) => {

        if (prodListRef.current) {
            const prodList = prodListRef.current.children
            Array.from(prodList).forEach(prod => {
                if (parseInt(prod.id) === prodId) {
                    prod.style.display = "none"
                }
            })
            console.log("deleted product")
        }
        console.log("this is from prodId", prodId)
        console.log("this is prodRef", prodRef.current.id)
        console.log(typeof(prodId))
        console.log(typeof(prodRef.current.id))
    }

  return (
    <>
    <div  className='md:w-[95%]    mx-auto'>
        <div className='w-[100%] md:mt-14 mt-6 h-[40px]  flex justify-between items-center'>
            <h1 className=' font-semibold md:tracking-wide tracking-tight text-md md:text-lg'>Wishlist (4)
            </h1>
            <div className='md:w-[170px] w-[120px] h-[100%] rounded-sm flex justify-center  hover:bg-black transition-all duration-200 hover:text-gray-100 cursor-pointer items-center border-gray-500 border-1px'>
                <h1 className='text-sm font-semibold tracking-tight'>Move All To Bag</h1>
            </div>
            
        </div>
        { isPending && isFetching ? <div>Loading...</div> : 
        <div ref={prodListRef} className='w-[100%] mt-8 transition-all duration-300 ease-in-out  flex flex-wrap justify-between items-center'>
        {
               data?.map(product => (<div ref={prodRef} key={product.id}  id={product.id} className='md:w-[230px] cursor-pointer  shadow-md rounded-md product md:shadow-sm product  md:mr-[20px]   mr-2 md:h-[350px] w-[170px] h-[300px]  md:mb-[70px] mb-[40px]'>
                <div className='w-full group  h-[75%] overflow-y-hidden  relative flex justify-center items-start'>
                  <button type="button" className="w-[100%] transform lg:translate-y-20 transition-all duration-200 lg:group-hover:translate-y-0  h-[25px] absolute  md:h-[40px] flex justify-center items-center bg-black bottom-0 text-sm  text-white">
                    <IoCartOutline className='w-[28px] h-[28px]' />
                    Add To Cart
                  </button>
                  <div className='w-[30px] h-[30px]  absolute right-1 top-2 flex justify-center items-center rounded-full bg-gray-100'>
                    <RiDeleteBin6Line onClick={() => {deleteProduct(product.id)}} className='transition-all duration-200 hover:text-red-500' />
                  </div>
                <img className='object-cover w-[70%] h-[80%] ' src={product.image} alt={product.title} />
                </div>
                <div className="w-[100%] h-[25%]   truncate ">
                  <div className="md:text-[16px] text-[15px] w-[100%] h-[30%] font-semibold mt-2 pr-2 ">{product.title}</div>
                  <div className="text-red-400 md:mt-1"><span className="inline-block proportional-nums text-[15px] md:text-[16px]">${parseInt(product.price)}</span><span className="inline-block ml-2 text-[15px] proportional-nums line-through md:text-[16px]  text-gray-300">${parseInt(product.price * 3)}</span>
                  </div>

                </div>
              </div>))
        }
        
        </div>
        }
    </div>
    <div className='w-[100%] h-[100px] mx-auto justify-between border-gray-900 flex items-center'>
    <div className='md:w-[170px] w-[150px] md:ml-[2.5%] h-[50px]  flex justify-between items-center space-x-6'>
        <div className='md:w-[30px] w-[25px] h-[100%]  rounded-sm bg-red-600'></div>
        <h1 className='md:text-lg text-md capitalize font-semibold '>Just for you</h1>
    </div>
    <div  className='md:w-[120px] cursor-pointer w-[80px] h-[40px] border-1px md:mr-[2.5%] flex justify-center items-center text-sm rounded-sm border-gray-500 font-semibold hover:bg-black transition-all duration-200 hover:text-gray-100 '>See All</div>
    </div>
    <div className='w-[95%] h-[]'></div>
    <div className='md:w-[95%] w-[100%] flex flex-wrap place-content-between place-items-center  mx-auto'>
        {
               data?.map(product => (<Product key={product.id}  prod={product}/>))
        }
    </div>
    <Footer/>
    </>
  )
}

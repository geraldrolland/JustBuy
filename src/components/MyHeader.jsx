import React, { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { NavLink } from 'react-router-dom'
import useStore from '../customhook/UseStore'
import { motion } from 'framer-motion'
import { userStatus } from '../App'
import { useContext } from 'react'
import { OrderExist } from './home/OrderExist'
import { WishListExist } from './home/WishListExist'
import { WishLists } from './home/WishLists'
import { useAnimate } from 'framer-motion'
import { FiUser } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import { RxCrossCircled } from "react-icons/rx";
import { GoStar } from "react-icons/go";
import { CiLogout } from "react-icons/ci";
const MyHeader = () => {
  const [cartcountRef, animateCart] = useAnimate()
  const [wishlistcountRef, animateWishlist] = useAnimate()

  const {
    showOrderAlreadyExist,
    showWishlistAlreadyExist,
  } = useContext(userStatus)

  const [wishlistCount, setWishlistCount] = useState(0)
  const [cartCount, setCartCount] = useState(0)
  const accountRef = useRef(null)
  const animateCartIcon = () => {
    if (localStorage.getItem("cart")) {
    setCartCount(JSON.parse(localStorage.getItem("cart")).length)
    animateCart(cartcountRef.current, {
      translateX: ["-8px", "8px", "-6px", "6px", "-4px", "4px", "-2px", "2px", "0"],
      transition: {
        duration: 4,
        ease: "easeInOut"
      }
    })
  }
  }

  const animateWishListIcon = () => {
    if (localStorage.getItem("wishlist")) {
    setWishlistCount(JSON.parse(localStorage.getItem("wishlist")).length)
    animateCart(wishlistcountRef.current, {
      translateY: ["-8px", "0px", "-4px", "0", "-2px", "0"],
      transition: {
        duration: 4,
        ease: "easeInOut"
      }
    })
  }
  }
    
    const updateAnimateCartIcon = useStore(state => state.updateAnimateCartIcon)
    const updateAimateWishListIcon = useStore(state => state.updateAimateWishListIcon)

    const isUserLoggedIn = useStore(state => state.isUserLoggedIn)
    const userEmail = useStore(state => state.userEmail)
    const [showStatus, setShowStatus] = useState(false)
    const [showSearchInput, setShowSearchInput] = useState(false)
    const inputRef = useRef(null)

    const variant = {
        hide: {
            display: "none"
        },

        show: {
            display: "block"
        }
    }
    const setActiveLink = ({isActive}) => {
        return {
            borderBottom: isActive ? "gray solid 2px" : "transparent",
        }
    }
    const dropDownMenu = () => {
      if (accountRef.current) {
        accountRef.current.classList.remove("translate-y-[-130%]") 
        accountRef.current.classList.add("translate-y-[0]")
      }
    }

    const shrinkMenu = () => {
      if (accountRef.current) {
        accountRef.current.classList.remove("translate-y-[0]")
        accountRef.current.classList.add("translate-y-[-130%]")

      }
    }

    useEffect(() => {
      document.body.onclick = () => {
        shrinkMenu()
      }
      updateAnimateCartIcon(animateCartIcon)
      updateAimateWishListIcon(animateWishListIcon)
      if (localStorage.getItem("wishlist") && localStorage.getItem("cart"))
      {
      setWishlistCount(JSON.parse(localStorage.getItem("wishlist")).length)
      setCartCount(JSON.parse(localStorage.getItem("cart")).length)
      }

    }, [])

  return (
    <>
    <div className='w-full h-[45px]  md:h-[60px] top-0 right-0  border-1px flex place-content-evenly place-items-center fixed  backdrop-filter backdrop-blur-xl z-30'>
        <NavLink to={"/"}  className="md:w-[20%] w-[30%]  h-full lg:tracking-wider lg:text-4xl capitalize flex justify-start text-xl  items-center font-semibold tracking-wide md:ml-[35px] md:text-2xl text-gray-400">
            justBuy
        </NavLink>
        <div className="md:flex lg:w-[40%] md:w-[50%] h-full  hidden place-content-evenly place-items-center ">
            <NavLink to={"/"} style={setActiveLink} className={' md:w-[11%] lg:w-[8%] h-[50%] text-gray-400  flex justify-center items-center  tracking-wide '}>
                Home
            </NavLink>
            <NavLink style={setActiveLink} to={"contact"} className={' md:w-[11%] lg:w-[10%] h-[50%] text-gray-400  flex justify-center items-center  tracking-wide  '}>
                Contact
            </NavLink>
            <NavLink style={setActiveLink} to={"about"} className={' md:w-[11%] lg:w-[9%] h-[50%] text-gray-400  flex justify-center items-center  tracking-wide'}>
                About
            </NavLink>
            <NavLink style={setActiveLink} to={"sign-up"} className={' lg:w-[12%] md:w-[17%]  h-[50%] text-gray-400  flex justify-center items-center tracking-wide'}>
                Sign up
            </NavLink>
        </div>
        <div className='md:w-[30%]  w-[60%] h-full  inline-flex place-content-evenly place-items-center'>
        <svg onClick={() =>{
            inputRef.current.focus()
            setShowSearchInput(!showSearchInput)}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className='w-[25px] lg:hidden fill-stroke text-gray-500'>
         <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
           </svg>
            <div className='w-[65%] h-[60%] hidden  relative lg:block '>
                <input className='w-[100%] text-md h-[100%] focus:outline-none focus:shadow-md placeholder:text-md pl-2 text-gray-500 bg-gray-100 rounded-sm' type="text" placeholder='What are you looking for?' />
                <svg onClick={() => {}} className='absolute fill-stroke text-gray-600 right-0 top-0 w-[25px] mt-1 mr-1' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
             </svg>
            </div>
            <NavLink ref={wishlistcountRef} to={"wishlist"} className='w-[25px] block relative h-[25px]'>
            { wishlistCount && wishlistCount !== 0 ? 
            <sup className='w-[13px] flex justify-center items-center text-white text-[10px] absolute h-[13px]  rounded-full bg-red-600 ml-4 mt-1'>{wishlistCount}</sup> : null}
            <svg className='w-[25px] fill-stroke text-gray-500' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
           <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
           </svg>
           </NavLink>
           <NavLink ref={cartcountRef} to={"cart"} className={'relative w-[25px] h-[25px]'}>
            { cartCount && cartCount !== 0 ?
            <sup className='w-[13px] flex justify-center items-center text-white text-[10px] absolute h-[13px]  rounded-full bg-red-600 ml-4 mt-1'>{cartCount}</sup> : null
            }
           <svg className='w-[25px] fill-stroke text-gray-500' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg>
        </NavLink>
        { isUserLoggedIn ? 
        <NavLink to={"my-account/my-profile"}
        onMouseOver={() => dropDownMenu()}

         className='w-[30px] h-[30px] rounded-full md:flex justify-center items-center border-1px hidden'>
        <svg className='w-[100%] fill-stroke text-gray-500' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
       <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
      </NavLink> : null
       }
        </div>

        {
            createPortal(
            <div ref={accountRef} className='w-[270px] transition-all rounded-sm duration-400 backdrop-filter backdrop-blur-3xl bg-gray-900 bg-opacity-30 ease-in-out h-[220px] transform translate-y-[-130%] flex  right-0 top-[60px] z-10 fixed  flex-col justify-between items-center'>
              <div className='w-[100%]   h-[20%] flex justify-start items-center'>
              <FiUser className='text-[32px] text-white ml-4' />
              <div className='text-xl capitalize ml-4 text-white'>manage my account</div>
              </div>
              <div className='w-[100%]   h-[20%] flex justify-start items-center'>
              <FiShoppingBag className='text-[32px] text-white ml-4' />
              <div className='text-xl capitalize ml-4 text-white'>my order</div>
              </div>
              <div className='w-[100%]   h-[20%] flex justify-start items-center '>
              <RxCrossCircled className='text-[32px] text-white ml-4' />
              <div className='text-xl capitalize ml-4 text-white'>my cancellation</div>
              </div>
              <div className='w-[100%]   h-[20%] flex justify-start items-center'>
              <GoStar className='text-[32px] text-white ml-4' />
              <div className='text-xl capitalize ml-4 text-white'>my reviews</div>
              </div>
              <div className='w-[100%]   h-[20%] flex justify-start items-center'>
              <CiLogout className='text-[32px] text-white ml-4' />
              <div className='text-xl capitalize ml-4 text-white'>logout</div>
              </div>
            </div>, document.getElementById("account-root"))
        }
        {
            createPortal(<motion.div
            variants={variant}
            animate={showSearchInput ? "show" : "hide"}
             className='w-full md:hidden h-[45px] md:h-[60px] fixed border-1px top-0 backdrop-filter backdrop-blur-md flex justify-evenly items-center z-30'>
                <div className='w-[80%] h-[100%] md:w-[60%] md:mx-auto  relative border-2px border-white rounded-full'>
                    <input ref={inputRef} type="text" className='w-full h-full pl-3 text-gray-500 bg-transparent md:bg-white md:rounded-full focus:outline-none placeholder:tracking-wide md:pt-2 md:text-xl md:pl-8' placeholder='What are you looking for?' />
                    <svg onClick={() => setShowSearchInput(!showSearchInput)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className='w-[30px] fill-stroke text-gray-600 absolute top-1 right-2 md:top-4 md:right-6'>
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                 </svg>

                </div>
                <svg onClick={() => setShowSearchInput(!showSearchInput)}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className='w-[25px] fill-stroke text-red-500 absolute right-3 top-3
                md:top-5 md:right-24
                '>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                 </svg>
            </motion.div>, document.getElementById("account-root"))
        }
        
    </div>
    {
      createPortal(<OrderExist/>, document.getElementById("notify-root"))
    }
        {
      createPortal(<WishListExist/>, document.getElementById("notify-root"))
    }
    </>
  )
}

export default MyHeader

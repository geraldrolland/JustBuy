import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { IoCheckmarkOutline } from "react-icons/io5";
import Footer from './Footer';
import visa from "../../assets/visa.png"
import paypal from "../../assets/paypal.png"
import mastercard from "../../assets/mastercard.png"
import stripe from "../../assets/stripe.png"
import { motion } from 'framer-motion';
import { useRef } from 'react';
import "../../styles/style.css"
import { useMutation } from '@tanstack/react-query'
import axios from 'axios';
export const CheckOut = () => {
    const [orders, setOrders] = useState([])
    const [amount, setAmount] = useState(0)
    const containerRef = useRef(null)
    const [totalPrice, setTotalPrice] = useState(0)
    const navigateToPayPal = useNavigate()
    const [billingDetails, setBillingDetails] = useState({
        first_name: "",
        company_name: "",
        street_name: "",
        apartment: "",
        city: "",
        phone_number: "",
        email: "",
        payment_method: "",
        payment_type: "",
        total_price: 7044
    })

    const ProcessOrders = async () => {
        const cart = JSON.parse(localStorage.getItem("cart"))
        setBillingDetails({...billingDetails, total_price: totalPrice})
        console.log(billingDetails)
        console.log(cart)
        const orderDetails = {
            orders: cart,
            billing_details: billingDetails
        }
        const userStatus = JSON.parse(sessionStorage.getItem("userStatus"))
            print(userStatus.access)
            const config = {
                headers: {
                    "Authorization": "Bearer " + userStatus.access 
                }
            }
            try {
                const response = await axios.post("http://127.0.0.1:8000/customer-order/create_order/", orderDetails, config)
                if (response.status === 201) {
                    return response.data
                }
            }

            catch(error) {
                if (error.response.status === 401) {
                    console.log("checked")
                    try {
                        const response = await axios.post("http://127.0.0.1:8000/token-refresh/", {refresh: userStatus.refresh})
                        if (response.status === 200) {
                            console.log("is 200")
                            console.log(response.data.access)
                            userStatus.access = response.data.access
                            config.headers.Authorization = "Bearer " + userStatus.access
                            sessionStorage.setItem("userStatus", JSON.stringify(userStatus))
                            try {
                                const response = await axios("http://127.0.0.1:8000/customer-order/create_order/", orderDetails, config)
                                return response.data
                            }
                            catch(error) {
                                return error
                            }

                        }
                    }

                    catch(error) {
                        return error
                    }     
                
            }
        }
    }

    const postOrders = useMutation({
        mutationKey: ["postorders"],
        mutationFn: ProcessOrders,
        onSuccess: async (data) => {
            if (data) {
                console.log(data)
                window.location.href = data.link
            }

        },

        onError: (error) => {
            console.log(error)
        }

    })

    const handleOrder = () => {
        postOrders.mutate()
    }

    const selectPaymentMethod = (method) => {
        setBillingDetails({...billingDetails, payment_method: method})
        console.log(method)
        console.log("from bill", billingDetails.payment_method)
        if (method === "bank") {
            document.getElementById("bank").style.display = "block"
            document.getElementById("cash").style.display = "none"
            setAmount(0)
            console.log("bank")
        } else {
            document.getElementById("bank").style.display = "none"
            document.getElementById("cash").style.display = "block" 
            setAmount(-150)
        }
    }

    const selectPaymentType = (type) => {
        selectPaymentMethod("bank")
        const paymentTypeList = document.querySelectorAll(".paytype")
        for (let paytype of paymentTypeList) {
            if (paytype.id === type) {
                setBillingDetails({...billingDetails, payment_type: type})
                paytype.classList.add("selected")
                continue
            }
            paytype.classList.remove("selected")
        }
    }

    if (postOrders.isSuccess) {
        console.log(postOrders.data)
    }

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem("cart"))
        setOrders(cart)
        let total = 0
        if (cart) {
        cart.forEach(prod => {
            total += prod.subTotal
        })
        }

        setTotalPrice(total)
        
        if (cart && cart.length > 5) {
            if (containerRef.current) {
                console.log("executed")
                containerRef.current.classList.add("h-[320px]")
            }
        }

        selectPaymentMethod("bank")
        selectPaymentType('paypal')



        if (postOrders.isSuccess) {
            console.log("status")
        }

    }, [])

  return (
    <>
    <div className='md:w-[550px] w-[150px] h-[30px] mt-[120px] md:ml-[5%] justify-between items-center flex'>
        <NavLink className={"text-gray-500 tracking-wide"}>Home</NavLink>
        <NavLink className='text-gray-500 md:block hidden tracking-wide capitalize'>Account</NavLink>
        <h1 className='text-gray-400 md:block hidden'>/</h1>
        <NavLink to={"/my-account/"} className='text-gray-500 tracking-wide md:block hidden capitalize'>My Account</NavLink>
        <h1 className='text-gray-400 md:block hidden '>/</h1>
        <NavLink to={"/"} className='text-gray-500 md:block hidden tracking-wide capitalize'>Products</NavLink>
        <h1 className='text-gray-400 md:block hidden '>/</h1>
        <NavLink to={"/cart/"} className='text-gray-500 tracking-wide md:block hidden capitalize'>View Cart</NavLink>
        <h1 className='text-gray-400 '>/</h1>
        <NavLink to={""} className='text-gray-900 tracking-wide  capitalize'>CheckOut</NavLink>
    </div>
    <h1 className='capitalize md:ml-[5%] mt-[40px] text-[35px] tracking-wide'>billing  details</h1>
    <div className='md:w-[90%]  w-[100%] md:flex-nowrap flex-wrap md:h-[750px] md:mb-[200px]  mx-auto mt-[10px] flex justify-between md:flex-row  flex-col items-center'>

        <div className='lg:w-[37%] md:w-[42%] w-[100%] flex flex-col justify-between h-[750px] md:h-[100%]'>

            <div className='w-[100%] h-[75px]  flex flex-col justify-between items-start'>
                <label className='capitalize text-gray-400' for='firstname'>first name <sup className='text-red-800'>*</sup></label>
                <input onChange={(e) => setBillingDetails({...billingDetails, first_name: e.target.value})} value={billingDetails.first_name} id='firstname' className='w-[100%] rounded-[2px] focus:outline-none pl-4 h-[45px] bg-gray-200' type="text" />
            </div>
            <div className='w-[100%] h-[75px] flex flex-col justify-between items-start'>
                <label for="companyname" className='capitalize text-gray-400'>company name <sup className='text-red-800'>*</sup></label>
                <input onChange={(e) => setBillingDetails({...billingDetails, company_name: e.target.value})} value={billingDetails.company_name} id='companyname' className='w-[100%] rounded-[2px] focus:outline-none pl-4 h-[45px] bg-gray-200' type="text" />
            </div>
            <div className='w-[100%] h-[75px] flex flex-col justify-between items-start'>
                <label for="streetaddress" className='capitalize text-gray-400'>street address <sup className='text-red-800'>*</sup></label>
                <input onChange={(e) => setBillingDetails({...billingDetails, street_name: e.target.value})} value={billingDetails.street_name} id="streetaddress" className='w-[100%] focus:outline-none pl-4 h-[45px] bg-gray-200' type="text" />
            </div>
            <div className='w-[100%] h-[75px] flex flex-col justify-between items-start'>
                <label for="apartment" className=' text-gray-400'>Apartment, floor, etc. (optional)</label>
                <input onChange={(e) => setBillingDetails({...billingDetails, apartment: e.target.value})} value={billingDetails.apartment} id='apartment' className='w-[100%] focus:outline-none pl-4 h-[45px] bg-gray-200' type="text" />
            </div>
            <div className='w-[100%] h-[75px]  flex flex-col justify-between items-start'>
                <label className='capitalize text-gray-400'>town / city <sup className='text-red-800'>*</sup></label>
                <input onChange={(e) => setBillingDetails({...billingDetails, city: e.target.value})} value={billingDetails.city} className='w-[100%] focus:outline-none pl-4 h-[45px] bg-gray-200' type="text" />
            </div>
            <div className='w-[100%] h-[75px] flex flex-col justify-between items-start'>
                <label for="phone" className='capitalize text-gray-400'>phone number <sup className='text-red-800'>*</sup></label>
                <input onChange={(e) => setBillingDetails({...billingDetails, phone_number: e.target.value})} value={billingDetails.phone_number} id="phone" className='w-[100%] focus:outline-none pl-4 h-[45px] bg-gray-200' type="text" />
            </div>
            <div className='w-[100%] h-[75px]  flex flex-col justify-between items-start'>
                <label for="email" className='capitalize text-gray-400'>email address <sup className='text-red-800'>*</sup></label>
                <input onChange={(e) => setBillingDetails({...billingDetails, email: e.target.value})} value={billingDetails.email} id='email' className='w-[100%] focus:outline-none pl-4 h-[45px] bg-gray-200' type="text" />
            </div>
            <div className='w-[100%] space-x-5 flex justify-start items-center h-[25px]'>
                <div className='w-[25px] h-[100%]  cursor-pointer rounded-[4px] bg-red-600 flex justify-center items-center'>
                    <IoCheckmarkOutline className='text-white text-[20px]' />
                </div>
                <h1 className='font-semibold text-gray-900 tracking-tight'>Save this information for faster check-out next time </h1>
            </div>
        </div>
        <div  className='lg:w-[45%] w-[100%] mb-[250px] md:mb-0 md:mt-0 mt-12 md:w-[54%] h-[500px]    md:h-[100%]   '>
            <div   className=' lg:w-[75%] md:w-[80%] w-[100%]   flex justify-center  items-center'>
                <div ref={containerRef}  className='w-[100%] flex flex-wrap tab-container overflow-y-scroll'>
                {
                    orders?.map(order => 
                        <div
                        className='w-[100%] mb-[20px] flex justify-between items-center h-[45px]'
                         key={order.id}>
                            <div className='w-[170px] h-[100%] flex space-x-2 justify-start items-center'>
                                <img className='w-[50px] object-cover h-[100%]' src={order.image} alt={order.title} />
                                <h1 className='truncate text-[16px]'>{order.title}</h1>
                                
                            </div>
                            <h1 className='proportional-nums text-gray-800'>${order.subTotal}</h1>
                         </div>
                    )
                }
                </div>
            </div>
            <div className='lg:w-[75%] md:w-[80%] w-[100%] h-[45px] border-b-1px flex justify-between items-center border-gray-500'>
                <h1 className='capitalize text-gray-800 text-[18px]'>subtotal</h1>
                <h1 className='text-gray-800 proportional-nums'>${parseInt(totalPrice)}</h1>
            </div>
            <div className='lg:w-[75%] md:w-[80%] w-[100%] h-[45px] border-b-1px flex justify-between items-center border-gray-500'>
                <h1 className='capitalize text-gray-800 text-[18px]'>shipping</h1>
                <h1 className='text-gray-800 capitalize'>free</h1>
            </div>
            <div className='lg:w-[75%] md:w-[80%] w-[100%] h-[45px]  flex justify-between items-center '>
                <h1 className='capitalize text-gray-800 text-[18px]'>total</h1>
                <h1 className='text-gray-800 proportional-nums'>${parseInt(totalPrice)}</h1>
            </div>
            <div className='lg:w-[75%] w-[100%] h-[40px] mt-[20px]   flex justify-between items-center'>
                <div className='w-[85px] h-[100%] flex justify-start space-x-4 items-center'>
                    <div onClick={() => {
                    
                        selectPaymentMethod("bank")}} className='md:w-[26px] flex justify-center  w-[24px] cursor-pointer h-[24px] items-center md:h-[26px] border-1px border-gray-900 rounded-full'>
                        <div className='w-[16px] h-[16px]  rounded-full  bg-gray-950 none' id='bank'></div>
                    </div>
                    <h1 className='text-gray-900'>Bank</h1>
                </div>
                <div className='md:w-[260px] w-[240px] relative flex overflow-x-hidden justify-between items-center h-[100%]'>
                    <motion.div  className='w-[24%] h-[100%]  rounded-md absolute border-2px z-10 shadow-lg bg-gray-200 backdrop-filter backdrop-blur-md border-green-500'
                    animate={{
                        translate: amount + "%",
                    }}
                    transition={{
                        duration: 0.2,
                        ease: "easeIn"
                    }}
                    ></motion.div>
                    <img id='paypal' onClick={() => {
                        setAmount(0)
                        selectPaymentType("paypal")
                        }} className='md:w-[23%] w-[20%] filter drop-shadow-2xl cursor-pointer paytype relative z-20' src={paypal} alt="paypal" />
                    <img id='mastercard' onClick={() => {
                        selectPaymentType("mastercard")
                        setAmount(106)}} className='md:w-[23%] paytype w-[20%] filter drop-shadow-2xl  cursor-pointer relative z-20 ' src={mastercard} alt="mastercard" />
                    <img id='visa' onClick={() => {
                        selectPaymentType("visa")
                        setAmount(218)}} className='md:w-[23%] w-[20%] paytype cursor-pointer relative z-20 filter drop-shadow-2xl' src={visa} alt="visa" />
                    <img id="stripe" onClick={() => {
                        selectPaymentType("stripe")
                        setAmount(318)}} className='md:w-[23%] w-[20%] filter drop-shadow-2xl cursor-pointer paytype relative z-20' src={stripe} alt="stripe" />
                </div>
            </div>
            <div className='w-[180px] mt-[15px] h-[40px]  flex justify-start space-x-4 items-center'>
            <div onClick={() => {
                selectPaymentMethod("cash")}} className='md:w-[26px] w-[24px] h-[24px] flex justify-center items-center cursor-pointer md:h-[26px] border-1px border-gray-900 rounded-full'>
             <div className='w-[16px] h-[16px] hidden rounded-full bg-gray-950' id='cash'></div>
            </div>
            <h1 className='text-gray-950 '>Cash on Delivery</h1>
            </div>
            <div className='w-[100%] h-[45px]  flex justify-between items-center mt-[25px]'>
                <input className='lg:w-[300px] md:w-[270px] h-[100%] border-1px border-gray-800 focus:outline-none pl-4 rounded-[2px]' type="text" placeholder='Coupon Code' />
                <button className='lg:w-[210px] md:tracking-normal tracking-tight w-[130px] md:w-[150px] h-[100%]  shadow-md bg-red-600 rounded-[4px] text-gray-100 capitalize'>apply coupon</button>
            </div>
            <button onClick={() => postOrders.mutate()} className='mt-[45px] capitalize md:w-[130px]  lg:w-[170px] text-gray-100  shadow-md bg-red-600 h-[45px] md:tracking-normal tracking-tight w-[120px] rounded-[4px]'>{ postOrders.isPending ? "processing..." : "place order"}</button>
        </div>
    </div>
   
    <Footer/>
    </>
  )
}

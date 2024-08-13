import React, { useEffect, useRef, useState } from 'react'
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";
import Footer from './Footer';
import useStore from '../../customhook/UseStore';

export const Cart = () => {
    const [data, setData] = useState([])
    const [noOrders, setNoOrders] = useState("No Orders")
    const [isRender, setRender] = useState(false)
    const [subTotal, setSubTotal] = useState(0)
    const cartRef = useRef(null)
    const animateCartIcon = useStore(state => state.func3)
    const increaseQuantity = (id) => {
        data?.forEach(prod => {
            if (prod.id === id) {
                prod.quantity++
                const cartlist = JSON.parse(localStorage.getItem("cart"))
                let total = 0
                cartlist.forEach(prod => {
                    if (prod.id === id) {
                        prod.quantity++
                        total += prod.price * prod.quantity
                        localStorage.setItem("cart", JSON.stringify(cartlist))
                    }
                    total += prod.price * prod.quantity
                })
                setSubTotal(total)
                console.log(prod.quantity)

            }
        })

        setRender(!isRender)
    }

    const decreaseQuantity = (id) => {
        
        data?.forEach(prod => {
            if (prod.id === id && prod.quantity > 1) {
                prod.quantity--
                const cartlist = JSON.parse(localStorage.getItem("cart"))
                let total = 0
                cartlist.forEach(prod => {
                    if (prod.id === id) {
                        prod.quantity--
                        total += prod.price * prod.quantity
                        localStorage.setItem("cart", JSON.stringify(cartlist))
                        
                    }
                    total += prod.price * prod.quantity
                })
                setSubTotal(total)
                console.log(prod.quantity)
            }
        })
        setRender(!isRender)
    }

    const deleteOrder = (orderId) => {
        let cart = JSON.parse(localStorage.getItem("cart"))
        cart = cart.filter(elem => elem.id !== orderId)
        localStorage.setItem("cart", JSON.stringify(cart))
        animateCartIcon()
        setRender(!isRender)
    }

    useEffect(() => {
        console.log(data.length)
        try {
            const products = JSON.parse(localStorage.getItem("cart"))
            if (products) {
            setData(products)
            let total = 0
            products.forEach(prod => {
                total += prod.price * prod.quantity
            })
            setSubTotal(total)
            }
        }
        catch(error) {
            setData([])
            setNoOrders("No Orders")
        }
    }, [isRender])
  return (
    <>
        <div className='w-[100px] h-[30px] mt-[60px] ml-[5%]    justify-between items-center flex'>
        <h1 className='text-gray-500 tracking-wide capitalize'>home</h1>
        <h1 className='text-gray-400 '>/</h1>
        <h1 className='text-gray-900 tracking-wide capitalize'>Cart</h1>
    </div>
    <div className='md:w-[90%] w-[100%] rounded-[2px] h-[60px] bg-gray-50 mx-auto flex justify-center shadow-sm mt-10 items-center'>
        <div className='w-[95%]  h-[100%] flex justify-between items-center'>
            <div className='md:w-[36%] w-[43%] h-[100%] flex justify-between items-center'>
                <h1>Product</h1>
                <h1>Price</h1>
            </div>
            <div className='md:w-[36%] w-[43%] h-[100%] flex justify-between items-center'>
            <h1>Quantity</h1>
            <h1>Subtotal</h1> 
            </div>
        </div>
    </div>
    <div ref={cartRef}>
    { data.length ?  data.map(product =>
    
          <div key={product.id} id={product.id} className='md:w-[90%] w-[100%] rounded-[2px] h-[60px] bg-gray-50 mx-auto flex justify-center shadow-sm mt-10 items-center'>
          <div className='w-[95%]  h-[100%] flex justify-between items-center'>
              <div className='md:w-[36%] w-[43%] h-[100%] flex justify-between items-center'>
                <div className='h-[100%] w-[110px]   md:w-[160px]  flex justify-between items-center relative'>
                    <button onClick={() => deleteOrder(product.id)} className='absolute md:w-[13px] md:h-[13px] -top-1 -left-1 w-[16px] h-[16px] rounded-full bg-red-600 flex justify-center md:text-[12px] md:pb-[1px] items-center text-white'>x</button>
                    <img className='w-[60px] h-[60px] object-cover' src={product.image} alt={product.title} />
                    <h1 className='text-[14px] w-[60%] truncate'>{product.title}</h1>
                </div>
                <h1 className='text-[18px] md:text-[16px]'>${product.price}</h1>
              </div>
              <div className='md:w-[36%] w-[43%] h-[100%]  flex justify-between items-center'>
              <div className='w-[60px] border-gray-900 rounded-[4px] flex justify-evenly items-center h-[80%] border-1px'>
                <input className='md:w-[30%] w-[43%] h-[100%] bg-transparent focus:outline-none proportional-nums md:text-[16px] text-[18px]' type="text" maxLength={2} value={product.quantity > 9 ? product.quantity : "0" + product.quantity} />
                <div className='h-[100%]  w-[40%]  flex justify-evenly flex-col items-center'>
                    <SlArrowUp onClick={() => {increaseQuantity(product.id)}} className='md:w-[12px] w-[14px] active:shadow-none cursor-pointer md:shadow-md' /> 
                    <SlArrowDown onClick={() => {decreaseQuantity(product.id)}} className='md:w-[12px] w-[14px] active:shadow-none md:shadow-md     cursor-pointer' />                               
                </div>
              </div>
              <h1 className='text-[18px] md:text-[16px]'>${parseInt(product.price) * product.quantity}</h1> 
              </div>
          </div>
      </div>) : <div className='w-[95%] h-[400px] mx-auto  justify-center items-center flex text-center text-[250px] text-gray-300'>{noOrders}</div>
     
    }
    </div>
    {
        data.length ?
        <div className='md:w-[90%] w-[100%] mt-6 h-[40px] flex justify-between items-center mx-auto '>
        <button className='md:w-[180px] w-[150px] h-[40px] border-1px border-gray-400 capitalize shadow-sm flex justify-center items-center font-semibold rounded-[2px]'>
            return  to shop
        </button>
        <button className='h-[100%] flex justify-center items-center border-gray-400 shadow-sm rounded-[2px] md:w-[140px] w-[120px] border-1px font-semibold capitalize '>update cart</button>
        </div> 
         : null
    }

    {
                data.length ? <div className='md:w-[90%] w-[100%] mb-20 md:h-[330px] h-[400px]   mx-auto mt-20 flex md:flex-row flex-col justify-between items-center'>
                    <div className='md:w-[40%] w-[100%] self-start flex justify-between items-center  h-[40px] '>
                        <input className='md:w-[55%] w-[58%]  rounded-[4px] focus:outline-[1px] border-gray-500 focus:border-none focus:outline-gray-700 pl-4 tracking-wide h-[100%] border-1px shadow-sm' type="text" placeholder='' />
                        <button className='md:w-[40%] w-[35%] shadow-sm h-[100%] bg-red-600 rounded-sm text-gray-100 capitalize'>apply coupon</button>
                    </div>
                    <div className='md:w-[44%] w-[100%] rounded-[4px] border-gray-400 h-[80%] md:h-[100%] border-2px flex justify-center items-center'>
                        <div className='w-[90%] h-[85%]'>
                            <h1 className='text-[22px] capitalize text-gray-600 font-semibold tracking-wide'>cart total</h1>
                            <div className='w-[100%] h-[50px] border-b-2px border-gray-300 flex justify-between items-center'>
                                <h1 className='text-gray-600 capitalize text-[18px]'>subtotal:</h1>
                                <h1 className='text-gray-600 capitalize text-[18px]'>${parseInt(subTotal)}</h1>
                            </div>
                            <div className='w-[100%] h-[50px] border-b-2px border-gray-300 flex justify-between items-center'>
                                <h1 className='text-gray-600 capitalize text-[18px]'>shipping:</h1>
                                <h1 className='text-gray-600 capitalize text-[18px]'>free</h1>
                            </div>
                            <div className='w-[100%] h-[50px]   flex justify-between items-center'>
                                <h1 className='text-gray-600 capitalize text-[18px]'>total:</h1>
                                <h1 className='text-gray-600 capitalize text-[18px]'>${parseInt(subTotal)}</h1>

                            </div>
                            <button className='h-[50px] w-[250px] mx-auto active:shadow-none block rounded-[4px] shadow-md bg-red-600 text-gray-100 '>Proceed to Checkout</button>
                        </div>
                    </div>
                </div> : null
    }
    <Footer/>
    </>
  )
}

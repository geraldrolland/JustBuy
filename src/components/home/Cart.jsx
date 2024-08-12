import React, { useEffect, useState } from 'react'
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";
import Footer from './Footer';
export const Cart = () => {
    const [data, setData] = useState([])
    const [noOrders, setNoOrders] = useState("No Orders")
    const [isRender, setRender] = useState(false)
    const [subTotal, setSubTotal] = useState(0)

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
    }, [])
  return (
    <>
        <div className='w-[100px] h-[30px] mt-[60px] ml-[5%]    justify-between items-center flex'>
        <h1 className='text-gray-500 tracking-wide capitalize'>home</h1>
        <h1 className='text-gray-400 '>/</h1>
        <h1 className='text-gray-900 tracking-wide capitalize'>Cart</h1>
    </div>
    <div className='w-[90%] rounded-[2px] h-[60px] bg-gray-50 mx-auto flex justify-center shadow-sm mt-10 items-center'>
        <div className='w-[95%]  h-[100%] flex justify-between items-center'>
            <div className='w-[36%] h-[100%] flex justify-between items-center'>
                <h1>Product</h1>
                <h1>Price</h1>
            </div>
            <div className='w-[36%] h-[100%] flex justify-between items-center'>
            <h1>Quantity</h1>
            <h1>Subtotal</h1> 
            </div>
        </div>
    </div>
    { data.length ?  data.map(product =>
    
          <div key={product.id} id={product.id} className='w-[90%] rounded-[2px] h-[60px] bg-gray-50 mx-auto flex justify-center shadow-sm mt-10 items-center'>
          <div className='w-[95%]  h-[100%] flex justify-between items-center'>
              <div className='w-[36%] h-[100%] flex justify-between items-center'>
                <div className='h-[100%] w-[160px]  flex justify-between items-center relative'>
                    <div className='absolute w-[13px] h-[13px] -top-1 -left-1 rounded-full bg-red-600'></div>
                    <img className='w-[60px] h-[60px] object-cover' src={product.image} alt={product.title} />
                    <h1 className='text-[14px] w-[60%] truncate'>{product.title}</h1>
                </div>
                <h1>${product.price}</h1>
              </div>
              <div className='w-[36%] h-[100%]  flex justify-between items-center'>
              <div className='w-[60px] border-gray-900 rounded-[4px] flex justify-evenly items-center h-[80%] border-1px'>
                <input className='w-[30%] h-[100%] bg-transparent focus:outline-none proportional-nums' type="text" maxLength={2} value={product.quantity > 9 ? product.quantity : "0" + product.quantity} />
                <div className='h-[100%]  w-[40%]  flex justify-evenly flex-col items-center'>
                    <SlArrowUp onClick={() => {increaseQuantity(product.id)}} className='w-[12px] active:shadow-none cursor-pointer shadow-md' /> 
                    <SlArrowDown onClick={() => {decreaseQuantity(product.id)}} className='w-[12px] active:shadow-none shadow-md     cursor-pointer' />                               
                </div>
              </div>
              <h1>${parseInt(product.price) * product.quantity}</h1> 
              </div>
          </div>
      </div>) : <div className='w-[95%] h-[400px] mx-auto  justify-center items-center flex text-center text-[250px] text-gray-300'>{noOrders}</div>
     
    }
    {
        data.length ?
        <div className='w-[90%] mt-6 h-[40px] flex justify-between items-center mx-auto '>
        <button className='w-[180px] h-[40px] border-1px border-gray-400 capitalize shadow-sm flex justify-center items-center font-semibold rounded-[2px]'>
            return  to shop
        </button>
        <button className='h-[100%] flex justify-center items-center border-gray-400 shadow-sm rounded-[2px] w-[140px] border-1px font-semibold capitalize '>update cart</button>
        </div> 
         : null
    }

    {
                data.length ? <div className='w-[90%] mb-20 h-[330px]  mx-auto mt-20 flex justify-between items-center'>
                    <div className='w-[40%] self-start flex justify-between items-center h-[40px] '>
                        <input className='w-[55%] rounded-[4px] focus:outline-[1px] border-gray-500 focus:border-none focus:outline-gray-700 pl-4 tracking-wide h-[100%] border-1px shadow-sm' type="text" placeholder='' />
                        <button className='w-[40%] shadow-sm h-[100%] bg-red-600 rounded-sm text-gray-100 capitalize'>apply coupon</button>
                    </div>
                    <div className='w-[44%] rounded-[4px] border-gray-400 h-[100%] border-2px flex justify-center items-center'>
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

import { useEffect, useRef, useState } from "react"


const Product = ({prod}) => {
  const [perc, setperc] = useState(0)
  const rate1 = useRef(null)
  const rate2 = useRef(null)
  const rate3 = useRef(null)
  const rate4 = useRef(null)
  const rate5 = useRef(null)

  useEffect(() => {
    const rate = parseInt(prod.rating.rate)
    const rateArray = [rate1, rate2, rate3, rate4, rate5]
    for (let i = 0; i < rate; i++) {
      rateArray[i].current.style.color = "yellow"
    }

    setperc(Math.floor(Math.random() * 10) === 0 ? 10 : Math.floor(Math.random() * 10))
  }, [prod])

  const enableRightArrorKey = (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault()
    }
  }

  const createOrder = (id, title, price, image) => {
    const cart = {
      id,
      title,
      price,
      image,
      quantity : 1
    }

    try {
      const cartList = JSON.parse(localStorage.getItem("cart"))
      cartList.push(cart)
      localStorage.setItem("cart", JSON.stringify(cartList))
    }

    catch(error) {
      const cartList = []
      cartList.push(cart)
      localStorage.setItem("cart", JSON.stringify(cartList))
    }
  }


  return (
    <div className='md:w-[230px] cursor-pointer  shadow-md rounded-md product md:shadow-sm product  md:mr-[20px]   mr-2 md:h-[350px] w-[170px] h-[300px]  md:mb-[70px] mb-[40px]'>
      <div className='w-full group  h-[75%] overflow-y-hidden  relative flex justify-center items-start'>
        <button onClick={() => createOrder(prod.id, prod.title, prod.price, prod.image)} type="button" className="w-[100%] transform lg:translate-y-20 transition-all duration-200 lg:group-hover:translate-y-0  h-[25px] absolute  md:h-[40px] bg-black bottom-0 text-sm  text-white">
          Add To Cart
        </button>
        <div className=' w-[25%] h-[12%]  absolute top-2 left-2 rounded-md flex justify-center items-center bg-red-600 text-white'>-{perc}%</div>
        <div className='absolute right-1 top-2 flex flex-col justify-between items-center  w-[30px] md:h-[70px] h-[50px]'>
          <div className='md:w-full md:h-[30px] w-[20px] h-[20px] flex justify-center items-center bg-gray-100 rounded-full'>
        <svg className='w-5' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        </svg>
        </div>
        <div className='md:w-full md:h-[30px] w-[20px] h-[20px] bg-gray-100 flex justify-center items-center rounded-full'>
        <svg className='w-5' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
       <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
         </svg>
         </div>
        </div>
      <img className='object-cover w-[70%] h-[80%] ' src={prod.image} alt={prod.title} />
      </div>
      <div className="w-[100%] h-[25%]   truncate ">
        <div className="md:text-[16px] text-[15px] w-[100%] h-[30%] font-semibold mt-2 pr-2 ">{prod.title}</div>
        <div className="text-red-400 md:mt-1"><span className="inline-block proportional-nums text-[15px] md:text-[16px]">${parseInt(prod.price)}</span><span className="inline-block ml-2 text-[15px] proportional-nums line-through md:text-[16px]  text-gray-300">${parseInt(prod.price * 3)}</span>
        </div>
        <div className="w-[100%] h-[35%]  inline-flex justify-start items-center">
        <svg ref={rate1} className="w-5 mr-1 fill-current text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
</svg>
<svg ref={rate2} className="w-5 mr-1 fill-current text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
</svg>
<svg ref={rate3} className="w-5 mr-1 fill-current text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
</svg>
<svg ref={rate4} className="w-5 mr-1 fill-current text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
</svg>
<svg ref={rate5} className="w-5 mr-1 fill-current text-gray-300 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
</svg><span >({prod.rating.count})</span>
        </div>
      </div>
    </div>
  )
}

export default Product

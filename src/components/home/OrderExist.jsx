import React, { useEffect } from 'react'
import { useAnimate, motion } from 'framer-motion'
import { useContext } from 'react'
import { userStatus } from '../../App'
import useStore from '../../customhook/UseStore'
export const OrderExist = () => {
    const [animateRef, animate] = useAnimate()
    const updateAnimateOrderExist = useStore(state => state.updateAnimateOrderExist)

    const animateOrderExist = () => {
        animate(animateRef.current, {
            translateY: ["-100%", "200%", "200%", "200%", "200%", "200%", "200%", "-100%"],
            transition: {
                duration: 14,
                ease: "easeInOut",
            }
        })
    }

    useEffect(() => {
        updateAnimateOrderExist(animateOrderExist)
    }, [])

  return (
    <motion.div ref={animateRef}
     className='w-[20%] h-[35px] left-[40%] mx-auto fixed z-20 transform translate-y-[-100%] top-0 rounded-md bg-orange-100 shadow-md flex justify-center items-center text-amber-500 capitalize'>
        order already in cart
    </motion.div>
  )
}

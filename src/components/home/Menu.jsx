import React from 'react'
import { motion } from 'framer-motion'
export const Menu = () => {
  return (
    <motion.div
    className="fixed top-0 md:hidden block right-0 z-40 bg-red-500 h-[100%] w-[100%]"
    >
        <div className='w-[100%] border-1px h-[100%]'>

        </div>
    </motion.div>
  )
}

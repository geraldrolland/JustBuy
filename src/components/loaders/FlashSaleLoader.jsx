import { motion } from "framer-motion"

const FlashSaleLoader = () => {
  return (
    <div className="w-[100%] h-[320px] md:h-[520px] backdrop-filter backdrop-blur-3xl bg-gray-50 mt-5 flex justify-center items-center">
      <motion.div
      animate={{
        rotate: ["0deg", "360deg"]
      }} 
      transition={{
        duration: 0.5,
        ease: "linear",
        repeat: 18000000
      }}
      className="w-[60px] h-[60px] border-4px  rounded-full border-r-slate-400"></motion.div>
    </div>
  )
}

export default FlashSaleLoader

import { motion } from "framer-motion"


const SignUpAndLoginLoader = () => {
  return (
    <motion.div
    animate={{
        rotate: ["0deg", "360deg"]
    }} 
    transition={{
        duration: 0.3,
        ease: "easeIn",
        repeat: 18000000
    }}
    className="w-[30px] h-[30px] border-2px rounded-full border-l-gray-400 border-opacity-40 ">
    </motion.div>
  )
}

export default SignUpAndLoginLoader
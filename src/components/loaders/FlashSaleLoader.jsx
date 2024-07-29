import { motion } from "framer-motion"

const FlashSaleLoader = () => {
  return (
    <motion.div
    animate={{
      opacity: ["80%", "90%", "100%", "90%", "80%"]
    }}

    transition={{
      duration: 2,
      ease: "easeInOut",
      repeat: 11800
    }}
     className="w-[100%] md:h-[550px] h-[40px] bg-gradient-to-r from-slate-50 via-slate-100 to-slate-50  mt-2 backdrop-filter  bg-slate-50 relative z-10">
      <div className="h-[50px] ml-8 flex justify-between  items-center w-[150px]">
        <div className="w-[30px] h-[100%] border-1px rounded-sm shadow-sm"></div>
        <div className="w-[100px] h-[60%] border-1px shadow-sm rounded-sm"></div>
      </div>
      <div className="mt-2 w-[100%] h-[50px]  inline-flex justify-between items-center">
        <div className="ml-8 w-[400px] h-[100%]  inline-flex justify-between items-center">
          <div className="w-[35%] h-[100%] border-1px"></div>
          <div className="w-[55%] h-[100%]  flex justify-between items-center">
            <div className="w-[22%] h-[100%] ">
              <div className="w-[100%] h-[40%] border-1px"></div>
              <div className="w-[100%] h-[50%] border-1px mt-[10%]"></div>
            </div>
            <div className="w-[22%] h-[100%] ">
              <div className="w-[100%] h-[40%] border-1px"></div>
              <div className="w-[100%] h-[50%] border-1px mt-[10%]"></div>
            </div>
            <div className="w-[22%] h-[100%] ">
              <div className="w-[100%] h-[40%] border-1px"></div>
              <div className="w-[100%] h-[50%] border-1px mt-[10%]"></div>
            </div>
            <div className="w-[22%] h-[100%] ">
              <div className="w-[100%] h-[40%] border-1px"></div>
              <div className="w-[100%] h-[50%] border-1px mt-[10%]"></div>
            </div>
          </div>
        </div>
        <div className="w-[100px] h-[100%]  flex justify-between items-center mr-8">
          <div className="w-[40px] h-[40px] border-1px rounded-full"></div>
          <div className="w-[40px] h-[40px] border-1px rounded-full"></div>
        </div>
      </div>
      <div className="w-[100%] h-[320px] inline-flex justify-start items-center overflow-hidden mt-2">
        <div className="w-[270px] h-[100%] ml-8 ">
          <div className="h-[65%] w-[100%] border-1px relative">
            <div className="absolute w-[50px] h-[30px] border-1px left-1 top-1"></div>
            <div className="w-[30px] h-[70px]  right-1 top-1 absolute">
              <div className="w-[100%] h-[30px] border-1px rounded-full"></div>
              <div className="w-[100%] h-[30px] border-1px rounded-full mt-[10px]"></div>
            </div>
          </div>
          <div className="mt-1 w-[75%] h-[10%] border-1px"></div>
          <div className="mt-1 w-[35%] h-[10%] border-1px"></div>
          <div className="mt-1 w-[55%] h-[10%] border-1px"></div>
        </div>
        <div className="w-[270px] h-[100%] ml-4">
          <div className="h-[65%] w-[100%] border-1px relative">
            <div className="absolute w-[50px] h-[30px] border-1px left-1 top-1"></div>
            <div className="w-[30px] h-[70px]  right-1 top-1 absolute">
              <div className="w-[100%] h-[30px] border-1px rounded-full"></div>
              <div className="w-[100%] h-[30px] border-1px rounded-full mt-[10px]"></div>
            </div>
          </div>
          <div className="mt-1 w-[75%] h-[10%] border-1px"></div>
          <div className="mt-1 w-[35%] h-[10%] border-1px"></div>
          <div className="mt-1 w-[55%] h-[10%] border-1px"></div>
        </div>
        <div className="w-[270px] h-[100%] ml-4 ">
          <div className="h-[65%] w-[100%] border-1px relative">
            <div className="absolute w-[50px] h-[30px] border-1px left-1 top-1"></div>
            <div className="w-[30px] h-[70px]  right-1 top-1 absolute">
              <div className="w-[100%] h-[30px] border-1px rounded-full"></div>
              <div className="w-[100%] h-[30px] border-1px rounded-full mt-[10px]"></div>
            </div>
          </div>
          <div className="mt-1 w-[75%] h-[10%] border-1px"></div>
          <div className="mt-1 w-[35%] h-[10%] border-1px"></div>
          <div className="mt-1 w-[55%] h-[10%] border-1px"></div>
        </div>
        <div className="w-[270px] h-[100%] ml-4 ">
          <div className="h-[65%] w-[100%] border-1px relative">
            <div className="absolute w-[50px] h-[30px] border-1px left-1 top-1"></div>
            <div className="w-[30px] h-[70px]  right-1 top-1 absolute">
              <div className="w-[100%] h-[30px] border-1px rounded-full"></div>
              <div className="w-[100%] h-[30px] border-1px rounded-full mt-[10px]"></div>
            </div>
          </div>
          <div className="mt-1 w-[75%] h-[10%] border-1px"></div>
          <div className="mt-1 w-[35%] h-[10%] border-1px"></div>
          <div className="mt-1 w-[55%] h-[10%] border-1px"></div>
        </div>
        <div className="w-[270px] h-[100%] ml-4 ">
          <div className="h-[65%] w-[100%] border-1px relative">
            <div className="absolute w-[50px] h-[30px] border-1px left-1 top-1"></div>
            <div className="w-[30px] h-[70px]  right-1 top-1 absolute">
              <div className="w-[100%] h-[30px] border-1px rounded-full"></div>
              <div className="w-[100%] h-[30px] border-1px rounded-full mt-[10px]"></div>
            </div>
          </div>
          <div className="mt-1 w-[75%] h-[10%] border-1px"></div>
          <div className="mt-1 w-[35%] h-[10%] border-1px"></div>
          <div className="mt-1 w-[55%] h-[10%] border-1px"></div>
        </div>
      </div>
      <div className="w-[150px] h-[40px]  mx-auto border-1px mt-8"></div>
    </motion.div>
  )
}

export default FlashSaleLoader

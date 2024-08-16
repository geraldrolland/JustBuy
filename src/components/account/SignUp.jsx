import Footer from "../home/Footer"
import { FcGoogle } from "react-icons/fc";
import { TfiArrowCircleLeft } from "react-icons/tfi";
import { FaFacebook } from "react-icons/fa";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaApple } from "react-icons/fa";
import { useContext, useEffect, useRef, useState } from "react";
import { userStatus } from "../../App";
import { motion } from "framer-motion";
import shopCart from "../../assets/shopCart.png"
const SignUp = () => {
  const [createUserInput, setCreateUserInput] = useState({
    "first_name": "",
    "last_name": "",
    "email": "",
    "password": "",
  })

  const [logInUserInput, setlogInUserInput] = useState({
    "email": "",
    "password": "",
  })

  const [isSlideToLoggingPage, setIsSlideToLoggingPage] = useState(false)
  const forgotPasswordPageRef = useRef()
  const translateLoggingPage = {
    noTranslate: {
      translateX: "0"
    },

    translate: {
      translateX: "-50%"
    }
  }

  const {
    isEmailAlreadyExists,
    isWrongEmailOrPassword,
    setWrongEmailorPassword,
    setIsEmailAlreadyExists,
    isDisable,
    setIsDisable,
    createUser,
    logInUser,
    logOutUser,
    userEmail,
    setUserEmail,
    setIsShowLoggingPage,
    isShowLoggingPage,
  } = useContext(userStatus)

  const handleCreateUser = () => {
    createUser("http://127.0.0.1:8000/users/create_user", createUserInput)
  }

  const handleLoginUser = () => {
    logInUser("http://127.0.0.1:8000/users/login_user", logInUserInput)
  }

  const showForgotPasswordPage = () => {
    if (forgotPasswordPageRef.current) {
      forgotPasswordPageRef.current.style.display = "block"
    }

  }

  const hideForgotPasswordPage = () => {
    if (forgotPasswordPageRef.current) {
      forgotPasswordPageRef.current.style.display = "none"
    }

  }

  const changeStatus = () => {
    console.log("called")
    setIsSlideToLoggingPage(!isSlideToLoggingPage)
  }

  useEffect(() => {
    const container = document.querySelector(".container")
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log("it is observing")
        }
      })
    }, {
      root: container,
      threshold: 1,
    })

    const elems = document.querySelectorAll(".elem")
    elems.forEach(elem => {
      observer.observe(elem)
    })

  })

  return (
    <>
    <div className="w-[100%] md:mt-[60px] mt-[45px]  inline-flex justify-between h-[500px] items-center mb-2 md:mb-8 lg:mb-24 lg:h-[650px]  md:h-[550px]">
      <img className="w-[49%] md:block hidden h-[100%]" src={shopCart}/>
      <div className="md:w-[50%] lg:w-[50%]  w-[100%] flex relative justify-center items-center h-[100%]">
        <div className="md:w-[100%]  lg:w-[55%] w-[100%] h-[100%] relative lg:h-[90%]  ">

          <div ref={forgotPasswordPageRef} className="absolute bg-white w-[100%] hidden h-[100%] z-10 overflow-x-scroll overflow-y-hidden">
            <div className="w-[300%] h-full inline-flex justify-start items-center">

              <div className="w-[33.33%] h-[100%] border-1px">
                <div className="w-[100%] tracking-wide h-[40px] border-1px flex justify-center items-center relative">
                  <TfiArrowCircleLeft onClick={hideForgotPasswordPage} className="absolute left-1 w-[22px] h-[22px] cursor-pointer"/>
                  Forgot Password
                </div>
                <h1 className="text-center mt-5 capitalize tracking-wide md:mt-10">enter email address</h1>
              <input className="w-[100%] lg:h-[40px] md:h-[45px] h-[40px] border-1px border-gray-800 focus:outline-none rounded-full mt-4 md:mt-6 lg:mt-5 pl-4 tracking-wider" type="text" placeholder="example@gmail.com" />
              <h1 className="text-center mt-3 text-gray-500  tracking-wide">Back to log in</h1>
              <button className="w-[100%] lg:h-[45px] h-[50px] border-1px rounded-full text-gray-200 bg-gradient-to-r from-red-500 tracking-wide via-red-400 to-red-500 mt-7">Send</button>
              <h1 className="text-red-500 text-center mt-12">Or</h1>
              <div className="w-[110px] h-[35px]  mx-auto mt-1 flex justify-between items-center">
                <FaFacebook className="w-[25px] h-[25px]"/>
                <AiFillGoogleCircle className="w-[25px] h-[25px]"/>
                <FaApple className="w-[25px] h-[25px]"/>
              </div>
              <h1 className="text-gray-500px text-center tracking-wide text-gray-500 mt-8">Don't have an account </h1>
              <button className="w-[100%] mt-4 h-[45px] border-1px rounded-full border-gray-700 capitalize">
                Sign up
              </button>
              </div>



              <div className="w-[33.33%] h-[100%] border-1px">
                <div className="w-[100%] h-[40px] border-1px flex justify-center tracking-wide items-center relative">
                  <TfiArrowCircleLeft className="absolute left-1 w-[22px] h-[22px]"/>
                  Verification
                </div>
                <h1 className="text-center mt-5 text-gray-700 capitalize tracking-wide md:mt-10">enter Verification code</h1>
                <div className="w-[85%] mt-4 mx-auto h-[50px]  flex place-content-between place-items-center">
                  <input className="w-[50px] h-[50px] focus:outline-dotted border-gray-700 rounded-full focus:outline-offset-1 focus:outline-gray-700 focus:border-transparent transition-all duration-200 focus:border-2px border-1px text-center text-[25px]" type="text" maxLength={1} />
                  <input className="w-[50px] h-[50px] focus:outline-dotted border-gray-700 rounded-full focus:outline-offset-1 focus:outline-gray-700 focus:border-transparent transition-all duration-200 focus:border-2px border-1px text-center text-[25px]" type="text" maxLength={1} />
                  <input className="w-[50px] h-[50px] focus:outline-dotted border-gray-700 rounded-full focus:outline-offset-1 transition-all duration-200 focus:outline-gray-700 focus:border-transparent focus:border-2px border-1px text-center text-[25px]" type="text" maxLength={1} />
                  <input className="w-[50px] h-[50px] 
                   transition-all duration-200 focus:outline-dotted border-gray-700 rounded-full focus:outline-offset-1 focus:outline-gray-700 focus:border-transparent focus:border-2px border-1px text-center text-[25px]" type="text" maxLength={1} />
                </div>
              <small className="text-center block mx-auto mt-4 text-gray-500  tracking-wide">If you didn't receive a code, <span className="text-red-600 cursor-pointer">Resend</span></small>
              <button className="w-[100%] lg:h-[45px] h-[50px] border-1px rounded-full text-gray-200 bg-gradient-to-r from-red-500 tracking-wide via-red-400 to-red-500 mt-7">Send</button>
              <h1 className="text-red-500 text-center mt-12">Or</h1>
              <div className="w-[110px] h-[35px]  mx-auto mt-1 flex justify-between items-center">
                <FaFacebook className="w-[25px] h-[25px]"/>
                <AiFillGoogleCircle className="w-[25px] h-[25px]"/>
                <FaApple className="w-[25px] h-[25px]"/>
              </div>
              <h1 className="text-gray-500px text-center tracking-wide text-gray-500 mt-8">Don't have an account </h1>
              <button className="w-[100%] mt-4 h-[45px] border-1px rounded-full border-gray-700 capitalize">
                Sign up
              </button>
              </div>


              <div className="w-[33.33%] h-[100%] border-1px">
                <div className="w-[100%] h-[40px] border-1px flex justify-center items-center relative">
                  New Password
                </div>
                <h1 className="mt-5 capitalize tracking-wide md:mt-10">enter new password</h1>
              <input className="w-[100%] lg:h-[40px] md:h-[45px] h-[40px] border-1px border-gray-800 focus:outline-none rounded-full mt-4 md:mt-6 lg:mt-3 pl-4 tracking-wider" type="text" placeholder="At least 8 digits" />
              <h1 className="mt-3 capitalize tracking-wide md:mt-10">confirm password</h1>
              <input className="w-[100%] lg:h-[40px] md:h-[45px] h-[40px] border-1px border-gray-800 focus:outline-none rounded-full mt-4 md:mt-6 lg:mt-3 pl-4 tracking-wider" type="text" placeholder="At least 8 digits" />
              <button className="w-[100%] lg:h-[45px] h-[50px] border-1px rounded-full text-gray-200 bg-gradient-to-r from-red-500 tracking-wide via-red-400 to-red-500 mt-10">Send</button>
              </div>


            </div>
          </div>
          <div className="w-[100%] container  h-[100%] overflow-hidden">
          <motion.div
          variants={translateLoggingPage}
          animate={isShowLoggingPage || isSlideToLoggingPage ? "translate" : "noTranslate"}
          transition={{
            duration: 0.5,
            ease: "easeInOut"
          }}
           className="inline-flex justify-start items-center w-[200%] h-[100%]">

            <div className="w-[50%] h-[100%]">
          <h1 className="text-[30px] tracking-widest">
            Create an account
          </h1>
          <h1 className="mt-4 text-gray-800">Enter your details below</h1>
          <input onChange={(e) => setCreateUserInput({...createUserInput, first_name: e.target.value}) } value={createUserInput.first_name} className="lg:w-[100%] elem w-[99%] lg:h-[40px] md:h-[45px] h-[40px] border-1px border-gray-900 focus:outline-none rounded-full mt-4 md:mt-6 lg:mt-8 pl-4 tracking-wide" type="text" placeholder="First Name" />
          <input onChange={(e) => setCreateUserInput({...createUserInput, last_name: e.target.value})} value={createUserInput.last_name} className="lg:w-[100%] lg:h-[40px] md:h-[45px] h-[40px] md:w-[99%] border-1px border-gray-900 focus:outline-none rounded-full mt-5 pl-4 tracking-wide" type="text" placeholder="Last Name" />
          <input onChange={(e) => setCreateUserInput({...createUserInput, email: e.target.value})} value={createUserInput.email} className="lg:w-[100%] w-[99%] lg:h-[40px] md:h-[45px] h-[40px] border-1px border-gray-900 focus:outline-none rounded-full mt-5 pl-4 tracking-wide" type="text" placeholder="Last Name" />
          <input onChange={(e) => setCreateUserInput({...createUserInput, password: e.target.value})} value={createUserInput.password} className="lg:w-[100%] lg:h-[40px] md:h-[45px] md:w-[99%] h-[40px] border-1px border-gray-900 focus:outline-none rounded-full mt-5 pl-4 tracking-wide" type="text" placeholder="Password" />
          <button onClick={handleCreateUser} className="lg:w-[100%] md:w-[99%] h-[50px] lg:h-[45px]  mt-5 text-gray-200 tracking-wide rounded-full bg-red-600 ">
            Create Account
          </button>
          <div className="lg:w-[100%] w-[99%] h-[45px] border-gray-500 shadow-sm rounded-full border-1px  mt-3 flex justify-center items-center">
          <FcGoogle className="w-[30px] h-[30px]" />
          <h1 className="text-gray-900 ml-2 tracking-wide">
            Sign up with Google
          </h1>
          </div>
          <div className="md:w-[80%] h-[30px] mx-auto flex justify-center space-x-5 items-center mt-4 md:mt-6"><span className="tracking-wider text-gray-800 ">Already have an account?</span><span className=" group inline-block relative w-[60px] h-[30px]   overflow-y-hidden">
            <span onClick={() => changeStatus()} className="block text-gray-800 tracking-wide absolute cursor-pointer z-10 group-hover:text-gray-200 transition-all duration-200 left-1 top-[2px]">Log in</span>
            <span className="block
            cursor-pointer group-hover:translate-y-[0%] w-[100%] h-[100%]  transtion-all duration-200 transform translate-y-[91%] bg-gray-800  "></span>
            </span></div>
          </div>

          <div className="w-[50%]  h-[100%]">
          <h1 className="text-[30px] tracking-widest">
            Log in to justBuy
          </h1>
          <h1 className="mt-4 text-gray-800">Enter your details below</h1>
          <input onChange={(e) => setlogInUserInput({...logInUserInput, email: e.target.value})} value={logInUserInput.email} className="w-[100%] elem lg:h-[40px] md:h-[45px] h-[40px] border-1px border-gray-900 focus:outline-none rounded-full mt-4 md:mt-6 lg:mt-8 pl-4 tracking-wide" type="text" placeholder="Email or Phone Number" />
          <input onChange={(e) => setlogInUserInput({...logInUserInput, password: e.target.value})} value={logInUserInput.password} className="w-[100%] lg:h-[40px] md:h-[45px] h-[40px] border-1px border-gray-900 focus:outline-none rounded-full mt-6 pl-4 tracking-wide" type="text" placeholder="Password" />
          <div className="w-[100%] flex justify-between items-center lg:h-[45px] h-[50px] mt-8">
            <button onClick={handleLoginUser} className="w-[30%] bg-red-600 h-[100%]  rounded-full text-gray-200">Log in</button>
            <button onClick={showForgotPasswordPage} className="text-red-500 capitalize tracking-wider">forgot password?</button>
          </div>
          <div className="md:w-[80%] h-[30px] mx-auto flex justify-center space-x-5 items-center mt-4 md:mt-6"><span className="tracking-wider text-gray-800 ">Dont't have an account?</span><span className=" group inline-block relative w-[65px] h-[30px]   overflow-y-hidden">
            <span onClick={() => changeStatus()} className="block text-gray-800 tracking-wide absolute cursor-pointer z-10 group-hover:text-gray-200 transition-all duration-200 left-1 top-[2px]">Sign up</span>
            <span className="block
            cursor-pointer group-hover:translate-y-[0%] w-[100%] h-[100%]  transtion-all duration-200 transform translate-y-[91%] bg-gray-800  "></span>
            </span></div>
          </div>
          </motion.div>

          </div>

        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default SignUp

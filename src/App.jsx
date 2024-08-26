import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import MyHeader from './components/MyHeader'
import SignUp from './components/account/SignUp'
import Contact from './components/contact/Contact'
import About from './components/about/About'
import PageNotFound from './components/PageNotFound'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import { createContext, useEffect, useState } from 'react'
import UseLogIn from './customhook/UseLogIn'
import UseSignUp from './customhook/UseSignUp'
import UseLogOut from './customhook/UseLogOut'
import { WishLists } from './components/home/WishLists'
import { MyAccount } from './components/home/MyAccount'
import { MyProfile } from './components/home/MyProfile'
import { MyAddressBook } from './components/home/MyAddressBook'
import { Cart } from './components/home/Cart'
import { CheckOut } from './components/home/CheckOut'
import { createPortal } from 'react-dom'
import { Menu } from './components/home/Menu'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const queryClient = new QueryClient()
export const userStatus = createContext()

function App() {
  const logIn = UseLogIn()
  const signUp = UseSignUp()
  const logOut = UseLogOut()
  const navigateToHome = useNavigate()
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
  const [isEmailAlreadyExists, setIsEmailAlreadyExists] = useState(false)
  const [isWrongEmailOrPassword, setWrongEmailorPassword] = useState(false)
  const [isDisable, setIsDisable] = useState(false)
  const [userEmail, setUserEmail] = useState("")
  const [isShowLoggingPage, setIsShowLoggingPage] = useState(false)
  const [showWishlistAlreadyExist, setShowWishListAlreadyExist] = useState(false)
  const [showOrderAlreadyExist, setOrderAlreadyExist] = useState(null)

  const createUser = async (url, data) => {
    setIsDisable(true)
    const statusCode = await signUp(url, data)
    if (statusCode === 201) {
      setIsDisable(false)
      setIsShowLoggingPage(true)

    }

    if (statusCode === 400) {
      setIsDisable(false)
      setIsEmailAlreadyExists(true)
      console.log("it is 400")

    } else {
      console.log(statusCode)
      console.log("hey")
    }
  }

  const logInUser = async (url, data) => {
    setIsDisable(true)
    const {email, statusCode, isUserLoggedIn} = await logIn(url, data)
    if (statusCode === 200) {
      setIsDisable(false)
      console.log(email)
      setIsUserLoggedIn(isUserLoggedIn)
      navigateToHome("/")
    }
    if (statusCode === 401 || statusCode === 404) {
      setWrongEmailorPassword(true)
      setIsDisable(false)
      console.log(statusCode)
    } else {
      console.log(statusCode)
    }
  }

  const logOutUser = async (url) => {
    const statusCode = await logOut(url)
    if (statusCode === 200 || statusCode === 400) {

    } else {
      console.log(statusCode)
    }
  }



  useEffect(() => {
    document.body.style.overflowX = "hidden"
  }, [])

  return (
    <>
    <userStatus.Provider value={{
      isUserLoggedIn,
      isShowLoggingPage,
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
      setShowWishListAlreadyExist,
      showOrderAlreadyExist,
      showWishlistAlreadyExist,
      setOrderAlreadyExist,
      setIsShowLoggingPage,
      setIsUserLoggedIn,
    }}>
    <QueryClientProvider client={queryClient}>
    <MyHeader/>

    <div className='bg-white'>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path={"/"} element={<Home/>}/>
      <Route path={"my-account"} element={<MyAccount/>}>
      <Route path={"my-profile"} element={<MyProfile/>} />
      <Route path={"my-address-book"} element={<MyAddressBook/>} />
      </Route>
      <Route path={"wishlist"} element={<WishLists/>}/>
      <Route path={"contact"} element={<Contact/>}/>
      <Route path={"about"} element={<About/>}/>
      <Route path={"sign-up"} element={<SignUp/>}/>
      <Route path={"check-out"} element={<CheckOut/>} />
      <Route path={"cart"} element={<Cart/>}/>
      <Route path={"*"} element={<PageNotFound/>}/>
      <Route/>
    </Routes>
    {
      //createPortal(<Menu/>, document.getElementById("menu-root"))
    }
    </div>
    </QueryClientProvider>
    </userStatus.Provider>
    </>
  )
}

export default App

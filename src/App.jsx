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
const queryClient = new QueryClient()
export const userStatus = createContext()

function App() {
  const logIn = UseLogIn()
  const signUp = UseSignUp()
  const logOut = UseLogOut()

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
  const [isEmailAlreadyExists, setIsEmailAlreadyExists] = useState(false)
  const [isWrongEmailOrPassword, setWrongEmailorPassword] = useState(false)
  const [isDisable, setIsDisable] = useState(false)
  const [userEmail, setUserEmail] = useState("")
  const [isShowLoggingPage, setIsShowLoggingPage] = useState(false)

  const createUser = async (url, data) => {
    /*const statusCode = await signUp(url, data)
    if (statusCode === 201) {

    }

    if (statusCode === 400) {

    } else {
      console.log(statusCode)
    }*/
  }

  const logInUser = async (url, data) => {
    /*const {email, statusCode} = await logIn(url, data)
    if (statusCode === 200) {

    }
    if (statusCode === 401 || statusCode === 404) {

    } else {
      console.log(statusCode)
    }*/
  }

  const logOutUser = async (url) => {
    /*const statusCode = await logOut(url)
    if (statusCode === 200 || statusCode === 400) {

    } else {
      console.log(statusCode)
    }*/
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
    }}>
    <QueryClientProvider client={queryClient}>
    <MyHeader/>
    <div className='bg-white'>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path={"/"} element={<Home/>}/>
      <Route path={"contact"} element={<Contact/>}/>
      <Route path={"about"} element={<About/>}/>
      <Route path={"sign-up"} element={<SignUp/>}/>
      <Route path={"*"} element={<PageNotFound/>}/>
      <Route/>
    </Routes>
    </div>
    </QueryClientProvider>
    </userStatus.Provider>
    </>
  )
}

export default App

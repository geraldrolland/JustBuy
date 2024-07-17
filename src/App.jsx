import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import MyHeader from './components/MyHeader'
import SignUp from './components/account/SignUp'
import Contact from './components/contact/Contact'
import About from './components/about/About'
import PageNotFound from './components/PageNotFound'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import { useEffect } from 'react'
const queryClient = new QueryClient()
function App() {


  useEffect(() => {
    document.body.style.overflowX = "hidden"
  }, [])

  return (
    <>
    <QueryClientProvider client={queryClient}>
    <MyHeader/>
    <div className='bg-white'>
    <Routes>
      <Route index element={<Home/>}/>
      <Route to={"/"} element={<Home/>}/>
      <Route to={"contact"} element={<Contact/>}/>
      <Route to={"about"} element={<About/>}/>
      <Route to={"sign-up"} element={<SignUp/>}/>
      <Route to={"*"} element={<PageNotFound/>}/>
      <Route/>
    </Routes>
    </div>
    </QueryClientProvider>
    </>
  )
}

export default App

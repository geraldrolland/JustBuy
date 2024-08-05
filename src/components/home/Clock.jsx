import { useEffect, useRef, useState } from "react"


const Clock = () => {
  const secondsRef = useRef(null)
  const minutesRef = useRef(null)
  const hoursRef = useRef(null)
  const daysRef = useRef(null)
  const [elapseDate, setElapseDate] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    expiryDay: 15,
  })


  const clockExpiryDate = () => {
    /*if (elapseDate.seconds !== 0)
    {
      setElapseDate({...elapseDate, seconds: elapseDate.seconds - 1})
      console.log(elapseDate.seconds)
    }
    else {
      if (elapseDate.minutes !== 0) {
        setElapseDate({...elapseDate, seconds: 59})
        setElapseDate({elapseDate, minutes: elapseDate.minutes - 1})
      }
      else {
        if (elapseDate.hours !== 0) {
          setElapseDate({elapseDate, seconds: 59})
          setElapseDate({elapseDate, minutes: 59})
          setElapseDate({...elapseDate, hours: elapseDate.hour - 1})
        }
        else {
          if (elapseDate.days != 0) {
            setElapseDate({elapseDate, seconds: 59})
            setElapseDate({elapseDate, minutes: 59})
            setElapseDate({...elapseDate, hours: 23})
            setElapseDate({...elapseDate, days: elapseDate.days - 1})
          }
          setElapseDate({elapseDate, seconds: 0})
          setElapseDate({elapseDate, minutes: 0})
          setElapseDate({...elapseDate, hours: 0})
          setElapseDate({...elapseDate, days: 0})
        }
      }
    }
    return*/

  }



  useEffect(() => {
    const elapseDate = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      expiryDay: 15,
    }
    try {
      const flashSaleDate = JSON.parse(sessionStorage.get("flashSaleDate"))
      const currentDate = new Date()
      if (currentDate.getDay > elapseDate.expiryDay) {
        elapseDate.seconds = currentDate.getSeconds()
        elapseDate.minutes = currentDate.getMinutes()
        elapseDate.hours = currentDate.getHours()
        elapseDate.days = currentDate.getDay()
      }


   }
   catch(error) {
     const flashSaleDate = new Date()

     elapseDate.seconds = 59
     elapseDate.minutes = 59
     elapseDate.hours = 23
     elapseDate.days = 1
     secondsRef.current.innerHTML = elapseDate.seconds
     minutesRef.current.innerHTML = elapseDate.minutes
     hoursRef.current.innerHTML = elapseDate.hours > 9 ? elapseDate.hours : "0" + elapseDate.hours
     daysRef.current.innerHTML = elapseDate.days > 9 ? elapseDate.days : "0" + elapseDate.days

   }

   const timeOut = setInterval(() => {

    if (elapseDate.seconds > 1)
      {
        elapseDate.seconds -= 1
        secondsRef.current.innerHTML = elapseDate.seconds > 9 ? elapseDate.seconds : "0" + elapseDate.seconds
        return
      }

      if (elapseDate.seconds === 1 && elapseDate.minutes === 0)
      {
        elapseDate.seconds = 0
        secondsRef.current.innerHTML = elapseDate.seconds > 9 ? elapseDate.seconds : "0" + elapseDate.seconds
        return
      }
      else {
        if (elapseDate.minutes > 1) {
          elapseDate.seconds = 59
          elapseDate.minutes -= 1
          secondsRef.current.innerHTML = elapseDate.seconds
          minutesRef.current.innerHTML = elapseDate.minutes > 9 ? elapseDate.minutes : "0" + elapseDate.minutes
          return

        }

        if (elapseDate.minutes === 1 && elapseDate.hours === 0) {
          elapseDate.seconds = 59
          elapseDate.minutes = 0
          secondsRef.current.innerHTML = elapseDate.seconds
          minutesRef.current.innerHTML = elapseDate.minutes > 9 ? elapseDate.minutes : "0" + elapseDate.minutes
          return
        }
        else {
          if (elapseDate.hours > 1) {
            elapseDate.seconds = 59
            elapseDate.minutes = 59
            elapseDate.hours -= 1
            secondsRef.current.innerHTML = elapseDate.seconds
            minutesRef.current.innerHTML = elapseDate.minutes
            hoursRef.current.innerHTML = elapseDate.hours > 9 ? elapseDate.hours : "0" + elapseDate.hours
            return
          }

          if (elapseDate.hours === 1 &&  elapseDate.days === 0)
          {
            elapseDate.seconds = 59
            elapseDate.minutes = 59
            elapseDate.hours = 0
            secondsRef.current.innerHTML = elapseDate.seconds
            minutesRef.current.innerHTML = elapseDate.minutes
            hoursRef.current.innerHTML = elapseDate.hours > 9 ? elapseDate.hours : "0" + elapseDate.hours
            return
          }

          else {
            if (elapseDate.days > 1) {
              elapseDate.seconds = 59
              elapseDate.minutes = 59
              elapseDate.hours = 23
              elapseDate.days -= 1
              secondsRef.current.innerHTML = elapseDate.seconds
              minutesRef.current.innerHTML = elapseDate.minutes
              hoursRef.current.innerHTML = elapseDate.hours
              daysRef.current.innerHTML = elapseDate.days > 9 ? elapseDate.days : "0" + elapseDate.days
              return
            }

            if (elapseDate.days === 1 ) {
              elapseDate.seconds = 59
              elapseDate.minutes = 59
              elapseDate.hours = 23
              elapseDate.days = 0
              secondsRef.current.innerHTML = elapseDate.seconds
              minutesRef.current.innerHTML = elapseDate.minutes
              hoursRef.current.innerHTML = elapseDate.hours
              daysRef.current.innerHTML = elapseDate.days > 9 ? elapseDate.days : "0" + elapseDate.days
            }
          }
        }
      }
   }, 1000);
    
    return () => {
      //localStorage.setItem("flashSaleDate", JSON.stringify(elapseDate))
      clearInterval(timeOut)
    }
  }, [])
  return (
    <div className='w-[55%] h-full  inline-flex place-content-between place-items-center'>
      <div className='w-[18%] h-full box-border  flex justify-center items-center flex-col'>
        <small className='md:text-[10px] text-[7px] text-gray-700 font-semibold'>Days</small>
        <div ref={daysRef} className="proportional-nums font-semibold tracking-wide text-xl  text-black">0</div>
      </div><div className="text-xl font-semibold self-end text-red-400">:</div>
      <div className='w-[18%] h-full box-border  flex justify-center items-center flex-col'>
        <small className='md:text-[10px] text-[7px] text-gray-700 font-semibold'>Hours</small>
        <div ref={hoursRef} className="proportional-nums font-semibold tracking-wide text-xl  text-black">0</div>
      </div><div className="text-xl font-semibold self-end text-red-400">:</div>
      <div className='w-[18%] h-full box-border flex justify-center items-center flex-col'>
        <small className='md:text-[10px] text-[7px] text-gray-700 font-semibold'>Minutes</small>
        <div ref={minutesRef} className="proportional-nums font-semibold tracking-wide text-xl  text-black">0</div>
      </div><div className="text-xl font-semibold self-end text-red-400">:</div>
      <div className='w-[18%] h-full box-border  flex justify-center items-center flex-col'>
        <small className='md:text-[10px] text-[7px] text-black font-semibold'>Seconds</small>
        <div ref={secondsRef} className="proportional-nums font-semibold tracking-wide text-xl  text-gray-950">0</div>
      </div>
    </div>
  )
}

export default Clock

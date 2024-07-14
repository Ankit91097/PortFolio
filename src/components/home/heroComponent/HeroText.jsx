
import { motion, useScroll } from 'framer-motion'
import React, { useEffect, useState } from 'react'

const HeroText = () => {
  const [direction, setdirection] = useState(1)
  const { scrollY }=useScroll()
  const handleScrolling=()=>{
    const current=scrollY.get()-scrollY.getPrevious()
    //agar sidha scroll hoga to value 1
    //agar ulta scroll hoga to value -1
    if(current>0){
      setdirection(1)
    }
    else{
      setdirection(-1)
    }
  }
  useEffect(() => {
    scrollY.on("change",handleScrolling)
  }, [scrollY])
  
  return (
    <div>
        <motion.div className='relative mt-15 flex'
        initial={{
          x:-2950
        }}
         animate={{
          x:direction>0?-5900:0,

        }}
        transition={{
          duration:10,
          ease:'linear',
          repeat:Infinity
        }}>
            <h1 className='text-[11.7vw] whitespace-nowrap font-light text-white'> - Ankit Niranjan </h1>
            <h1 className='text-[11.7vw] whitespace-nowrap font-light text-white'> - Ankit Niranjan </h1>
            <h1 className='text-[11.7vw] whitespace-nowrap font-light text-white'> - Ankit Niranjan </h1>
            <h1 className='text-[11.7vw] whitespace-nowrap font-light text-white'> - Ankit Niranjan </h1>
            <h1 className='text-[11.7vw] whitespace-nowrap font-light text-white'> - Ankit Niranjan </h1>
            <h1 className='text-[11.7vw] whitespace-nowrap font-light text-white'> - Ankit Niranjan </h1>
            <h1 className='text-[11.7vw] whitespace-nowrap font-light text-white'> - Ankit Niranjan </h1>
        </motion.div>
    </div>
  )
}

export default HeroText
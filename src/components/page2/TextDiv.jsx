import { motion } from 'framer-motion'
import React, { useRef } from 'react'

const TextDiv = () => {
    const overlayRef = useRef(null)
    const hoverRef = useRef(null)

    const mouseEntering=()=>{
      hoverRef.current.style.transform='translate(-50%,-50%) scale(1)'
    }
    const mouseLeaving=()=>{
        hoverRef.current.style.transform='translate(-50%,-50%) scale(0)'
    }
    const mouseMoving=(e)=>{
        const realXposition=e.clientX-overlayRef.current.getBoundingClientRect().x
        const realYposition=e.clientY-overlayRef.current.getBoundingClientRect().y
        hoverRef.current.style.left=realXposition+"px"
        hoverRef.current.style.top=realYposition+"px"
    }
  return (
    <div id='parent' className='relative overflow-hidden' ref={overlayRef}
     onMouseEnter={mouseEntering}
     onMouseLeave={mouseLeaving}
     onMouseMove={(e)=>{mouseMoving(e)}}
      >
        <div ref={hoverRef} className='image absolute overflow-hidden top-0 -translate-x-1/2 -translate-y-1/2 h-[16vw] w-[17vw] bg-red-600 '>
        <motion.div className='h-full w-full'>
            <img className='h-full w-full object-cover' src="https://dennissnellenberg.com/media/pages/work/twice/0ab7e43954-1710404752/thumbnail-twice-810x810-crop-q72.jpg" alt="" />
            <img className='h-full w-full object-cover'  src="https://dennissnellenberg.com/media/pages/work/the-damai/b511d32d21-1710452224/thumbnail-thedamai-v2-810x810-crop-q72.jpg" alt="" />
            <img className='h-full w-full object-cover'  src="https://dennissnellenberg.com/media/pages/work/fabric/ac07564a5f-1688453092/thumbnail-fabric-darkgray-810x810-crop-q72.jpg" alt="" />
            <img className='h-full w-full object-cover' src="https://dennissnellenberg.com/media/pages/work/aanstekelijk/441187fb44-1687423090/thumbnail-aanstekelijk-810x810-crop-q72.jpg" alt="" />
        </motion.div>
        </div>
        
       <div>
        <div className='relative'>
       <div className='hover:px-[7vw] relative hover:text-gray-600 transition-all border-t-2 flex items-center justify-between px-[2vw] py-[2vw]'>
            <div className='overlay h-full w-full absolute z-50 top-0 left-0'></div>
            <h1 className='text-8xl uppercase z-10'>Twice</h1>
            <h5 className='text-xl opacity-85 z-10'>Ineteraction & Development</h5>
        </div>
        <div className='hover:px-[7vw] relative hover:text-gray-600 transition-all border-t-2 flex items-center justify-between px-[2vw] py-[2vw]'>
            <div className='overlay h-full w-full absolute z-50 top-0 left-0'></div>
            <h1 className='text-8xl uppercase z-10'>Twice</h1>
            <h5 className='text-xl opacity-85 z-10'>Ineteraction & Development</h5>
        </div>
        <div className='hover:px-[7vw] relative hover:text-gray-600 transition-all border-t-2 flex items-center justify-between px-[2vw] py-[2vw]'>
            <div className='overlay h-full w-full absolute z-50 top-0 left-0'></div>
            <h1 className='text-8xl uppercase z-10'>Twice</h1>
            <h5 className='text-xl opacity-85 z-10'>Ineteraction & Development</h5>
        </div>
        <div className='hover:px-[7vw] relative hover:text-gray-600 transition-all border-t-2 flex items-center justify-between px-[2vw] py-[2vw]'>
            <div className='overlay h-full w-full absolute z-50 top-0 left-0'></div>
            <h1 className='text-8xl uppercase z-10'>Twice</h1>
            <h5 className='text-xl opacity-85 z-10'>Ineteraction & Development</h5>
        </div>
        </div>
        
       </div>
    </div>
  )
}

export default TextDiv
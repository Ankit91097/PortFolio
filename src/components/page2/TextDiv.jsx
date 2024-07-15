import { motion } from 'framer-motion'
import React, { useRef } from 'react'

const TextDiv = () => {
    const overlayRef = useRef(null)
    const hoverRef = useRef(null)

    const mouseEntering=()=>{

    }
    const mouseLeaving=()=>{
        
    }
    const mouseMoving=()=>{
        
    }
  return (
    <div id='parent' ref={overlayRef}
     onMouseEnter={mouseEntering}
     onMouseLeave={mouseLeaving}
     onMouseMove={(e)=>{mouseMoving(e)}}
      >
        <div ref={hoverRef} className='absolute h-[16vw] w-[17vw] bg-red-600 overflow-hidden'>
        <motion.div className='h-full w-full'>
            <img className='h-full w-full object-cover' src="https://dennissnellenberg.com/media/pages/work/twice/0ab7e43954-1710404752/thumbnail-twice-810x810-crop-q72.jpg" alt="" />
            <img className='h-full w-full object-cover'  src="https://dennissnellenberg.com/media/pages/work/the-damai/b511d32d21-1710452224/thumbnail-thedamai-v2-810x810-crop-q72.jpg" alt="" />
            <img className='h-full w-full object-cover'  src="https://dennissnellenberg.com/media/pages/work/fabric/ac07564a5f-1688453092/thumbnail-fabric-darkgray-810x810-crop-q72.jpg" alt="" />
            <img className='h-full w-full object-cover' src="https://dennissnellenberg.com/media/pages/work/aanstekelijk/441187fb44-1687423090/thumbnail-aanstekelijk-810x810-crop-q72.jpg" alt="" />
        </motion.div>
        </div>
        
       <div>
       <div className='hover:px-[7vw] hover:text-gray-600 transition-all border-t-2 flex items-center justify-between px-[2vw] py-[2vw]'>
            <h1 className='text-8xl uppercase'>Twice</h1>
            <h5 className='text-xl opacity-85'>Ineteraction & Development</h5>
        </div>
        <div className='hover:px-[7vw] hover:text-gray-600 transition-all border-t-2 flex items-center justify-between px-[2vw] py-[2vw]'>
            <h1 className='text-8xl uppercase'>Twice</h1>
            <h5 className='text-xl opacity-85'>Ineteraction & Development</h5>
        </div>
        <div className='hover:px-[7vw] hover:text-gray-600 transition-all border-t-2 flex items-center justify-between px-[2vw] py-[2vw]'>
            <h1 className='text-8xl uppercase'>Twice</h1>
            <h5 className='text-xl opacity-85'>Ineteraction & Development</h5>
        </div>
        <div className='hover:px-[7vw] hover:text-gray-600 transition-all border-t-2 flex items-center justify-between px-[2vw] py-[2vw] border-b-2'>
            <h1 className='text-8xl uppercase'>Twice</h1>
            <h5 className='text-xl opacity-85'>Ineteraction & Development</h5>
        </div>
       </div>
    </div>
  )
}

export default TextDiv
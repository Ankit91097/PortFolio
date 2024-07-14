import React from 'react'
import 'remixicon/fonts/remixicon.css'

const CenterFlex = () => {
  return (
    <div className=' mt-60 text-white relative z-10 flex justify-between items-end w-10/12'>
        <div className='flex bg-black px-4 py-4 pl-10 rounded-e-full items-center gap-8'>
            <h2 className='text-xl leading-none'>Located <br /> in the <br />Netherlands</h2>
            <div className='bg-gray-500 flex items-center justify-center h-20 w-20 rounded-full'>
            <i className="ri-global-line text-4xl rotate-12 font-thin"></i>
            </div>
        </div>
        <div className='flex flex-col gap-20 '>
        <i className="ri-arrow-right-down-line text-5xl"></i>
        <h2 className='text-5xl leading-normal font-normal'>Freelance <br />Designer & Developer</h2>
        </div>
    </div>
  )
}

export default CenterFlex
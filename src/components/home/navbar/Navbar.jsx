import React from 'react'
import NavRight from './NavRight'
import NavLeft from './NavLeft'

const Navbar = () => {
  return (
    <div className='text-white relative z-10 flex justify-between item-center py-9 px-20'>
        <NavLeft/>
        <NavRight/>
    </div>
  )
}

export default Navbar
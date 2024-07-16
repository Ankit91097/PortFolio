import React from 'react'
import HomePage from './components/home/HomePage'
import Page2 from './components/page2/Page2'
import Nothing from './components/footer/Nothing'
import LocomotiveScroll from 'locomotive-scroll';


const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div>
      <HomePage/>
      <Page2/>
      <Nothing/>
    </div>
  )
}

export default App
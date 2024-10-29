import React from 'react'
import Slider from '../HomeSlider/Slider'
import './Home.css'
import OurStory from '../HomeHistory/History'
import Footer from '../Footer/Footer'
import Rooms from '../Rooms/Rooms'
// import Footer from '../Footer/Footer'
const Home = () => {
  return (
    <div className='home-container'>
      <Slider/>
       <div className='our-story'>
       <OurStory/>
       </div>

       <div>
         <Rooms/>
       </div>

       {/* <div>
         <Footer/>
       </div> */}
    </div>
  )
}

export default Home

import React, { useEffect, useState } from 'react'
import './Slider.css'
import img1 from '../../Images/home1.jpg'
import img2 from '../../Images/home2.jpg'
import img3 from '../../Images/home5.jpg'
import img4 from '../../Images/home4.jpg'
import img5 from '../../Images/home5.jpg'





const Slider = () => {
    const [slider,setSlider] = useState(0)
    const data = [img1,img2,img3,img4,img5]
    
    const HandleMinus=()=>{
        setSlider(slider === 0 ? data.length-1 : slider-1)
    }

    const HandlePlus =()=>{
      setSlider(slider === data.length - 1 ? 0 : slider + 1)
    }


    useEffect(()=>{
        const sliderClear = setInterval(()=>{
           HandlePlus()
        },2000) 

        return()=>clearInterval(sliderClear)
    },[slider])
  return (
    <div>
    <div className='slider-container'>
      <div className='slider-img'>
       <img src={data[slider]} alt='' style={{width:'100%',height:'80vh'}}/>
       
       <div className='home-message'>
          <h1>Welcome to Our Resort</h1>
          <p>Experience luxury and comfort with breathtaking views</p>
        </div>

       <div className='btn' >
        <button onClick={HandleMinus}style={{backgroundColor:"green", margin:"3%",fontSize:"1.5rem"}}>-</button>
        <button onClick={HandlePlus}style={{backgroundColor:"green", margin:"3%",fontSize:"1.5rem"}}>+</button>
       </div>
      
    </div>
    </div>
    </div>
  )
}

export default Slider

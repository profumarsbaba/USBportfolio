import React from 'react'
import image from './PXL_20230706_125237432.jpg'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import home from './IMG_2557.jpeg';
import myimage from './myImage.png'
import { useState } from 'react';

const Feedback = () => {
    const feedback = [
        {
            image,
            quote: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. dolor sit amet consectetur adipisicing elit."
        },
        {
            image: home,
            quote: "Dolor sit amet consectetur adipisicing elit. dolor sit amet consectetur adipisicing elit."
        },
        {
            image: myimage,
            quote: "Begging of programing is hard."
        }
    ];
    const [images, setImage] = useState(0);
    const [quote, setQuotes] = ("");
    const handleForwardImage = () =>{
        if(images >= 0 && images < 2) { 
            setImage(images + 1) 
            
        } else{
         setImage(2)
         
    }
    }
    const handleBackwardImage = () => {

       if( images <= 2 && images > 0) {
        setImage(images - 1)

    } 
       else{
        setImage(0);
    }
}
  return (
    <div >
    <div>
      <h1 style={{textAlign:"center"}}>Feedback from client</h1>
    </div>
    <div className='feedback'>
    <p onClick={handleBackwardImage}> {"<"} </p>
       <div className='card'>

        <div className='hagu'>
        <img src={ feedback[images].image } />
        </div>
        <div className='dama'>
           <FaQuoteRight />
           <h3>
            Dolor sit amet consectetur adipisicing elit. dolor sit amet consectetur adipisicing elit.
           </h3>
        </div>

       </div>
     <p onClick={handleForwardImage}> {">"}</p>
    </div>
    </div>
  )

}

export default Feedback
import React from 'react'
import image from './backgroundImage.jpg'
import { FaFile, FaFolder, FaFolderPlus } from 'react-icons/fa';
const RecentWork = () => {
  return (
    <div className='portpolio'>
      <section className='sec1'>
        <h1>My recent work</h1>
      </section>
      <section className='sec2'>
        <div className='detailsBox'>
           <img src={ image } />
           <p>Wev design</p>
           <h3>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. dolor sit amet consectetur adipisicing elit.
           </h3>
           <button className='btnDetails'><FaFolderPlus/> View Details </button>
        </div>
        <div className='detailsBox'>
           <img src={ image } />
           <p>Wev design</p>
           <h3>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. dolor sit amet consectetur adipisicing elit.
           </h3>
           <button className='btnDetails'><FaFolderPlus/> View Details </button>
        </div>
        <div className='detailsBox'>
           <img src={ image } />
           <p>Wev design</p>
           <h3>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. dolor sit amet consectetur adipisicing elit.
           </h3>
           <button className='btnDetails'><FaFolderPlus/> View Details </button>
        </div>
      </section>
    </div>
  )
}

export default RecentWork;

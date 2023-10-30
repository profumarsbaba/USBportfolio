import React from 'react'
import { FaBriefcase, FaDAndD, FaDatabase, FaJava, FaMobile, FaProductHunt, FaRainbow, FaReact, FaResearchgate, FaWhatsapp } from 'react-icons/fa'

const Services = () => {
  return (
    <div className='services'>
        <h1>Services i offer</h1>
        <div className='service'>
            <div className='firseService'>
                 <FaMobile className='icon'/>
                 <h2>Vitual design</h2>
                 <p>
                    <blockquote>
                       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum obcaecati culpa quam voluptas pariatur.
                    </blockquote>
                 </p>
            </div>
            <div className='firseService'>
                 <FaReact className='icon'/>
                 <h2>React project</h2>
                 <p>
                    <blockquote>
                       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum obcaecati culpa quam voluptas pariatur.
                    </blockquote>
                 </p>
            </div>
            <div className='firseService'>
                 <FaJava className='icon'/>
                 <h2>Java project</h2>
                 <p>
                    <blockquote>
                       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum obcaecati culpa quam voluptas pariatur.
                    </blockquote>
                 </p>
            </div>
            
        </div>
    </div>
  )
}

export default Services
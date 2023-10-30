import React from 'react'
import { FaBriefcase, FaCheckDouble, FaFileDownload, FaSmile } from 'react-icons/fa';
import homebg from './homebg.jpeg'
const About =()=> {
  return (
    <div className='about'>
     <div>
        <h1 className='aboutTitile'>About Me</h1>
     </div>
     <main className='mainAboutMe'>
            <aside className='leftAside'>
              <div className='firstItem'>
                 <div className='cale'>
                    <FaBriefcase />
                  </div>
                  <div>
                     <h1>3</h1>
                     <p>Years of exprience</p>
                </div>
              </div>
              <div className='firstItem'>
                 <div className='cale'>
                    <FaCheckDouble />
                  </div>
                  <div>
                     <h1>8+</h1>
                     <p>Projects completed</p>
                </div>
              </div>
              <div className='firstItem'>
                 <div className='cale happy'>
                    <FaSmile />
                  </div>
                  <div id='happy'>
                     <h1>6+</h1>
                     <p>Happy clients</p>
                </div>
              </div>
            </aside>
            <aside className='rightAside'>
                <article>
                    <h1>Frontend web devloper with 3 years of exprience </h1>
                    <p>
                        <blockquote>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum obcaecati culpa quam voluptas pariatur tempore. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum obcaecati culpa quam voluptas pariatur tempore.
                        </blockquote>
                    </p>
                    <a download={ homebg } className='cvbtn'>
                    <FaFileDownload className='dld'/> Download my CV
                    </a>
                </article>
            </aside>
     </main>
    </div>
  )
}

export default About;
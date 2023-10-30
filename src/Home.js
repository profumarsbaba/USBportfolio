import React from 'react'
import myimage from './myImage.png';
import { useTypewriter } from 'react-simple-typewriter';
import { FaEnvelope } from 'react-icons/fa';
import SocialLinks from './Social'


const Home=()=> {
  const [typeEffect] = useTypewriter({
    words: [ 'Umar Sbaba', 'Wev dev', 'React dev'],
    loop:{},
    typeSpeed: 100,
    deleteSpeed: 40,
  })
  return (
    <main className='main'>
        <section className='leftSection'>
             <h3>Welcome!</h3>
            
             <h1>I'm  <br /> {"<"} { typeEffect } {" />"}</h1>
             <p>
                <blockquote> 
                    Lorem ipsum, dolor sit amet 
                    consectetur adipisicing elit. Harum obcaecati
                    culpa quam voluptas pariatur tempore.
                    Lorem ipsum, dolor sit amet 
                    consectetur adipisicing elit. Harum obcaecati
                    culpa quam voluptas pariatur tempore.
                </blockquote>
             </p>

            <a href='mailto:Umarsbaba2002@gmail.com' className='mail'> <FaEnvelope /> Here me!</a>
            
            <SocialLinks />
        </section>
        <section className='rightSection'>
             <img src={myimage} alt="My picture" className='myPicture'/>
        </section>
    </main>
  )
}

export default Home
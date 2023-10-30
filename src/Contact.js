import React from 'react';
import { FaEnvelope, FaPhone, FaLocationArrow } from 'react-icons/fa'


   const Contact = () => {
    return( 
    
    <div className='allforncontainer'>
    <div>
      <h1 style={{textAlign:"center"}}>Contact</h1>
    </div>
    <div className='forncontainer'>
     
      <section className='leftpart'>

        <div className='contact'>
          <FaPhone />
          <p>+234-814595026</p>
        </div>
        <div className='contact'>
        <FaEnvelope />
          <p><a href='mailto:Umarsbaba2002@gmail.com'> Here me!</a></p>
        </div>
        <div className='contact'>
          <FaLocationArrow />
          <p>No 7 naibawa yamma</p>
        </div>
      

      </section>
      <section className='rightpart'>
        <form>
                    <input type="text" name="name" id="name" placeholder="Your Name" />
                    <input type="email" name="email" id="email" placeholder="Your Email" />
                    <textarea name="msg" id="msg" rows="9" placeholder="Your Message"></textarea>
                    <input type="submit" id='formbtn' value="Submit Message" />
        </form>
      </section>
      
  </div>

    </div>
  )
}

export default Contact;

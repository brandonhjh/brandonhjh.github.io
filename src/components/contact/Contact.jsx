import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          {/* EMAIL */}
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>brandonhong.61@gmail.com</h5>
            <a href="mailto:brandonhong61@gmail.com" target="_blank">Send a message</a>
          </article>
          {/* LINKEDIN */}
          <article className="contact__option">
            <BsLinkedin className='contact__option-icon'/>
            <h4>Linkedin</h4>
            <h5>Brandon Hong</h5>
            <a href="https://www.linkedin.com/in/brandon-h-81064a191" target="_blank">Connect with me</a>
          </article>
          {/* GITHUB */}
          <article className="contact__option">
            <FaGithub className='contact__option-icon'/>
            <h4>Github</h4>
            <h5>brandonhjh</h5>
            <a href="https://github.com/brandonhjh" target="_blank">Follow Me</a>
          </article>
        </div>
        {/* END OF CONTACT  */}
        {/* FORM */}
        <form action="">
          <input type="text" name='name' placeholder='Your Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>


    </section>
  )
}

export default Contact
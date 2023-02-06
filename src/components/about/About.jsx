import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {AiOutlineStar} from 'react-icons/ai'
import {FaFlagCheckered} from 'react-icons/fa'
import {FaRobot} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <AiOutlineStar className='about__icon'/>
              <h5>GPA</h5>
              <small>x.xx/4.00</small>
            </article>

            <article className='about__card'>
              <FaFlagCheckered className='about__icon'/>
              <h5>Hackathons</h5>
              <small>4</small>
            </article>

            <article className='about__card'>
              <FaRobot className='about__icon'/>
              <h5>Projects</h5>
              <small>2</small>
            </article>

          </div>

          <p>
            Hello, I am Brandon, a first year Computer Science and Business student at Singapore Management University.
            I am interested in all things tech, and am currently looking to major in AI. When I am not busy coding,
            you can find me watching Netflix, playing volleyball, or learning to ballroom dance!
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
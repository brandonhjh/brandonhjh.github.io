import React from 'react'
import './portfolio.css'
import Volunstar from '../../assets/Volunstar.png'
import SCLbot from '../../assets/SCLbot.jpeg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        <article className='portfolio__item__Volunstar'>
          <h3><a href="">Volunstar</a></h3>
          <h5>Hi-fidelity wireframe of a volunteering app with complete features, done for a school module. A/B Testing done on Maze, prototype built on Figma.</h5>
          <div className="Volunstar__image">
            <img style={{ width: 400, height: 400, objectFit: 'contain'}} src={Volunstar} alt="Volunstar__Image" />
          </div>
          <div className='volunstar__link'>
            <a href="https://www.figma.com/proto/FcR93BxhIG6zUbNvNEcoHm/HI-FI?page-id=1:3&node-id=269:2393&viewport=739,576,0.02&scaling=scale-down&starting-point-node-id=269:2393" target="_blank">Try it</a>
          </div>
        </article>
        
        <article className='portfolio__item__SCLbot'>
          <h3><a href="">Samuel Christopher Luke</a></h3>
          <h5>Telegram bot that makes inspirational quotes and condones swearing in groupchats. Good vibes only. Built on Google Colab.</h5>
          <div className="SCLbot__image">
            <img style={{width:400, height: 400, objectFit: 'contain'}} src={SCLbot} alt="SCLbot__Image" />
          </div>
          <div className="SCLbot__link">
            <a href="https://t.me/for_Eaint_Hmu_Aung_bot" target="_blank">Try it (note: may not be active all the time)</a>
          </div>
        </article>
        
      </div>
    </section>
  )
}

export default Portfolio
import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      {/* left side, languages */}
      <div className="container experience__container">
        <div className="Languages">
          <h3>Languages</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>C</h4>
              {/* <small className='text-light'>Experienced</small> */}
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>Java</h4>
              {/* <small className='text-light'>Experienced</small> */}
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>Python</h4>
              {/* <small className='text-light'>Experienced</small> */}
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>React</h4>
              {/* <small className='text-light'>Experienced</small> */}
            </article>

          </div>
        </div>
        {/* end */}

        {/* right side, tools */}
        <div className="Tools">
        <h3>Tools</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>Microsoft Office</h4>
              {/* <small className='text-light'>Experienced</small> */}
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>Jupyter Notebook</h4>
              {/* <small className='text-light'>Experienced</small> */}
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>Orange</h4>
              {/* <small className='text-light'>Experienced</small> */}
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>Figma</h4>
              {/* <small className='text-light'>Experienced</small> */}
            </article>

          </div>
        </div>
        {/* end */}
      </div>

    </section>
  )
}

export default Experience

import { useEffect, useState } from 'react'
import {
  
  
  faCss3,
  faGitAlt,
  faHtml5,
  faJs,
  
  faMicrosoft,
  
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import CSharp from '../../assets/images/Csharp_Logo.png'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a very ambitious Fullstack Software developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.My favorite technology is .NET (C#).
          </p>
          <p align="LEFT">
            I'm currently persuing a Bachelor degree in Computer Science at Universidad Ort which I really enjoy and I'm really passionate about.
          </p>
          <p>
          I have a strong affinity for challenges and an avid interest in all things related to technology. I thrive on problem-solving and enjoy immersing myself in the world of tech
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              
              <img src={CSharp} />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJs} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faMicrosoft} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About



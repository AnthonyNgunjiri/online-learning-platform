import React from 'react'
import "./home.css"
import degree from "../../assets/degree.jpg"
import { FaGraduationCap } from "react-icons/fa6";
import { FaCertificate } from "react-icons/fa";
import { BsMicrosoftTeams } from "react-icons/bs";
import { SiGreatlearning } from "react-icons/si";
import { SiConcourse } from "react-icons/si";

const Hero = () => {
  return (
    <div className='main-hero'>
      <h2 id='logo'> <FaGraduationCap />
    Elim Tutorial</h2>
<div className="catch">
<p className="catchy">better education for a better,</p><p>world</p>

</div>
     <section className="ban">
     <div className="banner"><p id='icon'><SiConcourse /></p>
     course range</div>
      <div className="banner"><p id="icon"><SiGreatlearning /></p>
      flexible learning</div>
      <div className="banner"><p id="icon"><BsMicrosoftTeams /></p>team of expert</div>
      <div className="banner"><p id="icon"><FaCertificate /></p>
      certification</div>

     </section>
    </div>
  )
}

export default Hero

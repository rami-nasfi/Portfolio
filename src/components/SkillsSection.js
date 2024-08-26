import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

//import Lottie annimation
import Lottie from "lottie-react";
//annimation data
import animationData from "../assets/dev.json";

//icons
import {
  FaAngular,
  FaCss3Alt,
  FaDatabase,
  FaEnvira,
  FaFireFlameCurved,
  FaHtml5,
  FaJava,
  FaJs,
  FaNode,
  FaNpm,
  FaReact,
  FaSass,
} from "react-icons/fa6";

function SkillsSection() {
  const [hasBeenInView, setHasBeenInView] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true, // Ensure the observer only triggers once
  });
  if (inView && !hasBeenInView) {
    setHasBeenInView(true);
  }
  return (
    <section ref={ref} className={`skills d-flex flex-row ${hasBeenInView ? "active" : ""}`} id="skills">
      <div className="image">
        <Lottie animationData={animationData} />
      </div>
      <div className="text">
        <h1 className="section-title">What I do</h1>
        <p>CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK</p>
        <ul className="skills-icons">
          <li href="" className="icons">
            <FaHtml5 />
            <span className="icon-span">html5</span>
          </li>
          <li href="" className="icons">
            <FaCss3Alt />
            <span className="icon-span">css3</span>
          </li>
          <li href="" className="icons">
            <FaSass />
            <span className="icon-span">sass</span>
          </li>
          <li href="" className="icons">
            <FaJs />
            <span className="icon-span">JavaScript</span>
          </li>
          <li href="" className="icons">
            <FaReact />
            <span className="icon-span">Reactjs</span>
          </li>
          <li href="" className="icons">
            <FaAngular />
            <span className="icon-span">Angular</span>
          </li>
          <li href="" className="icons">
            <FaNode />
            <span className="icon-span">Nodejs</span>
          </li>
          <li href="" className="icons">
            <FaNpm />
            <span className="icon-span">npm</span>
          </li>
          <li href="" className="icons">
            <FaJava />
            <span className="icon-span">java</span>
          </li>
          <li href="" className="icons">
            <FaEnvira />
            <span className="icon-span">Spring boot</span>
          </li>
          <li href="" className="icons">
            <FaDatabase />
            <span className="icon-span">sql-database</span>
          </li>
          <li href="" className="icons">
            <FaFireFlameCurved />
            <span className="icon-span">firebase</span>
          </li>
        </ul>
        <div className="skills-details">
          <p>
            <img alt="⚡" draggable="false" src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/26a1.png" />I build impactful,
            user-friendly applications and am always eager to tackle new challenges and learn.
          </p>
          <p>
            <img alt="⚡" draggable="false" src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/26a1.png" />
            Experienced in SQL and NoSQL database. I deliver high-quality solutions tailored to user and business needs. Let’s create something great
            together!
          </p>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;

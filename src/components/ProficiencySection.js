import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

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

function ProficiencySection() {
  const [hasBeenInView, setHasBeenInView] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true, // Ensure the observer only triggers once
  });
  if (inView && !hasBeenInView) {
    setHasBeenInView(true);
  }
  return (
    <section ref={ref} className={`proficiency d-flex flex-row ${hasBeenInView ? "active" : ""}`}>
      <div className="text">
        <h1 className="section-title">Proficiency</h1>

        <div className="proficiency-details">
          <h3>Frontend/Design</h3>
          <div className="meter">
            <span style={{ width: "75%" }}></span>
          </div>
        </div>
        <div className="proficiency-details">
          <h3>Backend</h3>
          <div className="meter">
            <span style={{ width: "90%" }}></span>
          </div>
        </div>
        <div className="proficiency-details">
          <h3>Programming</h3>
          <div className="meter">
            <span style={{ width: "90%" }}></span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProficiencySection;

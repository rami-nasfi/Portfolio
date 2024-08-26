import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { FaFolderTree } from "react-icons/fa6";

function EducationSection() {
  const username = "rami-nasfi"; // Replace with the desired GitHub username
  const token = "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"; // Replace with your personal access token, or leave it empty
  const [hasBeenInView, setHasBeenInView] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true, // Ensure the observer only triggers once
  });
  if (inView && !hasBeenInView) {
    setHasBeenInView(true);
  }
  return (
    <section ref={ref} className={`education d-flex flex-row ${hasBeenInView ? "active" : ""}`}>
      <div className="text">
        <h1 className="section-title">Education</h1>
        <div className="education-item">
          <div>
            <div>
              <img src="https://www.ecoles.com.tn/sites/default/files/styles/large/public/universite/logo/logo_essat_gabes.jpg" alt="" />
            </div>
            <div>
              <h4 className="speciality">First-Year Common Core in Computer Engineering</h4>
              <h5 className="university">Higher School of Applied Sciences and Private Technology of Gabes</h5>
              <h5 className="period">September 2016 - juin 2017</h5>
            </div>
          </div>
        </div>
        <div className="education-item">
          <div>
            <div>
              <img src="https://isggb.rnu.tn/files/Partenaire/isg.png" alt="" />
            </div>
            <div>
              <h4 className="speciality">Bachelor's Degree in Applied Computer Science for Management</h4>
              <h5 className="university">Higher Institute of Management of Gabes</h5>
              <h5 className="period">September 2010 - juin 2015</h5>
            </div>
          </div>
        </div>
        <div className="education-item">
          <div>
            <div>
              <img src="https://www.ecoles.com.tn/sites/default/files/ecole-secondaire/logo/logo_%20abou_elkassem_echebbi.jpg" alt="" />
            </div>
            <div>
              <h4 className="speciality">High School Diploma, Technical Sciences Section, Main Session</h4>
              <h5 className="university">Chebbi Secondary School</h5>
              <h5 className="period">September 2006 - juin 2010</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EducationSection;

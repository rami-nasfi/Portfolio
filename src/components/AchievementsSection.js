import React from "react";
import { useInView } from "react-intersection-observer";

//icons
import { FaFacebookF, FaGithub, FaInstagram } from "react-icons/fa6";

function AchievementsSection() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  return (
    <section ref={ref} className={`achievements d-flex flex-row ${inView ? "active" : ""}`} id="achievements">
      <div className="text">
        <h1 className="section-title">Achievements And Certifications 🏆</h1>
        <div className="achievements-items">
          <div className="achievements-item">
            <img src="https://socialhackersacademy.org/wp-content/uploads/2022/02/SHA_Logo_main-980x600.png" alt="" />
            <div>
              <h4>Social Hackers Academy</h4>
              <p>Full Stack Web Developer Training</p>
              <div>
                <a
                  className="btn btn-primary me-2 ms-0"
                  role="button"
                  href="https://socialhackersacademy.org/certifies/?graduate=mohamed-rami-nasfi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Certification
                </a>
                <a
                  className="btn btn-primary me-2 ms-0"
                  role="button"
                  href="https://shoploper.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Final project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AchievementsSection;

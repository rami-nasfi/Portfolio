import React from "react";
import { useInView } from "react-intersection-observer";

//icons
import { FaFacebookF, FaGithub, FaInstagram } from "react-icons/fa6";

function ExperiencesSection() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  return (
    <section ref={ref} className={`experiences d-flex flex-row ${inView ? "active" : ""}`} id="experiences">
      <div className="text">
        <h1 className="section-title">Work experiences</h1>
        <div className="experiences-items">
          <div className="experiences-item">
            <img src="https://pbs.twimg.com/profile_images/1204480024411328512/2KNZXkur_400x400.jpg" alt="" />
            <div>
              <h4>MaxBounty</h4>
              <p>Affiliate Marketing</p>
            </div>
          </div>
          <div className="experiences-item">
            <img
              src="https://media.licdn.com/dms/image/v2/C4D0BAQEeaET6Ph2heQ/company-logo_200_200/company-logo_200_200/0/1668201942683?e=1732752000&v=beta&t=Y4787GIE6EgoMJx0KFGSJzRme0_27JS1vTn2_FEU9Sg"
              alt=""
            />
            <div>
              <h4>Horizon Academy</h4>
              <p>Java and android Trainer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperiencesSection;

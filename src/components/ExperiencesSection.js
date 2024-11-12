import React from "react";
import { useInView } from "react-intersection-observer";


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
            <img src="https://hiveage.com/wp-content/uploads/2015/06/balancing-freelancing-and-job.jpg" alt="" />
            <div>
              <h4>Mohamed Rami Nasfi</h4>
              <p>Freelance Developer</p>
            </div>
          </div>
          <div className="experiences-item">
            <img src="https://pbs.twimg.com/profile_images/1204480024411328512/2KNZXkur_400x400.jpg" alt="" />
            <div>
              <h4>MaxBounty</h4>
              <p>Affiliate Marketing</p>
            </div>
          </div>
          <div className="experiences-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbIIk-lToXfrj2DruNyBNYzpgXD4wI2XnEJQ&s" alt="" />
            <div>
              <h4>Rosace</h4>
              <p>Store Manager – Clothing Retail</p>
            </div>
          </div>
          <div className="experiences-item">
            <img src="https://zenprospect-production.s3.amazonaws.com/uploads/pictures/65d85c8e86935900019c989e/picture" alt="" />
            <div>
              <h4>ZEN</h4>
              <p>Store Assistant Manager – Clothing Retail</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperiencesSection;

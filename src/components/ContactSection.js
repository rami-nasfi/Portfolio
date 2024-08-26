import React, { useState } from "react";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { useInView } from "react-intersection-observer";

function ContactSection() {
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
    <section ref={ref} className={`contact ${hasBeenInView ? "active" : ""}`} id="contact">
      <h1 className="section-title ">Reach Out to me!</h1>
      <div className="d-flex flex-xl-row-reverse flex-column">
        <div className="image justify-content-xl-end justify-content-center mb-5 mb-xl-0">
          <img src="https://avatars.githubusercontent.com/u/115596797" alt="" />
        </div>
        <div className="text justify-content-start">
          <p>DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.</p>
          <div className="occupation">Full Stack Web Developer</div>
          <div className="location">
            <svg viewBox="-0.5 -2 20 19" version="1.1" width="22" height="16" aria-hidden="true" stroke="currentColor">
              <path
                fill-rule="evenodd"
                d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"
              ></path>
            </svg>
            Ariana , Tunisia
          </div>
          <div>
            <a href="https://github.com/rami-nasfi/" className="icons github" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/mohamed-rami-nasfi/" className="icons linkedin" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://www.facebook.com/rami.nasfi" className="icons facebook" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;

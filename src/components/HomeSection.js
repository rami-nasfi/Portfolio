import React from "react";

//icons
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa6";

//import Lottie annimation
import Lottie from "lottie-react";
//annimation data
import animationData from "../assets/hello.json";

function HomeSection() {
  return (
    <section className="greeting d-flex flex-row" id="home">
      <div className="text">
        <h1 className="hi">
          Hi all, I'm Rami{" "}
          <span class="wave-emoji">
            <img
              alt="👋"
              draggable="false"
              src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f44b.png"
              style={{ height: "1em", width: "1em", margin: "0px 0.05em 0px 0.1em", verticalAlign: "-0.1em" }}
            />
          </span>
        </h1>
        <p>
          A passionate Full Stack Developer 🚀 with experience in JavaScript, React.js, Node.js, and other frameworks. Self-studied in Java, Spring
          Boot, Angular, and with a solid foundation in C++ basics. Always eager to learn and build efficient, scalable, and high-quality
          applications.
        </p>
        <div>
          <a href="https://github.com/rami-nasfi/" className="icons github">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/mohamed-rami-nasfi/" className="icons linkedin">
            <FaLinkedin />
          </a>
          <a href="https://www.facebook.com/rami.nasfi" className="icons facebook">
            <FaFacebookF />
          </a>
        </div>

        <div>
          <a className="btn btn-primary me-2 ms-0" role="button" href="#contact">
            Contact me
          </a>
          <a className="btn btn-primary" role="button" download="Resume Mohamed Rami Nasfi.pdf" href="./CV ENG Mohamed Rami Nasfi.pdf">
            Download resume
          </a>
        </div>
      </div>
      <div className="image">
        <Lottie animationData={animationData} />
      </div>
    </section>
  );
}

export default HomeSection;

import React from "react";

//icons
import { FaFacebookF, FaGithub, FaInstagram } from "react-icons/fa6";

function HomeSection() {
  return (
    <div>
      <div>
        <div className="greeting d-flex flex-row">
          <div className="greeting-text">
            <h1>Hi all, I'm Rami</h1>
            <p>
              A passionate Full Stack Software Developer 🚀 having an experience of building Web with JavaScript / Reactjs / Nodejs and some other
              cool libraries and frameworks.
            </p>
            <div>
              <a href="" className="icons github">
                <FaGithub />
              </a>
              <a href="" className="icons instagram">
                <FaInstagram />
              </a>
              <a href="" className="icons facebook">
                <FaFacebookF />
              </a>
            </div>

            <input className="btn btn-primary me-2" type="button" value="Contact me" />
            <button className="btn btn-primary">Download resume</button>
          </div>
          <div className="greeting-image">
            <img src="https://cdn.dribbble.com/users/68398/screenshots/5699907/2.gif" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSection;

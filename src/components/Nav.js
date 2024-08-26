import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";

function Nav() {
  // State to manage the active section
  const [activeSection, setActiveSection] = useState("home");

  // Function to handle setting the active section
  const handleSetActive = (section) => {
    setActiveSection(section);
  };

  return (
    <nav class="header navbar navbar-expand-xl bg-white fixed-top">
      <div class="container-fluid">
        <ul className=" d-flex flex-row justify-content-start align-items-center  list-unstyled m-0 ">
          <li className="m-2 mt-3 p-2 logo">
            <span> &lt; </span>
            <a href="#home" className=" text-decoration-none logo-name">
              Rami Nasfi
            </a>
            <span> /&gt; </span>
          </li>
        </ul>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end " tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div class="offcanvas-header">
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body d-d-xl-flex justify-content-xl-end ">
            <ul
              className="menu d-flex flex-column align-items-center gap-1 list-unstyled m-0 desktop-menu flex-xl-row "
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              <li
                className={`m-2 p-2 ${activeSection === "skills" ? "active" : ""}`}
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                onClick={() => handleSetActive("skills")}
              >
                <a href="#skills" className="text-decoration-none">
                  Skills
                </a>
              </li>
              <li
                className={`m-2 p-2 ${activeSection === "experiences" ? "active" : ""}`}
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                onClick={() => handleSetActive("experiences")}
              >
                <a href="#experiences" className="text-decoration-none">
                  Work Experiences
                </a>
              </li>
              <li
                className={`m-2 p-2 ${activeSection === "achievements" ? "active" : ""}`}
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                onClick={() => handleSetActive("achievements")}
              >
                <a href="#achievements" className="text-decoration-none">
                  Achievements
                </a>
              </li>
              <li
                className={`m-2 p-2 ${activeSection === "openSource" ? "active" : ""}`}
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                onClick={() => handleSetActive("openSource")}
              >
                <a href="#openSource" className="text-decoration-none">
                  Open Source
                </a>
              </li>

              <li
                className={`m-2 p-2 ${activeSection === "contact" ? "active" : ""}`}
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                onClick={() => handleSetActive("contact")}
              >
                <a href="#contact" className="text-decoration-none">
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

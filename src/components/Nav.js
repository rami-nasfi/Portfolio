import React from "react";

function Nav() {
  return (
    <div className="header d-flex flex-row justify-content-between">
      <ul className=" d-flex flex-row justify-content-start align-items-center  list-unstyled m-0">
        <li className="m-2 mt-3 p-2 logo">
          <span> &lt; </span>
          <a href="" className=" text-decoration-none logo-name">
            Rami Nasfi
          </a>
          <span> /&gt; </span>
        </li>
      </ul>
      <ul className="menu d-flex flex-row align-items-center gap-1 list-unstyled m-0">
        <li className="m-2 p-2 active">
          <a href="" className="text-decoration-none">
            Skills
          </a>
        </li>
        <li className="m-2 p-2">
          <a href="" className="text-decoration-none">
            Achievements
          </a>
        </li>
        <li className="m-2 p-2">
          <a href="" className="text-decoration-none">
            Work Experiences
          </a>
        </li>
        <li className="m-2 p-2">
          <a href="" className="text-decoration-none">
            Contact Me
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;

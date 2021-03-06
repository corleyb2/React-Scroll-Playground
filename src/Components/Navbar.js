import React, { useEffect, useState } from "react";
import logo from "../logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";

function Navbar() {
  //flipped in handleScroll
  const [viewLocation, setViewLocation] = useState({
    head: true,
    foot: false,
  });


  console.log("view", viewLocation);

  useEffect(() => {
  //calls react-scroll fns. and sets local state variables.
  //having trouble with props of scroll fns. - esp timing.
    const handleScroll = async () => {
      if (viewLocation.head) {
        await scroll.scrollToBottom();
        setViewLocation({ head: false, foot: true });
      } else if (viewLocation.foot) {
        await scroll.scrollToTop();
        setViewLocation({ head: true, foot: false });
      }
    };
    setTimeout(() => handleScroll(), 4000);
  }, [viewLocation]);

  return (
    <nav className="nav" id="navbar">
      <div className="nav-content">
        <img src={logo} className="nav-logo" alt="Logo" />
        <ul className="nav-items">
          <li className="nav-item">
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="section1"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Section 1
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="section2"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Section 2
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="section3"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Section 3
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="section4"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Section 4
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="section5"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Section 5
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

import React, { useState } from "react";
import * as BiIcons from "react-icons/bi";
import * as GiIcons from "react-icons/gi";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function HeroNavbar() {
  const [scrollPos, setScrollPos] = useState(0);

  const HandleScroll = () => {
    const pos = window.pageYOffset;
    setScrollPos(pos);
  };

  window.addEventListener("scroll", HandleScroll);

  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      <Navbar
        className={scrollPos >= 80 ? "header fixed" : "header"}
        collapseOnSelect
        expand="lg"
        variant="dark"
      >
        <div className="nav-container">
          <Link
            onClick={scrollTop}
            className="navbar-brand"
            to={{ pathname: "/", hash: "" }}
          >
            <h2>
              CHEF P
              <GiIcons.GiKnifeFork style={{ transform: "translateY(0px)" }} />
              LACE
            </h2>
          </Link>

          <Navbar className="justify-content-end">
            <Nav>
              <Link onClick={scrollTop} className="nav-link links" to="/">
                <BiIcons.BiHomeSmile
                  size="1.4rem"
                  style={{ transform: "translateY(-3px)" }}
                />
                <span className="links-tag">Home</span>
              </Link>
              <Link className="nav-link links" to="/searched/chicken">
                <BiIcons.BiSearch size="1.4rem" />
                <span className="links-tag">Search</span>
              </Link>
              <Link className="add-on" to="/">
                <span className="links-tag">Support Us</span>
              </Link>
            </Nav>
          </Navbar>
        </div>
      </Navbar>
    </>
  );
}

export default HeroNavbar;

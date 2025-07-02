import { Container, Nav } from "react-bootstrap";
import { GiKnifeFork } from "react-icons/gi";
import { Link } from "react-router-dom";

import {
  BsArrow90DegUp,
  BsWhatsapp,
  BsLinkedin,
  BsEnvelope,
  BsFileEarmarkText,
  BsGlobe2,
} from "react-icons/bs";

import {
  FooterContainer,
  FooterFlex,
  FooterShare,
  GoTop,
} from "../../Styles/FooterStyle";

const ScrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};

function Footer() {
  return (
    <FooterContainer>
      <Container>
        <GoTop onClick={ScrollToTop}>
          <BsArrow90DegUp />
        </GoTop>
        <FooterFlex>
          <div>
            <FooterShare>
              {/* Portfolio */}
              <a
                href="https://matthew-vincent.netlify.app"
                target="_blank"
                rel="noreferrer"
                title="Portfolio"
              >
                <BsGlobe2 size="1.4rem" />
              </a>

              {/* Resume */}
              <a
                href="/Matthew_Vincent_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                title="Resume"
              >
                <BsFileEarmarkText size="1.4rem" />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/2349030710941?text=Hi%20Matthew%2C%20I%20saw%20your%20portfolio%20and%20I’m%20interested%20in%20working%20with%20you!"
                target="_blank"
                rel="noreferrer"
              >
                <BsWhatsapp size="1.4rem" />
              </a>


              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/matthew-vincent-frontend-developer"
                target="_blank"
                rel="noreferrer"
                title="LinkedIn"
              >
                <BsLinkedin size="1.4rem" />
              </a>

              {/* Email */}
              <a
                href="mailto:matthewonuoha41@gmail.com"
                target="_blank"
                rel="noreferrer"
                title="Email"
              >
                <BsEnvelope size="1.4rem" />
              </a>
            </FooterShare>

            <Nav className="me-2">
              <Link to="/category">All Categories</Link>
              <Link to="/">About Us</Link>
              <Link to="/blog">Blog</Link>
            </Nav>
          </div>

          <div>
            <Link to="/">
              <h1>
                CHEF P
                <GiKnifeFork style={{ transform: "translateY(2.5px)" }} />
                LACE
              </h1>
            </Link>
            <div className="copyright">
              &copy; {new Date().getFullYear()} CHEF PALACE <br />
              All rights reserved.
            </div>
          </div>
        </FooterFlex>
      </Container>
    </FooterContainer>
  );
}

export default Footer;

import { Container, Nav } from "react-bootstrap";
import * as BsIcons from "react-icons/bs";
import * as GiIcons from "react-icons/gi";
import { Link } from "react-router-dom";
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
          <BsIcons.BsArrow90DegUp />
        </GoTop>
        <FooterFlex>
          <div>
            <FooterShare>
              <a
                href="https://www.instagram.com/the_dev.io/"
                target="_blank"
                rel="noreferrer"
              >
                <BsIcons.BsInstagram size="1.4rem" />
              </a>
              <a href="paol">
                <BsIcons.BsFacebook size="1.4rem" />
              </a>
              <a
                href="https://wa.me/2349065766363?text=I%20want%20inquire%20your%20web%20developing%20services"
                target="_blank"
                rel="noreferrer"
              >
                <BsIcons.BsWhatsapp size="1.4rem" />
              </a>
              <a
                href="https://www.linkedin.com/in/ajayi-michael-692bb6203/"
                target="_blank"
                rel="noreferrer"
              >
                <BsIcons.BsLinkedin size="1.4rem" />
              </a>
              <a
                href="https://twitter.com/Michaelajayi150"
                target="_blank"
                rel="noreferrer"
              >
                <BsIcons.BsTwitter size="1.4rem" />
              </a>
            </FooterShare>
            <Nav className="me-2">
              <Link to={{ pathname: "/category" }}>All Categories</Link>
              <Link to={{ pathname: "/" }}>About Us</Link>
              <Link to={{ pathname: "/blog" }}>Blog</Link>
            </Nav>
          </div>

          <div>
            <Link to="/">
              <h1>
                {/* <SiIcons.SiChef size="3rem" /> */}
                CHEF P
                <GiIcons.GiKnifeFork
                  style={{ transform: "translateY(2.5px)" }}
                />
                LACE
              </h1>
            </Link>
            <div className="copyright">
              &copy; 2022 CHEF PALACE <br />
              All rights reserved.
            </div>
          </div>
        </FooterFlex>
      </Container>
    </FooterContainer>
  );
}

export default Footer;

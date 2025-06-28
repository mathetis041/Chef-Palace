// import { useEffect, useRef, useState } from "react";
import HeroNavbar from "./Navbar";
import Search from "./Search";
import {
  HeroImage,
  HeroSection,
  HeroSlide,
  HeroSlider,
  HeroWrapper,
  NextArrow,
  PrevArrow,
  RecentSearch,
  SliderButtons,
} from "../../Styles/HeroStyle";
import { SplideTrack } from "@splidejs/react-splide";
import Bg from "../../asset/Home.jpg";
import Bg2 from "../../asset/Home-2.jpg";
import Bg3 from "../../asset/Home-3.jpg";
import Bg4 from "../../asset/Home-4.jpg";
import Bg5 from "../../asset/Home-5.jpg";
import { Link } from "react-router-dom";

function Hero() {
  const background = [
    { image: Bg, label: "Home Page" },
    { image: Bg2, label: "Home Page 2" },
    { image: Bg3, label: "Home Page 3" },
    { image: Bg4, label: "Home page 4" },
    { image: Bg5, label: "Home Page 5" },
  ];

  return (
    <HeroSection>
      <HeroNavbar />
      <HeroWrapper>
        <Search classType="hero-search" />
        <RecentSearch>
          <Link to="/searched/Chicken%20Fries">Chicken Fries</Link>
          <Link to="/searched/Summer%20Vegetables">Summer Vegetables</Link>
          <Link to="/searched/Steamed%20Pork">Steamed Pork</Link>
          <Link to="/searched/Rice">Rice</Link>
        </RecentSearch>

        <HeroSlide
          options={{
            type: "loop",
            perPage: 1,
            autoplay: true,
            pagination: false,
            drag: false,
          }}
          hasTrack={false}
        >
          <SplideTrack>
            {background.map((slide, index) => {
              return (
                <HeroSlider key={index}>
                  <HeroImage src={slide.image} alt={slide.label} />
                </HeroSlider>
              );
            })}
          </SplideTrack>
          <SliderButtons className="splide__arrows">
            <PrevArrow className="splide__arrow splide__arrow--prev" />
            <NextArrow className="splide__arrow splide__arrow--next" />
          </SliderButtons>
        </HeroSlide>
      </HeroWrapper>
    </HeroSection>
  );
}

export default Hero;

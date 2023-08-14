import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";


export default function Header({ navigate, preserveImage, setPreserveImage, changeImage }) {

  const backHome = () => {
    navigate("/");
  };

  // NECESSARY TO CHANGE THE "VIEW-POSTER" BUTTON TO "CHANGE-POSTER" WHEN ON POSTER PAGE
  const currentScreen = useLocation().pathname;

  // FUNCTION TO STOP POSTER FROM AUTO-CHANGING WHEN GOING TO POSTER PAGE
  const saveImage = () => {
    setPreserveImage(true);
  };

  // CHANGE POSTER FUNCTION
  const resetImage = () => {
    setPreserveImage(false);
    changeImage();
  };

  // **SHIFTING HEADER USESTATES AND FUNCTIONS
  const [scrollPosition, setScrollPosition] = useState({
    y: 0,
  });
  const [prevScrollPosition, setPreviousScrollPositiion] = useState({
    y: 0,
  })
  const handleScrollPositionChange = (e) => {
    setPreviousScrollPositiion({
      y: scrollPosition.y
      },);
    setScrollPosition({
      y: window.scrollY
    },);
  };
  window.addEventListener("scroll", handleScrollPositionChange);
  let headerPos =  scrollPosition.y>0 && scrollPosition.y>prevScrollPosition.y ?"hide": "show";

  return (
    <header
            className="nav-header"
            style={
              headerPos === "hide" ?
                {
                  position: "sticky",
                  top: "-100px",
                  animationName: "raise-nav"
                }
              :
              {
                position: "sticky",
                top: "0",
                animationName: "drop-nav"
              }
            }
    >
      <nav>
        <div className="banner" onClick={backHome}>
          <img className="logo" src={logo} alt="target" />
          <p className="banner-title">Anime Hunter</p>
        </div>
        <div className="nav-items">
          <Link aria-label="On Click" to="/guild" className="button">About</Link>
          <Link aria-label="On Click" to="/bounty" className="button">Bounty Board</Link>
          <Link aria-label="On Click" to="/bingo-book" className="button">Bingo Book</Link>
          {
            currentScreen !== "/art" ?
            <Link aria-label="On Click" onClick={saveImage} to="/art" className="button">View Poster</Link> :
            <Link aria-label="On Click" onClick={resetImage} to="/art" className="button">Change Poster</Link>
          }
        </div>
      </nav>
    </header>
  );
};
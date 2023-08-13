import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

// ******************** TRYING A MOVING HEADER
// const ScrollPosition = ({ render }) => {
//   const [scrollPosition, setScrollPosition] = useState({
//     y: 0,
//   });
//   const [prevScrollPosition, setPreviousScrollPositiion] = useState({
//     y: 0,
//   })

//   useEffect(() => {
//     const handleScrollPositionChange = (e) => {
//       setPreviousScrollPositiion({
//         y: scrollPosition.y
//         },);
//       setScrollPosition({
//         y: window.scrollY
//       },);
//     };

//     window.addEventListener("scroll", handleScrollPositionChange);

//     return () => {
//       window.removeEventListener("scroll", handleScrollPositionChange);
//     };
//   }, [[window.scrollY]]);

//   let headerPos;
//   scrollPosition.y>0?scrollPosition.y>prevScrollPosition.y? headerPos= "-200px": headerPos="0":headerPos="0";

//   return "translateY("+headerPos+")"
// };
// ******************** TRYING A MOVING HEADER

export default function Header({ navigate, preserveImage, setPreserveImage, changeImage }) {

  const backHome = () => {
    navigate("/");
  };

  const saveImage = () => {
    setPreserveImage(true)
  };
  const resetImage = () => {
    setPreserveImage(false);
    changeImage();
  };

  const currentScreen = useLocation().pathname;
  // console.log("HEADER.JSX'S CURRENTSCREEN.PATH VALUE: ", currentScreen);

  // console.log("HEADER.JS' SCROLLPOSITION VALUE: ", ScrollPosition);

  return (
    <header
            className="nav-header"
            // style={{
            //   // position: "fixed",
            //   // top: "0",
            //   // left: "0",
            //   // right: "0",
            //   // translateY: "0",
            //   // transform: `translateY(${ScrollPosition})`,
            //   // transform: {ScrollPosition},
            //   // transitionProperty: "transform",
            //   // transitionDuration: "0.3s",
            //   // transitionTimingFunction: "ease-in-out"
            // }}
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
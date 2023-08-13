import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";


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

  return (
    <header>
      <nav>
        <div className="banner" onClick={backHome}>
          <img className="logo" src={logo} alt="target" />
          <p className="banner-title">Anime Hunter</p>
        </div>
        <div className="nav-items">
          <Link aria-label="On Click" to="/guild" className="button">About</Link>
          <Link aria-label="On Click" to="/bounty" className="button">Beginner's Bounty</Link>
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
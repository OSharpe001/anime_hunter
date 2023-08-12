import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";


export default function Header({ navigate, preserveImage, setPreserveImage }) {

  const backHome = () => {
    navigate("/");
  };

  const saveImage = () => {
    setPreserveImage(true)
  };

  return (
    <header>
      <nav>
        <div className="banner" onClick={backHome}>
          <img className="logo" src={logo} alt="target" />
          <p className="banner-title">Anime Hunter</p>
        </div>
        <div className="nav-items">
          <Link aria-label="On Click" to="/guild" className="nav-item button">About</Link>
          <Link aria-label="On Click" to="/bounty" className="nav-item button">Beginner's Bounty</Link>
          <Link aria-label="On Click" to="/bingo-book" className="nav-item button">Bingo Book</Link>
          <Link aria-label="On Click" onClick={saveImage} to="/art" className="nav-item button">Check Poster</Link>
        </div>
      </nav>
    </header>
  );
};
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

export default function Header({ navigate }) {

  const backHome = () => {
    navigate("/");
  };

  return (
    <header>
      <nav>
        <div className="banner" onClick={backHome}>
          <img className="logo" src={logo} alt="target" />
          <h1 className="banner-title">Anime Hunter</h1>
        </div>
        <div>
        <Link aria-label="On Click" to="/guild" className="nav-item button">About</Link>
        <Link aria-label="On Click" to="/bounty" className="nav-item button">Beginner's Bounty</Link>
        </div>
      </nav>
    </header>
  );
};
import logo from "../images/logo.png";

export default function Header() {
  return (
    <header>
      <div className="banner">
        <img className="logo" src={logo} alt="target" />
        <h1 className="banner-title">Anime Hunter</h1>
      </div>
      <div>RESERVED FOR NAV ITEMS (IF NECESSARY)</div>
    </header>
  );
};
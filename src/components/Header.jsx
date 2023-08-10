import logo from "../assets/images/logo.png";


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
        <div>RESERVED FOR NAV ITEMS (IF NECESSARY)</div>
      </nav>
    </header>
  );
};
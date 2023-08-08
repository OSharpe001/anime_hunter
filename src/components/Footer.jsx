import { Link } from "react-router-dom";

export default function Footer() {

  return (
    <footer>
      <p>Sharp Media©    2023</p>
      <nav>
        <Link className="nav-item button" aria-label="On Click" to="https://osharpesportfolio.vercel.app" >O. Sharpe's Portfolio</Link>
      </nav>
    </footer>
  );
};
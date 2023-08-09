import { useNavigate } from "react-router-dom";

export default function HomePage() {

  const navigate = useNavigate();

  const getStarted = () => {
    navigate("/hunt");
  };

  return (
    <section className="home-page">
        <h1>HomePage</h1>
        <button onClick={getStarted}>Begin The Hunt</button>
    </section>
  );
};
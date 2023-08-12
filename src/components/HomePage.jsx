import Footer from "./Footer";


export default function HomePage({ navigate }) {

  const getStarted = () => {
    navigate("/hunt");
  };

  return (
    <>
      <section className="home-page">
        <button onClick={getStarted}>Begin The Hunt</button>
      </section>
      <Footer />
    </>
  );
};
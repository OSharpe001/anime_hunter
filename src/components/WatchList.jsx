import Footer from "./Footer";
import close from "../assets/images/close.png";

export default function WatchList({ viewWatchList, toggleWatchListItem, eraseWatchListItem }) {

  const watchList = viewWatchList();

  return (
    <>
      <section className="watch-list">
          <h1>BingoBook</h1>
          <div className="bingo-book">
            {watchList.map(title =>
              <div key={title.name}className="bingo-book-entry">
                <p  onClick={() => toggleWatchListItem(title.name)} className={title.active ? "" : "crossed"}>{title.name}</p>
                <button className="eraser-button" onClick={() => eraseWatchListItem(title.name)}>
                  <img className="eraser-x" src={close} alt="an x" />
                </button>
              </div>
              )}
          </div>
      </section>
      <Footer />
    </>
  );
};
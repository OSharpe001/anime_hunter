import Footer from "./Footer";
import close from "../assets/images/close.png";
import { useEffect, useState } from "react";


export default function WatchList({ viewWatchList, toggleWatchListItem, eraseWatchListItem }) {

  const watchList = viewWatchList();

  const [scratchTitle, setScratchTitle] = useState("");
  const [eraseTitle, setEraseTitle] = useState("");

  useEffect(() => {
    if (scratchTitle) {
      toggleWatchListItem(scratchTitle);
      setScratchTitle("");
    };

    if (eraseTitle) {
      eraseWatchListItem(eraseTitle);
      setEraseTitle("");
    };
  }, [scratchTitle, eraseTitle]);

  return (
    <>
      <section className="watch-list">
          <h1>BingoBook</h1>
          <div className="bingo-book">
            {watchList.map(title =>
              <div key={title.name}className="bingo-book-entry">
                <p  onClick={() => setScratchTitle(title.name)} className={title.active ? "" : "crossed"}>{title.name}</p>
                <button className="eraser-button" onClick={() => setEraseTitle(title.name)}>
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
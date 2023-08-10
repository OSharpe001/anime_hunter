// import React from 'react'

export default function About({ navigate }) {

    const goHome = () => {
        navigate("/");
    };

    return (
        <section className="about">
            <h2>Join the Guild</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore maiores quo laudantium itaque explicabo similique officiis
                nobis aperiam libero modi dicta non laboriosam voluptates maxime nisi,
                voluptatem soluta aspernatur! Dolorum!
            </p>

            <button className="button" onClick={goHome}>Back to Main</button>
        </section>
    );
};
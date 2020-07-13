import React, { useState, useEffect } from 'react';
import './slider.scss';

/**
 * @type {React.Component}
 *
 * @description Create a Slider/Carousel using modern react. It's up to you to add styles.
 * Sass is available, but feel free to use any styling solution you. CSS-in-JS, CSS, etc.
 * This component needs to be reusable and customizable. Multiple instances of this component
 * should be able to exist in the same view.
 *
 * The Slider should:
 * a. Allow for variable slide intervals, but default to 4 seconds
 * b. Should pause when a user is interacting with the component
 * c. The Slider should be able to take different types of slides. For example,
 * it could be a single image or a set of tiles. Reference Beatport.com for an example
 */
export const Slider = ({ images, interval }) => {

    // Defaut interval
    if (!interval) { interval = 4; }

    // State variables
    const [pause, setPause] = useState(false);
    const [active, setActive] = useState({
        idx: 0,
    });

    // Set current image
    function setImg (idx) {
        setActive({
            idx
        });
    }

    // Get next image
    function nextImg () {
        const { idx } = active;
        setActive({
            idx: (idx === images.length - 1 ? 0 : idx + 1)
        });
    }

    // Get previous image
    function prevImg () {
        const { idx } = active;
        setActive({
            idx: (idx === 0 ? images.length - 1 : idx - 1)
        });
    }

    // Image rotation effect
    useEffect(() => {
        let timeout = null;
        if (!pause) {
            timeout = setInterval(() => {
                nextImg();
            }, 1000 * interval);
        }
        return function cleanup () {
            clearInterval(timeout);
        };
    });

    // Protection against no images provided
    if (!images) {
        return (
            <div className="slider">
                <h1>No images provided to carousel</h1>
            </div>
        );
    }

    return (
        <div className="slider">
            <img
                src={images[active.idx].url}
                alt={images[active.idx].alt}
                onMouseEnter={() => setPause(!pause)}
                onMouseLeave={() => setPause(!pause)}
                style={{ width: '100vw' }}
            />

            <div className="arrows">
                <button className="right" onClick={nextImg}>&#8250;</button>
                <button className="left" onClick={prevImg}>&#8249;</button>
            </div>
            <ul className="selector">
                {
                    images.map((img, idx) =>
                        <li key={idx}>
                            <button
                                className={idx === active.idx ? 'btnSelect active' : 'btnSelect'}
                                onClick={() => setImg(idx)}
                            />
                        </li>
                    )
                }
            </ul>
        </div>
    );
};

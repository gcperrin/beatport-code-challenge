import React from 'react';
import ReactDOM from 'react-dom';
import { Slider } from './Slider';

const imgUrl = 'https://via.placeholder.com/1600x500';

// Simple image factory for testing
function imgFactory (cnt) {
    const images = [];
    for (let i = 0; i < cnt; i++) {
        images[i] = { url: imgUrl, alt: `img_${i}` };
    }
    return images;
}

const sliderImages = imgFactory(3);

ReactDOM.render(
    <div>
        <Slider images={sliderImages} />
    </div>,
    document.getElementById('root'));

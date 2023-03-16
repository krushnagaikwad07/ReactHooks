import React from 'react'
import './Imagechange.css'
import { useState } from 'react'

export default function Imagechange() {
    const [imageUrl, setImageUrl] = useState(0);

    const images = [
        'https://wallpapersafari.com/w/MNq2I1.jpg',
        'https://mcdn.wallpapersafari.com/medium/88/84/0AXpn2.jpg',
        'https://mcdn.wallpapersafari.com/medium/71/37/zUVwNc.jpg',
        'https://mcdn.wallpapersafari.com/medium/17/69/DV8FAH.png',
        'https://mcdn.wallpapersafari.com/medium/39/77/M2m1hX.jpg',
        'https://mcdn.wallpapersafari.com/medium/30/31/6bj1rz.jpg',
        'https://wallpaperset.com/w/full/7/5/c/469531.jpg',
        'https://c4.wallpaperflare.com/wallpaper/435/850/519/harry-potter-harry-potter-characters-poster-wallpaper-preview.jpg',
        'https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/12/Harry-Potter-Characters-Ranked-by-Intelligence.jpg'
    ];
    function toggleChange() {
        setImageUrl((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className='outer-box'>
            <div className="main-box">
                <div className="image-part">
                    <img src={images[imageUrl]} alt="" />
                </div>
                <div className="btn-part">
                    <button onClick={toggleChange}>Change Pic</button>
                </div>
            </div>
        </div>
    )
}

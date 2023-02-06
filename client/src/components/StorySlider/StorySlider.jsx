import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { featured } from '../../faker/featured';
import './StorySlider.css'

const StorySlider = ({ hide }) => {
    const [sliderIndex, setSliderIndex] = useState(0);

    const handleSliderNext = () => {
        setSliderIndex((sliderIndex + 1) % featured.length);
    }

    const handleSliderPrev = () => {
        setSliderIndex((sliderIndex - 1) % featured.length);
    }

    useEffect(() => {
        const sliderTimeOut = setTimeout(() => {
            if (sliderIndex === (featured.length - 1)) {
                hide(false);
            } else {
                setSliderIndex((sliderIndex + 1))
            }
        }, 3000);
        return () => clearTimeout(sliderTimeOut);
    }, [sliderIndex, hide]);




    return (
        <div className="story-slider-wrapper">
            <div className="story-slider">
                <div className="slider-item" style={{ background: `url(${featured[sliderIndex].photo})` }}></div>

                <div className="slider-bars-wrapper">

                    {featured.map((item, index) =>
                        <div key={index} className={`bars-item ${index === sliderIndex ? "active" : ""}  ${index < sliderIndex ? "viewed" : ""}`}>
                            { console.log(index, sliderIndex)}
                            <div className="progress"></div>
                        </div>
                    )}
                </div>
                <div className="navigation">
                    <button style={{ opacity: `${sliderIndex === 0 ? "0" : "1"}`}} onClick={handleSliderPrev} className="prev">
                        <i class='bx bx-chevron-left'></i>
                    </button>
                    <button onClick={handleSliderNext} className="next">
                        <i class='bx bx-chevron-right'></i>
                    </button>
                </div>
            </div>
        </div>
    )
}



export default StorySlider;
import images from '../img/exporting';
import React, { useEffect, useState } from 'react';
import BlockBox from './blockBox'
import Text from '../textContent';

const Content = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const sectionsNumber = document.querySelectorAll(".parallax").length

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        }; 

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const getBackgroundImage = (scrollPosition, range = 1) => {
        const windowHeight = window.innerHeight*range;

        const currentSection = Math.floor(scrollPosition / windowHeight);
        const imageKey = `image${currentSection + 1}`
        const alternativeKey = `image${currentSection - sectionsNumber}`
        return images[imageKey] ? `url(${images[imageKey]})` : `url(${images[alternativeKey]})`
    };

    return(<>
        <BlockBox bg={getBackgroundImage(scrollPosition, 1.5)} position={"align-parallax"} title={"Galería"}/>
        <div className="content">
            <p>{Text.first}</p>
        </div>
        <BlockBox bg={getBackgroundImage(scrollPosition, 1.5)} position={"align-parallax"} title={"Section 1"}/>
        <div className="content">
            <p>{Text.second}</p>
        </div>
        <BlockBox bg={getBackgroundImage(scrollPosition, 1.5)} title={"Section 2"}/>
        <div className="content">
            <p>{Text.third}</p>
        </div>
        <BlockBox bg={getBackgroundImage(scrollPosition, 1.5)} title={"Section 3"}/>
        <div className="content">
            <p>{Text.forth}</p>
        </div>
        <BlockBox bg={getBackgroundImage(scrollPosition, 1.55)} position={"align-parallax-2"} title={"Section 4"}/>
        <div className="content">
            <p>{Text.fifth}</p>
        </div>
        <BlockBox bg={getBackgroundImage(scrollPosition, 1.5)} title={"Section 5"}/>
        <div className="content">
            <p>{Text.sixth}</p>
        </div>
        <BlockBox bg={getBackgroundImage(scrollPosition, 1.575)} position={"align-parallax-2"} title={"Section 6"}/>
        <div className="content">
            <p>{Text.seventh}</p>
        </div>
        <BlockBox bg={getBackgroundImage(scrollPosition, 1.575)} title={"Section 7"}/>
        <div className="content">
            <p>{Text.eighth}</p>
        </div>
        <BlockBox bg={getBackgroundImage(scrollPosition, 1.575)} title={"Section 8"}/>
        <div className="content">
            <p>{Text.ninth}</p>
        </div>
        <BlockBox bg={getBackgroundImage(scrollPosition, 1.575)} position={"align-parallax-2"} title={"Section 9"}/>
        <div className="content">
            <p>{Text.tenth}</p>
        </div>
        <BlockBox bg={getBackgroundImage(scrollPosition, 1.55)} title={"Section 10"}/>
        <div className="content">
            <p>{Text.eleventh}</p>
        </div>
        <BlockBox bg={getBackgroundImage(scrollPosition, 1.55)} position={"align-parallax-3"} title={"Section 11"}/>
        <div className="content">
            <p>{Text.twelfth}</p>
        </div>
    </>)
}

export default Content
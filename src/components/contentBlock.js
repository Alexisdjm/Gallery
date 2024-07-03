import images from '../img/exporting';
import React, { useEffect, useState } from 'react';
import BlockBox from './blockBox'

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
        <BlockBox bg={getBackgroundImage(scrollPosition, 1.5)} title={"Welcome to Our Site"}/>
        <div className="content">
            <p>Some content goes here...</p>
        </div>
        <BlockBox bg={getBackgroundImage(scrollPosition, 1.5)} title={"Another Section"}/>
        <div className="content">
            <p>More content goes here...</p>
        </div>
        <BlockBox bg={getBackgroundImage(scrollPosition, 1.5)} title={"another Section"}/>
        <div className="content">
            <p>More content goes here...</p>
        </div>
        <BlockBox bg={getBackgroundImage(scrollPosition, 1.5)} title={"another Section"}/>
        <div className="content">
            <p>More content goes here...</p>
        </div>
        <BlockBox bg={getBackgroundImage(scrollPosition, 1.5)} title={"another Section"}/>
        <div className="content">
            <p>More content goes here...</p>
        </div>
        <BlockBox bg={getBackgroundImage(scrollPosition, 1.5)} title={"another Section"}/>
        <div className="content">
            <p>More content goes here...</p>
        </div>
        <BlockBox bg={getBackgroundImage(scrollPosition, 1.5)} title={"another Section"}/>
        <div className="content">
            <p>More content goes here...</p>
        </div>
        <BlockBox bg={getBackgroundImage(scrollPosition, 1.5)} title={"another Section"}/>
        <div className="content">
            <p>More content goes here...</p>
        </div>
        <BlockBox bg={getBackgroundImage(scrollPosition, 1.5)} title={"another Section"}/>
        <div className="content">
            <p>More content goes here...</p>
        </div>
        <BlockBox bg={getBackgroundImage(scrollPosition, 1.5)} title={"Final Section"}/>
    </>)
}

export default Content
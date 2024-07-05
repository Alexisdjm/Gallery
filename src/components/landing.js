import images from '../img/exporting'
import { AppContext } from '../AppContext'
import React, { useContext } from 'react';
import Text from '../textContent';

const Landing = () => {

    const { isPortadaVisible, togglePortada, shouldRender } = useContext(AppContext);

    if (!shouldRender) {
        document.documentElement.style.overflow = "";
        return null;
    }

    document.documentElement.style.overflow = "hidden";

    return(<>
        <div id='landingComponent' 
        className={`landing--father ${!isPortadaVisible ? 'fade-out' : ''}`} 
        style={{backgroundImage: `url(${images.landing})`}}>
            <div className='landing--content'>
                <h1>"{Text.title}"</h1>
                <h2>"{Text.landing}"</h2>
                <button id='toggleID' className='header--button' onClick={togglePortada}>
                    <span className="circle1"></span>
                    <span className="circle2"></span>
                    <span className="circle3"></span>
                    <span className="circle4"></span>
                    <span className="circle5"></span>
                    <span className="text">Ver Galeria</span>
                </button>
            </div>
        </div>
    </>)
}

export default Landing
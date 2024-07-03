import { useState } from 'react'
import images from '../img/exporting'

const Landing = () => {

    let [showLanding, setShowLanding] = useState(true)
    let [delayHideLanding, setDelayHideLanding] = useState(true)

    const handleClick = () => {
        setShowLanding(false)
        setTimeout(() => {
            setDelayHideLanding(false)
        }, 1000);
    }

    return(<>
        <div id='landingComponent' 
        className={`landing--father ${!showLanding ? 'fade-out' : ''}`} 
        style={{backgroundImage: `url(${images.landing})`, display: delayHideLanding ? "flex" : "none"}}>
            <div className='landing--content'>
                <p>
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Finibus faucibus efficitur cras etiam nascetur massa aenean elementum imperdiet. Volutpat ad pharetra justo hendrerit urna aliquam ipsum, erat eu.
                </p>
                <h2>Lorem ipsum odor amet, consectetuer adipiscing elit. Magna habitant phasellus. Tortor interdum.</h2>
                <p>
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Neque sapien curae ante purus placerat dui viverra adipiscing sit vulputate ac donec rhoncus. Erat magnis maecenas sollicitudin ad nisl lobortis platea adipiscing per commodo elit. Lectus quam hac leo fringilla tristique morbi dignissim iaculis congue posuere odio ac viverra quis volutpat libero.
                </p>
                <h2>Lorem ipsum odor amet, consectetuer adipiscing elit. Magna habitant phasellus. Tortor interdum.</h2>
                <h1>Lorem ipsum odor amet, consectetuer adipiscing elit. Magna habitant phasellus. Tortor interdum.</h1>
                <p>
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Neque sapien curae ante purus placerat
                </p>
                <button id='toggleID' className='header--button' onClick={handleClick}>
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
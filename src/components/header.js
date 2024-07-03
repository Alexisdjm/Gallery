import images from '../img/exporting'

const Header = () => {
    return(<>
        <div className='header--father'>
            <div className='header--flex'>
                <div className='header--content-box'>
                    <a className='header--icon-container' href="#">
                        <img src={images.whatsapp} alt='whatsapp' loading='lazy' className='header--logos'></img>
                    </a>
                    <a className='header--icon-container' href="#">
                        <img src={images.instagram} alt='whatsapp' loading='lazy' className='header--logos'></img>
                    </a>
                    <button className='header--button'>
                        <span className="circle1"></span>
                        <span className="circle2"></span>
                        <span className="circle3"></span>
                        <span className="circle4"></span>
                        <span className="circle5"></span>
                        <span className="text">Portada</span>
                    </button>
                </div>
            </div>
        </div>
    </>)
}

export default Header
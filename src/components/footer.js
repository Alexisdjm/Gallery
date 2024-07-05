import images from '../img/exporting';

const Footer = () => {
    return(<>
        <div className='foother--father'>
            <div className='footer--content-box'>
                <div className='footer--flex'>
                    <div className='footer--flex-content'>
                        <p>2024. Todos los derechos recervados</p>
                    </div>
                    <div className='footer--flex-content footer--icons-big'>
                        <a href='#' className='footer--icon-box'>
                            <img src={images.instagram} alt='instagram' loading='lazy'className='footer--logos'></img>
                        </a>
                        <a href='#' className='footer--icon-box'>
                            <img src={images.whatsapp} alt='whatsapp' loading='lazy'className='footer--logos'></img>
                        </a>               
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Footer
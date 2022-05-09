import React from 'react';
import banner from '../../../img/Banner/banner-img.png'
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner-container'>
            <div className="banner">
                <div className="banner-text">
                    <h1>Wellcome to
                        <br />
                        <strong className='web-name'>NUFARM FRESH</strong>
                    </h1>
                    <p>We're here to serve only the best products for you. <br />Make your inventory more efficient with us.</p>
                    <button className='about-button'>Know More about us</button>
                </div>
                <div className="banner-img">
                    <div className="img">
                        <img src={banner} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
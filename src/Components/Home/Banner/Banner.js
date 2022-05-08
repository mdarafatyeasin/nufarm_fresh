import React from 'react';
import banner from '../../../img/Banner/banner-img.png'
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner-container'>
            <div className="banner">
            <div className="banner-text">
                <h1>Wellcome to NUFARM FRESH</h1>
                <p>We're here to serve only the best products for you.</p>
                <button>Please Log in</button>
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
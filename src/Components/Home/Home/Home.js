import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* inven item*/}


            {/* inventory button */}
            <div className="manage-inv-button-section">
                <Link className='manage-inv-button' to='/inventorys'>Manage Inventorys</Link>
            </div>
        </div>
    );
};

export default Home;
import React from 'react';
import { Link } from 'react-router-dom';
import useInventorys from '../../../Hooks/useInventorys';

import Banner from '../Banner/Banner';
import Item from '../Item/Item';
import './Home.css'

const Home = () => {
    const [inventorys] = useInventorys()
    // console.log(inventorys)
    return (
        <div>
            <Banner></Banner>
            {/* inven item*/}
            <h1 className='item-title'><u>Items</u></h1>
            <div className="item-container">
                {
                    inventorys.slice(0, 3).map(inventory => <Item key={inventory._id} inventory={inventory}></Item>)
                }
            </div>

            {/* inventory button */}
            <div className="manage-inv-button-section">
                <Link className='manage-inv-button' to='/inventorys'>Manage Inventorys</Link>
            </div>
        </div>
    );
};

export default Home;
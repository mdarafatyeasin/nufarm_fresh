
import React from 'react';
import useInventorys from '../../../Hooks/useInventorys';
import Inventory from '../Inventory/Inventory';

const Inventorys = () => {
    const [inventorys] = useInventorys()
    return (
        <div>
            <div className="item-container">
            {
                inventorys.map(inventory => <Inventory key={inventory._id} inventory={inventory}></Inventory>)
            }
            </div>

        </div>
    );
};

export default Inventorys;
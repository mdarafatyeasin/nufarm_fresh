import React from 'react';
import useInventorys from '../../../Hooks/useInventorys';
import Inventory from '../Inventory/Inventory';

const Inventorys = () => {
    const [inventorys] = useInventorys()
    return (
        <div>
            {
                inventorys.map(inventory => <Inventory key={inventory._id} inventory={inventory}></Inventory>)
            }
        </div>
    );
};

export default Inventorys;
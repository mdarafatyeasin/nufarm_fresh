import React from 'react';

const Inventory = (props) => {
    return (
        <div>
            <h1>this is inventory{props.inventory.name}</h1>
        </div>
    );
};

export default Inventory;
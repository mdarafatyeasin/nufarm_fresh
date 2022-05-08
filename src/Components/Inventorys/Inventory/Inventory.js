import React from 'react';

const Inventory = ({inventory}) => {
    // console.log(inventory)
    const {id, picture, name, description, price, quantity, supplier} = inventory
    return (
        <div>
            <div className="caed">
                <div className='item-img'>
                    <img src={picture} alt="animal" />
                </div>
                <div className="card-text">
                    <h3>Name : {name}</h3>
                    <p>Description: {description}</p>
                    <h4><strong>Price : {price}</strong></h4>
                    <h5><strong>Quantity : {quantity}</strong></h5>
                    <h5>Supplier : {supplier}</h5>
                    <button>Delet</button>
                </div>
            </div>
        </div>
    );
};

export default Inventory;
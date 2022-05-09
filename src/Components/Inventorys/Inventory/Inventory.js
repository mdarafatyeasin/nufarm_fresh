import React from 'react';
import useInventorys from '../../../Hooks/useInventorys';

const Inventory = ({ inventory }) => {
    const [inventorys, setInventorys] = useInventorys()
    const { _id, picture, name, description, price, quantity, supplier } = inventory


    const handleDelete = id => {
        const proceed = window.confirm('Are you shure you want to delete?')
        if (proceed) {
            const url = `http://localhost:5000/product/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = inventorys.filter(inventory => inventory._id !== id)
                    setInventorys(remaining)
                })
        }
    }

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
                    <button onClick={() => handleDelete(_id)}>Delet</button>
                </div>
            </div>
        </div>
    );
};

export default Inventory;
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Item = ({inventory}) => {
    const {_id, picture, name, description, price, quantity, supplier} = inventory
    // console.log(props.inventory)
    const navigate = useNavigate()
    const navigateUpdateStoke = id =>{
        navigate(`/update/${id}`)
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
                    <button onClick={()=>navigateUpdateStoke(_id)}>Update Stoke</button>
                </div>
            </div>
        </div>
    );
};

export default Item;
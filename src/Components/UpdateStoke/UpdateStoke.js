import React from 'react';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

const UpdateStoke = () => {
    const { updateId } = useParams()
    const [product, setProduct] = useState({});
    const {picture, name, description, price, quantity, supplier}=product

    useEffect(()=>{
        const url = `http://localhost:5000/product/${updateId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])


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
                    {/* <button onClick={()=>navigateUpdateStoke(_id)}>Update Stoke</button> */}
                </div>
            </div>
        </div>
    );
};

export default UpdateStoke;
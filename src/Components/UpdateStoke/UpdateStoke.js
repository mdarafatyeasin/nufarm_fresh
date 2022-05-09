import React from 'react';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

const UpdateStoke = () => {
    const { updateId } = useParams()
    const [product, setProduct] = useState({});
    const { picture, name, description, price, quantity, supplier } = product

    useEffect(() => {
        const url = `https://polar-brushlands-69402.herokuapp.com/product/${updateId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const handleDelivery = (event) => {
        event.preventDefault();
        let newQuantity = parseInt(product.quantity)
        newQuantity = quantity - 1
        console.log(newQuantity)
        const updateQuantity = {newQuantity}
        const url = `https://polar-brushlands-69402.herokuapp.com/product/${updateId}`
        console.log(url)
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updateQuantity)
            })
                .then(res => res.json())
                .then(data => {
                    
                    setProduct(data)
                        ;
                })
        }

    const handleQuantityUpdate = (event) => {

    }


    return (
        <div>
            <div className="card">
                <div className='item-img'>
                    <img src={picture} alt="animal" />
                </div>
                <div className="card-text">
                    <h3>Name : {name}</h3>
                    <p>Description: {description}</p>
                    <h4><strong>Price : {price}</strong></h4>
                    <h5><strong>Quantity : {quantity}</strong></h5>
                    <h5>Supplier : {supplier}</h5>
                    <button onClick={handleDelivery}>Deliver</button><br /><br />
                    <form>
                        <input placeholder='Enter Quantity' type="text"></input>
                        <input onSubmit={handleQuantityUpdate} value={'Update'} type='submit'></input>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateStoke;
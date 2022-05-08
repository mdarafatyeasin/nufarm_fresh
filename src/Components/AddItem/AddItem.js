import React from 'react';
import { useForm } from "react-hook-form";

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{
        console.log(data);
        const url = `http://localhost:5000/product`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result =>{
            console.log(result)
        } )
    } 
        
    return (
        <div>
            <h2>Please add new item</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Product Name' {...register("name")} />
                <input placeholder='Product Description' {...register("description")} />
                <input placeholder='Price' type="number" {...register("price")} />
                <input placeholder='Quantity' type="number" {...register("quantity")} />
                <input placeholder='Supplier Name' {...register("supplier")} />
                <input placeholder='Photo URL' {...register("picture")} /> <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddItem;
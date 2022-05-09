import React from 'react';
import { useForm } from "react-hook-form";
import './AddItem.css'

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{
        // console.log(data);
        const url = `https://polar-brushlands-69402.herokuapp.com/product`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result =>{
            alert('Product added successfully!!')
        } )
    } 
        
    return (
        <div className='w-50 mx-auto add-item-form'>
            <h2 className='text-center'>Please add new item</h2>
            <form className='d-flex flex-column mb-2' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2 input-color'placeholder='Product Name' {...register("name")} />
                <textarea className='mb-2 input-color'placeholder='Product Description' {...register("description")} />
                <input className='mb-2 input-color'placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2 input-color'placeholder='Quantity' type="number" {...register("quantity")} />
                <input className='mb-2 input-color'placeholder='Supplier Name' {...register("supplier")} />
                <input className='mb-2 input-color'placeholder='Photo URL' {...register("picture")} /> <br />
                <input className='submit-color' type="submit" value='Add Product'/>
            </form>
        </div>
    );
};

export default AddItem;
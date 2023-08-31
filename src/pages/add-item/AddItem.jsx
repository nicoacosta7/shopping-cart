import React from "react";
import './AddItem.css'
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { ShopContext } from "../../context/Shop-context";
import { PRODUCTS } from "../../products";

function AddItem () {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        /*
        const newProduct = {
            id: PRODUCTS.length + 1,
            productName : data.productName,
            price : data.price,
            productImage : data.productImage
        }
        PRODUCTS.push(newProduct);
        */
    }

    return (
        <div className="addItem">
            <h1>Add Item!</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="productName">
                    <label>Product Name</label>
                    <input type="text" {...register('productName', {
                        required: true,
                    })} />
                    {errors.name?.type === 'required' && <p>The field Product Name is required</p>}
                </div>
                <div className="product-price">
                    <label>Price</label>
                    <input type="number" {...register('price', {
                        required: true,
                    })} />
                    {errors.price?.type === 'required' && <p>The field Price is required</p>}
                </div>
                <div className="product-image">
                    <label>Image URL</label>
                    <input type="text" {...register('productImage', {
                        required: true,
                    })} />
                    {errors.productImage?.type === 'required' && <p>The Image URL is required</p>}
                </div>
                <input type="submit" value="Add Product" className="submitBtn"/>
            </form>
        </div>
    )
}

export default AddItem
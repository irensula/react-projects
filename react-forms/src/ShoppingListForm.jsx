import { useState } from "react";

function ShoppingListForm({ addItem }) {
    const [formData, setFormData] = useState({ product: '', quantity: 0 });

    const handleChange = (evt) => {
        setFormData(currentData => {
            return {
                ...currentData,
                [evt.target.name]: evt.target.value
            };
        });
    };
    const handleSubmit= (e) => {
        e.preventDefault();
        console.log('Submitted!');
        addItem(formData);
    }
    return (
        <form onSubmit={handleSubmit}>
            <h1>Product is: {formData.product} and quantity is {formData.quantity}</h1>

            <label htmlFor="product">Product Name</label>

            <input
                onChange={handleChange}
                type="text"
                placeholder="product name"
                name='product'
                id='product'
                value={formData.product}
            />

            <label htmlFor="quantity">Quantity</label>

            <input
                onChange={handleChange}
                type="number"
                placeholder="1"
                name='quantity'
                id='quantity'
                value={formData.quantity}
            />
            <button>Add Item</button>
        </form>
    )
}
export default ShoppingListForm;
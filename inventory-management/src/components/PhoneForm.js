import React, { useState } from "react";

const PhoneForm = ({ addPhone }) => {
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addPhone({ brand, model, price, stock });
        setBrand('');
        setModel('');
        setPrice('');
        setStock('');
    };

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Brand:
                <select value={brand} onChange={(e) => setBrand(e.target.value)} required>
                    <option value="">Select a brand</option>
                    <option value="Samsung">Samsung</option>
                    <option value="Apple">Apple</option>
                    <option value="Xiaomi">Xiaomi</option>
                    <option value="OnePlus">OnePlus</option>
                    <option value="Nokia">Nokia</option>                    
                </select>
            </label>
            <label>
                Model:
                <input type="text" value={model} onChange={(e) => setModel(e.target.value)} required/>
            </label>
            <label>
                Price:
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required/>
            </label>
            <label>
                Stock:
                <input type="number" value={stock} onChange={(e) => setStock(e.target.value)} required/>
            </label>
            <button type="submit">Add Phone</button>
        </form>
    );
};

export default PhoneForm;
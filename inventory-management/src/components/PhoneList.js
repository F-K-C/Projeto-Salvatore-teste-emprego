import React from "react";

const PhoneList = ({ phones, deletePhone }) => {
    return (
        <div>
            {phones.map(phone => (
                <div key={phone.id} className="phone">
                    <p>Brand: {phone.brand}</p>
                    <p>Model: {phone.model}</p>
                    <p>Price: {phone.price}</p>
                    <p>Stock: {phone.stock}</p>
                    <button onClick={() => deletePhone(phone.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default PhoneList;
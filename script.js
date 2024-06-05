document.addEventListener('DOMContentLoaded', () =>{
    const inventoryDiv = document.getElementById('inventory');
    const form = document.getElementById('phone-form');

    const apiUrl = 'http://localhost:3000/api/phones';

    const fetchPhones = async() => {
        const response = await fetch(apiUrl);
        const phones = await response.json();
        displayPhones(phones);
    };

    const displayPhones = (phones) => {
        inventoryDiv.innerHTML = '';
        phones.forEach(phone => {
            const phoneDiv = document.createElement('div');
            phoneDiv.className = 'phone';
            phoneDiv.innerHTML = `
            <p>Brand: ${phone.brand}</p>
            <p>Model: ${phone.model}</p>
            <p>Price: $${phone.price}</p>
            <p>Stock: ${phone.stock}</p>
            <button onclick="deletePhone(${phone.id})">Delete</button>
            `;
            inventoryDiv.appendChild(phoneDiv);
        });
    };

    const deletePhone = async (id) => {
        await fetch(`${apiUrl}/${id}`, {method: 'DELETE' });
        fetchPhones();
    };
    form.addEventListener('submit', async(e) => {
        e.preventDefault();

        const brand = form.brand.value;
        const model = form.model.value;
        const price = form.price.value;
        const stock = form.stock.value;

        await fetch(apiUrl, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'                
            },
            body: JSON.stringify({ brand, model, price, stock })
        });
        fetchPhones();
        form.reset();
    });
    fetchPhones();
});

window.deletePhone = deletePhone;
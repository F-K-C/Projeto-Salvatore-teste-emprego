const express = require('express');
const router = express.Router();

let phones = [];
const allowedBrands = ['Samsung', 'Apple', 'Xiaomi', 'OnePlus', 'Nokia'];

router.post('/phones', (req, res) => {
    const {brand, model, price, stock} = req.body;
    if(!allowedBrands.includes(brand)) {
        return res.status(400).send('Brand not allowed');
    }

    const newPhone = {id: phones.length+1, brand, model, price, stock};
    phones.push(newPhone);
    res.status(201).json(newPhone);
});

router.get('/phones', (req, res) => {
    res.json(phones);
});

router.get('/phones/:id', (req, res) => {
    const phone = phones.find(p => p.id === parseInt(req.params.id));
    if (!phone) return res.status(404).send('Phone not found');
    res.json(phone);
});

router.put('/phones/:id', (req, res) => {
    const phone = phones.find(p => p.id === parseInt(req.params.id));
    if(!phone) return res.status(404).send('Phone not found');

    const {brand, model, price, stock} = req.body;
    if (brand && !allowedBrands.includes(brand)){
        return res.status(400).send('Brand not allowed');
    }

    if (brand) phone.brand = brand;
    if (model) phone.model = model;
    if (price) phone.price = price;
    if (stock) phone.stock = stock;

    res.json(phone);
});

router.delete('/phones/:id', (req, res) => {
    phones = phones.filter(p=> p.id !== parseInt(req.params.id));
    res.status(204).send();
});

module.exports = router;
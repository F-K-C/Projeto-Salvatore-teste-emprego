const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

mongoose.connect( process.env.MONGODB_URI || 'mongodb://localhost:27017/inventory', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
});

const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
});
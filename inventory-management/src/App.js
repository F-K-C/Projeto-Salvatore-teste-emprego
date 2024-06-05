import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PhoneList from './components/PhoneList';
import PhoneForm from './components/PhoneForm';
import './App.css';

const App = () => {
  const [phones, setPhones] = useState([]);
  const [error, setError] = useState(null);

  const apiUrl = 'http://localhost:3000/api/phones';

  const fetchPhones = async () => {
    try{
      const response = await axios.get(apiUrl);
      setPhones(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch phones.');
    }
  };

  const addPhone = async (phone) => {
    try {
      const response = await axios.post(apiUrl, phone);
      setPhones([...phones, response.data]);
      setError(null);
    }catch (err) {
      setError('Failed to add phone.');
    }
  };

  const deletePhone = async (id) => {
    try{
      await axios.delete(`${apiUrl}/${id}`);
      setPhones(phones.filter(phone => phone.id !== id));
      setError(null);
    } catch (err) {
      setError('Failed to delete phone.');
    }
  };

  useEffect(() => {
    fetchPhones();
  }, []);

  return (
    <div className="App">
      <h1>Cell Phone inventory Management</h1>
      {error && <p className="error">{error}</p>}
      <PhoneForm addPhone={addPhone}/>
      <PhoneList phones={phones} deletePhone={deletePhone} />
    </div>
  );
};

export default App;
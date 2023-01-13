import React, { useState } from 'react';
//import { useHistory } from 'react-router-dom';

function Checkout() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  const [country, setCountry] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  //const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    // Do something with the form data
    // (e.g. send it to a server or store it in a database)
   // history.push('/thankyou');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Checkout</h1>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Address:
        <input
          type="text"
          value={address}
          onChange={e => setAddress(e.target.value)}
        />
      </label>
      <br />
      <label>
        City:
        <input
          type="text"
          value={city}
          onChange={e => setCity(e.target.value)}
        />
      </label>
      <br />
      <label>
        Zip:
        <input
          type="text"
          value={zip}
          onChange={e => setZip(e.target.value)}
        />
      </label>
      <br />
      <label>
        Country:
        <input
          type="text"
          value={country}
          onChange={e => setCountry(e.target.value)}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label>
        Phone:
        <input
          type="text"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Checkout;
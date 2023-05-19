import { useState } from 'react';
import axios from 'axios';
import { redirect } from 'react-router-dom';

function Vacation(props) {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    start: '',
    end: '',
    guest: '',
    budget: ''

  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const prop = e.target.name;

    setFormData({
      ...formData,
      [prop]: e.target.value
    })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('/api/vacation', formData);

      props.setUser(res.data.user);
      setErrorMessage('');
      redirect('/');
    } catch (err) {
      const message = err.response.data.error;

      setErrorMessage(message);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Vacations</h1>
      {errorMessage && <p className="error">{errorMessage}</p>}


      <div className="imgcontainer">
        <img src="./images/logo1.png" alt="logo" className="" width="400px" />
      </div>

      <div className="trips-container">
        <label htmlFor="name"><b>Name your vacation</b></label>
        <input
          name="name" required
          onChange={handleInputChange}
          value={formData.name}
          type="text"
          placeholder="Vacation Name" />
        <label htmlFor="name"><b>Enter the location of your vacation</b></label>
        <input
          name="location" required
          onChange={handleInputChange}
          value={formData.location}
          type="text"
          placeholder="Vacation Location" />
        <label htmlFor="start"><b>Enter the starting date of your vacation</b></label>
        <input
          name="start" required
          onChange={handleInputChange}
          value={formData.start}
          type="text"
          placeholder="MM/DD/YYYY" />
        <label htmlFor="end"><b>Enter the ending date of your vacation</b></label>
        <input
          name="end" required
          onChange={handleInputChange}
          value={formData.end}
          type="text"
          placeholder="MM//DD/YYY" />
        <label htmlFor="guest"><b>Enter the number of guests for your vacation</b></label>
        <input
          name="guest" required
          onChange={handleInputChange}
          value={formData.guest}
          type="text"
          placeholder="Vacation Guest" />
        <label htmlFor="budget"><b>Enter the budget for your vacation</b></label>
        <input
          name="budget" required
          onChange={handleInputChange}
          value={formData.budget}
          type="text"
          placeholder="Vacation Budget" />
        <button type="submit">Submit</button>
      </div>

    </form>
  )
}

export default Vacation;
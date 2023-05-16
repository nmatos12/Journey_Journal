import { useState } from 'react';
import axios from 'axios';

function Register(props) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
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
      const res = await axios.post('/auth/register', formData);

      props.setUser(res.data.user);
      setErrorMessage('');
    } catch (err) {
      const message = err.response.data.error;

      setErrorMessage(message);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Register</h1>

      {errorMessage && <p className="error">{errorMessage}</p>}

      <input
        name="username"
        onChange={handleInputChange}
        value={formData.username}
        type="text"
        placeholder="Enter your desired username" />
      <input
        name="email"
        onChange={handleInputChange}
        value={formData.email}
        type="email"
        placeholder="Enter your desired email address" />
      <input
        name="password"
        onChange={handleInputChange}
        value={formData.password}
        type="password"
        placeholder="Enter your desired password" />
      <button>Submit</button>
    </form>
  )
}

export default Register;
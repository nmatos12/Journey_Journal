import { useState } from 'react';
import axios from 'axios';
import { redirect } from 'react-router-dom';

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
      redirect('/');
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

      <div className="bg-img">
        <label htmlFor="Username"><b>Username</b></label>
        <input
          name="username" required
          onChange={handleInputChange}
          value={formData.username}
          type="text"
          placeholder="Enter your username" />
        <label htmlFor="email"><b>Email</b></label>
        <input
          name="email" required
          onChange={handleInputChange}
          value={formData.email}
          type="email"
          placeholder="Enter your email address" />
        <label htmlFor="password"><b>Password</b></label>
        <input
          name="password" required
          onChange={handleInputChange}
          value={formData.password}
          type="password"
          placeholder="Enter your password" />
        <p>By creating an account you agree to our <a href="/">Terms &amp; Privacy</a>.</p>
        <button type="submit" className="registerbtn">Register</button>
      </div >
    </form>
  )
}

export default Register;
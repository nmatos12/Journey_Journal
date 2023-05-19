import { useState } from 'react';
import axios from 'axios';
import { redirect } from 'react-router-dom';

function Login(props) {
  const [formData, setFormData] = useState({
    username: '',
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
      const res = await axios.post('/auth/login', formData);

      props.setUser(res.data.user);
      setErrorMessage('');
      redirect('/');
    } catch (err) {
      const message = err.response.data.error;

      setErrorMessage(message);
    }
  }

  return (
    // <form onSubmit={handleSubmit}>
    //   <h1>Login</h1>

    //   {errorMessage && <p className="error">{errorMessage}</p>}

    //   <input
    //     name="email"
    //     onChange={handleInputChange}
    //     value={formData.email}
    //     type="email"
    //     placeholder="Enter your email address" />
    //   <input
    //     name="password"
    //     onChange={handleInputChange}
    //     value={formData.password}
    //     type="password"
    //     placeholder="Enter your password" />
    //   <button>Submit</button>
    // </form>

    <form onSubmit={handleSubmit}>
      <div className="imgcontainer">
        <img src="./images/login-avatar.png" alt="Avatar" className="avatar" />
      </div>
      
      <div className="container">
        <label htmlFor="uname"><b>Username</b></label>
        <input 
          type="text" 
          placeholder="Enter Username" 
          onChange={handleInputChange} 
          name="username" required />
        <label htmlFor="psw"><b>Password</b></label>
        <input
          type="password"
          placeholder="Enter Password"
          onChange={handleInputChange}
          name="password" required />
        <button type="submit">Login</button>
        <label>
          <input 
            type="checkbox" 
            defaultChecked="checked" 
            name="remember"
            />Remember me
          </label>
      </div>

      <div className="container" style={{ backgroundColor: '#f1f1f1' }}>
        <button type="button" className="cancelbtn">Cancel</button>
        <span className="psw">Forgot <a href="#">password?</a></span>
      </div>

    </form>
  )
}

export default Login;





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
    // <form onSubmit={handleSubmit}>
    //   <h1>Register</h1>

    //   {errorMessage && <p className="error">{errorMessage}</p>}

    //   <input
    //     name="username"
    //     onChange={handleInputChange}
    //     value={formData.username}
    //     type="text"
    //     placeholder="Enter your desired username" />
    //   <input
    //     name="email"
    //     onChange={handleInputChange}
    //     value={formData.email}
    //     type="email"
    //     placeholder="Enter your desired email address" />
    //   <input
    //     name="password"
    //     onChange={handleInputChange}
    //     value={formData.password}
    //     type="password"
    //     placeholder="Enter your desired password" />
    //   <button>Submit</button>
    // </form>


    <div className="bg-img">
  <form action="/action_page.php" className="container">
    <label htmlFor="fname"><b>First Name</b></label>
    <input type="text" placeholder="Enter First Name" name="fname" required />
    <label htmlFor="lname"><b>Last Name</b></label>
    <input type="text" placeholder="Enter Last Name" name="lname" required />
    <label htmlFor="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required />
    <label htmlFor="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required />
    <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" required />
    <p>By creating an account you agree to our <a href="#">Terms &amp; Privacy</a>.</p>
    <button type="submit" className="registerbtn">Register</button>
  </form>
</div>
  )
}

export default Register;
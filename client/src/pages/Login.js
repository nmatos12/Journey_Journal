import { useState } from "react";
import axios from "axios";
import { redirect } from "react-router-dom";

function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const prop = e.target.name;

    setFormData({
      ...formData,
      [prop]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/auth/login", formData);

      props.setUser(res.data.user);
      setErrorMessage("");
      redirect("/");
    } catch (err) {
      const message = err.response.data.error;

      setErrorMessage(message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      {errorMessage && <p className="error">{errorMessage}</p>}

      <div className="imgcontainer">
        <img
          src="./images/login-avatar.png"
          alt="Avatar"
          className="avatar"
          width="100px"
          height="100px"
        />
      </div>

      <div className="container">
        <label htmlFor="email">
          <b>Email</b>
        </label>
        <input
          name="email"
          required
          onChange={handleInputChange}
          value={formData.email}
          type="email"
          placeholder="Enter your email address"
        />
        <label htmlFor="password">
          <b>Password</b>
        </label>
        <input
          name="password"
          onChange={handleInputChange}
          value={formData.password}
          type="password"
          placeholder="Enter your password"
        />
        <button type="submit">Login</button>
        <label>
          <input type="checkbox" defaultChecked="checked" name="remember" />
          Remember me
        </label>
      </div>

      <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
        <button type="button" className="cancelbtn">
          Cancel
        </button>
        <span className="password">
          Forgot <a href="/">password?</a>
        </span>
      </div>
    </form>
  );
}


export default Login;

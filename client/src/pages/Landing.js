import { useState, useEffect } from 'react';
import axios from 'axios';

const Landing = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.example.com/data');
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (isAuthenticated) {
    return (
      <>
        <div>
          <h2>Welcome, Journalist!</h2>
          <ul>
            {data.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="text-center">
          <h1 className="home-title mt-4 mb-3">Welcome to the Journey Journal App!</h1>
          <Button
            className="button m-2"
            href="/login"
            size="lg"
            style={{ width: "20%" }}
          >
            Login
          </Button>
          <Button
            className="button m-2"
            href="/signup"
            size="lg"
            style={{ width: "20%" }}
          >
            Sign Up
          </Button>
        </div>
      </>
    );
  }
}

export default Landing;

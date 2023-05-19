import { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const Ourstory = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {

  }, []);

  if (props.user) {
    return (
      <>
        <div>
          <h2>Welcome, </h2>
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
      <

      ></>
      );
    }
  }
  
  export default Ourstory;
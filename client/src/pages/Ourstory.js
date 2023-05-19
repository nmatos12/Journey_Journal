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
                    <h2>Welcome, Journalist</h2>
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
                <h1>Our Story</h1>

                <p>In the bustling world of college life, where students juggle demanding coursework, intense finals, and part-time jobs, we have experienced firsthand the overwhelming stress that comes with planning trips on top of existing responsibilities. Driven by our own experiences and a desire to alleviate the burden, we embarked on a mission to create a travel application aiming to simplify the trip planning process and offer a much-needed respite from the additional stressors that come with life</p>
            </>
        );
    }
}

export default Ourstory;
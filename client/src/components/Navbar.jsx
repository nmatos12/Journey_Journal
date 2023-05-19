import { NavLink } from 'react-router-dom';

function Navbar() {

    return (
        <header>
            <div className="navbar">
                <NavLink to="/"><i className="fa fa-fw fa-home"></i>Home</NavLink>
                <NavLink to="/ourstory">Our Story</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/signup">Sign Up</NavLink>
            </div>
        </header>
    )
} 

export default Navbar 
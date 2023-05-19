import { NavLink } from 'react-router-dom';

function Navbar() {

    return (
        <header>
            <div className="navbar">

                <NavLink to="/"><i activeClassName="active" className="fa fa-fw fa-home"></i>Home</NavLink>
                <NavLink to="/ourstory" activeClassName="active">Our Story</NavLink>
                <NavLink to="/login" activeClassName="active">Login</NavLink>
                <NavLink to="/signup" activeClassName="active">Sign Up</NavLink>
                <NavLink to="/hotel" activeClassName="active">Hotels</NavLink>
                <NavLink to="/vacation" activeClassName="active">Vacations</NavLink>
            </div>
        </header>
    )
} 

export default Navbar 